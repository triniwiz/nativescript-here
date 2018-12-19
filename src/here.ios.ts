import * as common from './here.common';
import {
    disableScrollProperty,
    disableZoomProperty,
    HereBase,
    HereMapStyle,
    HereMarker,
    mapStyleProperty,
    zoomLevelProperty
} from './here.common';
import { layout } from 'tns-core-modules/utils/utils';
import * as types from 'tns-core-modules/utils/types';
import * as imageSrc from 'tns-core-modules/image-source';
import * as fs from 'tns-core-modules/file-system';
import { ios_icon } from './icon-source';

declare var NMAMapView,
    NMAApplicationContext,
    NMAMapViewDelegate,
    NMAMapSchemeHybridDay,
    NMAMapSchemeSatelliteDay,
    NMAMapSchemeTerrainDay,
    NMAMapSchemeNormalDay,
    NMAMapAnimation,
    NMAMapGestureType,
    NMAGeoCoordinates,
    NMAMapMarker;

global.moduleMerge(common, exports);

export class Here extends HereBase {
    nativeMarkers: Map<number, any>;
    markersCallback: Map<number, any>;
    markers: Map<any, HereMarker>;
    private delegate: NMAMapViewDelegateImpl;
    private gestureDelegate: NMAMapGestureDelegateImpl;
    isReady: boolean = false;
    private _defaultMarkerIcon;

    constructor() {
        super();
    }

    public static init(appId: string, appCode: string) {
        NMAApplicationContext.setAppIdAppCode(appId, appCode);
    }

    public createNativeView(): Object {
        this.nativeMarkers = new Map<number, any>();
        this.markers = new Map<any, HereMarker>();
        this.markersCallback = new Map<number, any>();
        this.delegate = NMAMapViewDelegateImpl.initWithOwner(new WeakRef<Here>(this));
        this.gestureDelegate = NMAMapGestureDelegateImpl.initWithOwner(new WeakRef<Here>(this));

        const url = NSURL.URLWithString(ios_icon);
        const data = NSData.dataWithContentsOfURL(url);
        this._defaultMarkerIcon = UIImage.imageWithData(data);
        return NMAMapView.alloc().initWithFrame(CGRectZero);
    }


    public initNativeView(): void {
        super.initNativeView();
        const nativeView = this.nativeView;
        nativeView.delegate = this.delegate;
        nativeView.gestureDelegate = this.gestureDelegate;
        nativeView.setZoomLevelWithAnimation(this.zoomLevel, NMAMapAnimation.None);
        if (this.disableZoom) {
            nativeView.disableMapGestures(NMAMapGestureType.Pinch);
            nativeView.disableMapGestures(NMAMapGestureType.DoubleTap);
            nativeView.disableMapGestures(NMAMapGestureType.TwoFingerTap);
        }

        if (this.disableScroll) {
            nativeView.disableMapGestures(NMAMapGestureType.Pan);
        }

        switch (this.mapStyle) {
            case HereMapStyle.HYBRID_DAY:
                nativeView.mapScheme = NMAMapSchemeHybridDay;
                break;
            case HereMapStyle.SATELLITE_DAY:
                nativeView.mapScheme = NMAMapSchemeSatelliteDay;
                break;
            case HereMapStyle.TERRAIN_DAY:
                nativeView.mapScheme = NMAMapSchemeTerrainDay;
                break;
            default:
                nativeView.mapScheme = NMAMapSchemeNormalDay;
                break;
        }

        nativeView.setGeoCenterWithAnimation(NMAGeoCoordinates.geoCoordinatesWithLatitudeLongitude(this.latitude, this.longitude), NMAMapAnimation.None);

    }

    public disposeNativeView(): void {
        super.disposeNativeView();
    }

    public onLoaded(): void {
        super.onLoaded();
        this.isReady = true;
        this.notify({
            eventName: HereBase.mapReadyEvent,
            object: this,
            android: null,
            ios: this.nativeView
        });
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        const nativeView = this.nativeView;
        if (nativeView) {
            const width = layout.getMeasureSpecSize(widthMeasureSpec);
            const height = layout.getMeasureSpecSize(heightMeasureSpec);
            this.setMeasuredDimension(width, height);
        }
    }

    [zoomLevelProperty.setNative](zoomLevel: number) {
        const nativeView = this.nativeView;
        if (this.isReady) {
            nativeView.setZoomLevelWithAnimation(+zoomLevel, NMAMapAnimation.Linear);
        }
    }

