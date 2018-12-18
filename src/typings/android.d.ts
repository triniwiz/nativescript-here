declare module com {
	export module a {
		export module a {
			export class a {
				public static class: java.lang.Class<com.a.a.a>;
				public static a(param0: com.here.android.mpa.common.OnEngineInitListener.Error, param1: string, param2: java.lang.Throwable): com.here.android.mpa.common.OnEngineInitListener.Error;
				public static a(param0: com.here.android.mpa.common.OnEngineInitListener.Error, param1: string): com.here.android.mpa.common.OnEngineInitListener.Error;
				public static a(param0: com.a.a.a.a): void;
			}
			export module a {
				export class a {
					public static class: java.lang.Class<com.a.a.a.a>;
					/**
					 * Constructs a new instance of the com.a.a.a$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: com.here.android.mpa.common.OnEngineInitListener.Error, param1: string, param2: java.lang.Throwable): com.here.android.mpa.common.OnEngineInitListener.Error;
					});
					public constructor();
					public a(param0: com.here.android.mpa.common.OnEngineInitListener.Error, param1: string, param2: java.lang.Throwable): com.here.android.mpa.common.OnEngineInitListener.Error;
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class CopyrightLogoPosition {
						public static class: java.lang.Class<com.here.android.mpa.common.CopyrightLogoPosition>;
						public static TOP_LEFT: com.here.android.mpa.common.CopyrightLogoPosition;
						public static TOP_CENTER: com.here.android.mpa.common.CopyrightLogoPosition;
						public static TOP_RIGHT: com.here.android.mpa.common.CopyrightLogoPosition;
						public static BOTTOM_CENTER: com.here.android.mpa.common.CopyrightLogoPosition;
						public static valueOf(param0: string): com.here.android.mpa.common.CopyrightLogoPosition;
						public static values(): native.Array<com.here.android.mpa.common.CopyrightLogoPosition>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class GeoBoundingBox {
						public static class: java.lang.Class<com.here.android.mpa.common.GeoBoundingBox>;
						public getBottomRight(): com.here.android.mpa.common.GeoCoordinate;
						public getCenter(): com.here.android.mpa.common.GeoCoordinate;
						public contains(param0: com.here.android.mpa.common.GeoBoundingBox): boolean;
						public static getBoundingBoxContainingGeoCoordinates(param0: java.util.List<com.here.android.mpa.common.GeoCoordinate>): com.here.android.mpa.common.GeoBoundingBox;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public intersects(param0: com.here.android.mpa.common.GeoBoundingBox): boolean;
						public getHeight(): number;
						public merge(param0: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.common.GeoBoundingBox;
						public contains(param0: com.here.android.mpa.common.GeoCoordinate): boolean;
						public getTopLeft(): com.here.android.mpa.common.GeoCoordinate;
						public getWidth(): number;
						public expand(param0: number, param1: number): com.here.android.mpa.common.GeoBoundingBox;
						public static mergeBoxes(param0: java.util.List<com.here.android.mpa.common.GeoBoundingBox>): com.here.android.mpa.common.GeoBoundingBox;
						public constructor(param0: com.here.android.mpa.common.GeoCoordinate, param1: number, param2: number);
						public resizeToCenter(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.common.GeoBoundingBox;
						public isEmpty(): boolean;
						public constructor(param0: com.here.android.mpa.common.GeoCoordinate, param1: com.here.android.mpa.common.GeoCoordinate);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class GeoCoordinate {
						public static class: java.lang.Class<com.here.android.mpa.common.GeoCoordinate>;
						public static UNKNOWN_ALTITUDE: number;
						public constructor(param0: com.here.android.mpa.common.GeoCoordinate);
						public getLatitude(): number;
						public getLongitude(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getAltitude(): number;
						public constructor(param0: number, param1: number, param2: number);
						public getHeading(param0: com.here.android.mpa.common.GeoCoordinate): number;
						public constructor(param0: number, param1: number);
						public distanceTo(param0: com.here.android.mpa.common.GeoCoordinate): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class GeoPolygon extends com.here.android.mpa.common.GeoPolyline {
						public static class: java.lang.Class<com.here.android.mpa.common.GeoPolygon>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.List<com.here.android.mpa.common.GeoCoordinate>);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class GeoPolyline {
						public static class: java.lang.Class<com.here.android.mpa.common.GeoPolyline>;
						public getNearestIndex(param0: com.here.android.mpa.common.GeoCoordinate): number;
						public constructor();
						public getNearest(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.common.GeoCoordinate;
						public length(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public insert(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): void;
						public getNumberOfPoints(): number;
						public add(param0: java.util.List<com.here.android.mpa.common.GeoCoordinate>): void;
						public constructor(param0: java.util.List<com.here.android.mpa.common.GeoCoordinate>);
						public contains(param0: com.here.android.mpa.common.GeoCoordinate): boolean;
						public getPoint(param0: number): com.here.android.mpa.common.GeoCoordinate;
						public getBoundingBox(): com.here.android.mpa.common.GeoBoundingBox;
						public add(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public clear(): void;
						public remove(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class GeoPosition {
						public static class: java.lang.Class<com.here.android.mpa.common.GeoPosition>;
						public static UNKNOWN: number;
						public constructor(param0: com.here.android.mpa.common.GeoCoordinate);
						public constructor(param0: com.here.android.mpa.common.GeoCoordinate, param1: number, param2: number, param3: number, param4: number, param5: number, param6: java.util.Date, param7: string);
						public getLatitudeAccuracy(): number;
						public getTimestamp(): java.util.Date;
						public getCoordinate(): com.here.android.mpa.common.GeoCoordinate;
						public getLongitudeAccuracy(): number;
						public getPositionSource(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getSpeed(): number;
						public getAltitudeAccuracy(): number;
						public getHeading(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class Image {
						public static class: java.lang.Class<com.here.android.mpa.common.Image>;
						public setImageResource(param0: number): void;
						public constructor();
						public setImageData(param0: native.Array<number>): void;
						public getWidth(): number;
						public setImageFile(param0: string): void;
						public setImageAsset(param0: string): void;
						public setBitmap(param0: globalAndroid.graphics.Bitmap): boolean;
						public getHeight(): number;
						public getType(): com.here.android.mpa.common.Image.Type;
						public setLocalUrl(param0: string): void;
						public getBitmap(): globalAndroid.graphics.Bitmap;
						public isValid(): boolean;
					}
					export module Image {
						export class Type {
							public static class: java.lang.Class<com.here.android.mpa.common.Image.Type>;
							public static UNKNOWN: com.here.android.mpa.common.Image.Type;
							public static BITMAP: com.here.android.mpa.common.Image.Type;
							public static JPEG: com.here.android.mpa.common.Image.Type;
							public static PNG: com.here.android.mpa.common.Image.Type;
							public static valueOf(param0: string): com.here.android.mpa.common.Image.Type;
							public static values(): native.Array<com.here.android.mpa.common.Image.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class MapEngine {
						public static class: java.lang.Class<com.here.android.mpa.common.MapEngine>;
						public init(param0: globalAndroid.content.Context, param1: com.here.android.mpa.common.OnEngineInitListener): void;
						public onResume(): void;
						public static getInstance(): com.here.android.mpa.common.MapEngine;
						public onPause(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class OnEngineInitListener {
						public static class: java.lang.Class<com.here.android.mpa.common.OnEngineInitListener>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.common.OnEngineInitListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEngineInitializationCompleted(param0: com.here.android.mpa.common.OnEngineInitListener.Error): void;
						});
						public constructor();
						public onEngineInitializationCompleted(param0: com.here.android.mpa.common.OnEngineInitListener.Error): void;
					}
					export module OnEngineInitListener {
						export class Error {
							public static class: java.lang.Class<com.here.android.mpa.common.OnEngineInitListener.Error>;
							public static NONE: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static USAGE_EXPIRED: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static MODEL_NOT_SUPPORTED: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static DEVICE_NOT_SUPPORTED: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static UNKNOWN: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static MISSING_APP_CREDENTIAL: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static BUSY: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static FILE_RW_ERROR: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static INCORRECT_PASSPHRASE: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static MISSING_PERMISSION: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static MISSING_SERVICE: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static MISSING_LIBRARIES: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static OPERATION_NOT_ALLOWED: com.here.android.mpa.common.OnEngineInitListener.Error;
							public static valueOf(param0: string): com.here.android.mpa.common.OnEngineInitListener.Error;
							public static values(): native.Array<com.here.android.mpa.common.OnEngineInitListener.Error>;
							public getDetails(): string;
							public getThrowable(): java.lang.Throwable;
							public getStackTrace(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class PositioningManager {
						public static class: java.lang.Class<com.here.android.mpa.common.PositioningManager>;
						public addListener(param0: java.lang.ref.WeakReference<com.here.android.mpa.common.PositioningManager.OnPositionChangedListener>): void;
						public start(param0: com.here.android.mpa.common.PositioningManager.LocationMethod): boolean;
						public hasValidPosition(): boolean;
						public getLocationMethod(): com.here.android.mpa.common.PositioningManager.LocationMethod;
						public getPosition(): com.here.android.mpa.common.GeoPosition;
						public stop(): void;
						public hasValidPosition(param0: com.here.android.mpa.common.PositioningManager.LocationMethod): boolean;
						public getLastKnownPosition(): com.here.android.mpa.common.GeoPosition;
						public getLocationStatus(param0: com.here.android.mpa.common.PositioningManager.LocationMethod): com.here.android.mpa.common.PositioningManager.LocationStatus;
						public getAverageSpeed(): number;
						public static getInstance(): com.here.android.mpa.common.PositioningManager;
						public removeListener(param0: com.here.android.mpa.common.PositioningManager.OnPositionChangedListener): void;
						public isActive(): boolean;
					}
					export module PositioningManager {
						export class LocationMethod {
							public static class: java.lang.Class<com.here.android.mpa.common.PositioningManager.LocationMethod>;
							public static NONE: com.here.android.mpa.common.PositioningManager.LocationMethod;
							public static GPS: com.here.android.mpa.common.PositioningManager.LocationMethod;
							public static NETWORK: com.here.android.mpa.common.PositioningManager.LocationMethod;
							public static GPS_NETWORK: com.here.android.mpa.common.PositioningManager.LocationMethod;
							public static valueOf(param0: string): com.here.android.mpa.common.PositioningManager.LocationMethod;
							public static values(): native.Array<com.here.android.mpa.common.PositioningManager.LocationMethod>;
						}
						export class LocationStatus {
							public static class: java.lang.Class<com.here.android.mpa.common.PositioningManager.LocationStatus>;
							public static OUT_OF_SERVICE: com.here.android.mpa.common.PositioningManager.LocationStatus;
							public static TEMPORARILY_UNAVAILABLE: com.here.android.mpa.common.PositioningManager.LocationStatus;
							public static AVAILABLE: com.here.android.mpa.common.PositioningManager.LocationStatus;
							public static valueOf(param0: string): com.here.android.mpa.common.PositioningManager.LocationStatus;
							public static values(): native.Array<com.here.android.mpa.common.PositioningManager.LocationStatus>;
						}
						export class OnPositionChangedListener {
							public static class: java.lang.Class<com.here.android.mpa.common.PositioningManager.OnPositionChangedListener>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.common.PositioningManager$OnPositionChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPositionUpdated(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: com.here.android.mpa.common.GeoPosition, param2: boolean): void;
								onPositionFixChanged(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: com.here.android.mpa.common.PositioningManager.LocationStatus): void;
							});
							public constructor();
							public onPositionUpdated(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: com.here.android.mpa.common.GeoPosition, param2: boolean): void;
							public onPositionFixChanged(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: com.here.android.mpa.common.PositioningManager.LocationStatus): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class RoadElement {
						public static class: java.lang.Class<com.here.android.mpa.common.RoadElement>;
						public getFormOfWay(): com.here.android.mpa.common.RoadElement.FormOfWay;
						public getGeometry(): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public getAttributes(): java.util.EnumSet<com.here.android.mpa.common.RoadElement.Attribute>;
						public getRoadName(): string;
						public getSpeedLimit(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getRouteName(): string;
						public isPlural(): boolean;
						public getGeometryLength(): number;
						public getNumberOfLanes(): number;
						public getStartTime(): java.util.Date;
						public getAverageSpeed(): number;
						public isPedestrian(): boolean;
						public getPluralType(): com.here.android.mpa.common.RoadElement.PluralType;
					}
					export module RoadElement {
						export class Attribute {
							public static class: java.lang.Class<com.here.android.mpa.common.RoadElement.Attribute>;
							public static DIR_NO_CARS: com.here.android.mpa.common.RoadElement.Attribute;
							public static DIR_FORWARD: com.here.android.mpa.common.RoadElement.Attribute;
							public static DIR_BACKWARD: com.here.android.mpa.common.RoadElement.Attribute;
							public static DIR_BOTH: com.here.android.mpa.common.RoadElement.Attribute;
							public static DIRT_ROAD: com.here.android.mpa.common.RoadElement.Attribute;
							public static USAGE_FEE_REQUIRED: com.here.android.mpa.common.RoadElement.Attribute;
							public static CARPOOL: com.here.android.mpa.common.RoadElement.Attribute;
							public static URBAN: com.here.android.mpa.common.RoadElement.Attribute;
							public static TOLLROAD: com.here.android.mpa.common.RoadElement.Attribute;
							public static NO_THROUGH_TRAFFIC: com.here.android.mpa.common.RoadElement.Attribute;
							public static TUNNEL: com.here.android.mpa.common.RoadElement.Attribute;
							public static EXPLICATION: com.here.android.mpa.common.RoadElement.Attribute;
							public static SLIPROAD: com.here.android.mpa.common.RoadElement.Attribute;
							public static HIGHWAY: com.here.android.mpa.common.RoadElement.Attribute;
							public static UNDER_CONSTRUCTION: com.here.android.mpa.common.RoadElement.Attribute;
							public static HAS_LANE_DIR: com.here.android.mpa.common.RoadElement.Attribute;
							public static HAS_LANE_EXIT: com.here.android.mpa.common.RoadElement.Attribute;
							public static FERRY: com.here.android.mpa.common.RoadElement.Attribute;
							public static CAR_SHUTTLE_TRAIN: com.here.android.mpa.common.RoadElement.Attribute;
							public static values(): native.Array<com.here.android.mpa.common.RoadElement.Attribute>;
							public static valueOf(param0: string): com.here.android.mpa.common.RoadElement.Attribute;
						}
						export class FormOfWay {
							public static class: java.lang.Class<com.here.android.mpa.common.RoadElement.FormOfWay>;
							public static UNDEFINED: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static MOTORWAY: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static MULTI_CARRIAGEWAY: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static SINGLE_CARRIAGEWAY: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static ROUNDABOUT: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static SPECIAL_TRAFFIC_FIGURE: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static SLIPROAD: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static PEDESTRIAN_ZONE: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static PEDESTRIAN_WALKWAY: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static SERVICE_ACCESS_PARKING: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static SERVICE_ACCESS_OTHER: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static SERVICE_ROAD: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static ETA_PARKING_PLACE: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static ETA_PARKING_BUILDING: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static ETA_UNSTRUCTURED_TRAFFIC_SQUARE: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static ROAD_FOR_AUTHORITIES: com.here.android.mpa.common.RoadElement.FormOfWay;
							public static values(): native.Array<com.here.android.mpa.common.RoadElement.FormOfWay>;
							public static valueOf(param0: string): com.here.android.mpa.common.RoadElement.FormOfWay;
						}
						export class PluralType {
							public static class: java.lang.Class<com.here.android.mpa.common.RoadElement.PluralType>;
							public static NONE: com.here.android.mpa.common.RoadElement.PluralType;
							public static MANEUVER: com.here.android.mpa.common.RoadElement.PluralType;
							public static CONNECTOR: com.here.android.mpa.common.RoadElement.PluralType;
							public static INDETERMINATE: com.here.android.mpa.common.RoadElement.PluralType;
							public static valueOf(param0: string): com.here.android.mpa.common.RoadElement.PluralType;
							public static values(): native.Array<com.here.android.mpa.common.RoadElement.PluralType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export abstract class ViewObject {
						public static class: java.lang.Class<com.here.android.mpa.common.ViewObject>;
						public constructor();
						public getBaseType(): com.here.android.mpa.common.ViewObject.Type;
					}
					export module ViewObject {
						export class Type {
							public static class: java.lang.Class<com.here.android.mpa.common.ViewObject.Type>;
							public static USER_OBJECT: com.here.android.mpa.common.ViewObject.Type;
							public static UNKNOWN_OBJECT: com.here.android.mpa.common.ViewObject.Type;
							public static values(): native.Array<com.here.android.mpa.common.ViewObject.Type>;
							public static valueOf(param0: string): com.here.android.mpa.common.ViewObject.Type;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module common {
					export class ViewRect {
						public static class: java.lang.Class<com.here.android.mpa.common.ViewRect>;
						public setX(param0: number): void;
						public setY(param0: number): void;
						public setWidth(param0: number): void;
						public getWidth(): number;
						public getX(): number;
						public setHeight(param0: number): void;
						public getY(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getHeight(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number);
						public isValid(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class a {
						public static class: java.lang.Class<com.here.android.mpa.internal.a>;
						public a: com.here.android.mpa.internal.j;
						public b: com.here.android.mpa.internal.ee;
						public c: globalAndroid.content.Context;
						public constructor(param0: globalAndroid.content.Context);
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class aa {
						public static class: java.lang.Class<com.here.android.mpa.internal.aa>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ab extends com.here.android.mpa.internal.ec {
						public static class: java.lang.Class<com.here.android.mpa.internal.ab>;
						public a(param0: globalAndroid.graphics.Bitmap): void;
						public a(param0: com.here.android.mpa.internal.o): void;
						public t(): boolean;
						public c(): void;
						public j(): com.here.android.mpa.internal.x.b;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public s(): number;
						public o(): void;
						public n(): string;
						public b(param0: boolean): void;
						public k(): void;
						public e(): number;
						public a(): void;
						public g(): string;
						public r(): boolean;
						public c(param0: boolean): void;
						public q(): boolean;
						public u(): java.lang.Long;
						public static a(param0: string, param1: number, param2: number, param3: number): string;
						public constructor();
						public d(): number;
						public a(param0: number, param1: number, param2: number): boolean;
						public i(): com.here.android.mpa.internal.o;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public l(): com.here.android.mpa.common.GeoBoundingBox;
						public m(): globalAndroid.graphics.Bitmap;
						public p(): string;
						public toString(): string;
						public a(param0: number, param1: number): void;
						public a(param0: com.here.android.mpa.internal.x.b): void;
						public static b(param0: number, param1: number, param2: number): java.lang.Long;
						public constructor(param0: number, param1: number, param2: number, param3: string);
						public b(param0: number, param1: number): void;
						public a(param0: java.util.Date): void;
						public v(): number;
						public h(): java.util.Date;
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: boolean): boolean;
						public static b(): void;
						public f(): number;
						public a(param0: number): void;
						public a(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ac {
						public static class: java.lang.Class<com.here.android.mpa.internal.ac>;
						public i(): void;
						public a(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public c(): void;
						public g(): void;
						public a(): globalAndroid.view.View;
						public h(): void;
						public d(): void;
						public e(): java.util.ArrayList<com.here.android.mpa.internal.ab>;
						public b(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public a(param0: com.here.android.mpa.internal.bs): void;
						public a(param0: string): void;
						public j(): void;
						public a(param0: com.here.android.mpa.internal.aw): void;
						public a(param0: java.util.List<com.here.android.mpa.internal.aj>): void;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Integer);
						public a(param0: java.lang.Runnable): void;
						public b(param0: com.here.android.mpa.internal.bk): boolean;
						public b(): void;
						public a(param0: com.here.android.mpa.internal.bk): boolean;
						public f(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ad extends com.here.android.mpa.internal.n {
						public static class: java.lang.Class<com.here.android.mpa.internal.ad>;
						public a(param0: java.util.ArrayList<com.here.android.mpa.internal.ab>): void;
						public constructor();
						public d(): number;
						public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
						public c(): void;
						public g(): void;
						public k(): number;
						public constructor(param0: globalAndroid.content.Context, param1: com.here.android.mpa.internal.ad.b);
						public a(param0: number, param1: number): void;
						public a(param0: com.here.android.mpa.internal.ab): void;
						public e(): void;
						public a(): void;
						public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
						public a(param0: com.here.android.mpa.internal.bc.b, param1: number, param2: com.here.android.mpa.common.GeoCoordinate, param3: com.here.android.mpa.common.GeoCoordinate, param4: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: com.here.android.mpa.internal.aw): void;
						public a(param0: java.util.List<com.here.android.mpa.internal.aj>): void;
						public a(param0: number, param1: number, param2: native.Array<number>, param3: java.nio.FloatBuffer, param4: java.nio.FloatBuffer, param5: java.nio.CharBuffer, param6: number, param7: number, param8: number, param9: number): void;
						public a(param0: any): void;
						public b(): void;
						public l(): number;
						public a(param0: number): void;
						public f(): void;
						public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
						public static a(param0: number, param1: string): number;
					}
					export module ad {
						export class a extends java.lang.Object {
							public static class: java.lang.Class<com.here.android.mpa.internal.ad.a>;
							public a(param0: com.here.android.mpa.internal.ab, param1: com.here.android.mpa.internal.ab): number;
							public constructor(param0: number);
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.ad.b>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.internal.ad$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): void;
								b(): void;
								a(param0: boolean, param1: number): void;
								a(param0: number, param1: number): void;
								c(): void;
								d(): void;
								a(param0: boolean): void;
								e(): void;
							});
							public constructor();
							public d(): void;
							public a(param0: number, param1: number): void;
							public a(): void;
							public a(param0: boolean, param1: number): void;
							public c(): void;
							public b(): void;
							public a(param0: boolean): void;
							public e(): void;
						}
						export class c {
							public static class: java.lang.Class<com.here.android.mpa.internal.ad.c>;
							public constructor();
							public a(param0: number): void;
							public a(param0: com.here.android.mpa.internal.ab): void;
							public e(): com.here.android.mpa.internal.bc.b;
							public a(param0: com.here.android.mpa.common.GeoCoordinate): globalAndroid.graphics.PointF;
							public d(): com.here.android.mpa.common.GeoBoundingBox;
							public b(param0: com.here.android.mpa.common.GeoCoordinate): globalAndroid.graphics.Point;
							public a(): number;
							public b(): com.here.android.mpa.common.GeoBoundingBox;
							public a(param0: globalAndroid.graphics.PointF): com.here.android.mpa.common.GeoCoordinate;
							public c(): number;
							public a(param0: com.here.android.mpa.internal.bc.b, param1: number, param2: com.here.android.mpa.common.GeoCoordinate, param3: com.here.android.mpa.common.GeoCoordinate, param4: com.here.android.mpa.common.GeoBoundingBox): void;
							public b(param0: number): void;
							public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: number, param2: number): globalAndroid.graphics.PointF;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ae extends com.here.android.mpa.internal.ag {
						public static class: java.lang.Class<com.here.android.mpa.internal.ae>;
						public e(): globalAndroid.graphics.PointF;
						public constructor(param0: globalAndroid.graphics.Bitmap);
						public a(): void;
						public static c(): void;
						public a(param0: globalAndroid.graphics.PointF): void;
						public f(): java.util.List<com.here.android.mpa.internal.aj>;
						public b(): void;
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
						public a(param0: number): void;
						public d(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class af {
						public static class: java.lang.Class<com.here.android.mpa.internal.af>;
						public b: number;
						public c: number;
						public d: number;
						public e: number;
						public f: number;
						public a(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>, param3: boolean, param4: boolean, param5: boolean): javax.microedition.khronos.egl.EGLConfig;
						public constructor(param0: globalAndroid.content.Context);
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
						public a(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: boolean, param3: boolean, param4: boolean): javax.microedition.khronos.egl.EGLConfig;
						public a(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: native.Array<number>, param3: boolean, param4: boolean, param5: boolean): javax.microedition.khronos.egl.EGLConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ag {
						public static class: java.lang.Class<com.here.android.mpa.internal.ag>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.ag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(): void;
							b(): void;
							a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
							f(): java.util.List<com.here.android.mpa.internal.aj>;
						});
						public constructor();
						public a(): void;
						public f(): java.util.List<com.here.android.mpa.internal.aj>;
						public b(): void;
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ah extends com.here.android.mpa.internal.ai {
						public static class: java.lang.Class<com.here.android.mpa.internal.ah>;
						public a(param0: com.here.android.mpa.common.GeoPolygon): void;
						public d(): number;
						public a(param0: com.here.android.mpa.common.GeoPolyline): void;
						public constructor(param0: com.here.android.mpa.common.GeoPolygon);
						public a(param0: com.here.android.mpa.internal.bi.a): void;
						public a(param0: com.here.android.mpa.internal.ad.c): void;
						public e(): number;
						public c(): number;
						public constructor(param0: com.here.android.mpa.common.GeoPolyline);
						public b(param0: com.here.android.mpa.internal.ad.c): void;
						public a(): void;
						public f(): java.util.List<com.here.android.mpa.internal.aj>;
						public c(param0: number): void;
						public b(): void;
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
						public a(param0: number): void;
						public b(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ai extends com.here.android.mpa.internal.ag {
						public static class: java.lang.Class<com.here.android.mpa.internal.ai>;
						public g(): java.util.List<globalAndroid.graphics.PointF>;
						public a(param0: com.here.android.mpa.common.GeoPolyline): void;
						public a(param0: com.here.android.mpa.internal.bi.a): void;
						public a(param0: com.here.android.mpa.internal.ad.c): void;
						public e(): number;
						public c(): number;
						public constructor(param0: com.here.android.mpa.common.GeoPolyline);
						public b(param0: com.here.android.mpa.internal.ad.c): void;
						public a(): void;
						public f(): java.util.List<com.here.android.mpa.internal.aj>;
						public b(): void;
						public c(param0: number): void;
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
						public a(param0: number): void;
					}
					export module ai {
						export class a extends globalAndroid.os.AsyncTask<string,java.lang.Void,java.lang.Integer> {
							public static class: java.lang.Class<com.here.android.mpa.internal.ai.a>;
							public constructor(param0: com.here.android.mpa.internal.ai, param1: com.here.android.mpa.internal.ad.c);
							public a(param0: native.Array<string>): java.lang.Integer;
							public onCancelled(): void;
							public a(param0: java.lang.Integer): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class aj {
						public static class: java.lang.Class<com.here.android.mpa.internal.aj>;
						public b(): com.here.android.mpa.internal.aj.a;
						public a(): number;
						public constructor(param0: number, param1: com.here.android.mpa.internal.aj.a);
					}
					export module aj {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.aj.a>;
							public static b: com.here.android.mpa.internal.aj.a;
							public static a(): native.Array<com.here.android.mpa.internal.aj.a>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ak {
						public static class: java.lang.Class<com.here.android.mpa.internal.ak>;
						public constructor(param0: globalAndroid.content.Context, param1: com.here.android.mpa.internal.bk, param2: com.here.android.mpa.internal.ak.a);
						public a(param0: number, param1: number): void;
						public a(param0: com.here.android.mpa.internal.ab): void;
						public e(): void;
						public a(param0: string): void;
						public a(param0: number, param1: number, param2: number): void;
						public c(): void;
						public a(): com.here.android.mpa.internal.bk;
						public a(param0: number): void;
						public b(): java.util.HashMap<java.lang.Long,com.here.android.mpa.internal.ab>;
						public a(param0: boolean): void;
						public d(): void;
					}
					export module ak {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.ak.a>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.internal.ak$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): void;
								a(param0: boolean): void;
								a(param0: com.here.android.mpa.internal.ab): void;
							});
							public constructor();
							public a(): void;
							public a(param0: com.here.android.mpa.internal.ab): void;
							public a(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class al extends com.here.android.mpa.internal.am {
						public static class: java.lang.Class<com.here.android.mpa.internal.al>;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): boolean;
						public static a(param0: com.here.android.mpa.common.GeoPolygon): com.here.android.mpa.internal.al;
						public constructor();
						public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): void;
						public static a(param0: com.here.android.mpa.internal.al): com.here.android.mpa.common.GeoPolyline;
						public static a(param0: com.here.android.mpa.common.GeoPolyline): com.here.android.mpa.internal.am;
						public a(): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.common.GeoPolygon,com.here.android.mpa.internal.al>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.common.GeoPolygon,com.here.android.mpa.internal.al>): void;
						public a(param0: number): void;
						public constructor(param0: java.util.List<com.here.android.mpa.common.GeoCoordinate>);
						public a(param0: java.util.List<com.here.android.mpa.common.GeoCoordinate>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class am {
						public static class: java.lang.Class<com.here.android.mpa.internal.am>;
						public constructor();
						public d(): number;
						public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): void;
						public c(): void;
						public b(param0: number): com.here.android.mpa.common.GeoCoordinate;
						public static a(param0: com.here.android.mpa.common.GeoPolyline): com.here.android.mpa.internal.am;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public c(param0: com.here.android.mpa.common.GeoCoordinate): number;
						public d(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.common.GeoCoordinate;
						public constructor(param0: java.util.List<com.here.android.mpa.common.GeoCoordinate>);
						public e(): com.here.android.mpa.common.GeoBoundingBox;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): boolean;
						public static b(param0: com.here.android.mpa.internal.b<com.here.android.mpa.common.GeoPolyline,com.here.android.mpa.internal.am>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.common.GeoPolyline,com.here.android.mpa.internal.am>): void;
						public b(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public b(): number;
						public a(param0: number): void;
						public a(param0: java.util.List<com.here.android.mpa.common.GeoCoordinate>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class an extends com.here.android.mpa.internal.cd<java.lang.Void,java.util.List<com.here.android.mpa.search.GeocodeResult>> {
						public static class: java.lang.Class<com.here.android.mpa.internal.an>;
						public a(param0: com.here.android.mpa.internal.cd.a): void;
						public a(param0: string, param1: java.util.HashMap<string,string>): com.here.android.mpa.internal.ce<any>;
						public b(param0: native.Array<number>): com.here.android.mpa.internal.cd.a;
						public a(param0: com.here.android.mpa.internal.ce<any>, param1: string, param2: java.util.HashMap<string,string>): void;
						public a(param0: com.here.android.mpa.internal.ce<any>): void;
						public a(param0: native.Array<number>): java.util.List<com.here.android.mpa.search.GeocodeResult>;
						public a(param0: string, param1: string): void;
						public a(param0: any): void;
						public a(param0: native.Array<string>): com.here.android.mpa.internal.ce<any>;
						public a(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ao {
						public static class: java.lang.Class<com.here.android.mpa.internal.ao>;
						public static b(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF): boolean;
						public static c(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF): globalAndroid.graphics.PointF;
						public static a(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF): globalAndroid.graphics.PointF;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ap {
						public static class: java.lang.Class<com.here.android.mpa.internal.ap>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class aq {
						public static class: java.lang.Class<com.here.android.mpa.internal.aq>;
						public constructor();
						public a(param0: native.Array<number>): void;
						public a(param0: globalAndroid.graphics.Bitmap): boolean;
						public c(param0: string): void;
						public b(param0: string): void;
						public static a(param0: com.here.android.mpa.common.Image): com.here.android.mpa.internal.aq;
						public c(): number;
						public e(): com.here.android.mpa.common.Image.Type;
						public a(param0: string): void;
						public b(): number;
						public d(): globalAndroid.graphics.Bitmap;
						public a(): boolean;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.common.Image,com.here.android.mpa.internal.aq>): void;
						public a(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ar {
						public static class: java.lang.Class<com.here.android.mpa.internal.ar>;
						public static a(): void;
						public static b(): com.here.android.mpa.mapping.MapMarker;
						public static c(): void;
						public static a(param0: globalAndroid.content.Context, param1: com.here.android.mpa.internal.bc, param2: com.here.android.mpa.mapping.MapMarker, param3: com.here.android.mpa.common.GeoCoordinate, param4: string, param5: string): number;
						public static a(param0: com.here.android.mpa.common.GeoCoordinate): void;
					}
					export module ar {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.ar.a>;
							public constructor(param0: globalAndroid.graphics.drawable.shapes.RectShape);
							public onDraw(param0: globalAndroid.graphics.drawable.shapes.Shape, param1: globalAndroid.graphics.Canvas, param2: globalAndroid.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class as {
						public static class: java.lang.Class<com.here.android.mpa.internal.as>;
						public static a(): java.util.Locale;
						public static b(): string;
						public static a(param0: java.util.Locale): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class at extends com.here.android.mpa.internal.cd<java.lang.Void,java.util.List<com.here.android.mpa.search.Location>> {
						public static class: java.lang.Class<com.here.android.mpa.internal.at>;
						public a(param0: com.here.android.mpa.internal.cd.a): void;
						public a(param0: string, param1: java.util.HashMap<string,string>): com.here.android.mpa.internal.ce<any>;
						public b(param0: native.Array<number>): com.here.android.mpa.internal.cd.a;
						public a(param0: com.here.android.mpa.internal.ce<any>, param1: string, param2: java.util.HashMap<string,string>): void;
						public a(param0: com.here.android.mpa.internal.ce<any>): void;
						public a(param0: string, param1: string): void;
						public a(param0: native.Array<number>): java.util.List<com.here.android.mpa.search.Location>;
						public a(param0: any): void;
						public a(param0: native.Array<string>): com.here.android.mpa.internal.ce<any>;
						public a(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class au {
						public static class: java.lang.Class<com.here.android.mpa.internal.au>;
						public static f(param0: string, param1: string, param2: native.Array<any>): void;
						public static c(param0: string, param1: string, param2: native.Array<any>): void;
						public static e(param0: string, param1: string, param2: native.Array<any>): void;
						public static a(): com.here.android.mpa.internal.au.a;
						public static d(param0: string, param1: string, param2: native.Array<any>): void;
						public static b(param0: string, param1: string, param2: native.Array<any>): void;
						public static a(param0: string, param1: string, param2: native.Array<any>): void;
					}
					export module au {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.au.a>;
							public static a: com.here.android.mpa.internal.au.a;
							public static b: com.here.android.mpa.internal.au.a;
							public static c: com.here.android.mpa.internal.au.a;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class av {
						public static class: java.lang.Class<com.here.android.mpa.internal.av>;
						public static a(param0: number, param1: number, param2: number): boolean;
						public static a(param0: string, param1: number): native.Array<number>;
					}
					export module av {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.av.a>;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.av.b>;
						}
						export class c {
							public static class: java.lang.Class<com.here.android.mpa.internal.av.c>;
						}
						export class d {
							public static class: java.lang.Class<com.here.android.mpa.internal.av.d>;
						}
						export class e {
							public static class: java.lang.Class<com.here.android.mpa.internal.av.e>;
						}
						export class f {
							public static class: java.lang.Class<com.here.android.mpa.internal.av.f>;
						}
						export class g {
							public static class: java.lang.Class<com.here.android.mpa.internal.av.g>;
						}
						export class h {
							public static class: java.lang.Class<com.here.android.mpa.internal.av.h>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class aw extends com.here.android.mpa.internal.bg {
						public static class: java.lang.Class<com.here.android.mpa.internal.aw>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(param0: number, param1: number, param2: com.here.android.mpa.internal.ad.c): void;
						public a(param0: com.here.android.mpa.mapping.MapContainer): void;
						public b(param0: boolean): void;
						public a(param0: number, param1: boolean): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.mapping.MapObject,com.here.android.mpa.internal.bg>): void;
						public c(): boolean;
						public constructor(param0: boolean);
						public a(): boolean;
						public c(param0: boolean): void;
						public b(param0: com.here.android.mpa.mapping.MapObject): boolean;
						public a(param0: globalAndroid.content.Context): void;
						public b(param0: globalAndroid.graphics.PointF): void;
						public constructor();
						public a(param0: number, param1: number, param2: boolean): void;
						public d(): number;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: com.here.android.mpa.mapping.MapObject): boolean;
						public b(): java.util.List<com.here.android.mpa.mapping.MapObject>;
						public a(param0: number, param1: number): void;
						public a(param0: globalAndroid.graphics.RectF, param1: com.here.android.mpa.common.GeoBoundingBox): boolean;
						public a(param0: com.here.android.mpa.internal.bs): void;
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
						public a(param0: number): void;
						public static c(param0: com.here.android.mpa.mapping.MapObject): com.here.android.mpa.internal.bg;
						public a(param0: boolean): void;
					}
					export module aw {
						export class a extends java.lang.Object {
							public static class: java.lang.Class<com.here.android.mpa.internal.aw.a>;
							public a(param0: com.here.android.mpa.mapping.MapObject, param1: com.here.android.mpa.mapping.MapObject): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ax extends com.here.android.mpa.internal.a {
						public static class: java.lang.Class<com.here.android.mpa.internal.ax>;
						public d: globalAndroid.widget.ImageView;
						public constructor(param0: globalAndroid.content.Context);
						public a(): globalAndroid.graphics.Point;
						public a(param0: com.here.android.mpa.internal.bs): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ay {
						public static class: java.lang.Class<com.here.android.mpa.internal.ay>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.ay interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: com.here.android.mpa.internal.bs, param1: boolean): void;
							a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.Map.Animation, param2: boolean): void;
							b(param0: com.here.android.mpa.internal.bs): void;
							a(param0: com.here.android.mpa.internal.bs): void;
							a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.internal.bj): void;
							a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.MapObject): void;
							b(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.MapObject): void;
						});
						public constructor();
						public b(param0: com.here.android.mpa.internal.bs): void;
						public a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.internal.bj): void;
						public a(param0: com.here.android.mpa.internal.bs): void;
						public a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.Map.Animation, param2: boolean): void;
						public a(param0: com.here.android.mpa.internal.bs, param1: boolean): void;
						public b(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.MapObject): void;
						public a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.MapObject): void;
					}
					export module ay {
						export abstract class a extends com.here.android.mpa.internal.ay {
							public static class: java.lang.Class<com.here.android.mpa.internal.ay.a>;
							public constructor();
							public a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.internal.bj): void;
							public a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.MapObject): void;
							public b(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.MapObject): void;
							public a(param0: com.here.android.mpa.internal.bs, param1: boolean): void;
							public a(param0: com.here.android.mpa.internal.bs): void;
							public b(param0: com.here.android.mpa.internal.bs): void;
							public a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.Map.Animation, param2: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class az {
						public static class: java.lang.Class<com.here.android.mpa.internal.az>;
						public constructor(param0: globalAndroid.content.Context);
						public a(param0: number, param1: java.lang.Integer): com.here.android.mpa.internal.bs;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class b<Public, Internal>  extends java.lang.Object {
						public static class: java.lang.Class<com.here.android.mpa.internal.b<any,any>>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.b<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: Public): Internal;
						});
						public constructor();
						public a(param0: Public): Internal;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ba {
						public static class: java.lang.Class<com.here.android.mpa.internal.ba>;
						public constructor();
						public a(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public a(param0: globalAndroid.os.Bundle): void;
						public a(param0: globalAndroid.view.View.OnTouchListener): void;
						public c(): void;
						public d(): com.here.android.mpa.mapping.Map;
						public a(param0: com.here.android.mpa.mapping.MapMarker.OnDragListener): void;
						public a(param0: com.here.android.mpa.common.CopyrightLogoPosition): void;
						public a(param0: globalAndroid.content.Context, param1: globalAndroid.view.LayoutInflater, param2: globalAndroid.view.ViewGroup, param3: globalAndroid.os.Bundle): globalAndroid.view.View;
						public i(): number;
						public g(): com.here.android.mpa.common.CopyrightLogoPosition;
						public a(param0: globalAndroid.graphics.Rect): void;
						public b(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public a(param0: globalAndroid.content.Context, param1: com.here.android.mpa.common.OnEngineInitListener): void;
						public a(): void;
						public a(param0: globalAndroid.util.AttributeSet, param1: globalAndroid.os.Bundle): void;
						public e(): globalAndroid.graphics.Rect;
						public j(): com.here.android.mpa.mapping.MapGesture;
						public h(): number;
						public b(): void;
						public f(): number;
						public a(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bb extends com.here.android.mpa.internal.l implements com.here.android.mpa.mapping.MapGesture {
						public static class: java.lang.Class<com.here.android.mpa.internal.bb>;
						public cancelKineticPanning(): void;
						public removeOnGestureListener(param0: com.here.android.mpa.mapping.MapGesture.OnGestureListener): void;
						public isTiltEnabled(): boolean;
						public c(): void;
						public isSingleTapEnabled(): boolean;
						public isPinchEnabled(): boolean;
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
						public isLongPressEnabled(): boolean;
						public isAutoSnapToNorthEnabled(): boolean;
						public setDoubleTapEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public setKineticFlickEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public setPinchEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public setLongPressEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isKineticFlickEnabled(): boolean;
						public setTwoFingerPanningEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public a(): boolean;
						public constructor(param0: com.here.android.mpa.internal.bc);
						public setRotateEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public constructor();
						public setTwoFingerTapEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isPanningEnabled(): boolean;
						public a(param0: number, param1: boolean): globalAndroid.graphics.PointF;
						public isFixedMapCenterOnMapRotateZoom(): boolean;
						public addOnGestureListener(param0: com.here.android.mpa.mapping.MapGesture.OnGestureListener): void;
						public a(param0: number, param1: number): void;
						public setPanningEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isRotateEnabled(): boolean;
						public setAllGesturesEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isTwoFingerPanningEnabled(): boolean;
						public setFixedMapCenterOnMapRotateZoom(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public setAutoSnapToNorthEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isDoubleTapEnabled(): boolean;
						public a(param0: com.here.android.mpa.internal.ei, param1: com.here.android.mpa.internal.ei): void;
						public setSingleTapEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isTwoFingerTapEnabled(): boolean;
						public setTiltEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
					}
					export module bb {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.bb.a>;
							public a(): void;
							public onLongPress(param0: globalAndroid.view.MotionEvent): void;
							public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
							public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
						}
						export module a {
							export class a {
								public static class: java.lang.Class<com.here.android.mpa.internal.bb.a.a>;
								public constructor(param0: com.here.android.mpa.internal.bb.a, param1: globalAndroid.graphics.PointF, param2: java.util.Timer);
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bc extends com.here.android.mpa.internal.bd {
						public static class: java.lang.Class<com.here.android.mpa.internal.bc>;
						public a(param0: globalAndroid.graphics.PointF, param1: com.here.android.mpa.mapping.Map.Animation, param2: number): void;
						public a(param0: com.here.android.mpa.mapping.Map.OnTransformListener): void;
						public r(): java.util.concurrent.CopyOnWriteArrayList<com.here.android.mpa.mapping.Map.OnTransformListener>;
						public k(): java.util.List<string>;
						public a(param0: number, param1: number, param2: number, param3: boolean): void;
						public x(): void;
						public b(param0: string): void;
						public b(param0: java.util.Locale): boolean;
						public a(param0: number, param1: number, param2: number, param3: com.here.android.mpa.mapping.Map.Animation, param4: boolean): void;
						public a(param0: com.here.android.mpa.common.ViewRect): java.util.List<com.here.android.mpa.common.ViewObject>;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public l(): string;
						public o(): boolean;
						public g(): globalAndroid.graphics.PointF;
						public e(): number;
						public C(): com.here.android.mpa.mapping.PositionIndicator;
						public h(): number;
						public c(): globalAndroid.graphics.RectF;
						public b(param0: com.here.android.mpa.mapping.MapObject): boolean;
						public a(param0: java.util.Locale): boolean;
						public constructor();
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: java.util.List<globalAndroid.graphics.PointF>): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public c(param0: globalAndroid.graphics.PointF): com.here.android.mpa.common.ViewRect;
						public B(): com.here.android.mpa.mapping.Map.InfoBubbleAdapter;
						public a(param0: com.here.android.mpa.internal.br): void;
						public a(param0: number, param1: number): void;
						public a(param0: com.here.android.mpa.mapping.Map.InfoBubbleAdapter): void;
						public b(param0: com.here.android.mpa.internal.bk): boolean;
						public c(param0: number): void;
						public j(): number;
						public a(param0: boolean): void;
						public b(param0: globalAndroid.graphics.PointF): com.here.android.mpa.common.GeoCoordinate;
						public n(): com.here.android.mpa.common.GeoBoundingBox;
						public b(param0: com.here.android.mpa.mapping.Map.OnTransformListener): void;
						public w(): number;
						public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: com.here.android.mpa.mapping.Map.Animation): void;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox, param1: number, param2: number, param3: com.here.android.mpa.mapping.Map.Animation): void;
						public i(): number;
						public c(param0: java.util.List<com.here.android.mpa.mapping.MapObject>): boolean;
						public A(): number;
						public a(): void;
						public y(): void;
						public d(param0: java.util.List<com.here.android.mpa.mapping.MapObject>): boolean;
						public d(param0: number): void;
						public a(param0: number, param1: number, param2: com.here.android.mpa.mapping.Map.Animation): void;
						public b(param0: java.util.List<com.here.android.mpa.common.GeoCoordinate>): java.util.List<globalAndroid.graphics.PointF>;
						public a(param0: globalAndroid.graphics.RectF): void;
						public z(): com.here.android.mpa.internal.em;
						public b(param0: number): number;
						public a(param0: number, param1: globalAndroid.graphics.PointF, param2: com.here.android.mpa.mapping.Map.Animation): void;
						public u(): number;
						public a(param0: globalAndroid.graphics.PointF): void;
						public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: com.here.android.mpa.mapping.Map.Animation, param2: number): void;
						public a(param0: com.here.android.mpa.mapping.MapObject): boolean;
						public b(param0: com.here.android.mpa.common.GeoCoordinate): globalAndroid.graphics.PointF;
						public a(param0: number, param1: com.here.android.mpa.mapping.Map.Animation): void;
						public b(param0: com.here.android.mpa.mapping.Map.OnSchemeChangedListener): void;
						public a(param0: globalAndroid.view.MotionEvent): boolean;
						public p(): string;
						public a(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF): void;
						public s(): com.here.android.mpa.internal.bc.b;
						public d(): globalAndroid.content.Context;
						public m(): com.here.android.mpa.common.GeoCoordinate;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox, param1: com.here.android.mpa.mapping.Map.Animation): void;
						public a(param0: string): void;
						public v(): number;
						public d(param0: globalAndroid.graphics.PointF): java.util.List<com.here.android.mpa.common.ViewObject>;
						public a(param0: com.here.android.mpa.mapping.Map.OnSchemeChangedListener): void;
						public f(): number;
						public t(): com.here.android.mpa.common.GeoBoundingBox;
						public a(param0: number): void;
						public a(param0: com.here.android.mpa.internal.bk): boolean;
						public q(): string;
					}
					export module bc {
						export class a extends com.here.android.mpa.internal.br {
							public static class: java.lang.Class<com.here.android.mpa.internal.bc.a>;
							public d(): void;
							public a(): void;
							public a(param0: com.here.android.mpa.mapping.Map.Animation, param1: boolean): void;
							public a(param0: com.here.android.mpa.internal.bk): boolean;
							public b(param0: com.here.android.mpa.mapping.MapObject): void;
							public a(param0: com.here.android.mpa.mapping.MapRoute): void;
							public a(param0: globalAndroid.view.MotionEvent): boolean;
							public c(): void;
							public b(param0: com.here.android.mpa.mapping.MapRoute): void;
							public b(param0: com.here.android.mpa.internal.bk): boolean;
							public a(param0: boolean): void;
							public f(): number;
							public a(param0: globalAndroid.graphics.RectF): java.util.List<com.here.android.mpa.common.ViewObject>;
							public b(): void;
							public a(param0: globalAndroid.graphics.PointF): java.util.List<com.here.android.mpa.common.ViewObject>;
							public a(param0: com.here.android.mpa.mapping.MapObject): boolean;
							public e(): void;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.bc.b>;
							public a(param0: number): void;
							public f(): com.here.android.mpa.internal.bc.b;
							public hashCode(): number;
							public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
							public d(): number;
							public e(): number;
							public c(): com.here.android.mpa.common.GeoBoundingBox;
							public b(): number;
							public equals(param0: any): boolean;
							public a(): com.here.android.mpa.common.GeoCoordinate;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bd {
						public static class: java.lang.Class<com.here.android.mpa.internal.bd>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.bd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: number, param1: number, param2: com.here.android.mpa.mapping.Map.Animation): void;
						});
						public constructor();
						public a(param0: number, param1: number, param2: com.here.android.mpa.mapping.Map.Animation): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class be implements com.here.android.mpa.internal.ay {
						public static class: java.lang.Class<com.here.android.mpa.internal.be>;
						public b(param0: com.here.android.mpa.internal.bs): void;
						public a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.internal.bj): void;
						public a(): void;
						public a(param0: com.here.android.mpa.internal.bs): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.Map.Animation, param2: boolean): void;
						public a(param0: com.here.android.mpa.internal.bs, param1: boolean): void;
						public b(): globalAndroid.view.View;
						public a(param0: globalAndroid.view.MotionEvent): boolean;
						public b(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.MapObject): void;
						public a(param0: com.here.android.mpa.internal.bs, param1: com.here.android.mpa.mapping.MapObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bf extends com.here.android.mpa.internal.bg {
						public static class: java.lang.Class<com.here.android.mpa.internal.bf>;
						public a(param0: globalAndroid.graphics.Bitmap): void;
						public i(): void;
						public k(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public b(param0: string): void;
						public a(param0: number, param1: number, param2: com.here.android.mpa.internal.ad.c): void;
						public a(param0: com.here.android.mpa.mapping.MapContainer): void;
						public b(param0: boolean): void;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public l(): string;
						public a(param0: number, param1: boolean): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.mapping.MapObject,com.here.android.mpa.internal.bg>): void;
						public b(): globalAndroid.graphics.PointF;
						public static a(param0: com.here.android.mpa.internal.t<com.here.android.mpa.mapping.MapMarker,com.here.android.mpa.internal.bf>): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.here.android.mpa.common.GeoCoordinate, param2: globalAndroid.graphics.Bitmap);
						public a(param0: globalAndroid.content.Context): void;
						public b(param0: globalAndroid.graphics.PointF): void;
						public a(param0: number, param1: number, param2: boolean): void;
						public constructor();
						public a(param0: globalAndroid.graphics.PointF): void;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public g(): number;
						public constructor(param0: globalAndroid.content.Context, param1: com.here.android.mpa.common.GeoCoordinate);
						public a(): com.here.android.mpa.common.GeoCoordinate;
						public h(): void;
						public m(): boolean;
						public a(param0: number, param1: number): void;
						public a(param0: globalAndroid.graphics.RectF, param1: com.here.android.mpa.common.GeoBoundingBox): boolean;
						public a(param0: com.here.android.mpa.internal.bs): void;
						public f(): globalAndroid.graphics.Bitmap;
						public a(param0: string): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.here.android.mpa.common.GeoCoordinate, param2: number);
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
						public a(param0: number): void;
						public j(): number;
					}
					export module bf {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.bf.a>;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.bf.b>;
						}
						export class c {
							public static class: java.lang.Class<com.here.android.mpa.internal.bf.c>;
						}
						export class d {
							public static class: java.lang.Class<com.here.android.mpa.internal.bf.d>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class bg extends com.here.android.mpa.internal.ec {
						public static class: java.lang.Class<com.here.android.mpa.internal.bg>;
						public e: com.here.android.mpa.internal.ag;
						public f: com.here.android.mpa.internal.ad.c;
						public a(param0: number, param1: number, param2: com.here.android.mpa.internal.ad.c): void;
						public a(param0: com.here.android.mpa.mapping.MapContainer): void;
						public b(param0: boolean): void;
						public t(): void;
						public a(param0: number, param1: boolean): void;
						public p(): boolean;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.mapping.MapObject,com.here.android.mpa.internal.bg>): void;
						public c(): boolean;
						public c(param0: boolean): void;
						public a(param0: globalAndroid.content.Context): void;
						public b(param0: globalAndroid.graphics.PointF): void;
						public constructor();
						public d(): number;
						public s(): com.here.android.mpa.mapping.MapContainer;
						public a(param0: number, param1: number, param2: boolean): void;
						public u(): java.util.BitSet;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public o(): com.here.android.mpa.common.GeoBoundingBox;
						public a(param0: number, param1: number): void;
						public a(param0: globalAndroid.graphics.RectF, param1: com.here.android.mpa.common.GeoBoundingBox): boolean;
						public a(param0: com.here.android.mpa.internal.bs): void;
						public n(): java.util.List<com.here.android.mpa.internal.aj>;
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
						public static c(param0: com.here.android.mpa.mapping.MapObject): com.here.android.mpa.internal.bg;
						public a(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bh extends com.here.android.mpa.internal.bg {
						public static class: java.lang.Class<com.here.android.mpa.internal.bh>;
						public a(param0: com.here.android.mpa.common.GeoPolygon): void;
						public a(param0: globalAndroid.graphics.PointF): boolean;
						public a(param0: number, param1: number, param2: com.here.android.mpa.internal.ad.c): void;
						public a(param0: com.here.android.mpa.mapping.MapContainer): void;
						public b(param0: boolean): void;
						public constructor(param0: com.here.android.mpa.common.GeoPolygon);
						public a(param0: number, param1: boolean): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.mapping.MapObject,com.here.android.mpa.internal.bg>): void;
						public c(): boolean;
						public c(param0: boolean): void;
						public d(param0: number): void;
						public a(param0: globalAndroid.content.Context): void;
						public b(param0: number): void;
						public b(param0: globalAndroid.graphics.PointF): void;
						public constructor();
						public a(param0: number, param1: number, param2: boolean): void;
						public d(): number;
						public a(): number;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: number, param1: number): void;
						public a(param0: globalAndroid.graphics.RectF, param1: com.here.android.mpa.common.GeoBoundingBox): boolean;
						public a(param0: com.here.android.mpa.internal.bs): void;
						public b(): number;
						public c(param0: number): void;
						public f(): number;
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
						public a(param0: number): void;
						public static c(param0: com.here.android.mpa.mapping.MapObject): com.here.android.mpa.internal.bg;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bi extends com.here.android.mpa.internal.bg {
						public static class: java.lang.Class<com.here.android.mpa.internal.bi>;
						public static a(param0: java.util.List<globalAndroid.graphics.PointF>, param1: globalAndroid.graphics.RectF, param2: com.here.android.mpa.internal.ad.c): boolean;
						public a(param0: number, param1: number, param2: com.here.android.mpa.internal.ad.c): void;
						public a(param0: com.here.android.mpa.mapping.MapContainer): void;
						public b(param0: boolean): void;
						public a(param0: number, param1: boolean): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.mapping.MapObject,com.here.android.mpa.internal.bg>): void;
						public c(): boolean;
						public c(param0: boolean): void;
						public a(param0: globalAndroid.content.Context): void;
						public b(param0: number): void;
						public b(param0: globalAndroid.graphics.PointF): void;
						public a(param0: number, param1: number, param2: boolean): void;
						public constructor();
						public a(): number;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: number, param1: number): void;
						public a(param0: globalAndroid.graphics.RectF, param1: com.here.android.mpa.common.GeoBoundingBox): boolean;
						public constructor(param0: com.here.android.mpa.common.GeoPolyline);
						public a(param0: com.here.android.mpa.internal.bs): void;
						public b(): number;
						public c(param0: number): void;
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
						public a(param0: number): void;
						public static a(param0: com.here.android.mpa.internal.t<com.here.android.mpa.mapping.MapPolyline,com.here.android.mpa.internal.bi>): void;
						public static c(param0: com.here.android.mpa.mapping.MapObject): com.here.android.mpa.internal.bg;
					}
					export module bi {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.bi.a>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.internal.bi$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): void;
							});
							public constructor();
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bj {
						public static class: java.lang.Class<com.here.android.mpa.internal.bj>;
						public a(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bk {
						public static class: java.lang.Class<com.here.android.mpa.internal.bk>;
						public d(): number;
						public d(param0: number): boolean;
						public h(): string;
						public a(): number;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public g(): number;
						public constructor(param0: string, param1: com.here.android.mpa.mapping.MapRasterTileSource, param2: number);
						public b(param0: number, param1: number, param2: number): globalAndroid.graphics.Bitmap;
						public b(): com.here.android.mpa.common.GeoBoundingBox;
						public a(param0: number, param1: number): void;
						public e(): number;
						public b(param0: number, param1: number): void;
						public a(param0: string): void;
						public c(): boolean;
						public e(param0: number): void;
						public a(param0: number, param1: number, param2: number): string;
						public a(param0: java.lang.Integer): void;
						public c(param0: number): void;
						public f(param0: number): void;
						public a(param0: number): void;
						public f(): void;
						public b(param0: number): void;
						public a(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bl extends com.here.android.mpa.internal.bg {
						public static class: java.lang.Class<com.here.android.mpa.internal.bl>;
						public f(): com.here.android.mpa.routing.Route;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(param0: com.here.android.mpa.mapping.MapRoute.RenderType): void;
						public a(param0: number, param1: number, param2: com.here.android.mpa.internal.ad.c): void;
						public a(param0: com.here.android.mpa.mapping.MapContainer): void;
						public b(param0: boolean): void;
						public a(param0: number, param1: boolean): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.mapping.MapObject,com.here.android.mpa.internal.bg>): void;
						public c(): boolean;
						public a(): boolean;
						public c(param0: boolean): void;
						public a(param0: globalAndroid.content.Context): void;
						public b(param0: number): void;
						public b(param0: globalAndroid.graphics.PointF): void;
						public a(param0: number, param1: number, param2: boolean): void;
						public constructor();
						public d(): number;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.mapping.MapRoute,com.here.android.mpa.internal.bl>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.mapping.MapRoute,com.here.android.mpa.internal.bl>): void;
						public u(): java.util.BitSet;
						public g(): com.here.android.mpa.mapping.MapRoute.RenderType;
						public a(param0: com.here.android.mpa.routing.Route, param1: com.here.android.mpa.mapping.MapRoute): void;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: number, param1: number): void;
						public a(param0: globalAndroid.graphics.RectF, param1: com.here.android.mpa.common.GeoBoundingBox): boolean;
						public a(param0: com.here.android.mpa.internal.bs): void;
						public b(): number;
						public a(param0: com.here.android.mpa.internal.ad, param1: native.Array<number>, param2: number, param3: number): void;
						public a(param0: number): void;
						public static c(param0: com.here.android.mpa.mapping.MapObject): com.here.android.mpa.internal.bg;
						public a(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bm extends com.here.android.mpa.internal.bi {
						public static class: java.lang.Class<com.here.android.mpa.internal.bm>;
						public constructor();
						public constructor(param0: com.here.android.mpa.common.GeoPolyline);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bn {
						public static class: java.lang.Class<com.here.android.mpa.internal.bn>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bo {
						public static class: java.lang.Class<com.here.android.mpa.internal.bo>;
						public static c(): string;
						public static d(): boolean;
						public static b(): string;
						public static a(): string;
					}
					export module bo {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.bo.a>;
							public static a: com.here.android.mpa.internal.bo.a;
							public static b: com.here.android.mpa.internal.bo.a;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bp extends com.here.android.mpa.internal.m {
						public static class: java.lang.Class<com.here.android.mpa.internal.bp>;
						public constructor(param0: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bq {
						public static class: java.lang.Class<com.here.android.mpa.internal.bq>;
						public static a(param0: number): number;
						public static a(param0: number, param1: number, param2: number): number;
						public static b(param0: number): number;
						public static a(param0: com.here.android.mpa.common.GeoBoundingBox, param1: com.here.android.mpa.common.GeoBoundingBox): boolean;
						public static a(param0: number, param1: number, param2: number, param3: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.common.GeoBoundingBox;
						public static a(param0: com.here.android.mpa.common.GeoCoordinate): number;
						public static a(param0: number, param1: number, param2: number, param3: number): number;
						public static a(param0: number, param1: number): com.here.android.mpa.common.GeoCoordinate;
						public static e(param0: number): number;
						public static a(param0: com.here.android.mpa.common.GeoBoundingBox): globalAndroid.graphics.RectF;
						public static a(param0: globalAndroid.location.Location): com.here.android.mpa.common.GeoPosition;
						public static b(param0: com.here.android.mpa.common.GeoCoordinate): number;
						public static d(param0: number): number;
						public static a(param0: globalAndroid.graphics.Rect): boolean;
						public static b(param0: number, param1: number, param2: number, param3: number): number;
						public static c(param0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class br {
						public static class: java.lang.Class<com.here.android.mpa.internal.br>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.br interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: globalAndroid.view.MotionEvent): boolean;
							a(): void;
							b(): void;
							a(param0: boolean): void;
							c(): void;
							d(): void;
							a(param0: com.here.android.mpa.mapping.Map.Animation, param1: boolean): void;
							a(param0: com.here.android.mpa.internal.bk): boolean;
							b(param0: com.here.android.mpa.internal.bk): boolean;
							a(param0: com.here.android.mpa.mapping.MapObject): boolean;
							a(param0: com.here.android.mpa.mapping.MapRoute): void;
							b(param0: com.here.android.mpa.mapping.MapObject): void;
							b(param0: com.here.android.mpa.mapping.MapRoute): void;
							a(param0: globalAndroid.graphics.PointF): java.util.List<com.here.android.mpa.common.ViewObject>;
							a(param0: globalAndroid.graphics.RectF): java.util.List<com.here.android.mpa.common.ViewObject>;
							e(): void;
							f(): number;
						});
						public constructor();
						public c(): void;
						public a(param0: globalAndroid.graphics.PointF): java.util.List<com.here.android.mpa.common.ViewObject>;
						public a(param0: com.here.android.mpa.mapping.MapObject): boolean;
						public b(param0: com.here.android.mpa.mapping.MapObject): void;
						public a(param0: globalAndroid.view.MotionEvent): boolean;
						public a(param0: globalAndroid.graphics.RectF): java.util.List<com.here.android.mpa.common.ViewObject>;
						public d(): void;
						public a(param0: com.here.android.mpa.mapping.MapRoute): void;
						public e(): void;
						public a(): void;
						public b(param0: com.here.android.mpa.mapping.MapRoute): void;
						public a(param0: com.here.android.mpa.mapping.Map.Animation, param1: boolean): void;
						public b(param0: com.here.android.mpa.internal.bk): boolean;
						public b(): void;
						public f(): number;
						public a(param0: com.here.android.mpa.internal.bk): boolean;
						public a(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bs extends com.here.android.mpa.internal.a implements com.here.android.mpa.internal.ef {
						public static class: java.lang.Class<com.here.android.mpa.internal.bs>;
						public a(param0: number, param1: java.lang.Integer): void;
						public a(param0: com.here.android.mpa.internal.bc): void;
						public a(param0: globalAndroid.graphics.RectF): java.util.ArrayList<com.here.android.mpa.common.ViewObject>;
						public constructor(param0: globalAndroid.content.Context);
						public o(): com.here.android.mpa.internal.bd;
						public g(): com.here.android.mpa.common.GeoCoordinate;
						public performClick(): boolean;
						public b(param0: com.here.android.mpa.mapping.MapObject): void;
						public a(param0: com.here.android.mpa.internal.bw): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public q(): void;
						public n(): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public b(param0: com.here.android.mpa.internal.bw): void;
						public a(param0: com.here.android.mpa.mapping.MapMarker): globalAndroid.graphics.Bitmap;
						public i(): globalAndroid.graphics.Rect;
						public r(): com.here.android.mpa.internal.br;
						public t(): globalAndroid.graphics.Bitmap;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public a(param0: com.here.android.mpa.internal.ay): void;
						public a(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public a(param0: com.here.android.mpa.mapping.MapObject): boolean;
						public l(): globalAndroid.graphics.RectF;
						public p(): void;
						public c(): com.here.android.mpa.mapping.MapGesture;
						public a(param0: globalAndroid.graphics.PointF): java.util.ArrayList<com.here.android.mpa.common.ViewObject>;
						public s(): void;
						public k(): number;
						public a(): com.here.android.mpa.internal.bc;
						public b(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public d(): java.util.List<com.here.android.mpa.mapping.MapObject>;
						public h(): globalAndroid.graphics.Rect;
						public a(param0: com.here.android.mpa.internal.bj): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public m(): void;
						public b(): void;
						public j(): number;
					}
					export module bs {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.bs.a>;
							public static a: com.here.android.mpa.internal.bs.a;
							public static b: com.here.android.mpa.internal.bs.a;
							public static c: com.here.android.mpa.internal.bs.a;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.bs.b>;
							public onLongPress(param0: globalAndroid.view.MotionEvent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bt {
						public static class: java.lang.Class<com.here.android.mpa.internal.bt>;
						public static c(): globalAndroid.content.Context;
						public a(param0: com.here.android.mpa.internal.bt.b): void;
						public static a(): com.here.android.mpa.internal.bt.a;
						public static b(param0: globalAndroid.content.Context, param1: com.here.android.mpa.common.OnEngineInitListener): com.here.android.mpa.internal.bt;
						public static a(param0: globalAndroid.content.Context, param1: com.here.android.mpa.common.OnEngineInitListener): com.here.android.mpa.internal.bt;
					}
					export module bt {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.bt.a>;
							public static a: com.here.android.mpa.internal.bt.a;
							public static b: com.here.android.mpa.internal.bt.a;
							public static c: com.here.android.mpa.internal.bt.a;
							public static d: com.here.android.mpa.internal.bt.a;
							public static e: com.here.android.mpa.internal.bt.a;
							public static f: com.here.android.mpa.internal.bt.a;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.bt.b>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.internal.bt$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							});
							public constructor();
							public a(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
						export class c {
							public static class: java.lang.Class<com.here.android.mpa.internal.bt.c>;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module c {
							export class a {
								public static class: java.lang.Class<com.here.android.mpa.internal.bt.c.a>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent);
								public run(): void;
							}
						}
						export class d extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,com.here.android.mpa.common.OnEngineInitListener.Error> {
							public static class: java.lang.Class<com.here.android.mpa.internal.bt.d>;
							public constructor(param0: com.here.android.mpa.internal.bt, param1: com.here.android.mpa.internal.bt, param2: com.here.android.mpa.common.OnEngineInitListener, param3: boolean);
							public a(param0: com.here.android.mpa.common.OnEngineInitListener.Error): void;
							public a(param0: native.Array<java.lang.Void>): com.here.android.mpa.common.OnEngineInitListener.Error;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bu {
						public static class: java.lang.Class<com.here.android.mpa.internal.bu>;
						public static a(): number;
						public static a(param0: java.lang.Class<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bv {
						public static class: java.lang.Class<com.here.android.mpa.internal.bv>;
						public constructor();
						public a(param0: globalAndroid.graphics.PointF): boolean;
						public b(param0: com.here.android.mpa.internal.bw): void;
						public a(): void;
						public a(param0: globalAndroid.view.MotionEvent): boolean;
						public a(param0: com.here.android.mpa.internal.bw): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bw {
						public static class: java.lang.Class<com.here.android.mpa.internal.bw>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.bw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: com.here.android.mpa.mapping.MapMarker, param1: globalAndroid.graphics.PointF): void;
							b(param0: com.here.android.mpa.mapping.MapMarker, param1: globalAndroid.graphics.PointF): void;
							c(param0: com.here.android.mpa.mapping.MapMarker, param1: globalAndroid.graphics.PointF): void;
						});
						public constructor();
						public c(param0: com.here.android.mpa.mapping.MapMarker, param1: globalAndroid.graphics.PointF): void;
						public b(param0: com.here.android.mpa.mapping.MapMarker, param1: globalAndroid.graphics.PointF): void;
						public a(param0: com.here.android.mpa.mapping.MapMarker, param1: globalAndroid.graphics.PointF): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bx {
						public static class: java.lang.Class<com.here.android.mpa.internal.bx>;
						public static a(param0: globalAndroid.content.Context): com.here.android.mpa.internal.bx;
						public a(param0: com.here.android.mpa.internal.cb): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class by extends com.here.android.mpa.internal.eg implements com.here.android.mpa.internal.bz {
						public static class: java.lang.Class<com.here.android.mpa.internal.by>;
						public a(param0: com.here.android.mpa.internal.cb, param1: java.io.InputStream): void;
						public static a(param0: globalAndroid.content.Context): com.here.android.mpa.internal.by;
						public a(param0: com.here.android.mpa.internal.cb): void;
					}
					export module by {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.by.a>;
							public constructor(param0: com.here.android.mpa.internal.cb, param1: java.io.InputStream);
							public run(): void;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.by.b>;
							public constructor(param0: com.here.android.mpa.internal.by, param1: com.here.android.mpa.internal.cb);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class bz {
						public static class: java.lang.Class<com.here.android.mpa.internal.bz>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.bz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: com.here.android.mpa.internal.cb): void;
						});
						public constructor();
						public a(param0: com.here.android.mpa.internal.cb): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class c {
						public static class: java.lang.Class<com.here.android.mpa.internal.c>;
						public static a(): com.here.android.mpa.internal.g;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ca {
						public static class: java.lang.Class<com.here.android.mpa.internal.ca>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.ca interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: com.here.android.mpa.internal.cb): void;
						});
						public constructor();
						public a(param0: com.here.android.mpa.internal.cb): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class cb {
						public static class: java.lang.Class<com.here.android.mpa.internal.cb>;
						public j(): com.here.android.mpa.internal.ca;
						public a(param0: java.io.InputStream): void;
						public m(): number;
						public constructor(param0: java.net.URL, param1: string);
						public l(): string;
						public k(): boolean;
						public h(): number;
						public e(param0: number): void;
						public f(): java.net.URL;
						public g(): native.Array<number>;
						public i(): boolean;
						public d(param0: number): void;
						public a(param0: com.here.android.mpa.internal.ca): void;
						public a(param0: number): void;
						public a(param0: boolean): void;
						public b(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cc {
						public static class: java.lang.Class<com.here.android.mpa.internal.cc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class cd<Progress, Result>  extends globalAndroid.os.AsyncTask<string,any,com.here.android.mpa.internal.ce<any>> {
						public static class: java.lang.Class<com.here.android.mpa.internal.cd<any,any>>;
						public a(param0: com.here.android.mpa.internal.cd.a): void;
						public constructor();
						public a(param0: string, param1: java.util.HashMap<string,string>): com.here.android.mpa.internal.ce<any>;
						public b(param0: native.Array<number>): com.here.android.mpa.internal.cd.a;
						public a(param0: com.here.android.mpa.internal.ce<any>, param1: string, param2: java.util.HashMap<string,string>): void;
						public a(param0: com.here.android.mpa.internal.ce<any>): void;
						public a(param0: string, param1: string): void;
						public c(param0: native.Array<number>): any;
						public a(param0: any): void;
						public a(param0: native.Array<string>): com.here.android.mpa.internal.ce<any>;
						public a(param0: java.lang.Exception): void;
					}
					export module cd {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.cd.a>;
							public b(): com.here.android.mpa.routing.RouteManager.Error;
							public a(): com.here.android.mpa.search.ErrorCode;
							public constructor(param0: com.here.android.mpa.internal.cd<any,any>, param1: com.here.android.mpa.search.ErrorCode, param2: com.here.android.mpa.routing.RouteManager.Error, param3: string);
							public c(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ce<ResultType>  extends java.lang.Object {
						public static class: java.lang.Class<com.here.android.mpa.internal.ce<any>>;
						public a: com.here.android.mpa.internal.cf;
						public b: com.here.android.mpa.search.ErrorCode;
						public c: string;
						public d: ResultType;
						public e: com.here.android.mpa.routing.RouteManager.Error;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cf {
						public static class: java.lang.Class<com.here.android.mpa.internal.cf>;
						public static b: com.here.android.mpa.internal.cf;
						public static c: com.here.android.mpa.internal.cf;
						public static a(): native.Array<com.here.android.mpa.internal.cf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cg {
						public static class: java.lang.Class<com.here.android.mpa.internal.cg>;
						public constructor(param0: globalAndroid.content.Context);
						public a(param0: string): any;
						public a(param0: any, param1: string): void;
						public b(param0: any, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ch {
						public static class: java.lang.Class<com.here.android.mpa.internal.ch>;
						public k(): string;
						public h(): string;
						public d(): string;
						public f(param0: string): void;
						public constructor(param0: com.here.android.mpa.search.Address);
						public a(param0: string, param1: string): void;
						public d(param0: string): void;
						public b(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public n(): string;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Address,com.here.android.mpa.internal.ch>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.Address,com.here.android.mpa.internal.ch>): void;
						public l(): string;
						public l(param0: string): void;
						public j(param0: string): void;
						public g(): string;
						public h(param0: string): void;
						public e(param0: string): void;
						public f(): string;
						public constructor();
						public m(): string;
						public g(param0: string): void;
						public c(param0: string): void;
						public c(): string;
						public j(): string;
						public toString(): string;
						public a(): java.util.Map<string,string>;
						public k(param0: string): void;
						public b(): string;
						public a(param0: string): void;
						public e(): string;
						public i(): string;
						public i(param0: string): void;
						public m(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ci {
						public static class: java.lang.Class<com.here.android.mpa.internal.ci>;
						public constructor();
						public a(): string;
						public b(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cj {
						public static class: java.lang.Class<com.here.android.mpa.internal.cj>;
						public static a(): com.here.android.mpa.internal.cj;
					}
					export module cj {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.cj.a>;
							public static a: com.here.android.mpa.internal.cj;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ck {
						public static class: java.lang.Class<com.here.android.mpa.internal.ck>;
						public d(): com.here.android.mpa.search.Link;
						public constructor();
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.ExtendedAttribute,com.here.android.mpa.internal.ck>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.ExtendedAttribute,com.here.android.mpa.internal.ck>): void;
						public a(): string;
						public b(): string;
						public e(): string;
						public c(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class cl<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.here.android.mpa.internal.cl<any>>;
						public g: com.here.android.mpa.common.GeoCoordinate;
						public h: com.here.android.mpa.common.GeoCoordinate;
						public i: number;
						public j: com.here.android.mpa.common.GeoBoundingBox;
						public k: com.here.android.mpa.common.GeoBoundingBox;
						public l: com.here.android.mpa.search.CategoryFilter;
						public m: java.util.List<string>;
						public n: java.util.List<com.here.android.mpa.internal.dc>;
						public o: java.util.List<string>;
						public p: string;
						public q: com.here.android.mpa.internal.cl<T>;
						public r: com.here.android.mpa.search.ResultListener<T>;
						public s: com.here.android.mpa.search.ErrorCode;
						public t: boolean;
						public b(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): void;
						public a(param0: com.here.android.mpa.search.RichTextFormatting): void;
						public a(param0: string, param1: string): void;
						public c(param0: string): void;
						public d(param0: string): void;
						public b(param0: string, param1: string): void;
						public b(param0: string): void;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public a(param0: com.here.android.mpa.search.ResultListener<T>): com.here.android.mpa.search.ErrorCode;
						public a(param0: com.here.android.mpa.search.CategoryFilter): void;
						public a(param0: number, param1: number): void;
						public e(): number;
						public d(): com.here.android.mpa.search.RichTextFormatting;
						public f(): java.util.List<string>;
						public a(param0: string): void;
						public c(): boolean;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Request<any>,com.here.android.mpa.internal.cl<any>>): void;
						public a(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cm {
						public static class: java.lang.Class<com.here.android.mpa.internal.cm>;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Category,com.here.android.mpa.internal.cm>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.Category,com.here.android.mpa.internal.cm>): void;
						public f(): com.here.android.mpa.search.Category;
						public constructor();
						public b(): string;
						public static a(): java.util.List<com.here.android.mpa.search.Category>;
						public d(): string;
						public c(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public e(): java.util.List<com.here.android.mpa.search.Category>;
						public static a(param0: com.here.android.mpa.search.Category.Global): com.here.android.mpa.search.Category;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cn {
						public static class: java.lang.Class<com.here.android.mpa.internal.cn>;
						public a(param0: com.here.android.mpa.search.Category): void;
						public constructor();
						public a(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(param0: com.here.android.mpa.search.Category.Global): void;
						public toString(): string;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.CategoryFilter,com.here.android.mpa.internal.cn>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.CategoryFilter,com.here.android.mpa.internal.cn>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class co {
						public static class: java.lang.Class<com.here.android.mpa.internal.co>;
						public a(param0: string): com.here.android.mpa.search.Category;
						public b(param0: string): com.here.android.mpa.search.Category;
						public c(param0: string): java.util.List<com.here.android.mpa.search.Category>;
						public static a(): com.here.android.mpa.internal.co;
						public static b(): void;
						public finalize(): void;
						public a(param0: boolean): void;
					}
					export module co {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.co.a>;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.co.b>;
							public a(): java.util.List<com.here.android.mpa.internal.cm>;
							public constructor(param0: com.here.android.mpa.internal.co);
							public b(): string;
						}
						export class c {
							public static class: java.lang.Class<com.here.android.mpa.internal.co.c>;
							public a(): void;
							public constructor(param0: com.here.android.mpa.internal.co);
							public run(): void;
						}
						export class d extends com.here.android.mpa.internal.bt.b {
							public static class: java.lang.Class<com.here.android.mpa.internal.co.d>;
							public a(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
						export class e {
							public static class: java.lang.Class<com.here.android.mpa.internal.co.e>;
							public static a: com.here.android.mpa.internal.co;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cp extends com.here.android.mpa.internal.cl<com.here.android.mpa.internal.co.b> {
						public static class: java.lang.Class<com.here.android.mpa.internal.cp>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cq {
						public static class: java.lang.Class<com.here.android.mpa.internal.cq>;
					}
					export module cq {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.cq.a>;
							public static a: com.here.android.mpa.internal.cq.a;
							public static b: com.here.android.mpa.internal.cq.a;
							public static c: com.here.android.mpa.internal.cq.a;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.cq.b>;
							public static b: com.here.android.mpa.internal.cq.b;
							public static c: com.here.android.mpa.internal.cq.b;
							public static d: com.here.android.mpa.internal.cq.b;
							public static e: com.here.android.mpa.internal.cq.b;
							public static f: com.here.android.mpa.internal.cq.b;
							public static g: com.here.android.mpa.internal.cq.b;
							public static h: com.here.android.mpa.internal.cq.b;
							public static i: com.here.android.mpa.internal.cq.b;
							public static j: com.here.android.mpa.internal.cq.b;
							public static k: com.here.android.mpa.internal.cq.b;
							public static l: com.here.android.mpa.internal.cq.b;
							public static m: com.here.android.mpa.internal.cq.b;
							public static n: com.here.android.mpa.internal.cq.b;
							public static o: com.here.android.mpa.internal.cq.b;
							public static p: com.here.android.mpa.internal.cq.b;
							public static q: com.here.android.mpa.internal.cq.b;
							public static r: com.here.android.mpa.internal.cq.b;
							public static s: com.here.android.mpa.internal.cq.b;
							public static t: com.here.android.mpa.internal.cq.b;
							public static u: com.here.android.mpa.internal.cq.b;
							public static v: com.here.android.mpa.internal.cq.b;
							public static w: com.here.android.mpa.internal.cq.b;
							public static a(): native.Array<com.here.android.mpa.internal.cq.b>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cr {
						public static class: java.lang.Class<com.here.android.mpa.internal.cr>;
						public a(): java.util.List<com.here.android.mpa.internal.cs>;
						public constructor();
						public d(): java.util.List<com.here.android.mpa.internal.cs>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public c(): java.util.List<com.here.android.mpa.internal.cs>;
						public b(): java.util.List<com.here.android.mpa.internal.cs>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cs {
						public static class: java.lang.Class<com.here.android.mpa.internal.cs>;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.ContactDetail,com.here.android.mpa.internal.cs>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.ContactDetail,com.here.android.mpa.internal.cs>): void;
						public constructor();
						public a(): string;
						public b(): string;
						public c(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ct {
						public static class: java.lang.Class<com.here.android.mpa.internal.ct>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cu {
						public static class: java.lang.Class<com.here.android.mpa.internal.cu>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static a(param0: com.here.android.mpa.internal.t<com.here.android.mpa.internal.w,com.here.android.mpa.internal.cu>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cv extends com.here.android.mpa.internal.cl<com.here.android.mpa.search.DiscoveryResultPage> {
						public static class: java.lang.Class<com.here.android.mpa.internal.cv>;
						public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): void;
						public a(param0: com.here.android.mpa.search.RichTextFormatting): void;
						public a(param0: string, param1: string): void;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public a(param0: com.here.android.mpa.search.ResultListener<any>): com.here.android.mpa.search.ErrorCode;
						public a(param0: com.here.android.mpa.search.CategoryFilter): void;
						public a(param0: number, param1: number): void;
						public a(param0: string): void;
						public constructor(param0: com.here.android.mpa.internal.cq.b);
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.DiscoveryRequest,com.here.android.mpa.internal.cv>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.DiscoveryRequest,com.here.android.mpa.internal.cv>): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Request<any>,com.here.android.mpa.internal.cl<any>>): void;
						public a(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cw {
						public static class: java.lang.Class<com.here.android.mpa.internal.cw>;
						public a(): com.here.android.mpa.search.DiscoveryResultPage;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cx {
						public static class: java.lang.Class<com.here.android.mpa.internal.cx>;
						public constructor();
						public c(): com.here.android.mpa.search.DiscoveryRequest;
						public a(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public b(): com.here.android.mpa.search.DiscoveryRequest;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.DiscoveryResultPage,com.here.android.mpa.internal.cx>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.DiscoveryResultPage,com.here.android.mpa.internal.cx>): void;
						public d(): java.util.List<com.here.android.mpa.search.DiscoveryResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cy extends com.here.android.mpa.internal.dh<com.here.android.mpa.search.EditorialMedia> {
						public static class: java.lang.Class<com.here.android.mpa.internal.cy>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class cz extends com.here.android.mpa.internal.di<com.here.android.mpa.search.EditorialMedia> {
						public static class: java.lang.Class<com.here.android.mpa.internal.cz>;
						public constructor();
						public constructor(param0: com.here.android.mpa.search.Media.Type);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class d {
						public static class: java.lang.Class<com.here.android.mpa.internal.d>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class da extends com.here.android.mpa.internal.cl<java.util.List<com.here.android.mpa.search.GeocodeResult>> {
						public static class: java.lang.Class<com.here.android.mpa.internal.da>;
						public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): void;
						public a(param0: com.here.android.mpa.search.RichTextFormatting): void;
						public a(param0: string, param1: string): void;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public a(param0: com.here.android.mpa.search.ResultListener<any>): com.here.android.mpa.search.ErrorCode;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.GeocodeRequest2,com.here.android.mpa.internal.da>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.GeocodeRequest2,com.here.android.mpa.internal.da>): void;
						public a(param0: com.here.android.mpa.search.CategoryFilter): void;
						public a(param0: number, param1: number): void;
						public a(param0: string): void;
						public constructor(param0: com.here.android.mpa.internal.da.a);
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Request<any>,com.here.android.mpa.internal.cl<any>>): void;
						public a(param0: number): void;
						public a(param0: com.here.android.mpa.search.ResultListener<java.util.List<com.here.android.mpa.search.GeocodeResult>>): com.here.android.mpa.search.ErrorCode;
					}
					export module da {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.da.a>;
							public static b: com.here.android.mpa.internal.da.a;
							public static a(): native.Array<com.here.android.mpa.internal.da.a>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class db {
						public static class: java.lang.Class<com.here.android.mpa.internal.db>;
						public constructor();
						public a(param0: com.here.android.mpa.search.Location): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.GeocodeResult,com.here.android.mpa.internal.db>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.GeocodeResult,com.here.android.mpa.internal.db>): void;
						public b(): string;
						public a(): number;
						public a(param0: string): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public a(param0: java.util.Map<string,java.lang.Float>): void;
						public d(): com.here.android.mpa.search.Location;
						public c(): java.util.Map<string,java.lang.Float>;
						public a(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dc {
						public static class: java.lang.Class<com.here.android.mpa.internal.dc>;
						public a(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public b(): number;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dd extends com.here.android.mpa.internal.dh<com.here.android.mpa.search.ImageMedia> {
						public static class: java.lang.Class<com.here.android.mpa.internal.dd>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class de extends com.here.android.mpa.internal.di<com.here.android.mpa.search.ImageMedia> {
						public static class: java.lang.Class<com.here.android.mpa.internal.de>;
						public constructor();
						public constructor(param0: com.here.android.mpa.search.Media.Type);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class df {
						public static class: java.lang.Class<com.here.android.mpa.internal.df>;
						public f(): string;
						public constructor();
						public m(): string;
						public a(): string;
						public g(): com.here.android.mpa.search.DiscoveryResult.ResultType;
						public d(): string;
						public n(): com.here.android.mpa.common.GeoBoundingBox;
						public c(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public l(): com.here.android.mpa.search.Category;
						public a(param0: string): string;
						public k(): number;
						public i(): com.here.android.mpa.common.GeoCoordinate;
						public o(): boolean;
						public p(): com.here.android.mpa.search.DiscoveryRequest;
						public h(): com.here.android.mpa.search.PlaceRequest;
						public b(param0: string): java.util.List<string>;
						public e(): string;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Link,com.here.android.mpa.internal.df>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.CreateLink,com.here.android.mpa.internal.df>, param2: com.here.android.mpa.internal.t<com.here.android.mpa.search.DiscoveryLink,com.here.android.mpa.internal.df>, param3: com.here.android.mpa.internal.t<com.here.android.mpa.search.PlaceLink,com.here.android.mpa.internal.df>, param4: com.here.android.mpa.internal.t<com.here.android.mpa.search.ReportingLink,com.here.android.mpa.internal.df>, param5: com.here.android.mpa.internal.t<com.here.android.mpa.search.SupplierLink,com.here.android.mpa.internal.df>, param6: com.here.android.mpa.internal.t<com.here.android.mpa.search.UserLink,com.here.android.mpa.internal.df>, param7: com.here.android.mpa.internal.t<com.here.android.mpa.search.ViaLink,com.here.android.mpa.internal.df>): void;
						public j(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dg {
						public static class: java.lang.Class<com.here.android.mpa.internal.dg>;
						public b(): com.here.android.mpa.common.GeoCoordinate;
						public constructor();
						public c(): com.here.android.mpa.common.GeoBoundingBox;
						public d(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public b(param0: string): string;
						public a(): com.here.android.mpa.search.Address;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public constructor(param0: com.here.android.mpa.common.GeoCoordinate);
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Location,com.here.android.mpa.internal.dg>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.Location,com.here.android.mpa.internal.dg>): void;
						public a(param0: com.here.android.mpa.search.Address): void;
						public c(param0: string): java.util.List<string>;
						public a(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dh<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.here.android.mpa.internal.dh<any>>;
						public o: string;
						public p: string;
						public q: com.here.android.mpa.internal.df;
						public r: com.here.android.mpa.internal.df;
						public f(): string;
						public m(): string;
						public k(): string;
						public a(): string;
						public d(): com.here.android.mpa.search.SupplierLink;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public h(): com.here.android.mpa.search.UserLink;
						public j(): string;
						public c(): number;
						public a(param0: number, param1: number): string;
						public g(): string;
						public i(): string;
						public b(): number;
						public e(): com.here.android.mpa.search.ViaLink;
						public n(): com.here.android.mpa.search.Media.Type;
						public l(): number;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Media,com.here.android.mpa.internal.dh<any>>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.Media,com.here.android.mpa.internal.dh<any>>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class di<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.here.android.mpa.internal.di<any>>;
						public g: com.here.android.mpa.search.Media.Type;
						public c(): number;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.MediaCollectionPage<any>,com.here.android.mpa.internal.di<any>>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.MediaCollectionPage<any>,com.here.android.mpa.internal.di<any>>): void;
						public constructor(param0: com.here.android.mpa.search.Media.Type);
						public a(): com.here.android.mpa.search.Media.Type;
						public d(): com.here.android.mpa.search.MediaCollectionPageRequest<T>;
						public e(): com.here.android.mpa.search.MediaCollectionPageRequest<T>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public b(): number;
						public f(): java.util.List<com.here.android.mpa.search.Media>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dj {
						public static class: java.lang.Class<com.here.android.mpa.internal.dj>;
						public constructor();
						public c(): com.here.android.mpa.internal.dn;
						public d(): com.here.android.mpa.internal.dt;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): com.here.android.mpa.internal.cz;
						public b(): com.here.android.mpa.internal.de;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dk<T>  extends com.here.android.mpa.internal.cl<com.here.android.mpa.search.MediaCollectionPage<any>> {
						public static class: java.lang.Class<com.here.android.mpa.internal.dk<any>>;
						public a(param0: com.here.android.mpa.search.CategoryFilter): void;
						public a(param0: number, param1: number): void;
						public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): void;
						public a(param0: com.here.android.mpa.search.RichTextFormatting): void;
						public a(param0: string): void;
						public a(param0: string, param1: string): void;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.MediaCollectionPageRequest<any>,com.here.android.mpa.internal.dk<any>>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.MediaCollectionPageRequest<any>,com.here.android.mpa.internal.dk<any>>): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Request<any>,com.here.android.mpa.internal.cl<any>>): void;
						public a(param0: number): void;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public a(param0: com.here.android.mpa.search.ResultListener<any>): com.here.android.mpa.search.ErrorCode;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dl {
						public static class: java.lang.Class<com.here.android.mpa.internal.dl>;
						public k(): com.here.android.mpa.search.Ratings;
						public constructor();
						public o(): com.here.android.mpa.search.MediaCollectionPage<com.here.android.mpa.search.RatingMedia>;
						public a(): string;
						public h(): java.util.List<com.here.android.mpa.search.ContactDetail>;
						public l(): java.util.List<com.here.android.mpa.search.ExtendedAttribute>;
						public c(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(param0: string): string;
						public e(): com.here.android.mpa.search.Location;
						public r(): com.here.android.mpa.search.ReportingLink;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Place,com.here.android.mpa.internal.dl>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.Place,com.here.android.mpa.internal.dl>): void;
						public f(): java.util.List<com.here.android.mpa.search.Category>;
						public b(): string;
						public g(): string;
						public b(param0: string): java.util.List<string>;
						public p(): com.here.android.mpa.search.MediaCollectionPage<com.here.android.mpa.search.ReviewMedia>;
						public i(): string;
						public d(): java.util.Map<string,java.util.List<string>>;
						public m(): com.here.android.mpa.search.MediaCollectionPage<com.here.android.mpa.search.EditorialMedia>;
						public n(): com.here.android.mpa.search.MediaCollectionPage<com.here.android.mpa.search.ImageMedia>;
						public j(): com.here.android.mpa.search.SupplierLink;
						public q(): java.util.Map<string,com.here.android.mpa.search.DiscoveryLink>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dm extends com.here.android.mpa.internal.cl<com.here.android.mpa.search.Place> {
						public static class: java.lang.Class<com.here.android.mpa.internal.dm>;
						public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): void;
						public a(param0: com.here.android.mpa.search.RichTextFormatting): void;
						public a(param0: string, param1: string): void;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public a(param0: com.here.android.mpa.search.ResultListener<any>): com.here.android.mpa.search.ErrorCode;
						public a(param0: com.here.android.mpa.search.CategoryFilter): void;
						public a(param0: number, param1: number): void;
						public a(param0: string): void;
						public constructor(param0: string, param1: string);
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Request<any>,com.here.android.mpa.internal.cl<any>>): void;
						public a(param0: number): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.PlaceRequest,com.here.android.mpa.internal.dm>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.PlaceRequest,com.here.android.mpa.internal.dm>): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dn extends com.here.android.mpa.internal.di<com.here.android.mpa.search.RatingMedia> {
						public static class: java.lang.Class<com.here.android.mpa.internal.dn>;
						public constructor();
						public constructor(param0: com.here.android.mpa.search.Media.Type);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class do {
						public static class: java.lang.Class<com.here.android.mpa.internal.do>;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Ratings,com.here.android.mpa.internal.do>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.Ratings,com.here.android.mpa.internal.do>): void;
						public a(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public b(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dp {
						public static class: java.lang.Class<com.here.android.mpa.internal.dp>;
						public b(): java.util.List<string>;
						public a(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class dq<T>  extends com.here.android.mpa.internal.cd<java.lang.Void,any> {
						public static class: java.lang.Class<com.here.android.mpa.internal.dq<any>>;
						public b(param0: native.Array<number>): com.here.android.mpa.internal.cd.a;
						public c(param0: native.Array<number>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dr extends com.here.android.mpa.internal.cl<com.here.android.mpa.search.Address> {
						public static class: java.lang.Class<com.here.android.mpa.internal.dr>;
						public constructor();
						public a(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): void;
						public a(param0: com.here.android.mpa.search.RichTextFormatting): void;
						public a(param0: string, param1: string): void;
						public a(param0: com.here.android.mpa.common.GeoBoundingBox): void;
						public a(param0: com.here.android.mpa.common.GeoCoordinate): void;
						public a(param0: com.here.android.mpa.search.ResultListener<any>): com.here.android.mpa.search.ErrorCode;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.ReverseGeocodeRequest,com.here.android.mpa.internal.dr>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.ReverseGeocodeRequest,com.here.android.mpa.internal.dr>): void;
						public a(param0: com.here.android.mpa.search.CategoryFilter): void;
						public a(param0: number, param1: number): void;
						public a(param0: string): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.Request<any>,com.here.android.mpa.internal.cl<any>>): void;
						public a(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ds extends com.here.android.mpa.internal.dh<com.here.android.mpa.search.ReviewMedia> {
						public static class: java.lang.Class<com.here.android.mpa.internal.ds>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dt extends com.here.android.mpa.internal.di<com.here.android.mpa.search.ReviewMedia> {
						public static class: java.lang.Class<com.here.android.mpa.internal.dt>;
						public constructor();
						public constructor(param0: com.here.android.mpa.search.Media.Type);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class du {
						public static class: java.lang.Class<com.here.android.mpa.internal.du>;
						public a(param0: string, param1: java.lang.Class): any;
						public static a(): com.here.android.mpa.internal.du;
						public a(param0: any): string;
					}
					export module du {
						export class a extends com.google.gson.InstanceCreator<com.here.android.mpa.internal.cz> {
							public static class: java.lang.Class<com.here.android.mpa.internal.du.a>;
							public a(param0: java.lang.reflect.Type): com.here.android.mpa.internal.cz;
						}
						export class b extends com.google.gson.InstanceCreator<com.here.android.mpa.internal.cy> {
							public static class: java.lang.Class<com.here.android.mpa.internal.du.b>;
							public a(param0: java.lang.reflect.Type): com.here.android.mpa.internal.cy;
						}
						export class c extends com.google.gson.InstanceCreator<com.here.android.mpa.internal.de> {
							public static class: java.lang.Class<com.here.android.mpa.internal.du.c>;
							public a(param0: java.lang.reflect.Type): com.here.android.mpa.internal.de;
						}
						export class d extends com.google.gson.InstanceCreator<com.here.android.mpa.internal.dd> {
							public static class: java.lang.Class<com.here.android.mpa.internal.du.d>;
							public a(param0: java.lang.reflect.Type): com.here.android.mpa.internal.dd;
						}
						export class e extends com.google.gson.InstanceCreator<com.here.android.mpa.internal.dt> {
							public static class: java.lang.Class<com.here.android.mpa.internal.du.e>;
							public a(param0: java.lang.reflect.Type): com.here.android.mpa.internal.dt;
						}
						export class f extends com.google.gson.InstanceCreator<com.here.android.mpa.internal.ds> {
							public static class: java.lang.Class<com.here.android.mpa.internal.du.f>;
							public a(param0: java.lang.reflect.Type): com.here.android.mpa.internal.ds;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dv extends com.here.android.mpa.internal.cl<java.util.List<com.here.android.mpa.search.AutoSuggest>> {
						public static class: java.lang.Class<com.here.android.mpa.internal.dv>;
						public constructor();
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dw {
						public static class: java.lang.Class<com.here.android.mpa.internal.dw>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): java.util.List<com.here.android.mpa.search.AutoSuggest>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dx {
						public static class: java.lang.Class<com.here.android.mpa.internal.dx>;
						public static a(param0: com.here.android.mpa.common.GeoBoundingBox): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dy implements com.here.android.mpa.common.PositioningManager.OnPositionChangedListener, com.here.android.mpa.mapping.Map.OnTransformListener {
						public static class: java.lang.Class<com.here.android.mpa.internal.dy>;
						public d(): number;
						public a(): com.here.android.mpa.common.Image;
						public a(param0: string, param1: com.here.android.mpa.internal.dy.a): void;
						public b(param0: boolean): void;
						public onMapTransformStart(): void;
						public onMapTransformEnd(param0: com.here.android.mpa.mapping.MapState): void;
						public onPositionUpdated(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: com.here.android.mpa.common.GeoPosition, param2: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.here.android.mpa.internal.bc);
						public a(param0: string): void;
						public c(): boolean;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.mapping.PositionIndicator,com.here.android.mpa.internal.dy>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.mapping.PositionIndicator,com.here.android.mpa.internal.dy>): void;
						public a(param0: com.here.android.mpa.common.Image): void;
						public b(): boolean;
						public a(param0: number): void;
						public a(param0: boolean): void;
						public onPositionFixChanged(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: com.here.android.mpa.common.PositioningManager.LocationStatus): void;
					}
					export module dy {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.dy.a>;
							public a: com.here.android.mpa.mapping.MapMarker;
							public b: com.here.android.mpa.mapping.MapMarker;
							public constructor(param0: com.here.android.mpa.mapping.MapMarker);
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.dy.b>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class dz extends com.here.android.mpa.internal.v.a {
						public static class: java.lang.Class<com.here.android.mpa.internal.dz>;
						public b(param0: com.here.android.mpa.common.PositioningManager.LocationMethod): boolean;
						public h(): com.here.android.mpa.common.PositioningManager.LocationMethod;
						public d(): boolean;
						public a(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: globalAndroid.location.Location): void;
						public a(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: number): void;
						public static a(): com.here.android.mpa.internal.dz;
						public g(): com.here.android.mpa.common.GeoPosition;
						public f(): com.here.android.mpa.common.GeoPosition;
						public a(param0: com.here.android.mpa.common.PositioningManager.OnPositionChangedListener): void;
						public a(param0: java.lang.ref.WeakReference<com.here.android.mpa.common.PositioningManager.OnPositionChangedListener>): void;
						public e(): number;
						public a(param0: com.here.android.mpa.common.PositioningManager.LocationMethod): boolean;
						public c(): boolean;
						public c(param0: com.here.android.mpa.common.PositioningManager.LocationMethod): com.here.android.mpa.common.PositioningManager.LocationStatus;
						public b(): void;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.common.PositioningManager,com.here.android.mpa.internal.dz>): void;
					}
					export module dz {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.dz.a>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class e {
						public static class: java.lang.Class<com.here.android.mpa.internal.e>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ea {
						public static class: java.lang.Class<com.here.android.mpa.internal.ea>;
						public static a(param0: any, param1: string): void;
						public static a(param0: boolean, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class eb {
						public static class: java.lang.Class<com.here.android.mpa.internal.eb>;
						public static a(param0: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class ec {
						public static class: java.lang.Class<com.here.android.mpa.internal.ec>;
						public h: number;
						public i: number;
						public j: number;
						public k: number;
						public l: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ed {
						public static class: java.lang.Class<com.here.android.mpa.internal.ed>;
						public c(): com.here.android.mpa.common.RoadElement.FormOfWay;
						public f(): string;
						public e(): com.here.android.mpa.common.RoadElement.PluralType;
						public static a(param0: com.here.android.mpa.internal.restrouting.Link, param1: number, param2: number): com.here.android.mpa.common.RoadElement;
						public l(): java.util.Date;
						public d(): boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public i(): number;
						public m(): number;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.common.RoadElement,com.here.android.mpa.internal.ed>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.common.RoadElement,com.here.android.mpa.internal.ed>): void;
						public b(): java.util.EnumSet<com.here.android.mpa.common.RoadElement.Attribute>;
						public g(): string;
						public k(): boolean;
						public h(): number;
						public j(): number;
					}
					export module ed {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.ed.a>;
							public static b: com.here.android.mpa.internal.ed.a;
							public static c: com.here.android.mpa.internal.ed.a;
							public static d: com.here.android.mpa.internal.ed.a;
							public static e: com.here.android.mpa.internal.ed.a;
							public static f: com.here.android.mpa.internal.ed.a;
							public static g: com.here.android.mpa.internal.ed.a;
							public static h: com.here.android.mpa.internal.ed.a;
							public static i: com.here.android.mpa.internal.ed.a;
							public static j: com.here.android.mpa.internal.ed.a;
							public static k: com.here.android.mpa.internal.ed.a;
							public static l: com.here.android.mpa.internal.ed.a;
							public static m: com.here.android.mpa.internal.ed.a;
							public static n: com.here.android.mpa.internal.ed.a;
							public static o: com.here.android.mpa.internal.ed.a;
							public static p: com.here.android.mpa.internal.ed.a;
							public static q: com.here.android.mpa.internal.ed.a;
							public a(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ee extends com.here.android.mpa.internal.eg {
						public static class: java.lang.Class<com.here.android.mpa.internal.ee>;
						public static a(param0: string, param1: number): string;
						public static a(): com.here.android.mpa.internal.ee;
						public a(param0: string, param1: string): void;
						public a(param0: com.here.android.mpa.internal.ef): void;
						public static a(param0: globalAndroid.content.Context): com.here.android.mpa.internal.ee;
						public a(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ef {
						public static class: java.lang.Class<com.here.android.mpa.internal.ef>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.ef interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class eg {
						public static class: java.lang.Class<com.here.android.mpa.internal.eg>;
						public constructor();
						public clone(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class eh {
						public static class: java.lang.Class<com.here.android.mpa.internal.eh>;
						public static b(param0: string): boolean;
						public static a(param0: string): string;
						public static a(param0: java.util.Collection<any>, param1: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ei {
						public static class: java.lang.Class<com.here.android.mpa.internal.ei>;
						public a(): globalAndroid.graphics.PointF;
						public a(param0: number, param1: number, param2: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public b(): number;
						public constructor(param0: number, param1: number, param2: number);
						public a(param0: com.here.android.mpa.internal.ei): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ej {
						public static class: java.lang.Class<com.here.android.mpa.internal.ej>;
						public static a(param0: java.lang.Runnable): void;
						public static a(param0: java.lang.Runnable, param1: number): void;
						public static b(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class ek {
						public static class: java.lang.Class<com.here.android.mpa.internal.ek>;
						public static a(param0: java.io.Closeable): void;
						public static a(param0: java.lang.StringBuilder, param1: string, param2: string): void;
						public static a(param0: number): java.util.Date;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class el {
						public static class: java.lang.Class<com.here.android.mpa.internal.el>;
						public static a(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class em extends com.here.android.mpa.internal.eg {
						public static class: java.lang.Class<com.here.android.mpa.internal.em>;
						public constructor();
						public a(param0: com.here.android.mpa.common.GeoCoordinate): globalAndroid.graphics.Point;
						public a(param0: number, param1: number, param2: number): void;
						public a(param0: number, param1: number, param2: number, param3: number, param4: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.common.GeoBoundingBox;
						public a(param0: number, param1: number, param2: number, param3: number, param4: com.here.android.mpa.common.GeoBoundingBox, param5: number): com.here.android.mpa.common.GeoBoundingBox;
						public b(param0: com.here.android.mpa.common.GeoCoordinate): globalAndroid.graphics.Point;
						public a(): boolean;
						public constructor(param0: com.here.android.mpa.internal.bc);
						public a(param0: number, param1: number): com.here.android.mpa.common.GeoCoordinate;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class en<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.here.android.mpa.internal.en<any>>;
						public a(param0: java.lang.ref.WeakReference<T>): void;
						public a(param0: com.here.android.mpa.internal.en.a<T>): void;
						public b(param0: com.here.android.mpa.internal.en.a<T>): void;
						public a(param0: T): void;
						public a(param0: com.here.android.mpa.internal.en.a<T>, param1: java.lang.Runnable): void;
					}
					export module en {
						export class a<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.here.android.mpa.internal.en.a<any>>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.internal.en$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: T): void;
							});
							public constructor();
							public a(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class f {
						public static class: java.lang.Class<com.here.android.mpa.internal.f>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class g {
						public static class: java.lang.Class<com.here.android.mpa.internal.g>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.g interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: globalAndroid.content.Context, param1: boolean): void;
							a(): void;
							a(param0: com.here.android.mpa.internal.da.a, param1: boolean, param2: boolean): void;
							a(param0: com.here.android.mpa.internal.cq.b, param1: boolean, param2: boolean): void;
							a(param0: com.here.android.mpa.routing.RouteOptions.TransportMode, param1: com.here.android.mpa.routing.Route): void;
							a(param0: boolean, param1: string): void;
							a(param0: string, param1: string): void;
							a(param0: string): void;
						});
						public constructor();
						public a(param0: com.here.android.mpa.routing.RouteOptions.TransportMode, param1: com.here.android.mpa.routing.Route): void;
						public a(): void;
						public a(param0: string): void;
						public a(param0: string, param1: string): void;
						public a(param0: com.here.android.mpa.internal.cq.b, param1: boolean, param2: boolean): void;
						public a(param0: globalAndroid.content.Context, param1: boolean): void;
						public a(param0: com.here.android.mpa.internal.da.a, param1: boolean, param2: boolean): void;
						public a(param0: boolean, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class h extends com.here.android.mpa.internal.g {
						public static class: java.lang.Class<com.here.android.mpa.internal.h>;
						public a(param0: com.here.android.mpa.routing.RouteOptions.TransportMode, param1: com.here.android.mpa.routing.Route): void;
						public a(): void;
						public a(param0: string): void;
						public a(param0: string, param1: string): void;
						public a(param0: com.here.android.mpa.internal.cq.b, param1: boolean, param2: boolean): void;
						public a(param0: globalAndroid.content.Context, param1: boolean): void;
						public a(param0: com.here.android.mpa.internal.da.a, param1: boolean, param2: boolean): void;
						public a(param0: boolean, param1: string): void;
					}
					export module h {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.h.a>;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.h.b>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class i {
						public static class: java.lang.Class<com.here.android.mpa.internal.i>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class j {
						public static class: java.lang.Class<com.here.android.mpa.internal.j>;
						public b(): string;
						public static a(param0: globalAndroid.content.Context): com.here.android.mpa.internal.j;
						public e(): string;
						public c(): string;
						public static a(): com.here.android.mpa.internal.j;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class k {
						public static class: java.lang.Class<com.here.android.mpa.internal.k>;
						public f(): string;
						public constructor();
						public k(): string;
						public i(): com.here.android.mpa.common.GeoBoundingBox;
						public h(): string;
						public a(): com.here.android.mpa.search.AutoSuggest.Type;
						public d(): string;
						public g(): com.here.android.mpa.common.GeoCoordinate;
						public l(): com.here.android.mpa.search.DiscoveryRequest;
						public c(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public j(): string;
						public b(): string;
						public e(): string;
						public static a(param0: com.here.android.mpa.internal.b<com.here.android.mpa.search.AutoSuggest,com.here.android.mpa.internal.k>, param1: com.here.android.mpa.internal.t<com.here.android.mpa.search.AutoSuggestQuery,com.here.android.mpa.internal.k>, param2: com.here.android.mpa.internal.t<com.here.android.mpa.search.AutoSuggestSearch,com.here.android.mpa.internal.k>, param3: com.here.android.mpa.internal.t<com.here.android.mpa.search.AutoSuggestPlace,com.here.android.mpa.internal.k>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class l {
						public static class: java.lang.Class<com.here.android.mpa.internal.l>;
						public h: number;
						public i: number;
						public j: com.here.android.mpa.internal.u;
						public constructor();
						public a(param0: number, param1: number): void;
						public e(): void;
						public c(): void;
						public g(): void;
						public a(param0: com.here.android.mpa.internal.ei, param1: com.here.android.mpa.internal.ei): void;
						public a(param0: number, param1: boolean): globalAndroid.graphics.PointF;
						public a(): boolean;
						public b(): void;
						public f(): void;
						public d(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class m {
						public static class: java.lang.Class<com.here.android.mpa.internal.m>;
						public constructor(param0: globalAndroid.content.Context);
						public a(): void;
						public d(): boolean;
						public c(): void;
						public a(param0: com.here.android.mpa.internal.n): void;
						public b(): void;
					}
					export module m {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.m.a>;
							public a(): void;
							public b(): void;
							public a(param0: boolean): void;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export abstract class n {
						public static class: java.lang.Class<com.here.android.mpa.internal.n>;
						public constructor();
						public a(): void;
						public c(): void;
						public a(param0: any): void;
						public b(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class o extends com.here.android.mpa.internal.cb {
						public static class: java.lang.Class<com.here.android.mpa.internal.o>;
						public d(): number;
						public a(): globalAndroid.graphics.Bitmap;
						public a(param0: java.io.InputStream): void;
						public constructor(param0: java.net.URL, param1: string);
						public c(): number;
						public e(): void;
						public constructor(param0: java.net.URL, param1: string, param2: number, param3: string);
						public b(): number;
						public e(param0: number): void;
						public c(param0: number): void;
						public a(param0: com.here.android.mpa.internal.ca): void;
						public a(param0: number): void;
						public d(param0: number): void;
						public a(param0: boolean): void;
						public b(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class p {
						public static class: java.lang.Class<com.here.android.mpa.internal.p>;
						public constructor();
						public a(): void;
						public c(): void;
						public b(): void;
						public doFrame(param0: number): void;
						public d(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class q {
						public static class: java.lang.Class<com.here.android.mpa.internal.q>;
						public static i(): string;
						public static e(param0: string): boolean;
						public static i(param0: string): boolean;
						public static a(param0: string): boolean;
						public static b(): string;
						public static d(): string;
						public static g(param0: string): boolean;
						public static g(): string;
						public static c(param0: string): boolean;
						public static c(): string;
						public static f(param0: string): boolean;
						public static j(param0: string): boolean;
						public static j(): string;
						public static b(param0: string): boolean;
						public static h(): string;
						public static h(param0: string): boolean;
						public static e(): string;
						public static f(): string;
						public static a(): string;
						public static d(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class r {
						public static class: java.lang.Class<com.here.android.mpa.internal.r>;
						public static c: string;
						public static d: string;
						public static e: string;
						public static f: string;
						public static g: string;
						public static h: string;
						public static i: string;
						public static j: string;
						public static k: string;
						public static l: string;
						public static m: string;
						public static n: string;
						public static o: string;
						public static p: string;
						public static q: string;
						public static r: string;
						public static s: string;
						public static t: string;
						public static u: string;
						public static v: string;
						public static w: string;
						public static x: string;
						public static y: string;
						public static z: string;
						public static A: string;
						public static B: string;
						public static C: string;
						public static D: string;
						public static E: string;
						public static F: string;
						public static G: string;
						public static H: string;
						public static I: string;
						public static J: string;
						public static K: string;
						public static L: string;
						public static M: string;
						public static a(param0: number): number;
						public static b(param0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class AdditionalDatum {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.AdditionalDatum>;
							public constructor();
							public b(): string;
							public a(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Address {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Address>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class BoundingBox {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.BoundingBox>;
							public constructor();
							public a(): com.here.android.mpa.internal.restrouting.GeoCoordinate;
							public b(): com.here.android.mpa.internal.restrouting.GeoCoordinate;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class DynamicSpeedInfo {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.DynamicSpeedInfo>;
							public constructor();
							public a(): java.lang.Double;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class GeoCoordinate {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.GeoCoordinate>;
							public constructor();
							public a(): java.lang.Double;
							public b(): java.lang.Double;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Leg {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Leg>;
							public constructor();
							public a(): java.util.List<com.here.android.mpa.internal.restrouting.Maneuver>;
							public b(): java.util.List<com.here.android.mpa.internal.restrouting.Link>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Link {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Link>;
							public constructor();
							public h(): java.lang.Double;
							public g(): string;
							public i(): string;
							public a(): com.here.android.mpa.internal.restrouting.DynamicSpeedInfo;
							public c(): java.util.List<java.lang.Double>;
							public d(): java.lang.Double;
							public j(): string;
							public b(): java.util.List<string>;
							public e(): java.lang.Double;
							public f(): java.lang.Double;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Maneuver {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Maneuver>;
							public constructor();
							public i(): string;
							public d(): java.lang.Double;
							public l(): string;
							public b(): java.lang.Double;
							public m(): java.lang.Integer;
							public a(): string;
							public h(): string;
							public f(): string;
							public k(): string;
							public j(): string;
							public c(): com.here.android.mpa.internal.restrouting.GeoCoordinate;
							public e(): java.lang.Double;
							public g(): com.here.android.mpa.internal.restrouting.BoundingBox;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Mode {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Mode>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Note {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Note>;
							public constructor();
							public b(): string;
							public a(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class PublicTransportLine {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.PublicTransportLine>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Response {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Response>;
							public constructor();
							public a(): java.util.List<com.here.android.mpa.internal.restrouting.Route>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Route {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Route>;
							public constructor();
							public f(): java.util.List<com.here.android.mpa.internal.restrouting.SummaryByCountry>;
							public e(): com.here.android.mpa.internal.restrouting.Summary;
							public a(): java.util.List<com.here.android.mpa.internal.restrouting.Waypoint>;
							public d(): java.util.List<com.here.android.mpa.internal.restrouting.Note>;
							public c(): java.util.List<com.here.android.mpa.internal.restrouting.Leg>;
							public b(): com.here.android.mpa.internal.restrouting.BoundingBox;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class RoutingRestErrorResult {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.RoutingRestErrorResult>;
							public constructor();
							public b(): java.util.List<com.here.android.mpa.internal.restrouting.AdditionalDatum>;
							public a(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class RoutingRestResult {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.RoutingRestResult>;
							public constructor();
							public a(): com.here.android.mpa.internal.restrouting.Response;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class SourceAttribution {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.SourceAttribution>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Stop {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Stop>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Summary {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Summary>;
							public constructor();
							public a(): java.lang.Double;
							public b(): java.lang.Double;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class SummaryByCountry {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.SummaryByCountry>;
							public constructor();
							public b(): java.lang.Double;
							public a(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Supplier {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Supplier>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class SupplierNote {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.SupplierNote>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class TruckRestrictions {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.TruckRestrictions>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class Waypoint {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.Waypoint>;
							public constructor();
							public a(): com.here.android.mpa.internal.restrouting.GeoCoordinate;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export module restrouting {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.restrouting.a>;
							public static a(param0: java.lang.Double): java.lang.Double;
							public static a(param0: java.lang.Integer): java.lang.Integer;
							public static a(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class s {
						public static class: java.lang.Class<com.here.android.mpa.internal.s>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class t<Public, Internal>  extends java.lang.Object {
						public static class: java.lang.Class<com.here.android.mpa.internal.t<any,any>>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.internal.t<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: Internal): Public;
						});
						public constructor();
						public a(param0: Internal): Public;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class u {
						public static class: java.lang.Class<com.here.android.mpa.internal.u>;
						public a(param0: number): globalAndroid.graphics.PointF;
						public constructor(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class v {
						public static class: java.lang.Class<com.here.android.mpa.internal.v>;
						public e(): globalAndroid.location.Location;
						public d(): number;
						public c(): number;
						public constructor(param0: globalAndroid.content.Context, param1: com.here.android.mpa.internal.v.a);
						public a(): boolean;
						public b(): void;
						public finalize(): void;
					}
					export module v {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.v.a>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.internal.v$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: globalAndroid.location.Location): void;
								a(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: number): void;
							});
							public constructor();
							public a(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: number): void;
							public a(param0: com.here.android.mpa.common.PositioningManager.LocationMethod, param1: globalAndroid.location.Location): void;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.v.b>;
							public onProviderDisabled(param0: string): void;
							public onStatusChanged(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
							public onGpsStatusChanged(param0: number): void;
							public onLocationChanged(param0: globalAndroid.location.Location): void;
							public onProviderEnabled(param0: string): void;
						}
						export class c {
							public static class: java.lang.Class<com.here.android.mpa.internal.v.c>;
							public onProviderDisabled(param0: string): void;
							public onStatusChanged(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
							public onLocationChanged(param0: globalAndroid.location.Location): void;
							public onProviderEnabled(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class w {
						public static class: java.lang.Class<com.here.android.mpa.internal.w>;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class x extends com.here.android.mpa.internal.eg {
						public static class: java.lang.Class<com.here.android.mpa.internal.x>;
						public static a(param0: globalAndroid.content.Context): com.here.android.mpa.internal.x;
						public a(param0: native.Array<number>, param1: string, param2: java.util.Date): boolean;
						public a(): void;
						public a(param0: com.here.android.mpa.internal.ab, param1: java.lang.Runnable, param2: java.lang.Runnable): com.here.android.mpa.internal.x.b;
						public a(param0: string, param1: java.util.Date): void;
						public b(param0: string): java.util.Date;
						public b(): boolean;
						public a(param0: string): boolean;
						public a(param0: com.here.android.mpa.internal.ab): globalAndroid.graphics.Bitmap;
						public a(param0: boolean): void;
					}
					export module x {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.x.a>;
							public constructor(param0: com.here.android.mpa.internal.x, param1: java.io.ByteArrayOutputStream, param2: string, param3: java.util.Date);
							public run(): void;
						}
						export class b extends globalAndroid.os.AsyncTask<com.here.android.mpa.internal.ab,java.lang.Void,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.here.android.mpa.internal.x.b>;
							public constructor(param0: com.here.android.mpa.internal.x, param1: java.lang.Runnable, param2: java.lang.Runnable);
							public a(param0: native.Array<com.here.android.mpa.internal.ab>): globalAndroid.graphics.Bitmap;
							public a(param0: globalAndroid.graphics.Bitmap): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class y {
						public static class: java.lang.Class<com.here.android.mpa.internal.y>;
						public constructor();
						public c(): number;
						public a(): string;
						public a(param0: java.util.Date): void;
						public b(param0: java.util.Date): void;
						public a(param0: string): void;
						public b(): java.util.Date;
						public d(): java.util.Date;
						public a(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module internal {
					export class z {
						public static class: java.lang.Class<com.here.android.mpa.internal.z>;
					}
					export module z {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.internal.z.a>;
							public run(): void;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.internal.z.b>;
						}
						export class c {
							public static class: java.lang.Class<com.here.android.mpa.internal.z.c>;
							public run(): void;
						}
						export class d {
							public static class: java.lang.Class<com.here.android.mpa.internal.z.d>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class Map {
						public static class: java.lang.Class<com.here.android.mpa.mapping.Map>;
						public static MOVE_PRESERVE_ZOOM_LEVEL: number;
						public static MOVE_PRESERVE_ORIENTATION: number;
						public static MOVE_PRESERVE_TILT: number;
						public getCenter(): com.here.android.mpa.common.GeoCoordinate;
						public setMapSecondaryDisplayLanguage(param0: java.util.Locale): boolean;
						public zoomTo(param0: com.here.android.mpa.common.GeoBoundingBox, param1: number, param2: number, param3: com.here.android.mpa.mapping.Map.Animation, param4: number): void;
						public addSchemeChangedListener(param0: com.here.android.mpa.mapping.Map.OnSchemeChangedListener): void;
						public setMapScheme(param0: string): com.here.android.mpa.mapping.Map;
						public getScaleFromZoomLevel(param0: number): number;
						public addTransformListener(param0: com.here.android.mpa.mapping.Map.OnTransformListener): void;
						public setCenter(param0: com.here.android.mpa.common.GeoCoordinate, param1: com.here.android.mpa.mapping.Map.Animation, param2: number, param3: number, param4: number): void;
						public setCenter(param0: com.here.android.mpa.common.GeoCoordinate, param1: com.here.android.mpa.mapping.Map.Animation): void;
						public addMapObject(param0: com.here.android.mpa.mapping.MapObject): boolean;
						public getMaxZoomLevel(): number;
						public getBoundingBox(): com.here.android.mpa.common.GeoBoundingBox;
						public removeMapObjects(param0: java.util.List<com.here.android.mpa.mapping.MapObject>): boolean;
						public setZoomLevel(param0: number, param1: com.here.android.mpa.mapping.Map.Animation): void;
						public getMapSecondaryDisplayLanguage(): string;
						public removeTransformListener(param0: com.here.android.mpa.mapping.Map.OnTransformListener): void;
						public setCenter(param0: globalAndroid.graphics.PointF, param1: com.here.android.mpa.mapping.Map.Animation, param2: number, param3: number, param4: number): void;
						public getSelectedObjects(param0: globalAndroid.graphics.PointF): java.util.List<com.here.android.mpa.common.ViewObject>;
						public constructor();
						public getZoomLevel(): number;
						public getMapDisplayLanguage(): string;
						public removeMapObject(param0: com.here.android.mpa.mapping.MapObject): boolean;
						public getSelectedObjects(param0: com.here.android.mpa.common.ViewRect): java.util.List<com.here.android.mpa.common.ViewObject>;
						public setInfoBubbleAdapter(param0: com.here.android.mpa.mapping.Map.InfoBubbleAdapter): void;
						public removeRasterTileSource(param0: com.here.android.mpa.mapping.MapRasterTileSource): boolean;
						public zoomTo(param0: com.here.android.mpa.common.GeoBoundingBox, param1: com.here.android.mpa.mapping.Map.Animation, param2: number): void;
						public getMapScheme(): string;
						public getHeight(): number;
						public addMapObjects(param0: java.util.List<com.here.android.mpa.mapping.MapObject>): boolean;
						public setZoomLevel(param0: number, param1: globalAndroid.graphics.PointF, param2: com.here.android.mpa.mapping.Map.Animation): void;
						public addRasterTileSource(param0: com.here.android.mpa.mapping.MapRasterTileSource): boolean;
						public getWidth(): number;
						public getMinZoomLevel(): number;
						public setZoomLevel(param0: number): com.here.android.mpa.mapping.Map;
						public projectToPixel(param0: java.util.List<com.here.android.mpa.common.GeoCoordinate>): java.util.List<com.here.android.mpa.mapping.Map.PixelResult>;
						public projectToPixel(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.mapping.Map.PixelResult;
						public setUseSystemLanguage(): boolean;
						public pan(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF): void;
						public getPositionIndicator(): com.here.android.mpa.mapping.PositionIndicator;
						public pixelToGeo(param0: globalAndroid.graphics.PointF): com.here.android.mpa.common.GeoCoordinate;
						public pixelToGeo(param0: java.util.List<globalAndroid.graphics.PointF>): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public getTransformCenter(): globalAndroid.graphics.PointF;
						public getMapSchemes(): java.util.List<string>;
						public setMapDisplayLanguage(param0: java.util.Locale): boolean;
						public removeSchemeChangedListener(param0: com.here.android.mpa.mapping.Map.OnSchemeChangedListener): void;
						public setTransformCenter(param0: globalAndroid.graphics.PointF): com.here.android.mpa.mapping.Map;
					}
					export module Map {
						export class Animation {
							public static class: java.lang.Class<com.here.android.mpa.mapping.Map.Animation>;
							public static LINEAR: com.here.android.mpa.mapping.Map.Animation;
							public static NONE: com.here.android.mpa.mapping.Map.Animation;
							public static valueOf(param0: string): com.here.android.mpa.mapping.Map.Animation;
							public static values(): native.Array<com.here.android.mpa.mapping.Map.Animation>;
						}
						export class InfoBubbleAdapter {
							public static class: java.lang.Class<com.here.android.mpa.mapping.Map.InfoBubbleAdapter>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.mapping.Map$InfoBubbleAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getInfoBubbleContents(param0: com.here.android.mpa.mapping.MapMarker): globalAndroid.view.View;
								getInfoBubble(param0: com.here.android.mpa.mapping.MapMarker): globalAndroid.view.View;
							});
							public constructor();
							public getInfoBubble(param0: com.here.android.mpa.mapping.MapMarker): globalAndroid.view.View;
							public getInfoBubbleContents(param0: com.here.android.mpa.mapping.MapMarker): globalAndroid.view.View;
						}
						export class OnSchemeChangedListener {
							public static class: java.lang.Class<com.here.android.mpa.mapping.Map.OnSchemeChangedListener>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.mapping.Map$OnSchemeChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMapSchemeChanged(param0: string): void;
							});
							public constructor();
							public onMapSchemeChanged(param0: string): void;
						}
						export class OnTransformListener {
							public static class: java.lang.Class<com.here.android.mpa.mapping.Map.OnTransformListener>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.mapping.Map$OnTransformListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMapTransformStart(): void;
								onMapTransformEnd(param0: com.here.android.mpa.mapping.MapState): void;
							});
							public constructor();
							public onMapTransformStart(): void;
							public onMapTransformEnd(param0: com.here.android.mpa.mapping.MapState): void;
						}
						export class PixelResult {
							public static class: java.lang.Class<com.here.android.mpa.mapping.Map.PixelResult>;
							public getError(): com.here.android.mpa.mapping.Map.PixelResult.Error;
							public getResult(): globalAndroid.graphics.PointF;
						}
						export module PixelResult {
							export class Error {
								public static class: java.lang.Class<com.here.android.mpa.mapping.Map.PixelResult.Error>;
								public static NONE: com.here.android.mpa.mapping.Map.PixelResult.Error;
								public static NOT_IN_VIEW: com.here.android.mpa.mapping.Map.PixelResult.Error;
								public static OVERFLOW: com.here.android.mpa.mapping.Map.PixelResult.Error;
								public static UNKNOWN: com.here.android.mpa.mapping.Map.PixelResult.Error;
								public static values(): native.Array<com.here.android.mpa.mapping.Map.PixelResult.Error>;
								public static valueOf(param0: string): com.here.android.mpa.mapping.Map.PixelResult.Error;
							}
						}
						export class Scheme {
							public static class: java.lang.Class<com.here.android.mpa.mapping.Map.Scheme>;
							public static NORMAL_DAY: string;
							public static TERRAIN_DAY: string;
							public static SATELLITE_DAY: string;
							public static HYBRID_DAY: string;
							public static NORMAL_DAY_GREY: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class MapCircle extends com.here.android.mpa.mapping.MapObject {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapCircle>;
						public getCenter(): com.here.android.mpa.common.GeoCoordinate;
						public setVisible(param0: number, param1: boolean): com.here.android.mpa.mapping.MapObject;
						public constructor();
						public getFillColor(): number;
						public setVisible(param0: number, param1: number, param2: boolean): com.here.android.mpa.mapping.MapObject;
						public setRadius(param0: number): com.here.android.mpa.mapping.MapCircle;
						public getRadius(): number;
						public getLineColor(): number;
						public setCenter(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.mapping.MapCircle;
						public setLineColor(param0: number): com.here.android.mpa.mapping.MapCircle;
						public setFillColor(param0: number): com.here.android.mpa.mapping.MapCircle;
						public getType(): com.here.android.mpa.mapping.MapObject.Type;
						public setVisible(param0: boolean): com.here.android.mpa.mapping.MapObject;
						public setLineWidth(param0: number): com.here.android.mpa.mapping.MapCircle;
						public getLineWidth(): number;
						public constructor(param0: number, param1: com.here.android.mpa.common.GeoCoordinate);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class MapContainer extends com.here.android.mpa.mapping.MapObject {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapContainer>;
						public setVisible(param0: number, param1: boolean): com.here.android.mpa.mapping.MapObject;
						public constructor();
						public setVisible(param0: number, param1: number, param2: boolean): com.here.android.mpa.mapping.MapObject;
						public removeMapObject(param0: com.here.android.mpa.mapping.MapObject): boolean;
						public setZIndex(param0: number): com.here.android.mpa.mapping.MapObject;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setZIndex(param0: number): com.here.android.mpa.mapping.MapContainer;
						public getZIndex(): number;
						public addMapObject(param0: com.here.android.mpa.mapping.MapObject): boolean;
						public isVisible(): boolean;
						public getType(): com.here.android.mpa.mapping.MapObject.Type;
						public getAllMapObjects(): java.util.List<com.here.android.mpa.mapping.MapObject>;
						public setVisible(param0: boolean): com.here.android.mpa.mapping.MapObject;
						public setVisible(param0: boolean): com.here.android.mpa.mapping.MapContainer;
						public removeAllMapObjects(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class MapFragment {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapFragment>;
						public addOnMapRenderListener(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public setOnTouchListener(param0: globalAndroid.view.View.OnTouchListener): void;
						public constructor();
						public init(param0: com.here.android.mpa.common.OnEngineInitListener): void;
						public setCopyrightLogoPosition(param0: com.here.android.mpa.common.CopyrightLogoPosition): void;
						public onResume(): void;
						public setCopyrightMargin(param0: number): void;
						public getMapGesture(): com.here.android.mpa.mapping.MapGesture;
						public onInflate(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						public onPause(): void;
						public getMap(): com.here.android.mpa.mapping.Map;
						public removeOnMapRenderListener(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public onDestroyView(): void;
						public init(param0: globalAndroid.content.Context, param1: com.here.android.mpa.common.OnEngineInitListener): void;
						public setCopyrightBoundaryRect(param0: globalAndroid.graphics.Rect): void;
						public getCopyrightLogoPosition(): com.here.android.mpa.common.CopyrightLogoPosition;
						public getCopyrightBoundaryRect(): globalAndroid.graphics.Rect;
						public setMapMarkerDragListener(param0: com.here.android.mpa.mapping.MapMarker.OnDragListener): void;
						public getCopyrightLogoWidth(): number;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public getCopyrightLogoHeight(): number;
						public getCopyrightMargin(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class MapGesture {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapGesture>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.mapping.MapGesture interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addOnGestureListener(param0: com.here.android.mpa.mapping.MapGesture.OnGestureListener): void;
							removeOnGestureListener(param0: com.here.android.mpa.mapping.MapGesture.OnGestureListener): void;
							setPanningEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isPanningEnabled(): boolean;
							setKineticFlickEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isKineticFlickEnabled(): boolean;
							setPinchEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isPinchEnabled(): boolean;
							setRotateEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isRotateEnabled(): boolean;
							setAutoSnapToNorthEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isAutoSnapToNorthEnabled(): boolean;
							setTiltEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isTiltEnabled(): boolean;
							setSingleTapEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isSingleTapEnabled(): boolean;
							setDoubleTapEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isDoubleTapEnabled(): boolean;
							setLongPressEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isLongPressEnabled(): boolean;
							setTwoFingerTapEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isTwoFingerTapEnabled(): boolean;
							setAllGesturesEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							setTwoFingerPanningEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isTwoFingerPanningEnabled(): boolean;
							setFixedMapCenterOnMapRotateZoom(param0: boolean): com.here.android.mpa.mapping.MapGesture;
							isFixedMapCenterOnMapRotateZoom(): boolean;
							cancelKineticPanning(): void;
						});
						public constructor();
						public cancelKineticPanning(): void;
						public removeOnGestureListener(param0: com.here.android.mpa.mapping.MapGesture.OnGestureListener): void;
						public isTiltEnabled(): boolean;
						public isSingleTapEnabled(): boolean;
						public isPinchEnabled(): boolean;
						public isLongPressEnabled(): boolean;
						public isAutoSnapToNorthEnabled(): boolean;
						public setDoubleTapEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public setKineticFlickEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public setPinchEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public setLongPressEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isKineticFlickEnabled(): boolean;
						public setTwoFingerPanningEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public setRotateEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public setTwoFingerTapEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isPanningEnabled(): boolean;
						public isFixedMapCenterOnMapRotateZoom(): boolean;
						public addOnGestureListener(param0: com.here.android.mpa.mapping.MapGesture.OnGestureListener): void;
						public setPanningEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isRotateEnabled(): boolean;
						public setAllGesturesEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isTwoFingerPanningEnabled(): boolean;
						public setFixedMapCenterOnMapRotateZoom(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public setAutoSnapToNorthEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isDoubleTapEnabled(): boolean;
						public setSingleTapEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
						public isTwoFingerTapEnabled(): boolean;
						public setTiltEnabled(param0: boolean): com.here.android.mpa.mapping.MapGesture;
					}
					export module MapGesture {
						export class OnGestureListener {
							public static class: java.lang.Class<com.here.android.mpa.mapping.MapGesture.OnGestureListener>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.mapping.MapGesture$OnGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPanStart(): void;
								onPanEnd(): void;
								onMultiFingerManipulationStart(): void;
								onMultiFingerManipulationEnd(): void;
								onMapObjectsSelected(param0: java.util.List<com.here.android.mpa.common.ViewObject>): boolean;
								onTapEvent(param0: globalAndroid.graphics.PointF): boolean;
								onDoubleTapEvent(param0: globalAndroid.graphics.PointF): boolean;
								onPinchLocked(): void;
								onPinchZoomEvent(param0: number, param1: globalAndroid.graphics.PointF): boolean;
								onRotateLocked(): void;
								onRotateEvent(param0: number): boolean;
								onTiltEvent(param0: number): boolean;
								onLongPressEvent(param0: globalAndroid.graphics.PointF): boolean;
								onLongPressRelease(): void;
								onTwoFingerTapEvent(param0: globalAndroid.graphics.PointF): boolean;
							});
							public constructor();
							public onTwoFingerTapEvent(param0: globalAndroid.graphics.PointF): boolean;
							public onPinchZoomEvent(param0: number, param1: globalAndroid.graphics.PointF): boolean;
							public onLongPressEvent(param0: globalAndroid.graphics.PointF): boolean;
							public onMultiFingerManipulationStart(): void;
							public onRotateEvent(param0: number): boolean;
							public onPanEnd(): void;
							public onPinchLocked(): void;
							public onMapObjectsSelected(param0: java.util.List<com.here.android.mpa.common.ViewObject>): boolean;
							public onRotateLocked(): void;
							public onLongPressRelease(): void;
							public onTapEvent(param0: globalAndroid.graphics.PointF): boolean;
							public onTiltEvent(param0: number): boolean;
							public onDoubleTapEvent(param0: globalAndroid.graphics.PointF): boolean;
							public onMultiFingerManipulationEnd(): void;
							public onPanStart(): void;
						}
						export module OnGestureListener {
							export abstract class OnGestureListenerAdapter extends com.here.android.mpa.mapping.MapGesture.OnGestureListener {
								public static class: java.lang.Class<com.here.android.mpa.mapping.MapGesture.OnGestureListener.OnGestureListenerAdapter>;
								public onPanEnd(): void;
								public onMultiFingerManipulationEnd(): void;
								public onRotateLocked(): void;
								public onMultiFingerManipulationStart(): void;
								public constructor();
								public onPinchLocked(): void;
								public onTwoFingerTapEvent(param0: globalAndroid.graphics.PointF): boolean;
								public onTiltEvent(param0: number): boolean;
								public onPanStart(): void;
								public onDoubleTapEvent(param0: globalAndroid.graphics.PointF): boolean;
								public onMapObjectsSelected(param0: java.util.List<com.here.android.mpa.common.ViewObject>): boolean;
								public onRotateEvent(param0: number): boolean;
								public onTapEvent(param0: globalAndroid.graphics.PointF): boolean;
								public onLongPressRelease(): void;
								public onPinchZoomEvent(param0: number, param1: globalAndroid.graphics.PointF): boolean;
								public onLongPressEvent(param0: globalAndroid.graphics.PointF): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class MapMarker extends com.here.android.mpa.mapping.MapObject {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapMarker>;
						public getAnchorPoint(): globalAndroid.graphics.PointF;
						public constructor();
						public showInfoBubble(): void;
						public getCoordinate(): com.here.android.mpa.common.GeoCoordinate;
						public setAnchorPoint(param0: globalAndroid.graphics.PointF): com.here.android.mpa.mapping.MapMarker;
						public constructor(param0: com.here.android.mpa.common.GeoCoordinate, param1: com.here.android.mpa.common.Image);
						public setDescription(param0: string): com.here.android.mpa.mapping.MapMarker;
						public setDraggable(param0: boolean): com.here.android.mpa.mapping.MapMarker;
						public setTitle(param0: string): com.here.android.mpa.mapping.MapMarker;
						public hideInfoBubble(): void;
						public isInfoBubbleVisible(): boolean;
						public getTitle(): string;
						public constructor(param0: com.here.android.mpa.common.GeoCoordinate);
						public getIcon(): com.here.android.mpa.common.Image;
						public constructor(param0: number);
						public setCoordinate(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.mapping.MapMarker;
						public getInfoBubbleHashCode(): number;
						public getType(): com.here.android.mpa.mapping.MapObject.Type;
						public setIcon(param0: com.here.android.mpa.common.Image): com.here.android.mpa.mapping.MapMarker;
						public setTransparency(param0: number): boolean;
						public getDescription(): string;
						public isDraggable(): boolean;
						public getTransparency(): number;
					}
					export module MapMarker {
						export class OnDragListener {
							public static class: java.lang.Class<com.here.android.mpa.mapping.MapMarker.OnDragListener>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.mapping.MapMarker$OnDragListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMarkerDrag(param0: com.here.android.mpa.mapping.MapMarker): void;
								onMarkerDragEnd(param0: com.here.android.mpa.mapping.MapMarker): void;
								onMarkerDragStart(param0: com.here.android.mpa.mapping.MapMarker): void;
							});
							public constructor();
							public onMarkerDragStart(param0: com.here.android.mpa.mapping.MapMarker): void;
							public onMarkerDrag(param0: com.here.android.mpa.mapping.MapMarker): void;
							public onMarkerDragEnd(param0: com.here.android.mpa.mapping.MapMarker): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export abstract class MapObject extends com.here.android.mpa.common.ViewObject {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapObject>;
						public setVisible(param0: number, param1: boolean): com.here.android.mpa.mapping.MapObject;
						public setVisible(param0: number, param1: number, param2: boolean): com.here.android.mpa.mapping.MapObject;
						public getParent(): com.here.android.mpa.mapping.MapContainer;
						public getVisibleMask(): java.util.BitSet;
						public setVisibleMask(param0: number): com.here.android.mpa.mapping.MapObject;
						public unsetVisibleMask(param0: number, param1: number): com.here.android.mpa.mapping.MapObject;
						public setZIndex(param0: number): com.here.android.mpa.mapping.MapObject;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getBaseType(): com.here.android.mpa.common.ViewObject.Type;
						public unsetVisibleMask(param0: number): com.here.android.mpa.mapping.MapObject;
						public resetVisibleMask(param0: boolean): com.here.android.mpa.mapping.MapObject;
						public getZIndex(): number;
						public setVisibleMask(param0: number, param1: number): com.here.android.mpa.mapping.MapObject;
						public getType(): com.here.android.mpa.mapping.MapObject.Type;
						public isVisible(): boolean;
						public setVisible(param0: boolean): com.here.android.mpa.mapping.MapObject;
					}
					export module MapObject {
						export class Type {
							public static class: java.lang.Class<com.here.android.mpa.mapping.MapObject.Type>;
							public static UNKNOWN: com.here.android.mpa.mapping.MapObject.Type;
							public static MARKER: com.here.android.mpa.mapping.MapObject.Type;
							public static POLYGON: com.here.android.mpa.mapping.MapObject.Type;
							public static POLYLINE: com.here.android.mpa.mapping.MapObject.Type;
							public static ROUTE: com.here.android.mpa.mapping.MapObject.Type;
							public static CONTAINER: com.here.android.mpa.mapping.MapObject.Type;
							public static CIRCLE: com.here.android.mpa.mapping.MapObject.Type;
							public static values(): native.Array<com.here.android.mpa.mapping.MapObject.Type>;
							public static valueOf(param0: string): com.here.android.mpa.mapping.MapObject.Type;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class MapPolygon extends com.here.android.mpa.mapping.MapObject {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapPolygon>;
						public setVisible(param0: number, param1: boolean): com.here.android.mpa.mapping.MapObject;
						public constructor();
						public getFillColor(): number;
						public setVisible(param0: number, param1: number, param2: boolean): com.here.android.mpa.mapping.MapObject;
						public getLineColor(): number;
						public setGeoPolygon(param0: com.here.android.mpa.common.GeoPolygon): com.here.android.mpa.mapping.MapPolygon;
						public setLineWidth(param0: number): com.here.android.mpa.mapping.MapPolygon;
						public setFillColor(param0: number): com.here.android.mpa.mapping.MapPolygon;
						public constructor(param0: com.here.android.mpa.common.GeoPolygon);
						public getType(): com.here.android.mpa.mapping.MapObject.Type;
						public setVisible(param0: boolean): com.here.android.mpa.mapping.MapObject;
						public getLineWidth(): number;
						public setLineColor(param0: number): com.here.android.mpa.mapping.MapPolygon;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class MapPolyline extends com.here.android.mpa.mapping.MapObject {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapPolyline>;
						public constructor();
						public constructor(param0: com.here.android.mpa.common.GeoPolyline);
						public getType(): com.here.android.mpa.mapping.MapObject.Type;
						public setLineColor(param0: number): com.here.android.mpa.mapping.MapPolyline;
						public setLineWidth(param0: number): com.here.android.mpa.mapping.MapPolyline;
						public getLineColor(): number;
						public getLineWidth(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export abstract class MapRasterTileSource {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapRasterTileSource>;
						public getCacheExpiration(): number;
						public setZIndex(param0: number): com.here.android.mpa.mapping.MapRasterTileSource;
						public constructor();
						public isCachingEnabled(): boolean;
						public showAtZoomLevel(param0: number): com.here.android.mpa.mapping.MapRasterTileSource;
						public hideAtZoomRange(param0: number, param1: number): com.here.android.mpa.mapping.MapRasterTileSource;
						public showAtZoomRange(param0: number, param1: number): com.here.android.mpa.mapping.MapRasterTileSource;
						public getTileWithError(param0: number, param1: number, param2: number): com.here.android.mpa.mapping.MapRasterTileSource.TileResult;
						public getZIndex(): number;
						public hasTile(param0: number, param1: number, param2: number): boolean;
						public isShownAtZoomLevel(param0: number): boolean;
						public setCachePrefix(param0: string): com.here.android.mpa.mapping.MapRasterTileSource;
						public setBoundingArea(param0: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.mapping.MapRasterTileSource;
						public setCacheExpiration(param0: number): com.here.android.mpa.mapping.MapRasterTileSource;
						public getBoundingArea(): com.here.android.mpa.common.GeoBoundingBox;
						public setCachingEnabled(param0: boolean): com.here.android.mpa.mapping.MapRasterTileSource;
						public hideAtZoomLevel(param0: number): com.here.android.mpa.mapping.MapRasterTileSource;
					}
					export module MapRasterTileSource {
						export class MapTileSystemHelper {
							public static class: java.lang.Class<com.here.android.mpa.mapping.MapRasterTileSource.MapTileSystemHelper>;
							public constructor();
							public static tileXYToQuadKey(param0: number, param1: number, param2: number): string;
						}
						export class TileResult {
							public static class: java.lang.Class<com.here.android.mpa.mapping.MapRasterTileSource.TileResult>;
							public constructor(param0: com.here.android.mpa.mapping.MapRasterTileSource.TileResult.Error, param1: native.Array<number>);
							public getData(): native.Array<number>;
							public getError(): com.here.android.mpa.mapping.MapRasterTileSource.TileResult.Error;
						}
						export module TileResult {
							export class Error {
								public static class: java.lang.Class<com.here.android.mpa.mapping.MapRasterTileSource.TileResult.Error>;
								public static NONE: com.here.android.mpa.mapping.MapRasterTileSource.TileResult.Error;
								public static NOT_READY: com.here.android.mpa.mapping.MapRasterTileSource.TileResult.Error;
								public static NOT_FOUND: com.here.android.mpa.mapping.MapRasterTileSource.TileResult.Error;
								public static valueOf(param0: string): com.here.android.mpa.mapping.MapRasterTileSource.TileResult.Error;
								public static values(): native.Array<com.here.android.mpa.mapping.MapRasterTileSource.TileResult.Error>;
							}
						}
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.mapping.MapRasterTileSource.a>;
							public static a: com.here.android.mpa.mapping.MapRasterTileSource.a;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class MapRoute extends com.here.android.mpa.mapping.MapObject {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapRoute>;
						public getColor(): number;
						public constructor();
						public isManeuverNumberVisible(): boolean;
						public setRoute(param0: com.here.android.mpa.routing.Route): com.here.android.mpa.mapping.MapRoute;
						public getRenderType(): com.here.android.mpa.mapping.MapRoute.RenderType;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getRoute(): com.here.android.mpa.routing.Route;
						public setManeuverNumberVisible(param0: boolean): com.here.android.mpa.mapping.MapRoute;
						public setColor(param0: number): com.here.android.mpa.mapping.MapRoute;
						public getType(): com.here.android.mpa.mapping.MapObject.Type;
						public setRenderType(param0: com.here.android.mpa.mapping.MapRoute.RenderType): com.here.android.mpa.mapping.MapRoute;
						public constructor(param0: com.here.android.mpa.routing.Route);
					}
					export module MapRoute {
						export class RenderType {
							public static class: java.lang.Class<com.here.android.mpa.mapping.MapRoute.RenderType>;
							public static PRIMARY: com.here.android.mpa.mapping.MapRoute.RenderType;
							public static SECONDARY: com.here.android.mpa.mapping.MapRoute.RenderType;
							public static CUSTOM: com.here.android.mpa.mapping.MapRoute.RenderType;
							public static values(): native.Array<com.here.android.mpa.mapping.MapRoute.RenderType>;
							public static valueOf(param0: string): com.here.android.mpa.mapping.MapRoute.RenderType;
							public value(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class MapState {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapState>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.here.android.mpa.mapping.MapState>;
						public getCenter(): com.here.android.mpa.common.GeoCoordinate;
						public getZoomLevel(): number;
						public describeContents(): number;
						public getTilt(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: number, param1: number, param2: number, param3: com.here.android.mpa.common.GeoCoordinate);
						public getOrientation(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class MapView {
						public static class: java.lang.Class<com.here.android.mpa.mapping.MapView>;
						public static FIXED_LOWDPI_SIZE: number;
						public static FIXED_HIGHDPI_SIZE: number;
						public a: globalAndroid.widget.ImageView;
						public b: boolean;
						public static setTileResolution(param0: com.here.android.mpa.mapping.MapView.TileSize): void;
						public constructor(param0: globalAndroid.content.Context);
						public setCopyrightMargin(param0: number): void;
						public getMapGesture(): com.here.android.mpa.mapping.MapGesture;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public onPause(): void;
						public dispatchSaveInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
						public setCopyrightBoundaryRect(param0: globalAndroid.graphics.Rect): void;
						public getCopyrightBoundaryRect(): globalAndroid.graphics.Rect;
						public getCopyrightLogoWidth(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getCopyrightMargin(): number;
						public addOnMapRenderListener(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public getCopyrightLogoVisibility(): number;
						public setCopyrightLogoPosition(param0: com.here.android.mpa.common.CopyrightLogoPosition): void;
						public dispatchRestoreInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
						public onResume(): void;
						public setMap(param0: com.here.android.mpa.mapping.Map): void;
						public getMap(): com.here.android.mpa.mapping.Map;
						public removeOnMapRenderListener(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public getCopyrightLogoPosition(): com.here.android.mpa.common.CopyrightLogoPosition;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public setMapMarkerDragListener(param0: com.here.android.mpa.mapping.MapMarker.OnDragListener): void;
						public getCopyrightLogoHeight(): number;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					}
					export module MapView {
						export class TileSize {
							public static class: java.lang.Class<com.here.android.mpa.mapping.MapView.TileSize>;
							public static LOW_DPI_256_TILE: com.here.android.mpa.mapping.MapView.TileSize;
							public static HIGH_DPI_512_TILE: com.here.android.mpa.mapping.MapView.TileSize;
							public static values(): native.Array<com.here.android.mpa.mapping.MapView.TileSize>;
							public static valueOf(param0: string): com.here.android.mpa.mapping.MapView.TileSize;
						}
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.mapping.MapView.a>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class OnMapRenderListener {
						public static class: java.lang.Class<com.here.android.mpa.mapping.OnMapRenderListener>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.mapping.OnMapRenderListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPreDraw(): void;
							onPostDraw(param0: boolean, param1: number): void;
							onSizeChanged(param0: number, param1: number): void;
							onGraphicsDetached(): void;
							onRenderBufferCreated(): void;
						});
						public constructor();
						public onPreDraw(): void;
						public onGraphicsDetached(): void;
						public onPostDraw(param0: boolean, param1: number): void;
						public onRenderBufferCreated(): void;
						public onSizeChanged(param0: number, param1: number): void;
					}
					export module OnMapRenderListener {
						export abstract class OnMapRenderListenerAdapter extends com.here.android.mpa.mapping.OnMapRenderListener {
							public static class: java.lang.Class<com.here.android.mpa.mapping.OnMapRenderListener.OnMapRenderListenerAdapter>;
							public constructor();
							public onSizeChanged(param0: number, param1: number): void;
							public onRenderBufferCreated(): void;
							public onPreDraw(): void;
							public onPostDraw(param0: boolean, param1: number): void;
							public onGraphicsDetached(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class PositionIndicator {
						public static class: java.lang.Class<com.here.android.mpa.mapping.PositionIndicator>;
						public setVisible(param0: boolean): com.here.android.mpa.mapping.PositionIndicator;
						public isVisible(): boolean;
						public setMarker(param0: com.here.android.mpa.common.Image): com.here.android.mpa.mapping.PositionIndicator;
						public getMarker(): com.here.android.mpa.common.Image;
						public setZIndex(param0: number): com.here.android.mpa.mapping.PositionIndicator;
						public getZIndex(): number;
						public isAccuracyIndicatorVisible(): boolean;
						public setAccuracyIndicatorVisible(param0: boolean): com.here.android.mpa.mapping.PositionIndicator;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export class SupportMapFragment {
						public static class: java.lang.Class<com.here.android.mpa.mapping.SupportMapFragment>;
						public addOnMapRenderListener(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public setOnTouchListener(param0: globalAndroid.view.View.OnTouchListener): void;
						public constructor();
						public init(param0: com.here.android.mpa.common.OnEngineInitListener): void;
						public setCopyrightLogoPosition(param0: com.here.android.mpa.common.CopyrightLogoPosition): void;
						public onResume(): void;
						public setCopyrightMargin(param0: number): void;
						public getMapGesture(): com.here.android.mpa.mapping.MapGesture;
						public onInflate(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						public onPause(): void;
						public getMap(): com.here.android.mpa.mapping.Map;
						public removeOnMapRenderListener(param0: com.here.android.mpa.mapping.OnMapRenderListener): void;
						public onDestroyView(): void;
						public init(param0: globalAndroid.content.Context, param1: com.here.android.mpa.common.OnEngineInitListener): void;
						public setCopyrightBoundaryRect(param0: globalAndroid.graphics.Rect): void;
						public getCopyrightLogoPosition(): com.here.android.mpa.common.CopyrightLogoPosition;
						public getCopyrightBoundaryRect(): globalAndroid.graphics.Rect;
						public setMapMarkerDragListener(param0: com.here.android.mpa.mapping.MapMarker.OnDragListener): void;
						public getCopyrightLogoWidth(): number;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public getCopyrightLogoHeight(): number;
						public getCopyrightMargin(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module mapping {
					export abstract class UrlMapRasterTileSourceBase extends com.here.android.mpa.mapping.MapRasterTileSource {
						public static class: java.lang.Class<com.here.android.mpa.mapping.UrlMapRasterTileSourceBase>;
						public constructor();
						public getUrl(param0: number, param1: number, param2: number): string;
						public getTileWithError(param0: number, param1: number, param2: number): com.here.android.mpa.mapping.MapRasterTileSource.TileResult;
						public hasTile(param0: number, param1: number, param2: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class Maneuver {
						public static class: java.lang.Class<com.here.android.mpa.routing.Maneuver>;
						public getRoadElements(): java.util.List<com.here.android.mpa.common.RoadElement>;
						public getCoordinate(): com.here.android.mpa.common.GeoCoordinate;
						public getDistanceToNextManeuver(): number;
						public getAction(): com.here.android.mpa.routing.Maneuver.Action;
						public getRoadName(): string;
						public getMapOrientation(): number;
						public getNextRoadNumber(): string;
						public getDistanceFromStart(): number;
						public getRouteElements(): java.util.List<com.here.android.mpa.routing.RouteElement>;
						public getTransportMode(): com.here.android.mpa.routing.RouteOptions.TransportMode;
						public getTrafficDirection(): com.here.android.mpa.routing.Maneuver.TrafficDirection;
						public getTurn(): com.here.android.mpa.routing.Maneuver.Turn;
						public getDistanceFromPreviousManeuver(): number;
						public getIcon(): com.here.android.mpa.routing.Maneuver.Icon;
						public getNextRoadName(): string;
						public getRoadNumber(): string;
						public getAngle(): number;
						public getStartTime(): java.util.Date;
						public getBoundingBox(): com.here.android.mpa.common.GeoBoundingBox;
						public getManeuverGeometry(): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public getSignpost(): com.here.android.mpa.routing.Signpost;
					}
					export module Maneuver {
						export class Action {
							public static class: java.lang.Class<com.here.android.mpa.routing.Maneuver.Action>;
							public static UNDEFINED: com.here.android.mpa.routing.Maneuver.Action;
							public static NO_ACTION: com.here.android.mpa.routing.Maneuver.Action;
							public static END: com.here.android.mpa.routing.Maneuver.Action;
							public static STOPOVER: com.here.android.mpa.routing.Maneuver.Action;
							public static JUNCTION: com.here.android.mpa.routing.Maneuver.Action;
							public static ROUNDABOUT: com.here.android.mpa.routing.Maneuver.Action;
							public static UTURN: com.here.android.mpa.routing.Maneuver.Action;
							public static ENTER_HIGHWAY_FROM_RIGHT: com.here.android.mpa.routing.Maneuver.Action;
							public static ENTER_HIGHWAY_FROM_LEFT: com.here.android.mpa.routing.Maneuver.Action;
							public static ENTER_HIGHWAY: com.here.android.mpa.routing.Maneuver.Action;
							public static LEAVE_HIGHWAY: com.here.android.mpa.routing.Maneuver.Action;
							public static CHANGE_HIGHWAY: com.here.android.mpa.routing.Maneuver.Action;
							public static CONTINUE_HIGHWAY: com.here.android.mpa.routing.Maneuver.Action;
							public static FERRY: com.here.android.mpa.routing.Maneuver.Action;
							public static PASS_JUNCTION: com.here.android.mpa.routing.Maneuver.Action;
							public static INVALID: com.here.android.mpa.routing.Maneuver.Action;
							public static values(): native.Array<com.here.android.mpa.routing.Maneuver.Action>;
							public static valueOf(param0: string): com.here.android.mpa.routing.Maneuver.Action;
						}
						export class Icon {
							public static class: java.lang.Class<com.here.android.mpa.routing.Maneuver.Icon>;
							public static UNDEFINED: com.here.android.mpa.routing.Maneuver.Icon;
							public static GO_STRAIGHT: com.here.android.mpa.routing.Maneuver.Icon;
							public static UTURN_RIGHT: com.here.android.mpa.routing.Maneuver.Icon;
							public static UTURN_LEFT: com.here.android.mpa.routing.Maneuver.Icon;
							public static KEEP_RIGHT: com.here.android.mpa.routing.Maneuver.Icon;
							public static LIGHT_RIGHT: com.here.android.mpa.routing.Maneuver.Icon;
							public static QUITE_RIGHT: com.here.android.mpa.routing.Maneuver.Icon;
							public static HEAVY_RIGHT: com.here.android.mpa.routing.Maneuver.Icon;
							public static KEEP_MIDDLE: com.here.android.mpa.routing.Maneuver.Icon;
							public static KEEP_LEFT: com.here.android.mpa.routing.Maneuver.Icon;
							public static LIGHT_LEFT: com.here.android.mpa.routing.Maneuver.Icon;
							public static QUITE_LEFT: com.here.android.mpa.routing.Maneuver.Icon;
							public static HEAVY_LEFT: com.here.android.mpa.routing.Maneuver.Icon;
							public static ENTER_HIGHWAY_RIGHT_LANE: com.here.android.mpa.routing.Maneuver.Icon;
							public static ENTER_HIGHWAY_LEFT_LANE: com.here.android.mpa.routing.Maneuver.Icon;
							public static LEAVE_HIGHWAY_RIGHT_LANE: com.here.android.mpa.routing.Maneuver.Icon;
							public static LEAVE_HIGHWAY_LEFT_LANE: com.here.android.mpa.routing.Maneuver.Icon;
							public static HIGHWAY_KEEP_RIGHT: com.here.android.mpa.routing.Maneuver.Icon;
							public static HIGHWAY_KEEP_LEFT: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_1: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_2: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_3: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_4: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_5: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_6: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_7: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_8: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_9: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_10: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_11: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_12: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_1_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_2_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_3_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_4_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_5_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_6_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_7_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_8_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_9_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_10_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_11_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static ROUNDABOUT_12_LH: com.here.android.mpa.routing.Maneuver.Icon;
							public static START: com.here.android.mpa.routing.Maneuver.Icon;
							public static END: com.here.android.mpa.routing.Maneuver.Icon;
							public static FERRY: com.here.android.mpa.routing.Maneuver.Icon;
							public static values(): native.Array<com.here.android.mpa.routing.Maneuver.Icon>;
							public static valueOf(param0: string): com.here.android.mpa.routing.Maneuver.Icon;
						}
						export class TrafficDirection {
							public static class: java.lang.Class<com.here.android.mpa.routing.Maneuver.TrafficDirection>;
							public static LEFT: com.here.android.mpa.routing.Maneuver.TrafficDirection;
							public static RIGHT: com.here.android.mpa.routing.Maneuver.TrafficDirection;
							public static values(): native.Array<com.here.android.mpa.routing.Maneuver.TrafficDirection>;
							public static valueOf(param0: string): com.here.android.mpa.routing.Maneuver.TrafficDirection;
						}
						export class Turn {
							public static class: java.lang.Class<com.here.android.mpa.routing.Maneuver.Turn>;
							public static UNDEFINED: com.here.android.mpa.routing.Maneuver.Turn;
							public static NO_TURN: com.here.android.mpa.routing.Maneuver.Turn;
							public static KEEP_MIDDLE: com.here.android.mpa.routing.Maneuver.Turn;
							public static KEEP_RIGHT: com.here.android.mpa.routing.Maneuver.Turn;
							public static LIGHT_RIGHT: com.here.android.mpa.routing.Maneuver.Turn;
							public static QUITE_RIGHT: com.here.android.mpa.routing.Maneuver.Turn;
							public static HEAVY_RIGHT: com.here.android.mpa.routing.Maneuver.Turn;
							public static KEEP_LEFT: com.here.android.mpa.routing.Maneuver.Turn;
							public static LIGHT_LEFT: com.here.android.mpa.routing.Maneuver.Turn;
							public static QUITE_LEFT: com.here.android.mpa.routing.Maneuver.Turn;
							public static HEAVY_LEFT: com.here.android.mpa.routing.Maneuver.Turn;
							public static RETURN: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_1: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_2: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_3: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_4: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_5: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_6: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_7: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_8: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_9: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_10: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_11: com.here.android.mpa.routing.Maneuver.Turn;
							public static ROUNDABOUT_12: com.here.android.mpa.routing.Maneuver.Turn;
							public static values(): native.Array<com.here.android.mpa.routing.Maneuver.Turn>;
							public static valueOf(param0: string): com.here.android.mpa.routing.Maneuver.Turn;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class Route {
						public static class: java.lang.Class<com.here.android.mpa.routing.Route>;
						public static WHOLE_ROUTE: number;
						public getRouteElementsFromLength(param0: number): com.here.android.mpa.routing.RouteElements;
						public getStart(): com.here.android.mpa.common.GeoCoordinate;
						public getRoutePlan(): com.here.android.mpa.routing.RoutePlan;
						public getSublegCount(): number;
						public getDestination(): com.here.android.mpa.common.GeoCoordinate;
						public getRouteElements(param0: com.here.android.mpa.routing.Maneuver): com.here.android.mpa.routing.RouteElements;
						public getLength(): number;
						public getManeuvers(): java.util.List<com.here.android.mpa.routing.Maneuver>;
						public getRouteGeometry(): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public getRouteElementsFromDuration(param0: number): com.here.android.mpa.routing.RouteElements;
						public getTta(param0: com.here.android.mpa.routing.Route.TrafficPenaltyMode, param1: number): com.here.android.mpa.routing.RouteTta;
						public getRouteElementsFromDuration(param0: number, param1: number): com.here.android.mpa.routing.RouteElements;
						public getRouteElements(): com.here.android.mpa.routing.RouteElements;
						public getWaypoints(): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public getBoundingBox(): com.here.android.mpa.common.GeoBoundingBox;
						public getRouteElementsFromLength(param0: number, param1: number): com.here.android.mpa.routing.RouteElements;
						public getFirstManeuver(): com.here.android.mpa.routing.Maneuver;
					}
					export module Route {
						export class TrafficPenaltyMode {
							public static class: java.lang.Class<com.here.android.mpa.routing.Route.TrafficPenaltyMode>;
							public static DISABLED: com.here.android.mpa.routing.Route.TrafficPenaltyMode;
							public static OPTIMAL: com.here.android.mpa.routing.Route.TrafficPenaltyMode;
							public static AVOID_CONGESTION: com.here.android.mpa.routing.Route.TrafficPenaltyMode;
							public static values(): native.Array<com.here.android.mpa.routing.Route.TrafficPenaltyMode>;
							public static valueOf(param0: string): com.here.android.mpa.routing.Route.TrafficPenaltyMode;
						}
						export class a extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Integer,java.lang.Void> {
							public static class: java.lang.Class<com.here.android.mpa.routing.Route.a>;
							public a(param0: native.Array<java.lang.Void>): java.lang.Void;
							public a(param0: native.Array<java.lang.Integer>): void;
							public a(param0: java.lang.Void): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class RouteElement {
						public static class: java.lang.Class<com.here.android.mpa.routing.RouteElement>;
						public getRoadElement(): com.here.android.mpa.common.RoadElement;
						public getGeometry(): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public getType(): com.here.android.mpa.routing.RouteElement.Type;
					}
					export module RouteElement {
						export class Type {
							public static class: java.lang.Class<com.here.android.mpa.routing.RouteElement.Type>;
							public static ROAD: com.here.android.mpa.routing.RouteElement.Type;
							public static INVALID: com.here.android.mpa.routing.RouteElement.Type;
							public static values(): native.Array<com.here.android.mpa.routing.RouteElement.Type>;
							public static valueOf(param0: string): com.here.android.mpa.routing.RouteElement.Type;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class RouteElements {
						public static class: java.lang.Class<com.here.android.mpa.routing.RouteElements>;
						public getGeometry(): com.here.android.mpa.common.GeoPolyline;
						public getElements(): java.util.List<com.here.android.mpa.routing.RouteElement>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class RouteManager {
						public static class: java.lang.Class<com.here.android.mpa.routing.RouteManager>;
						public constructor();
						public cancel(): void;
						public isBusy(): boolean;
						public calculateRoute(param0: com.here.android.mpa.routing.RoutePlan, param1: com.here.android.mpa.routing.RouteManager.Listener): com.here.android.mpa.routing.RouteManager.Error;
					}
					export module RouteManager {
						export class Error {
							public static class: java.lang.Class<com.here.android.mpa.routing.RouteManager.Error>;
							public static NONE: com.here.android.mpa.routing.RouteManager.Error;
							public static UNKNOWN: com.here.android.mpa.routing.RouteManager.Error;
							public static OUT_OF_MEMORY: com.here.android.mpa.routing.RouteManager.Error;
							public static INVALID_PARAMETERS: com.here.android.mpa.routing.RouteManager.Error;
							public static INVALID_OPERATION: com.here.android.mpa.routing.RouteManager.Error;
							public static GRAPH_DISCONNECTED: com.here.android.mpa.routing.RouteManager.Error;
							public static GRAPH_DISCONNECTED_CHECK_OPTIONS: com.here.android.mpa.routing.RouteManager.Error;
							public static NO_START_POINT: com.here.android.mpa.routing.RouteManager.Error;
							public static NO_END_POINT: com.here.android.mpa.routing.RouteManager.Error;
							public static NO_END_POINT_CHECK_OPTIONS: com.here.android.mpa.routing.RouteManager.Error;
							public static CANNOT_DO_PEDESTRIAN: com.here.android.mpa.routing.RouteManager.Error;
							public static ROUTING_CANCELLED: com.here.android.mpa.routing.RouteManager.Error;
							public static VIOLATES_OPTIONS: com.here.android.mpa.routing.RouteManager.Error;
							public static ROUTE_CORRUPTED: com.here.android.mpa.routing.RouteManager.Error;
							public static INVALID_CREDENTIALS: com.here.android.mpa.routing.RouteManager.Error;
							public static REQUEST_TIMEOUT: com.here.android.mpa.routing.RouteManager.Error;
							public static OPERATION_NOT_ALLOWED: com.here.android.mpa.routing.RouteManager.Error;
							public static NO_CONNECTIVITY: com.here.android.mpa.routing.RouteManager.Error;
							public static values(): native.Array<com.here.android.mpa.routing.RouteManager.Error>;
							public static valueOf(param0: string): com.here.android.mpa.routing.RouteManager.Error;
						}
						export class Listener {
							public static class: java.lang.Class<com.here.android.mpa.routing.RouteManager.Listener>;
							/**
							 * Constructs a new instance of the com.here.android.mpa.routing.RouteManager$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onProgress(param0: number): void;
								onCalculateRouteFinished(param0: com.here.android.mpa.routing.RouteManager.Error, param1: java.util.List<com.here.android.mpa.routing.RouteResult>): void;
							});
							public constructor();
							public onProgress(param0: number): void;
							public onCalculateRouteFinished(param0: com.here.android.mpa.routing.RouteManager.Error, param1: java.util.List<com.here.android.mpa.routing.RouteResult>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class RouteOptions {
						public static class: java.lang.Class<com.here.android.mpa.routing.RouteOptions>;
						public setTunnelsAllowed(param0: boolean): com.here.android.mpa.routing.RouteOptions;
						public setRouteCount(param0: number): com.here.android.mpa.routing.RouteOptions;
						public areDirtRoadsAllowed(): boolean;
						public getTime(param0: java.util.Date): com.here.android.mpa.routing.RouteOptions.TimeType;
						public setCarShuttleTrainsAllowed(param0: boolean): com.here.android.mpa.routing.RouteOptions;
						public getTransportMode(): com.here.android.mpa.routing.RouteOptions.TransportMode;
						public isCarpoolAllowed(): boolean;
						public areFerriesAllowed(): boolean;
						public getRouteCount(): number;
						public setRouteType(param0: com.here.android.mpa.routing.RouteOptions.Type): com.here.android.mpa.routing.RouteOptions;
						public areHighwaysAllowed(): boolean;
						public setDirtRoadsAllowed(param0: boolean): com.here.android.mpa.routing.RouteOptions;
						public setParksAllowed(param0: boolean): com.here.android.mpa.routing.RouteOptions;
						public setHighwaysAllowed(param0: boolean): com.here.android.mpa.routing.RouteOptions;
						public setTime(param0: java.util.Date, param1: com.here.android.mpa.routing.RouteOptions.TimeType): com.here.android.mpa.routing.RouteOptions;
						public constructor();
						public getStartDirection(): number;
						public setFerriesAllowed(param0: boolean): com.here.android.mpa.routing.RouteOptions;
						public getRouteType(): com.here.android.mpa.routing.RouteOptions.Type;
						public areTunnelsAllowed(): boolean;
						public setStartDirection(param0: number): com.here.android.mpa.routing.RouteOptions;
						public setTransportMode(param0: com.here.android.mpa.routing.RouteOptions.TransportMode): com.here.android.mpa.routing.RouteOptions;
						public areTollRoadsAllowed(): boolean;
						public setTollRoadsAllowed(param0: boolean): com.here.android.mpa.routing.RouteOptions;
						public areParksAllowed(): boolean;
						public setCarpoolAllowed(param0: boolean): com.here.android.mpa.routing.RouteOptions;
						public areCarShuttleTrainsAllowed(): boolean;
					}
					export module RouteOptions {
						export class TimeType {
							public static class: java.lang.Class<com.here.android.mpa.routing.RouteOptions.TimeType>;
							public static DEPARTURE: com.here.android.mpa.routing.RouteOptions.TimeType;
							public static ARRIVAL: com.here.android.mpa.routing.RouteOptions.TimeType;
							public static values(): native.Array<com.here.android.mpa.routing.RouteOptions.TimeType>;
							public static valueOf(param0: string): com.here.android.mpa.routing.RouteOptions.TimeType;
						}
						export class TransportMode {
							public static class: java.lang.Class<com.here.android.mpa.routing.RouteOptions.TransportMode>;
							public static CAR: com.here.android.mpa.routing.RouteOptions.TransportMode;
							public static PEDESTRIAN: com.here.android.mpa.routing.RouteOptions.TransportMode;
							public static UNDEFINED: com.here.android.mpa.routing.RouteOptions.TransportMode;
							public static valueOf(param0: string): com.here.android.mpa.routing.RouteOptions.TransportMode;
							public static values(): native.Array<com.here.android.mpa.routing.RouteOptions.TransportMode>;
						}
						export class Type {
							public static class: java.lang.Class<com.here.android.mpa.routing.RouteOptions.Type>;
							public static FASTEST: com.here.android.mpa.routing.RouteOptions.Type;
							public static SHORTEST: com.here.android.mpa.routing.RouteOptions.Type;
							public static valueOf(param0: string): com.here.android.mpa.routing.RouteOptions.Type;
							public static values(): native.Array<com.here.android.mpa.routing.RouteOptions.Type>;
						}
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.routing.RouteOptions.a>;
							public a: java.util.Date;
							public b: com.here.android.mpa.routing.RouteOptions.TimeType;
							public constructor(param0: java.util.Date, param1: com.here.android.mpa.routing.RouteOptions.TimeType);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class RoutePlan {
						public static class: java.lang.Class<com.here.android.mpa.routing.RoutePlan>;
						public addWaypoint(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.routing.RoutePlan;
						public insertWaypoint(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): com.here.android.mpa.routing.RoutePlan;
						public constructor();
						public getWaypointCount(): number;
						public removeWaypoint(param0: number): com.here.android.mpa.routing.RoutePlan;
						public setRouteOptions(param0: com.here.android.mpa.routing.RouteOptions): com.here.android.mpa.routing.RoutePlan;
						public getRouteOptions(): com.here.android.mpa.routing.RouteOptions;
						public getWaypointAt(param0: number): com.here.android.mpa.common.GeoCoordinate;
						public removeAllWaypoints(): com.here.android.mpa.routing.RoutePlan;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class RouteResult {
						public static class: java.lang.Class<com.here.android.mpa.routing.RouteResult>;
						public getViolatedOptions(): java.util.EnumSet<com.here.android.mpa.routing.RouteResult.ViolatedOption>;
						public getRoute(): com.here.android.mpa.routing.Route;
					}
					export module RouteResult {
						export class ViolatedOption {
							public static class: java.lang.Class<com.here.android.mpa.routing.RouteResult.ViolatedOption>;
							public static AVOID_HIGHWAYS: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static AVOID_TOLL_ROADS: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static AVOID_FERRIES: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static AVOID_TUNNELS: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static AVOID_DIRT_ROADS: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static AVOID_CAR_SHUTTLE_TRAINS: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static AVOID_PARKS: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static BLOCKED_ROADS: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static START_DIRECTION: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static CARPOOL: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static TIME_RESTRICTED_TURN: com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static valueOf(param0: string): com.here.android.mpa.routing.RouteResult.ViolatedOption;
							public static values(): native.Array<com.here.android.mpa.routing.RouteResult.ViolatedOption>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class RouteTta {
						public static class: java.lang.Class<com.here.android.mpa.routing.RouteTta>;
						public isBlocked(): boolean;
						public getDuration(): number;
						public getDetails(): java.util.EnumSet<com.here.android.mpa.routing.RouteTta.Detail>;
						public isValid(): boolean;
					}
					export module RouteTta {
						export class Detail {
							public static class: java.lang.Class<com.here.android.mpa.routing.RouteTta.Detail>;
							public static BLOCKED_ROAD: com.here.android.mpa.routing.RouteTta.Detail;
							public static CARPOOL: com.here.android.mpa.routing.RouteTta.Detail;
							public static RESTRICTED_TURN: com.here.android.mpa.routing.RouteTta.Detail;
							public static valueOf(param0: string): com.here.android.mpa.routing.RouteTta.Detail;
							public static values(): native.Array<com.here.android.mpa.routing.RouteTta.Detail>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class Signpost {
						public static class: java.lang.Class<com.here.android.mpa.routing.Signpost>;
						public getExitText(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class a extends com.here.android.mpa.internal.cd<java.lang.Void,string> {
						public static class: java.lang.Class<com.here.android.mpa.routing.a>;
						public a(param0: string, param1: java.util.HashMap<string,string>): com.here.android.mpa.internal.ce<any>;
						public a(param0: com.here.android.mpa.internal.ce<any>): void;
						public a(param0: string, param1: string): void;
						public b(param0: string): void;
						public a(param0: java.lang.Exception): void;
						public a(param0: com.here.android.mpa.internal.cd.a): void;
						public a(param0: string, param1: string, param2: com.here.android.mpa.routing.RoutePlan, param3: java.util.Map<string,string>): string;
						public a(param0: com.here.android.mpa.search.ErrorCode): com.here.android.mpa.routing.RouteManager.Error;
						public b(param0: native.Array<number>): com.here.android.mpa.internal.cd.a;
						public a(param0: com.here.android.mpa.internal.ce<any>, param1: string, param2: java.util.HashMap<string,string>): void;
						public a(param0: string): void;
						public a(param0: any): void;
						public a(param0: native.Array<number>): string;
						public a(param0: native.Array<string>): com.here.android.mpa.internal.ce<any>;
						public a(): boolean;
						public a(param0: com.here.android.mpa.routing.RoutePlan, param1: com.here.android.mpa.routing.RouteManager.Listener): com.here.android.mpa.routing.RouteManager.Error;
					}
					export module a {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.routing.a.a>;
							public static b: com.here.android.mpa.routing.a.a;
							public a(): string;
						}
						export class b {
							public static class: java.lang.Class<com.here.android.mpa.routing.a.b>;
							public static b: com.here.android.mpa.routing.a.b;
							public static c: com.here.android.mpa.routing.a.b;
							public static d: com.here.android.mpa.routing.a.b;
							public static e: com.here.android.mpa.routing.a.b;
							public static f: com.here.android.mpa.routing.a.b;
							public static g: com.here.android.mpa.routing.a.b;
							public static h: com.here.android.mpa.routing.a.b;
							public static i: com.here.android.mpa.routing.a.b;
							public static j: com.here.android.mpa.routing.a.b;
							public static k: com.here.android.mpa.routing.a.b;
							public a(): string;
						}
						export class c {
							public static class: java.lang.Class<com.here.android.mpa.routing.a.c>;
							public static b: com.here.android.mpa.routing.a.c;
							public static c: com.here.android.mpa.routing.a.c;
							public static d: com.here.android.mpa.routing.a.c;
							public static e: com.here.android.mpa.routing.a.c;
							public a(): string;
						}
						export class d {
							public static class: java.lang.Class<com.here.android.mpa.routing.a.d>;
							public static b: com.here.android.mpa.routing.a.d;
							public static c: com.here.android.mpa.routing.a.d;
							public static d: com.here.android.mpa.routing.a.d;
							public static e: com.here.android.mpa.routing.a.d;
							public a(): string;
						}
						export class e {
							public static class: java.lang.Class<com.here.android.mpa.routing.a.e>;
							public static b: com.here.android.mpa.routing.a.e;
							public a(): string;
						}
						export class f {
							public static class: java.lang.Class<com.here.android.mpa.routing.a.f>;
							public static b: com.here.android.mpa.routing.a.f;
							public static c: com.here.android.mpa.routing.a.f;
							public static d: com.here.android.mpa.routing.a.f;
							public a(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class b {
						public static class: java.lang.Class<com.here.android.mpa.routing.b>;
						public static b(param0: java.util.List<java.lang.Double>): java.util.List<com.here.android.mpa.common.GeoCoordinate>;
						public static a(param0: com.here.android.mpa.internal.restrouting.Link, param1: com.here.android.mpa.internal.restrouting.Link): number;
					}
					export module b {
						export class a {
							public static class: java.lang.Class<com.here.android.mpa.routing.b.a>;
							public static a: com.here.android.mpa.routing.b.a;
							public static b: com.here.android.mpa.routing.b.a;
							public static c: com.here.android.mpa.routing.b.a;
							public static d: com.here.android.mpa.routing.b.a;
							public static e: com.here.android.mpa.routing.b.a;
							public static f: com.here.android.mpa.routing.b.a;
							public static g: com.here.android.mpa.routing.b.a;
							public static h: com.here.android.mpa.routing.b.a;
							public static i: com.here.android.mpa.routing.b.a;
							public static j: com.here.android.mpa.routing.b.a;
							public static k: com.here.android.mpa.routing.b.a;
							public static l: com.here.android.mpa.routing.b.a;
							public static m: com.here.android.mpa.routing.b.a;
							public static n: com.here.android.mpa.routing.b.a;
							public static o: com.here.android.mpa.routing.b.a;
							public static p: com.here.android.mpa.routing.b.a;
							public static q: com.here.android.mpa.routing.b.a;
							public static r: com.here.android.mpa.routing.b.a;
							public static s: com.here.android.mpa.routing.b.a;
							public static t: com.here.android.mpa.routing.b.a;
							public static u: com.here.android.mpa.routing.b.a;
							public static v: com.here.android.mpa.routing.b.a;
							public static w: com.here.android.mpa.routing.b.a;
							public static x: com.here.android.mpa.routing.b.a;
							public static y: com.here.android.mpa.routing.b.a;
							public static z: com.here.android.mpa.routing.b.a;
							public static A: com.here.android.mpa.routing.b.a;
							public static B: com.here.android.mpa.routing.b.a;
							public static C: com.here.android.mpa.routing.b.a;
							public static D: com.here.android.mpa.routing.b.a;
							public static E: com.here.android.mpa.routing.b.a;
							public static F: com.here.android.mpa.routing.b.a;
							public static G: com.here.android.mpa.routing.b.a;
							public static H: com.here.android.mpa.routing.b.a;
							public static I: com.here.android.mpa.routing.b.a;
							public static J: com.here.android.mpa.routing.b.a;
							public static K: com.here.android.mpa.routing.b.a;
							public static L: com.here.android.mpa.routing.b.a;
							public static M: com.here.android.mpa.routing.b.a;
							public static N: com.here.android.mpa.routing.b.a;
							public static O: com.here.android.mpa.routing.b.a;
							public static P: com.here.android.mpa.routing.b.a;
							public static Q: com.here.android.mpa.routing.b.a;
							public static R: com.here.android.mpa.routing.b.a;
							public static S: com.here.android.mpa.routing.b.a;
							public static T: com.here.android.mpa.routing.b.a;
							public static U: com.here.android.mpa.routing.b.a;
							public static V: com.here.android.mpa.routing.b.a;
							public static W: com.here.android.mpa.routing.b.a;
							public static X: com.here.android.mpa.routing.b.a;
							public static Y: com.here.android.mpa.routing.b.a;
							public static Z: com.here.android.mpa.routing.b.a;
							public static aa: com.here.android.mpa.routing.b.a;
							public static ab: com.here.android.mpa.routing.b.a;
							public static ac: com.here.android.mpa.routing.b.a;
							public static ad: com.here.android.mpa.routing.b.a;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module routing {
					export class c {
						public static class: java.lang.Class<com.here.android.mpa.routing.c>;
						public a(param0: string, param1: java.lang.Class): any;
						public static a(): com.here.android.mpa.routing.c;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class Address {
						public static class: java.lang.Class<com.here.android.mpa.search.Address>;
						public setPostalCode(param0: string): com.here.android.mpa.search.Address;
						public constructor(param0: com.here.android.mpa.search.Address);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPostalCode(): string;
						public getStateCode(): string;
						public setText(param0: string): com.here.android.mpa.search.Address;
						public getHouseNumber(): string;
						public getText(): string;
						public getState(): string;
						public getDistrict(): string;
						public setCountryCode(param0: string): com.here.android.mpa.search.Address;
						public getCountryName(): string;
						public getFloorNumber(): string;
						public getSuiteNumberOrName(): string;
						public setStateCode(param0: string): com.here.android.mpa.search.Address;
						public getCounty(): string;
						public constructor();
						public setHouseNumber(param0: string): com.here.android.mpa.search.Address;
						public getAdditionalData(): java.util.Map<string,string>;
						public setStreet(param0: string): com.here.android.mpa.search.Address;
						public setSuiteNumberOrName(param0: string): com.here.android.mpa.search.Address;
						public setCity(param0: string): com.here.android.mpa.search.Address;
						public getCountryCode(): string;
						public getStreet(): string;
						public addAdditionalData(param0: string, param1: string): void;
						public toString(): string;
						public getCity(): string;
						public setCountryName(param0: string): com.here.android.mpa.search.Address;
						public setCounty(param0: string): com.here.android.mpa.search.Address;
						public setDistrict(param0: string): com.here.android.mpa.search.Address;
						public setState(param0: string): com.here.android.mpa.search.Address;
						public setFloorNumber(param0: string): com.here.android.mpa.search.Address;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export abstract class AutoSuggest {
						public static class: java.lang.Class<com.here.android.mpa.search.AutoSuggest>;
						public a: com.here.android.mpa.internal.k;
						public getType(): com.here.android.mpa.search.AutoSuggest.Type;
						public constructor(param0: com.here.android.mpa.internal.k);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getUrl(): string;
						public getHighlightedTitle(): string;
						public getTitle(): string;
					}
					export module AutoSuggest {
						export class Type {
							public static class: java.lang.Class<com.here.android.mpa.search.AutoSuggest.Type>;
							public static UNKNOWN: com.here.android.mpa.search.AutoSuggest.Type;
							public static PLACE: com.here.android.mpa.search.AutoSuggest.Type;
							public static SEARCH: com.here.android.mpa.search.AutoSuggest.Type;
							public static QUERY: com.here.android.mpa.search.AutoSuggest.Type;
							public static valueOf(param0: string): com.here.android.mpa.search.AutoSuggest.Type;
							public static values(): native.Array<com.here.android.mpa.search.AutoSuggest.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class AutoSuggestPlace extends com.here.android.mpa.search.AutoSuggest {
						public static class: java.lang.Class<com.here.android.mpa.search.AutoSuggestPlace>;
						public getVicinity(): string;
						public getPosition(): com.here.android.mpa.common.GeoCoordinate;
						public getPlaceDetailsRequest(): com.here.android.mpa.search.PlaceRequest;
						public getCategory(): string;
						public getBoundingBox(): com.here.android.mpa.common.GeoBoundingBox;
						public getHighlightedVicinity(): string;
						public getId(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class AutoSuggestQuery extends com.here.android.mpa.search.AutoSuggest {
						public static class: java.lang.Class<com.here.android.mpa.search.AutoSuggestQuery>;
						public getRequest(): com.here.android.mpa.search.TextAutoSuggestionRequest;
						public getQueryCompletion(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class AutoSuggestSearch extends com.here.android.mpa.search.AutoSuggest {
						public static class: java.lang.Class<com.here.android.mpa.search.AutoSuggestSearch>;
						public getPosition(): com.here.android.mpa.common.GeoCoordinate;
						public getCategory(): string;
						public getBoundingBox(): com.here.android.mpa.common.GeoBoundingBox;
						public getSuggestedSearchRequest(): com.here.android.mpa.search.DiscoveryRequest;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class Category {
						public static class: java.lang.Class<com.here.android.mpa.search.Category>;
						public getParent(): com.here.android.mpa.search.Category;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static globalCategories(): java.util.List<com.here.android.mpa.search.Category>;
						public static globalCategory(param0: com.here.android.mpa.search.Category.Global): com.here.android.mpa.search.Category;
						public getId(): string;
						public getIconUrl(): string;
						public getName(): string;
						public getSubCategories(): java.util.List<com.here.android.mpa.search.Category>;
					}
					export module Category {
						export class Global {
							public static class: java.lang.Class<com.here.android.mpa.search.Category.Global>;
							public static ACCOMMODATION: com.here.android.mpa.search.Category.Global;
							public static ADMINISTRATIVE_AREAS_BUILDINGS: com.here.android.mpa.search.Category.Global;
							public static BUSINESS_SERVICES: com.here.android.mpa.search.Category.Global;
							public static EAT_DRINK: com.here.android.mpa.search.Category.Global;
							public static FACILITIES: com.here.android.mpa.search.Category.Global;
							public static GOING_OUT: com.here.android.mpa.search.Category.Global;
							public static LEISURE_OUTDOOR: com.here.android.mpa.search.Category.Global;
							public static NATURAL_GEOGRAPHICAL: com.here.android.mpa.search.Category.Global;
							public static SHOPPING: com.here.android.mpa.search.Category.Global;
							public static SIGHTS_MUSEUMS: com.here.android.mpa.search.Category.Global;
							public static TRANSPORT: com.here.android.mpa.search.Category.Global;
							public static values(): native.Array<com.here.android.mpa.search.Category.Global>;
							public static valueOf(param0: string): com.here.android.mpa.search.Category.Global;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class CategoryFilter {
						public static class: java.lang.Class<com.here.android.mpa.search.CategoryFilter>;
						public add(param0: com.here.android.mpa.search.Category): com.here.android.mpa.search.CategoryFilter;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public add(param0: string): com.here.android.mpa.search.CategoryFilter;
						public add(param0: com.here.android.mpa.search.Category.Global): com.here.android.mpa.search.CategoryFilter;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class ContactDetail {
						public static class: java.lang.Class<com.here.android.mpa.search.ContactDetail>;
						public getType(): string;
						public getLabel(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getValue(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class CreateLink extends com.here.android.mpa.search.Link {
						public static class: java.lang.Class<com.here.android.mpa.search.CreateLink>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class DiscoveryLink extends com.here.android.mpa.search.DiscoveryResult {
						public static class: java.lang.Class<com.here.android.mpa.search.DiscoveryLink>;
						public getRequest(): com.here.android.mpa.search.DiscoveryRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIconUrl(): string;
						public getId(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class DiscoveryRequest extends com.here.android.mpa.search.Request<com.here.android.mpa.search.DiscoveryResultPage> {
						public static class: java.lang.Class<com.here.android.mpa.search.DiscoveryRequest>;
						public addImageDimensions(param0: number, param1: number): void;
						public setMapViewport(param0: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.search.DiscoveryRequest;
						public setCategoryFilter(param0: com.here.android.mpa.search.CategoryFilter): com.here.android.mpa.search.DiscoveryRequest;
						public setRichTextFormatting(param0: com.here.android.mpa.search.RichTextFormatting): com.here.android.mpa.search.DiscoveryRequest;
						public getReferences(): java.util.List<string>;
						public addReference(param0: string): com.here.android.mpa.search.DiscoveryRequest;
						public addBuildingFilter(param0: string): com.here.android.mpa.search.DiscoveryRequest;
						public setSearchArea(param0: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.search.DiscoveryRequest;
						public execute(param0: com.here.android.mpa.search.ResultListener<com.here.android.mpa.search.DiscoveryResultPage>): com.here.android.mpa.search.ErrorCode;
						public setCollectionSize(param0: number): com.here.android.mpa.search.DiscoveryRequest;
						public setSearchCenter(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.search.DiscoveryRequest;
						public setSearchArea(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): com.here.android.mpa.search.DiscoveryRequest;
						public getRichTextFormatting(): com.here.android.mpa.search.RichTextFormatting;
						public getCollectionSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class DiscoveryResult extends com.here.android.mpa.search.Link {
						public static class: java.lang.Class<com.here.android.mpa.search.DiscoveryResult>;
						public getVicinity(): string;
						public getResultType(): com.here.android.mpa.search.DiscoveryResult.ResultType;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIconUrl(): string;
						public getId(): string;
						public getTitle(): string;
					}
					export module DiscoveryResult {
						export class ResultType {
							public static class: java.lang.Class<com.here.android.mpa.search.DiscoveryResult.ResultType>;
							public static UNKNOWN: com.here.android.mpa.search.DiscoveryResult.ResultType;
							public static PLACE: com.here.android.mpa.search.DiscoveryResult.ResultType;
							public static DISCOVERY: com.here.android.mpa.search.DiscoveryResult.ResultType;
							public static valueOf(param0: string): com.here.android.mpa.search.DiscoveryResult.ResultType;
							public static values(): native.Array<com.here.android.mpa.search.DiscoveryResult.ResultType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class DiscoveryResultPage {
						public static class: java.lang.Class<com.here.android.mpa.search.DiscoveryResultPage>;
						public getPreviousPageRequest(): com.here.android.mpa.search.DiscoveryRequest;
						public getPlaceLinks(): java.util.List<com.here.android.mpa.search.PlaceLink>;
						public getItems(): java.util.List<com.here.android.mpa.search.DiscoveryResult>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getOffsetCount(): number;
						public getNextPageRequest(): com.here.android.mpa.search.DiscoveryRequest;
						public getDiscoveryLinks(): java.util.List<com.here.android.mpa.search.DiscoveryLink>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class EditorialMedia extends com.here.android.mpa.search.Media {
						public static class: java.lang.Class<com.here.android.mpa.search.EditorialMedia>;
						public getIsoLanguageCode(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getDescription(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class ErrorCode {
						public static class: java.lang.Class<com.here.android.mpa.search.ErrorCode>;
						public static NONE: com.here.android.mpa.search.ErrorCode;
						public static GENERAL: com.here.android.mpa.search.ErrorCode;
						public static NOT_FOUND: com.here.android.mpa.search.ErrorCode;
						public static NOT_INITIALIZED: com.here.android.mpa.search.ErrorCode;
						public static INCOMPLETE: com.here.android.mpa.search.ErrorCode;
						public static NETWORK_REQUIRED: com.here.android.mpa.search.ErrorCode;
						public static OUT_OF_MEMORY: com.here.android.mpa.search.ErrorCode;
						public static UNKNOWN: com.here.android.mpa.search.ErrorCode;
						public static CANCEL: com.here.android.mpa.search.ErrorCode;
						public static BUSY: com.here.android.mpa.search.ErrorCode;
						public static INVALID_STATE: com.here.android.mpa.search.ErrorCode;
						public static SERVER_CONNECTION: com.here.android.mpa.search.ErrorCode;
						public static INVALID_OPERATION: com.here.android.mpa.search.ErrorCode;
						public static BAD_LOCATION: com.here.android.mpa.search.ErrorCode;
						public static INDEX_FAILURE: com.here.android.mpa.search.ErrorCode;
						public static CANCELLED: com.here.android.mpa.search.ErrorCode;
						public static CREATED: com.here.android.mpa.search.ErrorCode;
						public static ACCEPTED: com.here.android.mpa.search.ErrorCode;
						public static NO_CONTENT: com.here.android.mpa.search.ErrorCode;
						public static SERVER_INTERNAL: com.here.android.mpa.search.ErrorCode;
						public static SERVICE_UNAVAILABLE: com.here.android.mpa.search.ErrorCode;
						public static MOVED_PERMANENTLY: com.here.android.mpa.search.ErrorCode;
						public static BAD_REQUEST: com.here.android.mpa.search.ErrorCode;
						public static UNAUTHORIZED: com.here.android.mpa.search.ErrorCode;
						public static FORBIDDEN: com.here.android.mpa.search.ErrorCode;
						public static OPERATION_NOT_ALLOWED: com.here.android.mpa.search.ErrorCode;
						public static NOT_ACCEPTABLE: com.here.android.mpa.search.ErrorCode;
						public static RESOURCE_GONE: com.here.android.mpa.search.ErrorCode;
						public static QUERY_ADDRESS_MISSING: com.here.android.mpa.search.ErrorCode;
						public static QUERY_LOCATION_CONTEXT_INVALID: com.here.android.mpa.search.ErrorCode;
						public static QUERY_LOCATION_CONTEXT_MISSING: com.here.android.mpa.search.ErrorCode;
						public static QUERY_NO_NEXT_PAGE: com.here.android.mpa.search.ErrorCode;
						public static QUERY_TEXT_MISSING: com.here.android.mpa.search.ErrorCode;
						public static QUERY_URI_MISSING: com.here.android.mpa.search.ErrorCode;
						public static SEARCH_RESULT_ITEM_MISSING: com.here.android.mpa.search.ErrorCode;
						public static INVALID_PARAMETER: com.here.android.mpa.search.ErrorCode;
						public static NETWORK_COMMUNICATION: com.here.android.mpa.search.ErrorCode;
						public static NETWORK_BAD_URI: com.here.android.mpa.search.ErrorCode;
						public static NETWORK_SERVER: com.here.android.mpa.search.ErrorCode;
						public static NETWORK_REQUEST_CONTENT: com.here.android.mpa.search.ErrorCode;
						public static NETWORK_EMPTY_INPUT: com.here.android.mpa.search.ErrorCode;
						public static INVALID_CREDENTIALS: com.here.android.mpa.search.ErrorCode;
						public static HTTP: com.here.android.mpa.search.ErrorCode;
						public static NETWORK_UNKNOWN: com.here.android.mpa.search.ErrorCode;
						public static values(): native.Array<com.here.android.mpa.search.ErrorCode>;
						public static valueOf(param0: string): com.here.android.mpa.search.ErrorCode;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class ExploreRequest extends com.here.android.mpa.search.DiscoveryRequest {
						public static class: java.lang.Class<com.here.android.mpa.search.ExploreRequest>;
						public setSearchArea(param0: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.search.DiscoveryRequest;
						public execute(param0: com.here.android.mpa.search.ResultListener<com.here.android.mpa.search.DiscoveryResultPage>): com.here.android.mpa.search.ErrorCode;
						public constructor();
						public setSearchCenter(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.search.DiscoveryRequest;
						public setSearchArea(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): com.here.android.mpa.search.DiscoveryRequest;
						public setCategoryFilter(param0: com.here.android.mpa.search.CategoryFilter): com.here.android.mpa.search.DiscoveryRequest;
						public setSearchCenter(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.search.ExploreRequest;
						public setSearchArea(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): com.here.android.mpa.search.ExploreRequest;
						public setCategoryFilter(param0: com.here.android.mpa.search.CategoryFilter): com.here.android.mpa.search.ExploreRequest;
						public setSearchArea(param0: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.search.ExploreRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class ExtendedAttribute {
						public static class: java.lang.Class<com.here.android.mpa.search.ExtendedAttribute>;
						public getVia(): com.here.android.mpa.search.Link;
						public getAttribution(): string;
						public getLabel(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getId(): string;
						public getText(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class GeocodeRequest2 extends com.here.android.mpa.search.Request<java.util.List<com.here.android.mpa.search.GeocodeResult>> {
						public static class: java.lang.Class<com.here.android.mpa.search.GeocodeRequest2>;
						public setSearchArea(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): com.here.android.mpa.search.GeocodeRequest2;
						public setCollectionSize(param0: number): com.here.android.mpa.search.GeocodeRequest2;
						public setMapViewport(param0: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.search.GeocodeRequest2;
						public execute(param0: com.here.android.mpa.search.ResultListener<java.util.List<com.here.android.mpa.search.GeocodeResult>>): com.here.android.mpa.search.ErrorCode;
						public getCollectionSize(): number;
						public setSearchArea(param0: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.search.GeocodeRequest2;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class GeocodeResult {
						public static class: java.lang.Class<com.here.android.mpa.search.GeocodeResult>;
						public getRelevance(): number;
						public getMatchQuality(): java.util.Map<string,java.lang.Float>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getLocation(): com.here.android.mpa.search.Location;
						public getMatchLevel(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class HereRequest extends com.here.android.mpa.search.DiscoveryRequest {
						public static class: java.lang.Class<com.here.android.mpa.search.HereRequest>;
						public execute(param0: com.here.android.mpa.search.ResultListener<com.here.android.mpa.search.DiscoveryResultPage>): com.here.android.mpa.search.ErrorCode;
						public constructor();
						public setSearchCenter(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.search.DiscoveryRequest;
						public setCategoryFilter(param0: com.here.android.mpa.search.CategoryFilter): com.here.android.mpa.search.DiscoveryRequest;
						public setSearchCenter(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.search.HereRequest;
						public addBuildingFilter(param0: string): com.here.android.mpa.search.DiscoveryRequest;
						public setCategoryFilter(param0: com.here.android.mpa.search.CategoryFilter): com.here.android.mpa.search.HereRequest;
						public addBuildingFilter(param0: string): com.here.android.mpa.search.HereRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class ImageMedia extends com.here.android.mpa.search.Media {
						public static class: java.lang.Class<com.here.android.mpa.search.ImageMedia>;
						public getDimensionHref(param0: number, param1: number): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public getId(): string;
						public getUser(): com.here.android.mpa.search.UserLink;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class Link {
						public static class: java.lang.Class<com.here.android.mpa.search.Link>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getId(): string;
						public getIconUrl(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class Location {
						public static class: java.lang.Class<com.here.android.mpa.search.Location>;
						public constructor(param0: com.here.android.mpa.common.GeoCoordinate);
						public getAlternativeReferenceIds(param0: string): java.util.List<string>;
						public getBoundingBox(): com.here.android.mpa.common.GeoBoundingBox;
						public getCoordinate(): com.here.android.mpa.common.GeoCoordinate;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAddress(): com.here.android.mpa.search.Address;
						public getReference(param0: string): string;
						public getId(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export abstract class Media {
						public static class: java.lang.Class<com.here.android.mpa.search.Media>;
						public getSupplier(): com.here.android.mpa.search.SupplierLink;
						public getVia(): com.here.android.mpa.search.ViaLink;
						public getAttributionText(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public getType(): com.here.android.mpa.search.Media.Type;
					}
					export module Media {
						export class Type {
							public static class: java.lang.Class<com.here.android.mpa.search.Media.Type>;
							public static UNKNOWN: com.here.android.mpa.search.Media.Type;
							public static EDITORIAL: com.here.android.mpa.search.Media.Type;
							public static IMAGE: com.here.android.mpa.search.Media.Type;
							public static RATING: com.here.android.mpa.search.Media.Type;
							public static REVIEW: com.here.android.mpa.search.Media.Type;
							public static valueOf(param0: string): com.here.android.mpa.search.Media.Type;
							public static values(): native.Array<com.here.android.mpa.search.Media.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class MediaCollectionPage<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.here.android.mpa.search.MediaCollectionPage<any>>;
						public getNextPageRequest(): com.here.android.mpa.search.MediaCollectionPageRequest<T>;
						public getPreviousPageRequest(): com.here.android.mpa.search.MediaCollectionPageRequest<T>;
						public getItems(): java.util.List<com.here.android.mpa.search.Media>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAvailable(): number;
						public getType(): com.here.android.mpa.search.Media.Type;
						public getOffsetCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class MediaCollectionPageRequest<T>  extends com.here.android.mpa.search.Request<com.here.android.mpa.search.MediaCollectionPage<any>> {
						public static class: java.lang.Class<com.here.android.mpa.search.MediaCollectionPageRequest<any>>;
						public execute(param0: com.here.android.mpa.search.ResultListener<com.here.android.mpa.search.MediaCollectionPage<any>>): com.here.android.mpa.search.ErrorCode;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class Place {
						public static class: java.lang.Class<com.here.android.mpa.search.Place>;
						public static RECOMMENDED_RELATED_LINK_NAME: string;
						public static PUBLIC_TRANSPORT_RELATED_LINK_NAME: string;
						public getViewUri(): string;
						public getAttributionText(): string;
						public getAlternativeNames(): java.util.Map<string,java.util.List<string>>;
						public getReviews(): com.here.android.mpa.search.MediaCollectionPage<com.here.android.mpa.search.ReviewMedia>;
						public getImages(): com.here.android.mpa.search.MediaCollectionPage<com.here.android.mpa.search.ImageMedia>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getContacts(): java.util.List<com.here.android.mpa.search.ContactDetail>;
						public getIconUrl(): string;
						public getLocation(): com.here.android.mpa.search.Location;
						public getName(): string;
						public getReportingLink(): com.here.android.mpa.search.ReportingLink;
						public getRelated(): java.util.Map<string,com.here.android.mpa.search.DiscoveryLink>;
						public getCategories(): java.util.List<com.here.android.mpa.search.Category>;
						public getSupplier(): com.here.android.mpa.search.SupplierLink;
						public getAlternativeReferenceIds(param0: string): java.util.List<string>;
						public getEditorials(): com.here.android.mpa.search.MediaCollectionPage<com.here.android.mpa.search.EditorialMedia>;
						public getReference(param0: string): string;
						public getId(): string;
						public getUserRatings(): com.here.android.mpa.search.Ratings;
						public getRatings(): com.here.android.mpa.search.MediaCollectionPage<com.here.android.mpa.search.RatingMedia>;
						public getExtendedAttributes(): java.util.List<com.here.android.mpa.search.ExtendedAttribute>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class PlaceLink extends com.here.android.mpa.search.DiscoveryResult {
						public static class: java.lang.Class<com.here.android.mpa.search.PlaceLink>;
						public getPosition(): com.here.android.mpa.common.GeoCoordinate;
						public getAlternativeReferenceIds(param0: string): java.util.List<string>;
						public getBoundingBox(): com.here.android.mpa.common.GeoBoundingBox;
						public getDetailsRequest(): com.here.android.mpa.search.PlaceRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getReference(param0: string): string;
						public getDistance(): number;
						public getAverageRating(): number;
						public getCategory(): com.here.android.mpa.search.Category;
						public isSponsored(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class PlaceRequest extends com.here.android.mpa.search.Request<com.here.android.mpa.search.Place> {
						public static class: java.lang.Class<com.here.android.mpa.search.PlaceRequest>;
						public addImageDimensions(param0: number, param1: number): void;
						public getContent(): java.util.Set<string>;
						public execute(param0: com.here.android.mpa.search.ResultListener<com.here.android.mpa.search.Place>): com.here.android.mpa.search.ErrorCode;
						public getRichTextFormatting(): com.here.android.mpa.search.RichTextFormatting;
						public addContent(param0: string): void;
						public getReferences(): java.util.List<string>;
						public constructor(param0: string, param1: string);
						public setRichTextFormatting(param0: com.here.android.mpa.search.RichTextFormatting): com.here.android.mpa.search.PlaceRequest;
						public addReference(param0: string): com.here.android.mpa.search.PlaceRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class RatingMedia extends com.here.android.mpa.search.Media {
						public static class: java.lang.Class<com.here.android.mpa.search.RatingMedia>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getCount(): number;
						public getAverage(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class Ratings {
						public static class: java.lang.Class<com.here.android.mpa.search.Ratings>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getCount(): number;
						public getAverage(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class ReportingLink extends com.here.android.mpa.search.Link {
						public static class: java.lang.Class<com.here.android.mpa.search.ReportingLink>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export abstract class Request<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.here.android.mpa.search.Request<any>>;
						public static BUILDING_ID_REFERENCE_NAME: string;
						public static PVID_ID_REFERENCE_NAME: string;
						public static VENUES_ID_REFERENCE_NAME: string;
						public static VENUES_CONTENT_ID_REFERENCE_NAME: string;
						public static VENUES_DESTINATION_ID_REFERENCE_NAME: string;
						public static VENUES_VENUE_ID_REFERENCE_NAME: string;
						public static PLACE_CONTENT_WIKIPEDIA: string;
						public cancel(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class ResultListener<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.here.android.mpa.search.ResultListener<any>>;
						/**
						 * Constructs a new instance of the com.here.android.mpa.search.ResultListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCompleted(param0: T, param1: com.here.android.mpa.search.ErrorCode): void;
						});
						public constructor();
						public onCompleted(param0: T, param1: com.here.android.mpa.search.ErrorCode): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class ReverseGeocodeRequest extends com.here.android.mpa.search.Request<com.here.android.mpa.search.Address> {
						public static class: java.lang.Class<com.here.android.mpa.search.ReverseGeocodeRequest>;
						public constructor(param0: com.here.android.mpa.common.GeoCoordinate);
						public execute(param0: com.here.android.mpa.search.ResultListener<com.here.android.mpa.search.Address>): com.here.android.mpa.search.ErrorCode;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class ReviewMedia extends com.here.android.mpa.search.Media {
						public static class: java.lang.Class<com.here.android.mpa.search.ReviewMedia>;
						public getRating(): number;
						public getDate(): string;
						public getIsoLanguageCode(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getId(): string;
						public getUser(): com.here.android.mpa.search.UserLink;
						public getDescription(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class RichTextFormatting {
						public static class: java.lang.Class<com.here.android.mpa.search.RichTextFormatting>;
						public static HTML: com.here.android.mpa.search.RichTextFormatting;
						public static PLAIN: com.here.android.mpa.search.RichTextFormatting;
						public static valueOf(param0: string): com.here.android.mpa.search.RichTextFormatting;
						public static values(): native.Array<com.here.android.mpa.search.RichTextFormatting>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class SearchRequest extends com.here.android.mpa.search.DiscoveryRequest {
						public static class: java.lang.Class<com.here.android.mpa.search.SearchRequest>;
						public setSearchArea(param0: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.search.DiscoveryRequest;
						public setQueryText(param0: string): com.here.android.mpa.search.SearchRequest;
						public execute(param0: com.here.android.mpa.search.ResultListener<com.here.android.mpa.search.DiscoveryResultPage>): com.here.android.mpa.search.ErrorCode;
						public setSearchArea(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): com.here.android.mpa.search.SearchRequest;
						public setSearchCenter(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.search.DiscoveryRequest;
						public setSearchArea(param0: com.here.android.mpa.common.GeoCoordinate, param1: number): com.here.android.mpa.search.DiscoveryRequest;
						public constructor(param0: string);
						public setSearchCenter(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.search.SearchRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class SupplierLink extends com.here.android.mpa.search.Link {
						public static class: java.lang.Class<com.here.android.mpa.search.SupplierLink>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public getId(): string;
						public getIconUrl(): string;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class TextAutoSuggestionRequest extends com.here.android.mpa.search.Request<java.util.List<com.here.android.mpa.search.AutoSuggest>> {
						public static class: java.lang.Class<com.here.android.mpa.search.TextAutoSuggestionRequest>;
						public setRichTextFormatting(param0: com.here.android.mpa.search.RichTextFormatting): com.here.android.mpa.search.TextAutoSuggestionRequest;
						public setFilters(param0: java.util.EnumSet<com.here.android.mpa.search.TextAutoSuggestionRequest.AutoSuggestFilterType>): com.here.android.mpa.search.TextAutoSuggestionRequest;
						public setSearchCenter(param0: com.here.android.mpa.common.GeoCoordinate): com.here.android.mpa.search.TextAutoSuggestionRequest;
						public setCollectionSize(param0: number): com.here.android.mpa.search.TextAutoSuggestionRequest;
						public getRichTextFormatting(): com.here.android.mpa.search.RichTextFormatting;
						public getCollectionSize(): number;
						public execute(param0: com.here.android.mpa.search.ResultListener<java.util.List<com.here.android.mpa.search.AutoSuggest>>): com.here.android.mpa.search.ErrorCode;
						public setQueryText(param0: string): com.here.android.mpa.search.TextAutoSuggestionRequest;
						public setMapViewport(param0: com.here.android.mpa.common.GeoBoundingBox): com.here.android.mpa.search.TextAutoSuggestionRequest;
						public constructor(param0: string);
					}
					export module TextAutoSuggestionRequest {
						export class AutoSuggestFilterType {
							public static class: java.lang.Class<com.here.android.mpa.search.TextAutoSuggestionRequest.AutoSuggestFilterType>;
							public static ADDRESS: com.here.android.mpa.search.TextAutoSuggestionRequest.AutoSuggestFilterType;
							public static PLACE: com.here.android.mpa.search.TextAutoSuggestionRequest.AutoSuggestFilterType;
							public static CATEGORY: com.here.android.mpa.search.TextAutoSuggestionRequest.AutoSuggestFilterType;
							public static CHAIN: com.here.android.mpa.search.TextAutoSuggestionRequest.AutoSuggestFilterType;
							public static QUERY: com.here.android.mpa.search.TextAutoSuggestionRequest.AutoSuggestFilterType;
							public static valueOf(param0: string): com.here.android.mpa.search.TextAutoSuggestionRequest.AutoSuggestFilterType;
							public static values(): native.Array<com.here.android.mpa.search.TextAutoSuggestionRequest.AutoSuggestFilterType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class UserLink extends com.here.android.mpa.search.Link {
						public static class: java.lang.Class<com.here.android.mpa.search.UserLink>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module android {
			export module mpa {
				export module search {
					export class ViaLink extends com.here.android.mpa.search.Link {
						public static class: java.lang.Class<com.here.android.mpa.search.ViaLink>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export class HEREAnalytics {
					public static class: java.lang.Class<com.here.sdk.analytics.HEREAnalytics>;
					public identify(param0: string, param1: com.here.sdk.analytics.HEREAnalytics.Traits): void;
					public getAnonymousId(): string;
					public setLocation(param0: number, param1: number): void;
					public reset(): void;
					public enableAutomaticLocation(): void;
					public disableLocation(): void;
					public flush(): void;
					public goOffline(): void;
					public track(param0: string, param1: com.here.sdk.analytics.HEREAnalytics.Properties, param2: com.here.sdk.analytics.HEREAnalytics.Options): void;
					public track(param0: string): void;
					public disable(): void;
					public identify(param0: string, param1: com.here.sdk.analytics.HEREAnalytics.Traits, param2: com.here.sdk.analytics.HEREAnalytics.Options): void;
					public goOnline(): void;
					public track(param0: string, param1: com.here.sdk.analytics.HEREAnalytics.Properties): void;
					public identify(param0: string): void;
					public static setup(param0: globalAndroid.app.Activity, param1: com.here.sdk.analytics.HEREAnalyticsConfiguration): void;
					public static sharedAnalytics(): com.here.sdk.analytics.HEREAnalytics;
					public getUserId(): string;
					public static setup(param0: globalAndroid.app.Application, param1: com.here.sdk.analytics.HEREAnalyticsConfiguration): void;
					public enable(): void;
					public enableManualLocation(): void;
				}
				export module HEREAnalytics {
					export class Options extends com.here.sdk.analytics.VariantMap<com.here.sdk.analytics.HEREAnalytics.Options> {
						public static class: java.lang.Class<com.here.sdk.analytics.HEREAnalytics.Options>;
						public constructor();
					}
					export class Properties extends com.here.sdk.analytics.VariantMap<com.here.sdk.analytics.HEREAnalytics.Properties> {
						public static class: java.lang.Class<com.here.sdk.analytics.HEREAnalytics.Properties>;
						public constructor();
						public addHereKind(param0: string): com.here.sdk.analytics.HEREAnalytics.Properties;
					}
					export class Traits extends com.here.sdk.analytics.VariantMap<com.here.sdk.analytics.HEREAnalytics.Traits> {
						public static class: java.lang.Class<com.here.sdk.analytics.HEREAnalytics.Traits>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export class HEREAnalyticsConfiguration {
					public static class: java.lang.Class<com.here.sdk.analytics.HEREAnalyticsConfiguration>;
					public getStickySessionInterval(): number;
					public constructor(param0: string);
					public isCollectDeviceIds(): boolean;
					public getOldEventsForceFlushInterval(): number;
					public setDisableBrowserUserAgentQuery(param0: boolean): void;
					public getLocationFuzzinessDistance(): number;
					public setAutoFlushNumEvents(param0: number): void;
					public setMinIntervalForPerEventsFlush(param0: number): void;
					public getEventsToTruncateWhenStorageFull(): number;
					public setLocationFuzzinessDistance(param0: number): void;
					public setServiceURL(param0: string): void;
					public getMinIntervalForPerEventsFlush(): number;
					public setEventsToTruncateWhenStorageFull(param0: number): void;
					public setAutoFlushInterval(param0: number): void;
					public isDisableFlushInRoaming(): boolean;
					public isOffline(): boolean;
					public getUserId(): string;
					public setDisableFlushInRoaming(param0: boolean): void;
					public setEventsToStore(param0: number): void;
					public setDebugOutputLevel(param0: com.here.sdk.analytics.internal.DebugOutputLevel): void;
					public getAnonymousId(): string;
					public getAutoFlushInterval(): number;
					public setAnonymousId(param0: string): void;
					public setEventsPerSingleFlush(param0: number): void;
					public isDisableBrowserUserAgentQuery(): boolean;
					public getServiceURL(): string;
					public getLocationExpirationInterval(): number;
					public setCollectDeviceIds(param0: boolean): void;
					public setOldEventsForceFlushInterval(param0: number): void;
					public getEventsToStore(): number;
					public setLocationUpdateInterval(param0: number): void;
					public setLocationExpirationInterval(param0: number): void;
					public setOffline(param0: boolean): void;
					public getAutoFlushNumEvents(): number;
					public getLocationUpdateInterval(): number;
					public getDebugOutputLevel(): com.here.sdk.analytics.internal.DebugOutputLevel;
					public setUserId(param0: string): void;
					public getWriteKey(): string;
					public getEventsPerSingleFlush(): number;
					public setStickySessionInterval(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export class VariantMap<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.here.sdk.analytics.VariantMap<any>>;
					public put(param0: string, param1: com.here.sdk.analytics.internal.Variant): T;
					public put(param0: string, param1: number): T;
					public put(param0: string, param1: com.here.sdk.analytics.VariantMap<any>): T;
					public put(param0: string, param1: java.util.List<com.here.sdk.analytics.internal.Variant>): T;
					public put(param0: string, param1: boolean): T;
					public put(param0: string, param1: string): T;
					public getMap(): java.util.Map<string,com.here.sdk.analytics.internal.Variant>;
					public put(param0: string, param1: java.util.Map<string,com.here.sdk.analytics.internal.Variant>): T;
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module a {
					export class a extends globalAndroid.os.AsyncTask<globalAndroid.content.Context,java.lang.Void,string> {
						public static class: java.lang.Class<com.here.sdk.analytics.a.a>;
						public constructor();
						public a(param0: native.Array<globalAndroid.content.Context>): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module a {
					export class b {
						public static class: java.lang.Class<com.here.sdk.analytics.a.b>;
						public a(): string;
						public constructor(param0: com.here.sdk.analytics.a.c);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module a {
					export class c {
						public static class: java.lang.Class<com.here.sdk.analytics.a.c>;
						public constructor(param0: com.here.sdk.analytics.internal.a);
						public f(): string;
						public a(): string;
						public b(): string;
						public d(): string;
						public g(): string;
						public e(): string;
						public c(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module a {
					export class d {
						public static class: java.lang.Class<com.here.sdk.analytics.a.d>;
						public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.here.sdk.analytics.a.d.a);
						public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
					}
					export module d {
						export class a {
							public static class: java.lang.Class<com.here.sdk.analytics.a.d.a>;
							/**
							 * Constructs a new instance of the com.here.sdk.analytics.a.d$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
							});
							public constructor();
							public a(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module a {
					export class e {
						public static class: java.lang.Class<com.here.sdk.analytics.a.e>;
						public static a(param0: string): string;
						public static b(param0: string): com.here.sdk.analytics.internal.OptionalString;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class Analytics {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.Analytics>;
						public getStatistics(): com.here.sdk.analytics.internal.AnalyticsStatistics;
						public disableLocation(): void;
						public getUserId(): string;
						public constructor();
						public initialize(): boolean;
						public enableAutomaticLocation(): void;
						public setUserId(param0: com.here.sdk.analytics.internal.OptionalString): void;
						public setLocation(param0: number, param1: number): void;
						public flush(): void;
						public disable(): void;
						public isLastCallFailed(): boolean;
						public enable(): void;
						public enableManualLocation(): void;
						public shutdown(): void;
						public getAnonymousId(): string;
						public getSessionId(): string;
						public goOffline(): void;
						public goOnline(): void;
						public static create(param0: com.here.sdk.analytics.internal.PlatformCalls, param1: com.here.sdk.analytics.internal.AnalyticsConfiguration): com.here.sdk.analytics.internal.Analytics;
						public reset(): void;
						public logEvent(param0: com.here.sdk.analytics.internal.EventData): void;
					}
					export module Analytics {
						export class CppProxy extends com.here.sdk.analytics.internal.Analytics {
							public static class: java.lang.Class<com.here.sdk.analytics.internal.Analytics.CppProxy>;
							public initialize(): boolean;
							public finalize(): void;
							public getUserId(): string;
							public goOffline(): void;
							public shutdown(): void;
							public reset(): void;
							public disable(): void;
							public logEvent(param0: com.here.sdk.analytics.internal.EventData): void;
							public getAnonymousId(): string;
							public disableLocation(): void;
							public setUserId(param0: com.here.sdk.analytics.internal.OptionalString): void;
							public getStatistics(): com.here.sdk.analytics.internal.AnalyticsStatistics;
							public destroy(): void;
							public enableManualLocation(): void;
							public isLastCallFailed(): boolean;
							public goOnline(): void;
							public getSessionId(): string;
							public setLocation(param0: number, param1: number): void;
							public enable(): void;
							public flush(): void;
							public enableAutomaticLocation(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class AnalyticsConfiguration {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.AnalyticsConfiguration>;
						public static DEFAULT_SERVICE_URL: string;
						public static DEFAULT_STICKY_SESSION_INTERVAL: number;
						public getEventStorage(): com.here.sdk.analytics.internal.AnalyticsEventStorageConfiguration;
						public getWriteKey(): string;
						public getCollectDeviceIds(): boolean;
						public constructor(param0: com.here.sdk.analytics.internal.DebugOutputLevel, param1: string, param2: string, param3: com.here.sdk.analytics.internal.AnalyticsFlushConfiguration, param4: com.here.sdk.analytics.internal.AnalyticsEventStorageConfiguration, param5: com.here.sdk.analytics.internal.AnalyticsLocationConfiguration, param6: com.here.sdk.analytics.internal.AnalyticsIdsConfiguration, param7: boolean, param8: boolean, param9: number, param10: boolean);
						public getIds(): com.here.sdk.analytics.internal.AnalyticsIdsConfiguration;
						public toString(): string;
						public getFlush(): com.here.sdk.analytics.internal.AnalyticsFlushConfiguration;
						public getDebugOutputLevel(): com.here.sdk.analytics.internal.DebugOutputLevel;
						public getStickySessionInterval(): number;
						public getServiceURL(): string;
						public getDisableBrowserUserAgentQuery(): boolean;
						public getLocation(): com.here.sdk.analytics.internal.AnalyticsLocationConfiguration;
						public getOffline(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class AnalyticsEventStorageConfiguration {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.AnalyticsEventStorageConfiguration>;
						public static DEFAULT_EVENTS_TO_STORE: number;
						public static DEFAULT_EVENTS_TO_TRUNCATE_WHEN_STORAGE_FULL: number;
						public getEventsToTruncateWhenStorageFull(): number;
						public constructor(param0: number, param1: number);
						public getEventsToStore(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class AnalyticsFlushConfiguration {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.AnalyticsFlushConfiguration>;
						public static DEFAULT_AUTO_FLUSH_INTERVAL: number;
						public static DEFAULT_AUTO_FLUSH_NUM_EVENTS: number;
						public static DEFAULT_OLD_EVENTS_FORCE_FLUSH_INTERVAL: number;
						public static DEFAULT_EVENTS_PER_SINGLE_FLUSH: number;
						public static DEFAULT_MIN_INTERVAL_FOR_PER_EVENTS_FLUSH: number;
						public getAutoInterval(): number;
						public getEventsPerSingleFlush(): number;
						public getAutoNumEvents(): number;
						public getOldEventsForceFlushInterval(): number;
						public getDisableInRoaming(): boolean;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: number);
						public toString(): string;
						public getMinIntervalForPerEventsFlush(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class AnalyticsIdsConfiguration {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.AnalyticsIdsConfiguration>;
						public constructor(param0: com.here.sdk.analytics.internal.OptionalString, param1: com.here.sdk.analytics.internal.OptionalString);
						public getAnonymousId(): com.here.sdk.analytics.internal.OptionalString;
						public getUserId(): com.here.sdk.analytics.internal.OptionalString;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class AnalyticsLocationConfiguration {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.AnalyticsLocationConfiguration>;
						public static DEFAULT_UPDATE_INTERVAL: number;
						public static DEFAULT_EXPIRATION_INTERVAL: number;
						public static DEFAULT_FUZZINESS_DISTANCE: number;
						public getUpdateInterval(): number;
						public getExpirationInterval(): number;
						public getFuzzinessDistance(): number;
						public constructor(param0: number, param1: number, param2: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class AnalyticsStatistics {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.AnalyticsStatistics>;
						public getFlushesRequested(): number;
						public getRecordsInStorage(): number;
						public getFlushesFailed(): number;
						public getFlushesSucceeded(): number;
						public toString(): string;
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class AppLifecycleListener {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.AppLifecycleListener>;
						public onEnterForeground(): void;
						public constructor();
						public onEnterBackground(): void;
					}
					export module AppLifecycleListener {
						export class CppProxy extends com.here.sdk.analytics.internal.AppLifecycleListener {
							public static class: java.lang.Class<com.here.sdk.analytics.internal.AppLifecycleListener.CppProxy>;
							public destroy(): void;
							public finalize(): void;
							public onEnterForeground(): void;
							public onEnterBackground(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class CarrierInfo {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.CarrierInfo>;
						public getMobileCountryCode(): string;
						public constructor(param0: string, param1: string, param2: string);
						public getMobileNetworkCode(): string;
						public getCarrierName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class DebugOutputLevel {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.DebugOutputLevel>;
						public static ALL: com.here.sdk.analytics.internal.DebugOutputLevel;
						public static INFO: com.here.sdk.analytics.internal.DebugOutputLevel;
						public static WARN: com.here.sdk.analytics.internal.DebugOutputLevel;
						public static ERROR: com.here.sdk.analytics.internal.DebugOutputLevel;
						public static NONE: com.here.sdk.analytics.internal.DebugOutputLevel;
						public static values(): native.Array<com.here.sdk.analytics.internal.DebugOutputLevel>;
						public static valueOf(param0: string): com.here.sdk.analytics.internal.DebugOutputLevel;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class DeferredCall {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.DeferredCall>;
						public fireCall(): boolean;
						public constructor();
						public isPending(): boolean;
						public cancelCall(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class DeferredCallListener {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.DeferredCallListener>;
						public constructor();
						public onDeferredCall(): void;
					}
					export module DeferredCallListener {
						export class CppProxy extends com.here.sdk.analytics.internal.DeferredCallListener {
							public static class: java.lang.Class<com.here.sdk.analytics.internal.DeferredCallListener.CppProxy>;
							public onDeferredCall(): void;
							public destroy(): void;
							public finalize(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class EventData {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.EventData>;
						public static EVENT_TYPE_SDK: string;
						public static EVENT_TYPE_IDENTIFY: string;
						public static EVENT_TYPE_TRACK: string;
						public static EVENT_TYPE_PAGE: string;
						public static EVENT_TYPE_SCREEN: string;
						public static ROOT_FIELD_EVENT: string;
						public static ROOT_FIELD_NAME: string;
						public getOptions(): java.util.HashMap<string,com.here.sdk.analytics.internal.Variant>;
						public getRoot(): java.util.HashMap<string,com.here.sdk.analytics.internal.Variant>;
						public constructor();
						public getType(): com.here.sdk.analytics.internal.EventType;
						public getProperties(): java.util.HashMap<string,com.here.sdk.analytics.internal.Variant>;
						public getTypeDescription(): string;
						public getTraits(): java.util.HashMap<string,com.here.sdk.analytics.internal.Variant>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class EventType {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.EventType>;
						public static SDK: com.here.sdk.analytics.internal.EventType;
						public static IDENTIFY: com.here.sdk.analytics.internal.EventType;
						public static TRACK: com.here.sdk.analytics.internal.EventType;
						public static PAGE: com.here.sdk.analytics.internal.EventType;
						public static SCREEN: com.here.sdk.analytics.internal.EventType;
						public static values(): native.Array<com.here.sdk.analytics.internal.EventType>;
						public static valueOf(param0: string): com.here.sdk.analytics.internal.EventType;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class HttpClient {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.HttpClient>;
						public static METHOD_POST: string;
						public static METHOD_GET: string;
						public static HEADER_CONTENT_TYPE: string;
						public static HEADER_ACCEPT: string;
						public static HEADER_USER_AGENT: string;
						public static HEADER_CONTENT_LENGTH: string;
						public static HEADER_CONTENT_ENCODING: string;
						public static HEADER_CONNECTION: string;
						public static HEADER_AUTHORIZATION: string;
						public constructor();
						public setHeaders(param0: java.util.HashMap<string,string>): void;
						public postString(param0: string): boolean;
						public setCompressed(param0: boolean): void;
						public get(): boolean;
						public isPending(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class HttpClientListener {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.HttpClientListener>;
						public constructor();
						public httpClientDidCompleteRequest(param0: string): void;
						public httpClientDidFailWithError(): void;
					}
					export module HttpClientListener {
						export class CppProxy extends com.here.sdk.analytics.internal.HttpClientListener {
							public static class: java.lang.Class<com.here.sdk.analytics.internal.HttpClientListener.CppProxy>;
							public destroy(): void;
							public finalize(): void;
							public httpClientDidFailWithError(): void;
							public httpClientDidCompleteRequest(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class KeyValueStorage {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.KeyValueStorage>;
						public putStringWithKey(param0: string, param1: string): void;
						public constructor();
						public putIntWithKey(param0: string, param1: number): void;
						public putRealWithKey(param0: string, param1: number): void;
						public getStringByKey(param0: string): com.here.sdk.analytics.internal.OptionalString;
						public existsForKey(param0: string): boolean;
						public getRealByKey(param0: string): number;
						public removeByKey(param0: string): void;
						public getIntByKey(param0: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class LocationReportingType {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.LocationReportingType>;
						public static DISABLED: com.here.sdk.analytics.internal.LocationReportingType;
						public static AUTO: com.here.sdk.analytics.internal.LocationReportingType;
						public static MANUAL: com.here.sdk.analytics.internal.LocationReportingType;
						public static values(): native.Array<com.here.sdk.analytics.internal.LocationReportingType>;
						public static valueOf(param0: string): com.here.sdk.analytics.internal.LocationReportingType;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class LocationRequest {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.LocationRequest>;
						public constructor();
						public start(): void;
						public stop(): void;
						public isPending(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class LocationRequestListener {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.LocationRequestListener>;
						public constructor();
						public onLocationUpdate(param0: number, param1: number): void;
					}
					export module LocationRequestListener {
						export class CppProxy extends com.here.sdk.analytics.internal.LocationRequestListener {
							public static class: java.lang.Class<com.here.sdk.analytics.internal.LocationRequestListener.CppProxy>;
							public destroy(): void;
							public finalize(): void;
							public onLocationUpdate(param0: number, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class NetworkReachibilityStatus {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.NetworkReachibilityStatus>;
						public static NOT_REACHABLE: com.here.sdk.analytics.internal.NetworkReachibilityStatus;
						public static REACHABLE_VIA_WIFI: com.here.sdk.analytics.internal.NetworkReachibilityStatus;
						public static REACHABLE_VIA_WWAN: com.here.sdk.analytics.internal.NetworkReachibilityStatus;
						public static valueOf(param0: string): com.here.sdk.analytics.internal.NetworkReachibilityStatus;
						public static values(): native.Array<com.here.sdk.analytics.internal.NetworkReachibilityStatus>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class OptionalString {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.OptionalString>;
						public constructor(param0: boolean, param1: string);
						public getValue(): string;
						public getIsSet(): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class PlatformCalls {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.PlatformCalls>;
						public createLocationRequest(param0: com.here.sdk.analytics.internal.LocationRequestListener): com.here.sdk.analytics.internal.LocationRequest;
						public getScreenHeight(): number;
						public createDeferredCall(param0: com.here.sdk.analytics.internal.DeferredCallListener, param1: number): com.here.sdk.analytics.internal.DeferredCall;
						public getDeviceName(): string;
						public getLocale(): string;
						public logWarn(param0: string): void;
						public logInfo(param0: string): void;
						public isRoaming(): boolean;
						public getProductVersion(): string;
						public getDeviceId(): string;
						public getProductName(): string;
						public getIMEI(): string;
						public getMSISDN(): string;
						public getSystemName(): string;
						public getIMSI(): string;
						public getUUID(): string;
						public getScreenDensity(): number;
						public closeResources(): void;
						public getDeviceManufacturer(): string;
						public getTimezoneOffset(): number;
						public getProductBuild(): string;
						public createHttpClient(param0: string, param1: com.here.sdk.analytics.internal.HttpClientListener, param2: string): com.here.sdk.analytics.internal.HttpClient;
						public getScreenWidth(): number;
						public getCarrierInfo(): com.here.sdk.analytics.internal.CarrierInfo;
						public fetchNetworkInfo(): void;
						public getProductNamespace(): string;
						public keyValueStorage(): com.here.sdk.analytics.internal.KeyValueStorage;
						public logError(param0: string): void;
						public getBrowserUserAgent(): string;
						public getTimezone(): string;
						public constructor();
						public createSQLiteDatabaseConnect(param0: string, param1: com.here.sdk.analytics.internal.SQLiteDatabaseConnectListener): com.here.sdk.analytics.internal.SQLiteDatabaseConnect;
						public isSegmentDatabaseMigrationSupported(): boolean;
						public getAdvertisingId(): string;
						public getNetworkReachibilityStatus(): com.here.sdk.analytics.internal.NetworkReachibilityStatus;
						public getAppLifecycleListener(): com.here.sdk.analytics.internal.AppLifecycleListener;
						public setAppLifecycleListener(param0: com.here.sdk.analytics.internal.AppLifecycleListener): boolean;
						public getHardwareModel(): string;
						public getAndroidId(): string;
						public getLibraryName(): string;
						public getMEID(): string;
						public segmentDatabaseMigrator(): com.here.sdk.analytics.internal.SegmentDatabaseMigrator;
						public getHardwareMachine(): string;
						public getOSVersion(): string;
						public logDebug(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class RowWithColumns {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.RowWithColumns>;
						public constructor(param0: java.util.ArrayList<com.here.sdk.analytics.internal.OptionalString>);
						public getColumns(): java.util.ArrayList<com.here.sdk.analytics.internal.OptionalString>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class SQLiteDatabaseConnect {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.SQLiteDatabaseConnect>;
						public constructor();
						public executeStatementForResult(param0: string): com.here.sdk.analytics.internal.SQLiteDatabaseStatementResult;
						public executeStatement(param0: string): boolean;
						public sqlEscapeString(param0: string): string;
						public closeDatabase(): boolean;
						public openDatabase(param0: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class SQLiteDatabaseConnectListener {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.SQLiteDatabaseConnectListener>;
						public constructor();
						public onDatabaseCreated(): boolean;
					}
					export module SQLiteDatabaseConnectListener {
						export class CppProxy extends com.here.sdk.analytics.internal.SQLiteDatabaseConnectListener {
							public static class: java.lang.Class<com.here.sdk.analytics.internal.SQLiteDatabaseConnectListener.CppProxy>;
							public destroy(): void;
							public onDatabaseCreated(): boolean;
							public finalize(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class SQLiteDatabaseStatementResult {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.SQLiteDatabaseStatementResult>;
						public getColumnNames(): java.util.ArrayList<string>;
						public constructor(param0: boolean, param1: java.util.ArrayList<string>, param2: java.util.ArrayList<com.here.sdk.analytics.internal.RowWithColumns>);
						public getIsFailed(): boolean;
						public getRowsWithColumns(): java.util.ArrayList<com.here.sdk.analytics.internal.RowWithColumns>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class SegmentDatabaseMigrator {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.SegmentDatabaseMigrator>;
						public getHACVersion(): number;
						public constructor();
						public close(): void;
						public open(param0: string): boolean;
						public readOldestRecords(param0: number): java.util.ArrayList<string>;
						public killDatabase(): void;
						public removeOldestRecords(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export abstract class Variant {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.Variant>;
						public constructor();
						public getBool(): boolean;
						public getList(): java.util.ArrayList<com.here.sdk.analytics.internal.Variant>;
						public getType(): com.here.sdk.analytics.internal.VariantType;
						public getString(): string;
						public getFloat64(): number;
						public getMap(): java.util.HashMap<string,com.here.sdk.analytics.internal.Variant>;
						public getInt64(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class VariantImpl extends com.here.sdk.analytics.internal.Variant {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.VariantImpl>;
						public constructor();
						public getBool(): boolean;
						public getList(): java.util.ArrayList<com.here.sdk.analytics.internal.Variant>;
						public constructor(param0: java.util.Map<string,com.here.sdk.analytics.internal.Variant>);
						public getString(): string;
						public getFloat64(): number;
						public getMap(): java.util.HashMap<string,com.here.sdk.analytics.internal.Variant>;
						public getInt64(): number;
						public static nullValue(): com.here.sdk.analytics.internal.Variant;
						public getType(): com.here.sdk.analytics.internal.VariantType;
						public constructor(param0: number);
						public constructor(param0: boolean);
						public constructor(param0: java.util.List<com.here.sdk.analytics.internal.Variant>);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class VariantType {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.VariantType>;
						public static NULL_TYPE: com.here.sdk.analytics.internal.VariantType;
						public static INT64_TYPE: com.here.sdk.analytics.internal.VariantType;
						public static FLOAT64_TYPE: com.here.sdk.analytics.internal.VariantType;
						public static STRING_TYPE: com.here.sdk.analytics.internal.VariantType;
						public static BOOL_TYPE: com.here.sdk.analytics.internal.VariantType;
						public static MAP_TYPE: com.here.sdk.analytics.internal.VariantType;
						public static LIST_TYPE: com.here.sdk.analytics.internal.VariantType;
						public static valueOf(param0: string): com.here.sdk.analytics.internal.VariantType;
						public static values(): native.Array<com.here.sdk.analytics.internal.VariantType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class a extends com.here.sdk.analytics.internal.PlatformCalls {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.a>;
						public createLocationRequest(param0: com.here.sdk.analytics.internal.LocationRequestListener): com.here.sdk.analytics.internal.LocationRequest;
						public createDeferredCall(param0: com.here.sdk.analytics.internal.DeferredCallListener, param1: number): com.here.sdk.analytics.internal.DeferredCall;
						public getScreenHeight(): number;
						public getDeviceName(): string;
						public getLocale(): string;
						public logWarn(param0: string): void;
						public logInfo(param0: string): void;
						public isRoaming(): boolean;
						public getProductVersion(): string;
						public getDeviceId(): string;
						public a(): globalAndroid.content.Context;
						public getProductName(): string;
						public getIMEI(): string;
						public getMSISDN(): string;
						public getSystemName(): string;
						public getIMSI(): string;
						public getUUID(): string;
						public getScreenDensity(): number;
						public closeResources(): void;
						public getDeviceManufacturer(): string;
						public getTimezoneOffset(): number;
						public getProductBuild(): string;
						public createHttpClient(param0: string, param1: com.here.sdk.analytics.internal.HttpClientListener, param2: string): com.here.sdk.analytics.internal.HttpClient;
						public getScreenWidth(): number;
						public getCarrierInfo(): com.here.sdk.analytics.internal.CarrierInfo;
						public constructor(param0: globalAndroid.app.Application);
						public fetchNetworkInfo(): void;
						public getProductNamespace(): string;
						public keyValueStorage(): com.here.sdk.analytics.internal.KeyValueStorage;
						public logError(param0: string): void;
						public getBrowserUserAgent(): string;
						public getTimezone(): string;
						public constructor();
						public createSQLiteDatabaseConnect(param0: string, param1: com.here.sdk.analytics.internal.SQLiteDatabaseConnectListener): com.here.sdk.analytics.internal.SQLiteDatabaseConnect;
						public isSegmentDatabaseMigrationSupported(): boolean;
						public getAdvertisingId(): string;
						public getAppLifecycleListener(): com.here.sdk.analytics.internal.AppLifecycleListener;
						public getNetworkReachibilityStatus(): com.here.sdk.analytics.internal.NetworkReachibilityStatus;
						public setAppLifecycleListener(param0: com.here.sdk.analytics.internal.AppLifecycleListener): boolean;
						public getHardwareModel(): string;
						public getLibraryName(): string;
						public getAndroidId(): string;
						public getMEID(): string;
						public segmentDatabaseMigrator(): com.here.sdk.analytics.internal.SegmentDatabaseMigrator;
						public getHardwareMachine(): string;
						public getOSVersion(): string;
						public logDebug(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export module a {
						export abstract class a {
							public static class: java.lang.Class<com.here.sdk.analytics.internal.a.a>;
						}
						export module a {
							export class a {
								public static class: java.lang.Class<com.here.sdk.analytics.internal.a.a.a>;
								/**
								 * Constructs a new instance of the com.here.sdk.analytics.internal.a.a$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									a(param0: java.io.InputStream, param1: number): boolean;
								});
								public constructor();
								public a(param0: java.io.InputStream, param1: number): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export module a {
						export class b {
							public static class: java.lang.Class<com.here.sdk.analytics.internal.a.b>;
							public a(param0: number): void;
							public close(): void;
							public constructor(param0: java.io.File);
							public a(param0: com.here.sdk.analytics.internal.a.a.a): number;
							public b(): number;
							public c(): void;
							public toString(): string;
							public a(): boolean;
						}
						export module b {
							export class a {
								public static class: java.lang.Class<com.here.sdk.analytics.internal.a.b.a>;
								public toString(): string;
							}
							export class b {
								public static class: java.lang.Class<com.here.sdk.analytics.internal.a.b.b>;
								public read(param0: native.Array<number>, param1: number, param2: number): number;
								public read(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class b extends com.here.sdk.analytics.internal.DeferredCall {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.b>;
						public fireCall(): boolean;
						public isPending(): boolean;
						public cancelCall(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class c extends com.here.sdk.analytics.internal.EventData {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.c>;
						public getOptions(): java.util.HashMap<string,com.here.sdk.analytics.internal.Variant>;
						public getRoot(): java.util.HashMap<string,com.here.sdk.analytics.internal.Variant>;
						public constructor();
						public getType(): com.here.sdk.analytics.internal.EventType;
						public a(param0: string): void;
						public getProperties(): java.util.HashMap<string,com.here.sdk.analytics.internal.Variant>;
						public getTypeDescription(): string;
						public constructor(param0: com.here.sdk.analytics.internal.EventType);
						public getTraits(): java.util.HashMap<string,com.here.sdk.analytics.internal.Variant>;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class d extends com.here.sdk.analytics.internal.HttpClient {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.d>;
						public setHeaders(param0: java.util.HashMap<string,string>): void;
						public postString(param0: string): boolean;
						public setCompressed(param0: boolean): void;
						public get(): boolean;
						public isPending(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class e extends com.here.sdk.analytics.internal.KeyValueStorage {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.e>;
						public putStringWithKey(param0: string, param1: string): void;
						public constructor();
						public constructor(param0: globalAndroid.content.Context);
						public putIntWithKey(param0: string, param1: number): void;
						public putRealWithKey(param0: string, param1: number): void;
						public getStringByKey(param0: string): com.here.sdk.analytics.internal.OptionalString;
						public existsForKey(param0: string): boolean;
						public getRealByKey(param0: string): number;
						public removeByKey(param0: string): void;
						public getIntByKey(param0: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class f extends com.here.sdk.analytics.internal.LocationRequest {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.f>;
						public constructor();
						public start(): void;
						public stop(): void;
						public isPending(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: com.here.sdk.analytics.internal.LocationRequestListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class g {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.g>;
						public static a(param0: java.lang.Class): string;
						public static d(param0: string, param1: string): void;
						public static c(param0: string, param1: string): void;
						public static a(param0: string, param1: string): void;
						public static a(param0: com.here.sdk.analytics.internal.DebugOutputLevel): void;
						public static b(param0: string, param1: string): void;
						public static a(param0: string, param1: string, param2: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class h extends com.here.sdk.analytics.internal.SQLiteDatabaseConnect {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.h>;
						public constructor();
						public executeStatementForResult(param0: string): com.here.sdk.analytics.internal.SQLiteDatabaseStatementResult;
						public executeStatement(param0: string): boolean;
						public sqlEscapeString(param0: string): string;
						public closeDatabase(): boolean;
						public openDatabase(param0: boolean): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.here.sdk.analytics.internal.SQLiteDatabaseConnectListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module analytics {
				export module internal {
					export class i extends com.here.sdk.analytics.internal.SegmentDatabaseMigrator {
						public static class: java.lang.Class<com.here.sdk.analytics.internal.i>;
						public getHACVersion(): number;
						public close(): void;
						public open(param0: string): boolean;
						public readOldestRecords(param0: number): java.util.ArrayList<string>;
						public killDatabase(): void;
						public removeOldestRecords(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module hacwrapper {
				export class BuildConfig {
					public static class: java.lang.Class<com.here.sdk.hacwrapper.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module hacwrapper {
				export class HacAnalytics {
					public static class: java.lang.Class<com.here.sdk.hacwrapper.HacAnalytics>;
					public static setOptedOut(param0: boolean): void;
					public setLocation(param0: number, param1: number): void;
					public static identify(param0: string, param1: java.lang.Long, param2: java.lang.Integer): void;
					public static setScbeOverrideHostURL(param0: string): void;
					public static track(param0: string, param1: com.here.sdk.hacwrapper.HacProperties, param2: java.lang.Long, param3: java.lang.Integer): void;
					public static initialize(param0: com.here.sdk.hacwrapper.HacSettings): void;
					public static setOfflineMode(param0: boolean): void;
					public static trackWithoutAmplitude(param0: string, param1: com.here.sdk.hacwrapper.HacProperties): void;
					public static getAnonymousId(): string;
					public static flush(): void;
					public static disableLocation(): void;
					public static enableAutomaticLocation(): void;
					public static logout(): void;
					public static track(param0: string, param1: java.lang.Long, param2: java.lang.Integer): void;
					public static trackOnlyInAmplitude(param0: string, param1: com.here.sdk.hacwrapper.HacProperties, param2: java.lang.Long, param3: java.lang.Integer): void;
					public static sendNps(param0: com.here.sdk.hacwrapper.NpsObject, param1: java.lang.Long, param2: java.lang.Integer): void;
					public static enableManualLocation(): void;
					public static identify(param0: string, param1: com.here.sdk.hacwrapper.HacTraits, param2: java.lang.Long, param3: java.lang.Integer): void;
					public static isInitialized(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module hacwrapper {
				export class HacProperties {
					public static class: java.lang.Class<com.here.sdk.hacwrapper.HacProperties>;
					public constructor();
					public constructor(param0: org.json.JSONObject);
					public putValue(param0: string, param1: any): void;
					public constructor(param0: com.here.sdk.analytics.HEREAnalytics.Properties);
					public getProperties(): com.here.sdk.analytics.HEREAnalytics.Properties;
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module hacwrapper {
				export class HacSettings {
					public static class: java.lang.Class<com.here.sdk.hacwrapper.HacSettings>;
					public setFlushSize(param0: number): void;
					public getAnonymousId(): string;
					public getFlushSize(): number;
					public getFlushTime(): number;
					public setAnonymousId(param0: string): void;
					public setLogLevel(param0: com.here.sdk.hacwrapper.LoggingLevels): void;
					public getLogLevel(): com.here.sdk.hacwrapper.LoggingLevels;
					public setFlushTime(param0: number): void;
					public isFlushEnabledOnRoaming(): java.lang.Boolean;
					public constructor(param0: globalAndroid.content.Context, param1: string);
					public isOffline(): java.lang.Boolean;
					public getHEREAnalyticsConfiguration(): com.here.sdk.analytics.HEREAnalyticsConfiguration;
					public setOffline(param0: boolean): void;
					public setFlushEnabledWhileRoaming(param0: java.lang.Boolean): void;
					public setHasOptedOut(param0: java.lang.Boolean): void;
					public getContext(): globalAndroid.content.Context;
					public setUserId(param0: string): void;
					public getUserId(): string;
					public getWriteKey(): string;
					public hasOptedOut(): java.lang.Boolean;
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module hacwrapper {
				export class HacTraits {
					public static class: java.lang.Class<com.here.sdk.hacwrapper.HacTraits>;
					public constructor(param0: com.here.sdk.analytics.HEREAnalytics.Traits);
					public constructor();
					public getTraits(): com.here.sdk.analytics.HEREAnalytics.Traits;
					public putValue(param0: string, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module hacwrapper {
				export class HacUtils {
					public static class: java.lang.Class<com.here.sdk.hacwrapper.HacUtils>;
					public static fetchLegacyIds(param0: globalAndroid.content.Context, param1: string): com.here.sdk.hacwrapper.HacUtils.LegacyIds;
					public constructor();
					public static deleteLegacyIds(param0: globalAndroid.content.Context, param1: string): void;
				}
				export module HacUtils {
					export class LegacyIds {
						public static class: java.lang.Class<com.here.sdk.hacwrapper.HacUtils.LegacyIds>;
						public getUserId(): string;
						public getAnonymousId(): string;
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module hacwrapper {
				export class LoggingLevels {
					public static class: java.lang.Class<com.here.sdk.hacwrapper.LoggingLevels>;
					public static NONE: com.here.sdk.hacwrapper.LoggingLevels;
					public static BASIC: com.here.sdk.hacwrapper.LoggingLevels;
					public static INFO: com.here.sdk.hacwrapper.LoggingLevels;
					public static VERBOSE: com.here.sdk.hacwrapper.LoggingLevels;
					public static valueOf(param0: string): com.here.sdk.hacwrapper.LoggingLevels;
					public static values(): native.Array<com.here.sdk.hacwrapper.LoggingLevels>;
				}
			}
		}
	}
}

declare module com {
	export module here {
		export module sdk {
			export module hacwrapper {
				export class NpsObject {
					public static class: java.lang.Class<com.here.sdk.hacwrapper.NpsObject>;
					public getProjectId(): java.lang.Integer;
					public getVersion(): string;
					public getSourceId(): java.lang.Integer;
					public getCountryCode(): string;
					public getCountry(): string;
					public getState(): string;
					public getCity(): string;
					public getFeedback(): string;
					public getEmail(): string;
					public getScore(): java.lang.Integer;
					public getAllowContact(): java.lang.Boolean;
					public getProperties(): com.here.sdk.analytics.HEREAnalytics.Properties;
				}
				export module NpsObject {
					export class NPSBuilder {
						public static class: java.lang.Class<com.here.sdk.hacwrapper.NpsObject.NPSBuilder>;
						public sourceId(param0: java.lang.Integer): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
						public constructor();
						public projectId(param0: java.lang.Integer): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
						public state(param0: string): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
						public city(param0: string): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
						public allowContact(param0: java.lang.Boolean): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
						public countryCode(param0: string): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
						public email(param0: string): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
						public feedback(param0: string): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
						public score(param0: java.lang.Integer): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
						public build(): com.here.sdk.hacwrapper.NpsObject;
						public country(param0: string): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
						public version(param0: string): com.here.sdk.hacwrapper.NpsObject.NPSBuilder;
					}
				}
			}
		}
	}
}

//Generics information:
//com.here.android.mpa.internal.b:2
//com.here.android.mpa.internal.cd:2
//com.here.android.mpa.internal.ce:1
//com.here.android.mpa.internal.cl:1
//com.here.android.mpa.internal.dh:1
//com.here.android.mpa.internal.di:1
//com.here.android.mpa.internal.dk:1
//com.here.android.mpa.internal.dq:1
//com.here.android.mpa.internal.en:1
//com.here.android.mpa.internal.en.a:1
//com.here.android.mpa.internal.t:2
//com.here.android.mpa.search.MediaCollectionPage:1
//com.here.android.mpa.search.MediaCollectionPageRequest:1
//com.here.android.mpa.search.Request:1
//com.here.android.mpa.search.ResultListener:1
//com.here.sdk.analytics.VariantMap:1

