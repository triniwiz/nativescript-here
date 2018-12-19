import {
    disableScrollProperty,
    disableZoomProperty,
    HereBase,
    HereMapStyle,
    HereMarker,
    mapStyleProperty,
    zoomLevelProperty
} from './here.common';
import * as app from 'tns-core-modules/application';
import * as types from 'tns-core-modules/utils/types';
import * as imageSrc from 'tns-core-modules/image-source';
import * as fs from 'tns-core-modules/file-system';

declare var com;

export class Here extends HereBase {

    private _layoutId: number;
    private fragment;
    private listener;
    private FRAGMENT_ID = '';
    private isReady: boolean = false;
    private dragListener;
    private gestureListener;
    private nativeMarkers: Map<number, any>;
    private markersCallback: Map<number, any>;
    private markers: Map<any, HereMarker>;

    constructor() {
        super();
    }

    public static init(appId: string, appCode: string) {
    }

    public createNativeView(): Object {
        this.nativeMarkers = new Map<number, any>();
        this.markersCallback = new Map<number, any>();
        this.markers = new Map<number, HereMarker>();
        this._layoutId = android.view.View.generateViewId();
        this.FRAGMENT_ID = `here-fragment-${this._domId}`;
        const nativeView = new android.widget.LinearLayout(this._context);
        nativeView.setId(this._layoutId);
        this.fragment = new com.here.android.mpa.mapping.SupportMapFragment() as any;
        const manager = (app.android.foregroundActivity as android.support.v7.app.AppCompatActivity).getSupportFragmentManager(); // (this as any)._getFragmentManager() as android.support.v4.app.FragmentManager;
        manager
            .beginTransaction()
            .replace(this._layoutId, this.fragment as any, this.FRAGMENT_ID)
            .commitAllowingStateLoss();

        const that = new WeakRef<Here>(this);
        this.dragListener = new com.here.android.mpa.mapping.MapMarker.OnDragListener({
            onMarkerDragStart(nativeMarker): void {

            },
            onMarkerDrag(nativeMarker) {

            },
            onMarkerDragEnd(nativeMarker) {
                const owner = that ? that.get() : null;
                if (owner) {
                    const marker = owner.markers.get(nativeMarker);
                    owner.nativeMarkers.set(marker.id, nativeMarker);
                    const cord = nativeMarker.getCoordinate();
                    marker.longitude = cord.getLongitude();
                    marker.latitude = cord.getLatitude();
                    owner.markers.set(nativeMarker, marker);
                }
            }
        });
        this.gestureListener = new com.here.android.mpa.mapping.MapGesture.OnGestureListener({
            onPanStart(): void {
            },
            onPanEnd(): void {
            },
            onMultiFingerManipulationStart(): void {
            },
            onMultiFingerManipulationEnd(): void {
            },
            onMapObjectsSelected(objects: java.util.List<any>): boolean {
                const owner = that ? that.get() : null;
                if (owner) {
                    const size = objects.size();
                    for (let i = 0; i < size; i++) {
                        const nativeMarker = objects.get(i);
                        const marker = owner.markers.get(nativeMarker);
                        if (marker) {
                            const callback = owner.markersCallback.get(marker.id);
                            if (callback) {
                                callback(marker);
                            }
                        }
                    }
                }
                return false;
            },
            onTapEvent(point: globalAndroid.graphics.PointF): boolean {
                const owner = that ? that.get() : null;
                if (owner) {
                    const map = owner.fragment ? owner.fragment.getMap() : null;
                    if (!map) return false;
                    const cord = map.pixelToGeo(point);
                    owner.notify({
                        eventName: HereBase.mapClickEvent,
                        object: owner,
                        latitude: cord.getLatitude(),
                        longitude: cord.getLongitude()
                    });
                }
                return false;
            },
            onDoubleTapEvent(param0: globalAndroid.graphics.PointF): boolean {
                return false;
            },
            onPinchLocked(): void {
            },
            onPinchZoomEvent(param0: number, param1: globalAndroid.graphics.PointF): boolean {
                return false;
            },
            onRotateLocked(): void {
            },
            onRotateEvent(param0: number): boolean {
                return false;
            },
            onTiltEvent(param0: number): boolean {
                return false;
            },
            onLongPressEvent(point: globalAndroid.graphics.PointF): boolean {
                const owner = that ? that.get() : null;
                if (owner) {
                    const map = owner.fragment ? owner.fragment.getMap() : null;
                    if (!map) return false;
                    const cord = map.pixelToGeo(point);
                    owner.notify({
                        eventName: HereBase.mapLongClickEvent,
                        object: owner,
                        latitude: cord.getLatitude(),
                        longitude: cord.getLongitude()
                    });
                }
                return false;
            },
            onLongPressRelease(): void {
            },
            onTwoFingerTapEvent(param0: globalAndroid.graphics.PointF): boolean {
                return false;
            },
        });
        this.fragment.setMapMarkerDragListener(this.dragListener);
        this.listener = new com.here.android.mpa.common.OnEngineInitListener({
            onEngineInitializationCompleted(error): void {
                const owner = that.get();
                if (!owner) return;
                if (error === com.here.android.mpa.common.OnEngineInitListener.Error.NONE) {
                    const map = owner.fragment.getMap();
                    owner.isReady = true;
                    const mapGesture = owner.fragment.getMapGesture();
                    switch (owner.mapStyle) {
                        case HereMapStyle.HYBRID_DAY:
                            map.setMapScheme(com.here.android.mpa.mapping.Map.Scheme.HYBRID_DAY);
                            break;
                        case HereMapStyle.SATELLITE_DAY:
                            map.setMapScheme(com.here.android.mpa.mapping.Map.Scheme.SATELLITE_DAY);
                            break;
                        case HereMapStyle.TERRAIN_DAY:
                            map.setMapScheme(com.here.android.mpa.mapping.Map.Scheme.TERRAIN_DAY);
                            break;
                        default:
                            map.setMapScheme(com.here.android.mpa.mapping.Map.Scheme.NORMAL_DAY);
                            break;
                    }

                    mapGesture.addOnGestureListener(owner.gestureListener);

                    if (owner.disableZoom) {
                        mapGesture.setDoubleTapEnabled(false);
                        mapGesture.setPinchEnabled(false);
                        mapGesture.setTwoFingerTapEnabled(false);
                        mapGesture.setKineticFlickEnabled(false);
                    }

                    if (owner.disableScroll) {
                        mapGesture.setPanningEnabled(false);
                        mapGesture.setTwoFingerPanningEnabled(false);
                    }
                    map.setZoomLevel(owner.zoomLevel, com.here.android.mpa.mapping.Map.Animation.NONE);
                    if (types.isNumber(+owner.latitude) && types.isNumber(+owner.longitude)) {
                        map.setCenter(
                            new com.here.android.mpa.common.GeoCoordinate(java.lang.Double.valueOf(owner.latitude).doubleValue(), java.lang.Double.valueOf(owner.longitude).doubleValue()),
                            com.here.android.mpa.mapping.Map.Animation.NONE,
                            com.here.android.mpa.mapping.Map.MOVE_PRESERVE_ZOOM_LEVEL,
                            com.here.android.mpa.mapping.Map.MOVE_PRESERVE_ORIENTATION,
                            com.here.android.mpa.mapping.Map.MOVE_PRESERVE_TILT);
                    }
                    owner.notify({
                        eventName: HereBase.mapReadyEvent,
                        object: owner,
                        android: owner.fragment,
                        ios: null
                    });
                } else {
                    console.log(error.getDetails());
                }
            }
        });
        return nativeView;
    }