    [mapStyleProperty.setNative](style: HereMapStyle) {
        const nativeView = this.nativeView;
        if (this.isReady) {
            switch (style) {
                case HereMapStyle.HYBRID_DAY:
                    nativeView.mapScheme = NMAMapSchemeHybridDay;
                    break;
                case HereMapStyle.SATELLITE_DAY:
                    nativeView.mapScheme = NMAMapSchemeSatelliteDay;
                    break;
                case HereMapStyle.TERRAIN_DAY:
                    nativeView.mapScheme = NMAMapSchemeTerrainDay;
                    break;
                default:
                    nativeView.mapScheme = NMAMapSchemeNormalDay;
                    break;
            }
        }
    }

    [disableScrollProperty.setNative](disable: boolean) {
        const nativeView = this.nativeView;
        if (this.isReady) {
            if (disable) {
                nativeView.disableMapGestures(NMAMapGestureType.Pan);
            } else {
                nativeView.enableMapGestures(NMAMapGestureType.Pan);
            }
        }
    }

    [disableZoomProperty.setNative](disable: boolean) {
        const nativeView = this.nativeView;
        if (this.isReady) {
            if (disable) {
                nativeView.disableMapGestures(NMAMapGestureType.Pinch);
                nativeView.disableMapGestures(NMAMapGestureType.DoubleTap);
                nativeView.disableMapGestures(NMAMapGestureType.TwoFingerTap);
            } else {
                nativeView.enableMapGestures(NMAMapGestureType.Pinch);
                nativeView.enableMapGestures(NMAMapGestureType.DoubleTap);
                nativeView.enableMapGestures(NMAMapGestureType.TwoFingerTap);
            }
        }
    }

    _getMarkersCount(): number {
        return this.nativeMarkers ? this.nativeMarkers.size : 0;
    }

    setCenter(lat: number, lon: number, animated: boolean): Promise<any> {
        return new Promise<any>((resolve) => {
            if (this.nativeView) {
                this.nativeView.setGeoCenterWithAnimation(NMAGeoCoordinates.geoCoordinatesWithLatitudeLongitude(lat, lon), animated ? NMAMapAnimation.Linear : NMAMapAnimation.None);
            }
            resolve();
        });
    }

    addMarkers(markers: HereMarker[]): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const map = this.nativeView;
            const markerIcons = [];
            markers.forEach((marker) => {
                if (marker.onTap && typeof marker.onTap === 'function') {
                    this.markersCallback.set(marker.id, marker.onTap);
                }

                const nativeMarker = NMAMapMarker.alloc().initWithGeoCoordinates(NMAGeoCoordinates.geoCoordinatesWithLatitudeLongitude(marker.latitude, marker.longitude));

                if (marker.title) {
                    nativeMarker.title = marker.title;
                }
                if (marker.description) {
                    nativeMarker.textDescription = marker.description;
                }
                if (typeof marker.icon === 'string') {
                    if (marker.icon.startsWith('http')) {
                        // markerIcons.push(imageSrc.fromUrl(marker.icon));
                    } else if (marker.icon.startsWith('res')) {
                        const src = imageSrc.fromResource(marker.icon);
                        const nativeImage = src ? src.ios : null;
                        if (nativeImage) {
                            nativeMarker.icon = nativeImage;
                        }
                    } else if (marker.icon.startsWith('~/')) {
                        const path = fs.path.join(fs.knownFolders.currentApp().path, marker.icon.replace('~', ''));
                        const src = imageSrc.fromFileOrResource(path);
                        const nativeImage = src ? src.ios : null;
                        if (nativeImage) {
                            nativeMarker.icon = nativeImage;
                        }
                    }
                } else {
                    nativeMarker.icon = this._defaultMarkerIcon;
                }

                (nativeMarker as any).draggable = !!marker.draggable;
                this.nativeMarkers.set(marker.id, nativeMarker);
                this.markers.set(nativeMarker, marker);
                map.addMapObjects([nativeMarker]);
                if (!!marker.selected) {
                    nativeMarker.showInfoBubble();
                } else {
                    nativeMarker.hideInfoBubble();
                }
            });
            if (markerIcons.length > 0) {
                /* Promise.all(markerIcons).then(() => {
                     resolve();
                 }).catch(e => {
                     reject();
                 });
                 */
                resolve();
            } else {
                resolve();
            }

        });
    }

    removeMarkers(markers?: number[]): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const map = this.nativeView;
            if (!markers) {
                map.removeMapObjects(Array.from(this.nativeMarkers.values()));
                this.markers.clear();
                this.nativeMarkers.clear();
                this.markersCallback.clear();
                resolve();
            } else {
                markers.forEach(id => {
                    const nativeMarker = this.nativeMarkers.get(id);
                    if (nativeMarker) {
                        map.removeMapObject(nativeMarker);
                        this.nativeMarkers.delete(id);
                        this.markersCallback.delete(id);
                        this.markers.delete(nativeMarker);
                    }
                });
                resolve();
            }
        });
    }

    updateMarkers(markers: HereMarker[]): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            markers.forEach(marker => {
                const nativeMarker = this.nativeMarkers.get(marker.id);
                if (nativeMarker) {
                    nativeMarker.coordinates = NMAGeoCoordinates.geoCoordinatesWithLatitudeLongitude(marker.latitude, marker.longitude);
                    if (marker.title) {
                        nativeMarker.title = marker.title;
                    }
                    if (marker.description) {
                        nativeMarker.textDescription = marker.description;
                    }
                    if (types.isBoolean(marker.draggable)) {
                        (nativeMarker as any).draggable = !!marker.draggable;
                    }

                    if (!!marker.selected) {
                        nativeMarker.showInfoBubble();
                    } else {
                        nativeMarker.hideInfoBubble();
                    }

                    this.nativeMarkers.set(marker.id, nativeMarker);
                    this.markers.set(nativeMarker, marker);

                }
            });
            resolve();
        });
    }

    updateMarker(marker: HereMarker): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const nativeMarker = this.nativeMarkers.get(marker.id);
            if (nativeMarker) {
                nativeMarker.coordinates = NMAGeoCoordinates.geoCoordinatesWithLatitudeLongitude(marker.latitude, marker.longitude);

                if (marker.title) {
                    nativeMarker.title = marker.title;
                }
                if (marker.description) {
                    nativeMarker.textDescription = marker.description;
                }
                if (types.isBoolean(marker.draggable)) {
                    (nativeMarker as any).draggable = !!marker.draggable;
                }

                if (!!marker.selected) {
                    nativeMarker.showInfoBubble();
                } else {
                    nativeMarker.hideInfoBubble();
                }

                this.nativeMarkers.set(marker.id, nativeMarker);
                this.markers.set(nativeMarker, marker);
            }
            resolve();
        });
    }

}

