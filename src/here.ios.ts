import { disableScrollProperty, disableZoomProperty, HereBase, HereMapStyle, mapStyleProperty } from './here.common';
import { layout } from 'tns-core-modules/utils/utils';
import { fromObject } from 'tns-core-modules/data/observable';

declare var NMAMapView, NMAApplicationContext, NMAMapViewDelegate;

export class Here extends HereBase {

    constructor() {
        super();
    }

    public static init(appId: string, appCode: string) {
        NMAApplicationContext.setAppIdAppCode(appId, appCode);
    }

    setCenter(lat: number, lon: number, animated: boolean): void {
        if (this.nativeView) {
            this.nativeView.setGeoCenterWithAnimation(NMAGeoCoordinates.geoCoordinatesWithLatitudeLongitude(lat, lon), animated ? NMAMapAnimation.Linear : NMAMapAnimation.None);
        }
    }

    addMarkers(): void {
    }

    public createNativeView(): Object {
        return NMAMapView.alloc().initWithFrame(CGRectZero);
    }


    [mapStyleProperty.setNative](style: HereMapStyle) {
        const nativeView = this.nativeView as NMAMapView;
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

    [disableScrollProperty.setNative](disable: boolean) {
        const nativeView = this.nativeView;
        if (disable) {
            nativeView.disableMapGestures(NMAMapGestureType.Pan);
        } else {
            nativeView.enableMapGestures(NMAMapGestureType.Pan);
        }
    }

    [disableZoomProperty.setNative](disable: boolean) {
        const nativeView = this.nativeView;
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

    public initNativeView(): void {
        super.initNativeView();
        const nativeView = this.nativeView as NMAMapView;

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

    onLoaded(): void {
        super.onLoaded();
        this.notify({
            eventName: 'mapReady',
            object: fromObject({})
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
}

@ObjCClass(NMAMapViewDelegate, NMAMapGestureDelegate)
class HereDelegateImpl extends NSObject implements NMAMapViewDelegate, NMAMapGestureDelegate {
    mapViewDidDraw(mapView: NMAMapView): void {
    }

    mapViewDidReceiveDoubleTapAtLocation(mapView: NMAMapView, location: CGPoint): void {

    }

    mapViewDidReceiveLongPressAtLocation(mapView: NMAMapView, location: CGPoint): void {
    }

    mapViewDidReceivePanAtLocation(mapView: NMAMapView, translation: CGPoint, location: CGPoint): void {
    }

    mapViewDidReceivePinchAtLocation(mapView: NMAMapView, pinch: number, location: CGPoint): void {
    }

    mapViewDidReceiveTapAtLocation(mapView: NMAMapView, location: CGPoint): void {
    }

    mapViewDidReceiveTwoFingerTapAtLocation(mapView: NMAMapView, location: CGPoint): void {
    }
}


