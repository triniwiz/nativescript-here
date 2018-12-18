import { disableScrollProperty, disableZoomProperty, HereBase, HereMapStyle, mapStyleProperty } from './here.common';
import * as app from 'tns-core-modules/application';
import { fromObject } from 'tns-core-modules/data/observable';

declare var com;

export class Here extends HereBase {

    private _layoutId: number;
    private fragment;
    private listener;
    private FRAGMENT_ID = '';
    private isReady: boolean = false;
    private gestureListener;

    constructor() {
        super();
    }

    public static init(appId: string, appCode: string) {
    }

    setCenter(lat: number, lon: number, animated: boolean): void {
        if (this.fragment && this.isReady) {
            const map = this.fragment.getMap();
            if (map) {
                map.setCenter(new com.here.android.mpa.common.GeoCoordinate(java.lang.Double.valueOf(lat), java.lang.Double.valueOf(lon)), animated ? com.here.android.mpa.mapping.Map.Animation.LINEAR : com.here.android.mpa.mapping.Map.Animation.NONE);
            }
        }
    }

    addMarkers(): void {
    }

    public createNativeView(): Object {
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
        this.gestureListener = new com.here.android.mpa.mapping.MapGesture.OnGestureListener({
            onPanStart(): void {
            },
            onPanEnd(): void {
            },
            onMultiFingerManipulationStart(): void {
            },
            onMultiFingerManipulationEnd(): void {
            },
            onMapObjectsSelected(param0: java.util.List<any>): boolean {
                return false;
            },
            onTapEvent(param0: globalAndroid.graphics.PointF): boolean {
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
            onLongPressEvent(param0: globalAndroid.graphics.PointF): boolean {
                return false;
            },
            onLongPressRelease(): void {
            },
            onTwoFingerTapEvent(param0: globalAndroid.graphics.PointF): boolean {
                return false;
            },
        });
        this.listener = new com.here.android.mpa.common.OnEngineInitListener({
            onEngineInitializationCompleted(error): void {
                const owner = that.get();
                if (!owner) return;
                if (error === com.here.android.mpa.common.OnEngineInitListener.Error.NONE) {
                    owner.isReady = true;
                    const mapGesture = owner.fragment.getMapGesture();
                    switch (owner.mapStyle) {
                        case HereMapStyle.HYBRID_DAY:
                            owner.fragment.getMap().setMapScheme(com.here.android.mpa.mapping.Map.Scheme.HYBRID_DAY);
                            break;
                        case HereMapStyle.SATELLITE_DAY:
                            owner.fragment.getMap().setMapScheme(com.here.android.mpa.mapping.Map.Scheme.SATELLITE_DAY);
                            break;
                        case HereMapStyle.TERRAIN_DAY:
                            owner.fragment.getMap().setMapScheme(com.here.android.mpa.mapping.Map.Scheme.TERRAIN_DAY);
                            break;
                        default:
                            owner.fragment.getMap().setMapScheme(com.here.android.mpa.mapping.Map.Scheme.NORMAL_DAY);
                            break;
                    }
                    owner.fragment.getMap().setZoomLevel(owner.zoomLevel, com.here.android.mpa.mapping.Map.Animation.NONE);
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
                    //  owner.fragment.getMap().setCenter(new com.here.android.mpa.common.GeoCoordinate(java.lang.Double.valueOf(owner.latitude), java.lang.Double.valueOf(owner.longitude)), com.here.android.mpa.mapping.Map.Animation.NONE);
                    owner.notify({
                        eventName: 'mapReady',
                        object: fromObject({})
                    });
                } else {
                    console.log(error.getDetails());
                }
            }
        });
        return nativeView;
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

    public initNativeView(): void {
        super.initNativeView();
        this.fragment.init(this._context, this.listener);
    }

    public disposeNativeView(): void {
        if (this.fragment) {
            // this.fragment.removeOnMapRenderListener(this.listener);
            if (this.fragment.getMapGesture()) {
                // this.fragment.getMapGesture().removeOnGestureListener(this.gestureListener);
            }
        }
        super.disposeNativeView();
    }
}