// @ts-ignore
@ObjCClass(NMAMapViewDelegate)
class NMAMapViewDelegateImpl extends NSObject implements NMAMapViewDelegate {
    owner: WeakRef<Here>;

    public static initWithOwner(owner: WeakRef<Here>): NMAMapViewDelegateImpl {
        const delegate = new NMAMapViewDelegateImpl();
        delegate.owner = owner;
        return delegate;
    }

    mapViewDidDraw(mapView): void {
    }

    mapViewDidBeginAnimation(mapView): void {
    }

    mapViewDidBeginMovement(mapView): void {
    }

    mapViewDidEndMovement(mapView): void {

    }
}

// @ts-ignore
@ObjCClass(NMAMapGestureDelegate)
class NMAMapGestureDelegateImpl extends NSObject implements NMAMapGestureDelegate {
    owner: WeakRef<Here>;

    public static initWithOwner(owner: WeakRef<Here>): NMAMapGestureDelegateImpl {
        const delegate = new NMAMapGestureDelegateImpl();
        delegate.owner = owner;
        return delegate;
    }

    mapViewDidReceiveDoubleTapAtLocation(mapView, location: CGPoint): void {

    }

    mapViewDidReceiveLongPressAtLocation(mapView, location: CGPoint): void {
        const owner = this.owner ? this.owner.get() : null;
        if (owner) {
            const cord = mapView.geoCoordinatesFromPoint(location);
            owner.notify({
                eventName: HereBase.mapLongClickEvent,
                object: owner,
                latitude: cord.latitude,
                longitude: cord.longitude
            });
        }
    }

    mapViewDidReceivePanAtLocation(mapView, translation: CGPoint, location: CGPoint): void {
    }

    mapViewDidReceivePinchAtLocation(mapView, pinch: number, location: CGPoint): void {
    }

    mapViewDidReceiveTapAtLocation(mapView, location: CGPoint): void {
        const owner = this.owner ? this.owner.get() : null;
        if (owner) {
            const cord = mapView.geoCoordinatesFromPoint(location);
            owner.notify({
                eventName: HereBase.mapClickEvent,
                object: owner,
                latitude: cord.latitude,
                longitude: cord.longitude
            });

            const objects = mapView.objectsAtPoint(location);
            const count = objects.count;
            for (let i = 0; i < count; i++) {
                const nativeMarker = objects.objectAtIndex(i);
                const marker = owner.markers.get(nativeMarker);
                if (marker) {
                    const callback = owner.markersCallback.get(marker.id);
                    if (callback) {
                        callback(marker);
                    }
                }
            }
        }
    }

    mapViewDidReceiveTwoFingerTapAtLocation(mapView, location: CGPoint): void {
    }
}