    public initNativeView(): void {
        super.initNativeView();
        this.fragment.init(this._context, this.listener);
    }

    public disposeNativeView(): void {
        if (this.fragment) {
            const mapGesture = typeof this.fragment.getMapGesture === 'function' ? this.fragment.getMapGesture() : null;
            console.log('this.fragment.removeOnMapRenderListener', this.fragment.removeOnMapRenderListener);
            // this.fragment.removeOnMapRenderListener(this.listener);
            console.log('mapGesture', mapGesture, 'gestureListener', this.gestureListener);
            if (mapGesture) {
                // this.fragment.getMapGesture().removeOnGestureListener(this.gestureListener);
            }
        }
        super.disposeNativeView();
    }

    [zoomLevelProperty.setNative](zoomLevel: number) {
        if (this.fragment && this.isReady) {
            const map = this.fragment.getMap();
            map.setZoomLevel(zoomLevel, com.here.android.mpa.mapping.Map.Animation.LINEAR);
        }
    }

    [mapStyleProperty.setNative](style: HereMapStyle) {
        if (this.fragment && this.isReady) {
            const map = this.fragment.getMap();
            if (!map) return;
            switch (style) {
                case HereMapStyle.HYBRID_DAY:
                    map.setMapScheme(com.here.android.mpa.mapping.Map.Scheme.HYBRID_DAY);
                    break;
                case HereMapStyle.SATELLITE_DAY:
                    map.setMapScheme(com.here.android.mpa.mapping.Map.Scheme.SATELLITE_DAY);
                    break;
                case HereMapStyle.TERRAIN_DAY:
                    map.setMapScheme(com.here.android.mpa.mapping.Map.Scheme.TERRAIN_DAY);
                    break;
                default:
                    map.setMapScheme(com.here.android.mpa.mapping.Map.Scheme.NORMAL_DAY);
                    break;
            }
        }
    }

    [disableScrollProperty.setNative](disable: boolean) {
        if (this.fragment && this.isReady) {
            const mapGesture = this.fragment.getMapGesture();
            if (mapGesture) {
                mapGesture.setPanningEnabled(!disable);
                mapGesture.setTwoFingerPanningEnabled(!disable);
            }
        }
    }

    [disableZoomProperty.setNative](disable: boolean) {
        if (this.fragment && this.isReady) {
            const mapGesture = this.fragment.getMapGesture();
            if (mapGesture) {
                mapGesture.setDoubleTapEnabled(!disable);
                mapGesture.setPinchEnabled(!disable);
                mapGesture.setTwoFingerTapEnabled(!disable);
                mapGesture.setKineticFlickEnabled(!disable);
            }
        }
    }

    _getMarkersCount(): number {
        return this.nativeMarkers ? this.nativeMarkers.size : 0;
    }

    setCenter(lat: number, lon: number, animated: boolean): Promise<any> {
        return new Promise<any>(resolve => {
            if (this.fragment && this.isReady) {
                const map = this.fragment.getMap();
                if (map) {
                    map.setCenter(new com.here.android.mpa.common.GeoCoordinate(java.lang.Double.valueOf(lat).doubleValue(), java.lang.Double.valueOf(lon).doubleValue()), !!animated ? com.here.android.mpa.mapping.Map.Animation.LINEAR : com.here.android.mpa.mapping.Map.Animation.NONE);
                }
            }
            resolve();
        });
    }

    addMarkers(markers: HereMarker[]): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const markerIcons = [];
            if (this.fragment && this.isReady) {
                const map = this.fragment.getMap();
                markers.forEach((marker) => {
                    if (marker.onTap && typeof marker.onTap === 'function') {
                        this.markersCallback.set(marker.id, marker.onTap);
                    }
                    const nativeMarker = new com.here.android.mpa.mapping.MapMarker();
                    nativeMarker.setCoordinate(new com.here.android.mpa.common.GeoCoordinate(java.lang.Double.valueOf(marker.latitude).doubleValue(), java.lang.Double.valueOf(marker.longitude).doubleValue()));
                    if (marker.title) {
                        nativeMarker.setTitle(marker.title);
                    }
                    if (marker.description) {
                        nativeMarker.setDescription(marker.description);
                    }

                    if (typeof marker.icon === 'string') {
                        if (marker.icon.startsWith('http')) {

                        } else if (marker.icon.startsWith('res')) {
                            const src = imageSrc.fromResource(marker.icon);
                            nativeMarker.icon = src ? src.ios : null;
                        } else if (marker.icon.startsWith('~/')) {
                            const path = fs.path.join(fs.knownFolders.currentApp().path, marker.icon.replace('~', ''));
                            const src = imageSrc.fromFileOrResource(path);
                            nativeMarker.icon = src ? src.ios : null;
                        }
                    }

                    nativeMarker.setDraggable(!!marker.draggable);
                    this.nativeMarkers.set(marker.id, nativeMarker);
                    this.markers.set(nativeMarker, marker);
                    map.addMapObject(nativeMarker);
                    if (!!marker.selected) {
                        nativeMarker.showInfoBubble();
                    } else {
                        nativeMarker.hideInfoBubble();
                    }
                });
                resolve();
            } else {
                reject();
            }
        });
    }

    removeMarkers(markers?: number[]): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.fragment && this.isReady) {
                const map = this.fragment.getMap();
                if (!markers) {
                    map.removeAllMapObjects();
                    this.markers.clear();
                    this.nativeMarkers.clear();
                    this.markersCallback.clear();
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
                }
            }
            resolve();
        });
    }

    updateMarkers(markers: HereMarker[]): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            markers.forEach(marker => {
                const nativeMarker = this.nativeMarkers.get(marker.id);
                if (nativeMarker) {
                    nativeMarker.setCoordinate(new com.here.android.mpa.common.GeoCoordinate(java.lang.Double.valueOf(marker.latitude).doubleValue(), java.lang.Double.valueOf(marker.longitude).doubleValue()));
                    if (marker.title) {
                        nativeMarker.setTitle(marker.title);
                    }
                    if (marker.description) {
                        nativeMarker.setDescription(marker.description);
                    }
                    if (types.isBoolean(marker.draggable)) {
                        nativeMarker.setDraggable(marker.draggable);
                    }

                    if (!!marker.selected && !nativeMarker.isInfoBubbleVisible()) {
                        nativeMarker.showInfoBubble();
                    } else {
                        nativeMarker.hideInfoBubble();
                    }

                    this.nativeMarkers.set(marker.id, nativeMarker);
                    this.markers.set(nativeMarker, marker);

                }
            });
        });
    }

    updateMarker(marker: HereMarker): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (this.fragment && this.isReady) {
                const nativeMarker = this.nativeMarkers.get(marker.id);
                if (nativeMarker) {
                    nativeMarker.setCoordinate(new com.here.android.mpa.common.GeoCoordinate(java.lang.Double.valueOf(marker.latitude).doubleValue(), java.lang.Double.valueOf(marker.longitude).doubleValue()));
                    if (marker.title) {
                        nativeMarker.setTitle(marker.title);
                    }
                    if (marker.description) {
                        nativeMarker.setDescription(marker.description);
                    }
                    if (types.isBoolean(marker.draggable)) {
                        nativeMarker.setDraggable(marker.draggable);
                    }

                    if (!!marker.selected && !nativeMarker.isInfoBubbleVisible()) {
                        nativeMarker.showInfoBubble();
                    } else {
                        nativeMarker.hideInfoBubble();
                    }

                    this.nativeMarkers.set(marker.id, nativeMarker);
                    this.markers.set(nativeMarker, marker);
                }
            }
        });
    }
}
