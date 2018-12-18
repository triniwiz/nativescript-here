
declare var CATEGORY_ACCOMODATION: string;

declare var CATEGORY_ADMINISTRATIVE_AREAS_BUILDINGS: string;

declare var CATEGORY_ATM_BANK_EXCHANGE: string;

declare var CATEGORY_EAT_DRINK: string;

declare var CATEGORY_GOING_OUT: string;

declare var CATEGORY_HOSPITAL_HEALTH_CARE_FACILITY: string;

declare var CATEGORY_LEISURE_OUTDOOR: string;

declare var CATEGORY_NATURAL_GEOGRAPHICAL: string;

declare var CATEGORY_NONE: string;

declare var CATEGORY_PETROL_STATION: string;

declare var CATEGORY_SHOPPING: string;

declare var CATEGORY_SIGHTS_MUSEUMS: string;

declare var CATEGORY_TOILET_REST_AREA: string;

declare var CATEGORY_TRANSPORT: string;

declare class NMAAddress extends NSObject {

	static alloc(): NMAAddress; // inherited from NSObject

	static new(): NMAAddress; // inherited from NSObject

	city: string;

	countryCode: string;

	countryName: string;

	county: string;

	district: string;

	floorNumber: string;

	formattedAddress: string;

	houseNumber: string;

	label: string;

	postalCode: string;

	state: string;

	street: string;

	suiteNumberOrName: string;

	additionalData(): NSDictionary<string, string>;
}

declare class NMAApplicationContext extends NSObject {

	static alloc(): NMAApplicationContext; // inherited from NSObject

	static new(): NMAApplicationContext; // inherited from NSObject

	static sdkVersion(): string;

	static setAppIdAppCode(appId: string, appCode: string): void;
}

declare class NMAAutoSuggest extends NSObject {

	static alloc(): NMAAutoSuggest; // inherited from NSObject

	static new(): NMAAutoSuggest; // inherited from NSObject

	readonly highlightedTitle: string;

	readonly title: string;

	readonly type: NMAAutoSuggestType;
}

declare class NMAAutoSuggestPlace extends NMAAutoSuggest {

	static alloc(): NMAAutoSuggestPlace; // inherited from NSObject

	static new(): NMAAutoSuggestPlace; // inherited from NSObject

	readonly boundingBox: NMAGeoBoundingBox;

	readonly category: string;

	readonly position: NMAGeoCoordinates;

	readonly vicinityDescription: string;

	placeDetailsRequest(): NMAPlaceRequest;
}

declare class NMAAutoSuggestQuery extends NMAAutoSuggest {

	static alloc(): NMAAutoSuggestQuery; // inherited from NSObject

	static new(): NMAAutoSuggestQuery; // inherited from NSObject

	readonly completion: string;

	autoSuggestionRequest(): NMAAutoSuggestionRequest;
}

declare class NMAAutoSuggestSearch extends NMAAutoSuggest {

	static alloc(): NMAAutoSuggestSearch; // inherited from NSObject

	static new(): NMAAutoSuggestSearch; // inherited from NSObject

	readonly boundingBox: NMAGeoBoundingBox;

	readonly category: string;

	readonly position: NMAGeoCoordinates;

	suggestedSearchRequest(): NMADiscoveryRequest;
}

declare const enum NMAAutoSuggestType {

	Unknown = 0,

	Place = 1,

	Search = 2,

	Query = 3
}

declare class NMAAutoSuggestionRequest extends NMARequest {

	static alloc(): NMAAutoSuggestionRequest; // inherited from NSObject

	static new(): NMAAutoSuggestionRequest; // inherited from NSObject

	textFormat: NMATextFormat;
}

declare class NMACategory extends NSObject {

	static alloc(): NMACategory; // inherited from NSObject

	static new(): NMACategory; // inherited from NSObject

	readonly iconUrl: string;

	readonly name: string;

	readonly parentCategory: NMACategory;

	readonly subCategories: NSArray<NMACategory>;

	readonly uniqueId: string;
}

declare class NMACategoryFilter extends NSObject {

	static alloc(): NMACategoryFilter; // inherited from NSObject

	static new(): NMACategoryFilter; // inherited from NSObject

	addCategoryFilterFromType(type: NMACategoryFilterType): void;

	addCategoryFilterFromUniqueId(uniqueId: string): void;

	toString(): string;
}

declare const enum NMACategoryFilterType {

	None = 0,

	Accommodation = 1,

	AdministrativeAreasBuildings = 2,

	EatDrink = 3,

	GoingOut = 4,

	LeisureOutdoor = 5,

	NaturalGeographical = 6,

	Shopping = 7,

	SightsMuseums = 8,

	Transport = 9,

	PetrolStation = 10,

	AtmBankExchange = 11,

	ToiletRestArea = 12,

	HospitalHealthCareFacility = 13
}

declare class NMACategoryGraphRequest extends NMARequest {

	static alloc(): NMACategoryGraphRequest; // inherited from NSObject

	static new(): NMACategoryGraphRequest; // inherited from NSObject
}

declare class NMAContactDetail extends NSObject {

	static alloc(): NMAContactDetail; // inherited from NSObject

	static new(): NMAContactDetail; // inherited from NSObject

	readonly label: string;

	readonly type: string;

	readonly value: string;
}

declare class NMADiscoveryLink extends NMALink {

	static alloc(): NMADiscoveryLink; // inherited from NSObject

	static new(): NMADiscoveryLink; // inherited from NSObject

	readonly request: NMADiscoveryRequest;
}

declare class NMADiscoveryPage extends NSObject {

	static alloc(): NMADiscoveryPage; // inherited from NSObject

	static new(): NMADiscoveryPage; // inherited from NSObject

	readonly available: number;

	readonly discoveryResults: NSArray<NMALink>;

	readonly nextPageRequest: NMADiscoveryRequest;

	readonly offsetCount: number;
}

declare class NMADiscoveryRequest extends NMARequest {

	static alloc(): NMADiscoveryRequest; // inherited from NSObject

	static new(): NMADiscoveryRequest; // inherited from NSObject

	textFormat: NMATextFormat;

	setSearchAreaWithCenterRadius(center: NMAGeoCoordinates, radius: number): void;
}

declare class NMAExtendedAttribute extends NSObject {

	static alloc(): NMAExtendedAttribute; // inherited from NSObject

	static new(): NMAExtendedAttribute; // inherited from NSObject

	readonly label: string;

	readonly text: string;

	readonly uniqueId: string;
}

declare class NMAGeoBoundingBox extends NSObject {

	static alloc(): NMAGeoBoundingBox; // inherited from NSObject

	static geoBoundingBoxContainingGeoBoundingBoxes(boundingBoxes: NSArray<NMAGeoBoundingBox> | NMAGeoBoundingBox[]): NMAGeoBoundingBox;

	static geoBoundingBoxContainingGeoCoordinates(coordinates: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): NMAGeoBoundingBox;

	static geoBoundingBoxWithCenterWidthHeight(center: NMAGeoCoordinates, width: number, height: number): NMAGeoBoundingBox;

	static geoBoundingBoxWithTopLeftBottomRight(topLeft: NMAGeoCoordinates, bottomRight: NMAGeoCoordinates): NMAGeoBoundingBox;

	static geoBoundingBoxWithTopRightBottomLeft(topRight: NMAGeoCoordinates, bottomLeft: NMAGeoCoordinates): NMAGeoBoundingBox;

	static new(): NMAGeoBoundingBox; // inherited from NSObject

	bottomLeft: NMAGeoCoordinates;

	bottomRight: NMAGeoCoordinates;

	readonly center: NMAGeoCoordinates;

	readonly crossesInternationalDateLine: boolean;

	readonly height: number;

	topLeft: NMAGeoCoordinates;

	topRight: NMAGeoCoordinates;

	readonly width: number;

	constructor(o: { topLeft: NMAGeoCoordinates; bottomRight: NMAGeoCoordinates; });

	containsGeoBoundingBox(boundingBox: NMAGeoBoundingBox): boolean;

	containsGeoCoordinates(coordinates: NMAGeoCoordinates): boolean;

	initWithTopLeftBottomRight(topLeft: NMAGeoCoordinates, bottomRight: NMAGeoCoordinates): this;

	intersectionWithGeoBoundingBox(boundingBox: NMAGeoBoundingBox): NMAGeoBoundingBox;

	intersectsGeoBoundingBox(boundingBox: NMAGeoBoundingBox): boolean;

	isEmpty(): boolean;

	isEqualToGeoBoundingBox(boundingBox: NMAGeoBoundingBox): boolean;
}

declare class NMAGeoCoordinates extends NSObject {

	static alloc(): NMAGeoCoordinates; // inherited from NSObject

	static geoCoordinatesWithLatitudeLongitude(latitude: number, longitude: number): NMAGeoCoordinates;

	static geoCoordinatesWithLatitudeLongitudeAltitude(latitude: number, longitude: number, altitude: number): NMAGeoCoordinates;

	static new(): NMAGeoCoordinates; // inherited from NSObject

	altitude: number;

	latitude: number;

	longitude: number;

	constructor(o: { latitude: number; longitude: number; });

	constructor(o: { latitude: number; longitude: number; altitude: number; });

	distanceTo(coordinates: NMAGeoCoordinates): number;

	headingTo(coordinates: NMAGeoCoordinates): number;

	initWithLatitudeLongitude(latitude: number, longitude: number): this;

	initWithLatitudeLongitudeAltitude(latitude: number, longitude: number, altitude: number): this;

	isEqualToGeoCoordinates(coordinates: NMAGeoCoordinates): boolean;
}

declare class NMAGeoPosition extends NSObject {

	static alloc(): NMAGeoPosition; // inherited from NSObject

	static geoPositionWithCLLocation(location: CLLocation): NMAGeoPosition;

	static geoPositionWithCoordinatesSpeedCourseAccuracy(coordinates: NMAGeoCoordinates, speed: number, course: number, accuracy: number): NMAGeoPosition;

	static geoPositionWithCoordinatesSpeedCourseAccuracyTimestamp(coordinates: NMAGeoCoordinates, speed: number, course: number, accuracy: number, timestamp: Date): NMAGeoPosition;

	static geoPositionWithCoordinatesSpeedCourseLatitudeAccuracyLongitudeAccuracyAltitudeAccuracyTimestamp(coordinates: NMAGeoCoordinates, speed: number, course: number, latitudeAccuracy: number, longitudeAccuracy: number, altitudeAccuracy: number, timestamp: Date): NMAGeoPosition;

	static new(): NMAGeoPosition; // inherited from NSObject

	readonly altitudeAccuracy: number;

	readonly coordinates: NMAGeoCoordinates;

	readonly course: number;

	readonly isValid: boolean;

	readonly latitudeAccuracy: number;

	readonly longitudeAccuracy: number;

	readonly speed: number;

	readonly timestamp: Date;
}

declare var NMAGeoPositionUnknownValue: number;

declare class NMAGeocodeRequest extends NMARequest {

	static alloc(): NMAGeocodeRequest; // inherited from NSObject

	static new(): NMAGeocodeRequest; // inherited from NSObject
}

declare class NMAGeocodeResult extends NSObject {

	static alloc(): NMAGeocodeResult; // inherited from NSObject

	static new(): NMAGeocodeResult; // inherited from NSObject

	readonly location: NMAPlaceLocation;

	readonly matchQuality: NSDictionary<string, number>;

	readonly relevance: number;
}

declare var NMAGeocodeResultInvalidRelevance: number;

declare class NMAGeocoder extends NSObject {

	static alloc(): NMAGeocoder; // inherited from NSObject

	static new(): NMAGeocoder; // inherited from NSObject

	static sharedGeocoder(): NMAGeocoder;

	createGeocodeRequestWithQuerySearchAreaLocationContext(query: string, searchArea: NMAGeoBoundingBox, geoCoordinates: NMAGeoCoordinates): NMAGeocodeRequest;

	createGeocodeRequestWithQuerySearchRadiusSearchCenter(query: string, searchRadius: number, geoCoordinates: NMAGeoCoordinates): NMAGeocodeRequest;

	createReverseGeocodeRequestWithGeoCoordinates(geoCoordinates: NMAGeoCoordinates): NMAReverseGeocodeRequest;
}

declare const enum NMALayoutPosition {

	TopLeft = 0,

	TopCenter = 1,

	TopRight = 2,

	CenterLeft = 3,

	Center = 4,

	CenterRight = 5,

	BottomLeft = 6,

	BottomCenter = 7,

	BottomRight = 8
}

declare class NMALink extends NSObject {

	static alloc(): NMALink; // inherited from NSObject

	static new(): NMALink; // inherited from NSObject

	readonly iconUrl: string;

	readonly name: string;

	readonly uniqueId: string;

	readonly url: string;
}

declare class NMAManeuver extends NSObject {

	static alloc(): NMAManeuver; // inherited from NSObject

	static new(): NMAManeuver; // inherited from NSObject

	readonly action: NMAManeuverAction;

	readonly coordinates: NMAGeoCoordinates;

	readonly distanceFromPreviousManeuver: number;

	readonly distanceFromStart: number;

	readonly distanceToNextManeuver: number;

	readonly icon: NMAManeuverIcon;

	readonly mapOrientation: number;

	readonly nextRoadName: string;

	readonly nextRoadNumber: string;

	readonly roadName: string;

	readonly roadNumber: string;

	readonly routeElements: NSArray<NMARouteElement>;

	readonly signpost: NMASignpost;

	readonly startTime: Date;

	readonly transportMode: NMATransportMode;

	readonly turn: NMAManeuverTurn;
}

declare const enum NMAManeuverAction {

	Undefined = 0,

	None = 1,

	End = 2,

	Stopover = 3,

	Junction = 4,

	Roundabout = 5,

	UTurn = 6,

	EnterHighwayFromRight = 7,

	EnterHighwayFromLeft = 8,

	EnterHighway = 9,

	LeaveHighway = 10,

	ChangeHighway = 11,

	ContinueHighway = 12,

	Ferry = 13,

	PassJunction = 14,

	Invalid = -1
}

declare const enum NMAManeuverIcon {

	Undefined = 0,

	GoStraight = 1,

	UTurnRight = 2,

	UTurnLeft = 3,

	KeepRight = 4,

	LightRight = 5,

	QuiteRight = 6,

	HeavyRight = 7,

	KeepMiddle = 8,

	KeepLeft = 9,

	LightLeft = 10,

	QuiteLeft = 11,

	HeavyLeft = 12,

	EnterHighwayRightLane = 13,

	EnterHighwayLeftLane = 14,

	LeaveHighwayRightLane = 15,

	LeaveHighwayLeftLane = 16,

	HighwayKeepRight = 17,

	HighwayKeepLeft = 18,

	Roundabout1 = 19,

	Roundabout2 = 20,

	Roundabout3 = 21,

	Roundabout4 = 22,

	Roundabout5 = 23,

	Roundabout6 = 24,

	Roundabout7 = 25,

	Roundabout8 = 26,

	Roundabout9 = 27,

	Roundabout10 = 28,

	Roundabout11 = 29,

	Roundabout12 = 30,

	Roundabout1LH = 31,

	Roundabout2LH = 32,

	Roundabout3LH = 33,

	Roundabout4LH = 34,

	Roundabout5LH = 35,

	Roundabout6LH = 36,

	Roundabout7LH = 37,

	Roundabout8LH = 38,

	Roundabout9LH = 39,

	Roundabout10LH = 40,

	Roundabout11LH = 41,

	Roundabout12LH = 42,

	Start = 43,

	End = 44,

	Ferry = 45
}

declare const enum NMAManeuverTrafficDirection {

	Left = 0,

	Right = 1
}

declare const enum NMAManeuverTurn {

	Undefined = 0,

	None = 1,

	KeepMiddle = 2,

	KeepRight = 3,

	LightRight = 4,

	QuiteRight = 5,

	HeavyRight = 6,

	KeepLeft = 7,

	LightLeft = 8,

	QuiteLeft = 9,

	HeavyLeft = 10,

	Return = 11,

	Roundabout1 = 12,

	Roundabout2 = 13,

	Roundabout3 = 14,

	Roundabout4 = 15,

	Roundabout5 = 16,

	Roundabout6 = 17,

	Roundabout7 = 18,

	Roundabout8 = 19,

	Roundabout9 = 20,

	Roundabout10 = 21,

	Roundabout11 = 22,

	Roundabout12 = 23
}

declare const enum NMAMapAnimation {

	Linear = 0,

	None = 1
}

declare class NMAMapCircle extends NMAMapObject {

	static alloc(): NMAMapCircle; // inherited from NSObject

	static mapCircleWithGeoCoordinates(coordinates: NMAGeoCoordinates): NMAMapCircle;

	static mapCircleWithGeoCoordinatesRadius(coordinates: NMAGeoCoordinates, radius: number): NMAMapCircle;

	static new(): NMAMapCircle; // inherited from NSObject

	center: NMAGeoCoordinates;

	fillColor: UIColor;

	lineColor: UIColor;

	lineWidth: number;

	radius: number;

	constructor(o: { geoCoordinates: NMAGeoCoordinates; });

	constructor(o: { geoCoordinates: NMAGeoCoordinates; radius: number; });

	initWithGeoCoordinates(coordinates: NMAGeoCoordinates): this;

	initWithGeoCoordinatesRadius(coordinates: NMAGeoCoordinates, radius: number): this;
}

declare class NMAMapContainer extends NMAMapObject {

	static alloc(): NMAMapContainer; // inherited from NSObject

	static new(): NMAMapContainer; // inherited from NSObject

	readonly mapObjects: NSArray<NMAMapObject>;

	addMapObject(aMapObject: NMAMapObject): boolean;

	removeAllMapObjects(): boolean;

	removeMapObject(aMapObject: NMAMapObject): boolean;
}

interface NMAMapGestureDelegate extends NSObjectProtocol {

	mapViewDidReceiveDoubleTapAtLocation?(mapView: NMAMapView, location: CGPoint): void;

	mapViewDidReceiveLongPressAtLocation?(mapView: NMAMapView, location: CGPoint): void;

	mapViewDidReceivePanAtLocation?(mapView: NMAMapView, translation: CGPoint, location: CGPoint): void;

	mapViewDidReceivePinchAtLocation?(mapView: NMAMapView, pinch: number, location: CGPoint): void;

	mapViewDidReceiveTapAtLocation?(mapView: NMAMapView, location: CGPoint): void;

	mapViewDidReceiveTwoFingerTapAtLocation?(mapView: NMAMapView, location: CGPoint): void;
}
declare var NMAMapGestureDelegate: {

	prototype: NMAMapGestureDelegate;
};

declare const enum NMAMapGestureType {

	DoubleTap = 1,

	LongPress = 2,

	Pan = 4,

	Pinch = 8,

	Tap = 32,

	TwoFingerTap = 128,

	All = 255
}

declare class NMAMapInfoBubbleCustomizationContext extends NSObject {

	static alloc(): NMAMapInfoBubbleCustomizationContext; // inherited from NSObject

	static new(): NMAMapInfoBubbleCustomizationContext; // inherited from NSObject

	bubbleAlpha: number;

	bubbleCornerRadius: number;

	bubbleFillColor: UIColor;

	bubbleLeftRightMargin: number;

	bubbleLineWidth: number;

	bubbleMaxWidth: number;

	bubblePadding: number;

	bubbleStrokeColor: UIColor;

	bubbleTailHeight: number;

	bubbleTailWidth: number;

	descriptionLabel: UILabel;

	titleLabel: UILabel;
}

declare class NMAMapInfoBubbleCustomizer extends NSObject {

	static alloc(): NMAMapInfoBubbleCustomizer; // inherited from NSObject

	static customize(context: NMAMapInfoBubbleCustomizationContext): void;

	static new(): NMAMapInfoBubbleCustomizer; // inherited from NSObject
}

declare class NMAMapMarker extends NMAMapObject {

	static alloc(): NMAMapMarker; // inherited from NSObject

	static mapMarkerWithGeoCoordinates(coordinates: NMAGeoCoordinates): NMAMapMarker;

	static mapMarkerWithGeoCoordinatesImage(coordinates: NMAGeoCoordinates, image: UIImage): NMAMapMarker;

	static new(): NMAMapMarker; // inherited from NSObject

	anchorOffset: CGPoint;

	coordinates: NMAGeoCoordinates;

	icon: UIImage;

	infoBubbleEventBlock: () => void;

	textDescription: string;

	title: string;

	constructor(o: { geoCoordinates: NMAGeoCoordinates; });

	constructor(o: { geoCoordinates: NMAGeoCoordinates; image: UIImage; });

	hideInfoBubble(): boolean;

	initWithGeoCoordinates(coordinates: NMAGeoCoordinates): this;

	initWithGeoCoordinatesImage(coordinates: NMAGeoCoordinates, image: UIImage): this;

	setAnchorOffsetUsingLayoutPosition(position: NMALayoutPosition): CGPoint;

	showInfoBubble(): boolean;
}

declare class NMAMapObject extends NSObject {

	static alloc(): NMAMapObject; // inherited from NSObject

	static new(): NMAMapObject; // inherited from NSObject

	readonly parent: NMAMapContainer;

	readonly type: NMAMapObjectType;

	visible: boolean;

	zIndex: number;

	isVisibleAtZoomLevel(zoomLevel: number): boolean;

	setVisibilityAtZoomLevel(visible: boolean, zoomLevel: number): void;

	setVisibilityFromZoomLevelToZoomLevel(visible: boolean, fromZoomLevel: number, toZoomLevel: number): void;

	uniqueId(): number;
}

declare var NMAMapObjectMaximumZIndex: number;

declare var NMAMapObjectMinimumZIndex: number;

declare const enum NMAMapObjectType {

	Marker = 0,

	Polygon = 1,

	Polyline = 2,

	Route = 3,

	Container = 4,

	Circle = 5,

	Reserved = 6,

	Unknown = 7
}

declare const enum NMAMapPPI {

	Low = 0,

	High = 1,

	Reserved = 2
}

declare class NMAMapPolygon extends NMAMapObject {

	static alloc(): NMAMapPolygon; // inherited from NSObject

	static mapPolygonWithVertices(vertices: NSArray<any> | any[]): NMAMapPolygon;

	static new(): NMAMapPolygon; // inherited from NSObject

	fillColor: UIColor;

	lineColor: UIColor;

	lineWidth: number;

	readonly vertices: NSArray<NMAGeoCoordinates>;

	constructor(o: { vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]; });

	addVertexAtIndex(vertex: NMAGeoCoordinates, index: number): void;

	appendVertex(vertex: NMAGeoCoordinates): void;

	clearVertices(): void;

	containsGeoCoordinates(coordinates: NMAGeoCoordinates): boolean;

	initWithVertices(vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): this;

	isValid(): boolean;

	removeLastVertex(): void;

	removeVertexAtIndex(index: number): void;
}

declare class NMAMapPolyline extends NMAMapObject {

	static alloc(): NMAMapPolyline; // inherited from NSObject

	static mapPolylineWithVertices(vertices: NSArray<any> | any[]): NMAMapPolyline;

	static new(): NMAMapPolyline; // inherited from NSObject

	lineColor: UIColor;

	lineWidth: number;

	readonly vertices: NSArray<NMAGeoCoordinates>;

	constructor(o: { vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]; });

	addVertexAtIndex(vertex: NMAGeoCoordinates, index: number): void;

	appendVertex(vertex: NMAGeoCoordinates): void;

	clearVertices(): void;

	indexOfNearestVertexToGeoCoordinates(coordinates: NMAGeoCoordinates): number;

	initWithVertices(vertices: NSArray<NMAGeoCoordinates> | NMAGeoCoordinates[]): this;

	nearestVertexToGeoCoordinates(coordinates: NMAGeoCoordinates): NMAGeoCoordinates;

	removeLastVertex(): void;

	removeVertexAtIndex(index: number): void;
}

declare class NMAMapRoute extends NMAMapObject {

	static alloc(): NMAMapRoute; // inherited from NSObject

	static mapRouteWithRoute(route: NMARoute): NMAMapRoute;

	static new(): NMAMapRoute; // inherited from NSObject

	color: UIColor;

	maneuverNumberDisplayed: boolean;

	route: NMARoute;
}

declare class NMAMapScheme extends NSObject {

	static alloc(): NMAMapScheme; // inherited from NSObject

	static isValid(scheme: string): boolean;

	static new(): NMAMapScheme; // inherited from NSObject
}

declare var NMAMapSchemeHybridDay: string;

declare var NMAMapSchemeNormalDay: string;

declare var NMAMapSchemeNormalNight: string;

declare var NMAMapSchemePedestrianDay: string;

declare var NMAMapSchemePedestrianNight: string;

declare var NMAMapSchemeReducedDay: string;

declare var NMAMapSchemeReducedNight: string;

declare var NMAMapSchemeSatelliteDay: string;

declare var NMAMapSchemeTerrainDay: string;

declare class NMAMapTileLayer extends NSObject {

	static alloc(): NMAMapTileLayer; // inherited from NSObject

	static new(): NMAMapTileLayer; // inherited from NSObject

	boundingBox: NMAGeoBoundingBox;

	readonly cacheEnabled: boolean;

	readonly cacheIdentifier: string;

	cacheSizeLimit: number;

	cacheTimeToLive: number;

	dataSource: NMAMapTileLayerDataSource;

	readonly locked: boolean;

	zIndex: number;

	clearCache(): void;

	hideAtZoomLevel(zoomLevel: number): void;

	hideFromZoomLevelToZoomLevel(fromLevel: number, toLevel: number): void;

	isShownAtZoomLevel(zoomLevel: number): boolean;

	setCacheEnabledWithIdentifier(enabled: boolean, identifier: string): void;

	showAtZoomLevel(zoomLevel: number): void;

	showFromZoomLevelToZoomLevel(fromLevel: number, toLevel: number): void;
}

interface NMAMapTileLayerDataSource extends NSObjectProtocol {

	mapTileLayerHasTileAtXYZoomLevel?(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number): boolean;

	mapTileLayerRequestDataForTileAtXYZoomLevel?(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number): NSData;

	mapTileLayerUrlForTileAtXYZoomLevel?(mapTileLayer: NMAMapTileLayer, x: number, y: number, zoomLevel: number): string;
}
declare var NMAMapTileLayerDataSource: {

	prototype: NMAMapTileLayerDataSource;
};

declare class NMAMapView extends UIView {

	static alloc(): NMAMapView; // inherited from NSObject

	static appearance(): NMAMapView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NMAMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NMAMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NMAMapView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NMAMapView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NMAMapView; // inherited from UIAppearance

	static new(): NMAMapView; // inherited from NSObject

	static shouldBeginRenderingAutomatically(enabled: boolean): void;

	readonly boundingBox: NMAGeoBoundingBox;

	copyrightLogoHorizontalMargin: number;

	copyrightLogoPosition: NMALayoutPosition;

	copyrightLogoVerticalMargin: number;

	delegate: NMAMapViewDelegate;

	readonly displayLanguage: string;

	geoCenter: NMAGeoCoordinates;

	gestureDelegate: NMAMapGestureDelegate;

	kineticPanningEnabled: boolean;

	longPressDuration: number;

	mapCenterFixedOnZoom: boolean;

	mapInteractionEnabled: boolean;

	mapPPI: NMAMapPPI;

	mapScheme: string;

	readonly positionIndicator: NMAPositionIndicator;

	renderAllowed: boolean;

	readonly secondaryDisplayLanguage: string;

	transformCenter: CGPoint;

	useHighResolutionMap: boolean;

	zoomLevel: number;

	addMapObject(object: NMAMapObject): boolean;

	addMapObjects(objects: NSArray<NMAMapObject> | NMAMapObject[]): boolean;

	addMapTileLayer(tileLayer: NMAMapTileLayer): void;

	disableMapGestures(gestures: number): void;

	enableMapGestures(gestures: number): void;

	geoCoordinatesFromPoint(point: CGPoint): NMAGeoCoordinates;

	isMapGestureEnabled(gesture: NMAMapGestureType): boolean;

	mapTileLayers(): NSArray<NMAMapTileLayer>;

	objectsAtPoint(point: CGPoint): NSArray<NMAMapObject>;

	pointDistanceFromGeoCoordinatesToGeoCoordinates(startCoordinates: NMAGeoCoordinates, endCoordinates: NMAGeoCoordinates): number;

	pointFromGeoCoordinates(coordinates: NMAGeoCoordinates): CGPoint;

	removeMapObject(object: NMAMapObject): boolean;

	removeMapObjects(objects: NSArray<NMAMapObject> | NMAMapObject[]): boolean;

	removeMapTileLayer(tileLayer: NMAMapTileLayer): void;

	setBoundingBoxInsideRectWithAnimation(boundingBox: NMAGeoBoundingBox, screenRect: CGRect, animationType: NMAMapAnimation): void;

	setBoundingBoxWithAnimation(boundingBox: NMAGeoBoundingBox, animationType: NMAMapAnimation): void;

	setGeoCenterWithAnimation(geoCenter: NMAGeoCoordinates, animationType: NMAMapAnimation): void;

	setGeoCenterZoomLevelWithAnimation(geoCenter: NMAGeoCoordinates, zoomLevel: number, animationType: NMAMapAnimation): void;

	setGeoCoordinatesToPointWithAnimation(coordinates: NMAGeoCoordinates, point: CGPoint, animation: NMAMapAnimation): void;

	setGeoCoordinatesToPointWithAnimationZoomLevel(coordinates: NMAGeoCoordinates, point: CGPoint, animation: NMAMapAnimation, zoomLevel: number): void;

	setZoomLevelWithAnimation(zoomLevel: number, animationType: NMAMapAnimation): void;

	useDefaultDisplayLanguage(): boolean;

	useDisplayLanguageFromLocale(locale: NSLocale): boolean;

	useSecondaryDisplayLanguageFromLocale(locale: NSLocale): boolean;

	visibleObjectsAtPoint(point: CGPoint): NSArray<NMAMapObject>;
}

interface NMAMapViewDelegate extends NSObjectProtocol {

	mapViewDidBeginAnimation?(mapView: NMAMapView): void;

	mapViewDidBeginMovement?(mapView: NMAMapView): void;

	mapViewDidDraw?(mapView: NMAMapView): void;

	mapViewDidEndAnimation?(mapView: NMAMapView): void;

	mapViewDidEndMovement?(mapView: NMAMapView): void;

	mapViewDidSelectObjects?(mapView: NMAMapView, objects: NSArray<NMAMapObject> | NMAMapObject[]): void;
}
declare var NMAMapViewDelegate: {

	prototype: NMAMapViewDelegate;
};

declare var NMAMapViewMaximumZoomLevel: number;

declare var NMAMapViewMinimumZoomLevel: number;

declare var NMAMapViewPreserveValue: number;

declare class NMAMedia extends NSObject {

	static alloc(): NMAMedia; // inherited from NSObject

	static new(): NMAMedia; // inherited from NSObject

	readonly attributionText: string;

	readonly supplierLink: NMALink;

	readonly type: NMAMediaType;

	readonly viaLink: NMALink;
}

declare class NMAMediaCollectionPage extends NSObject {

	static alloc(): NMAMediaCollectionPage; // inherited from NSObject

	static new(): NMAMediaCollectionPage; // inherited from NSObject

	readonly available: number;

	readonly mediaContents: NSArray<NMAMedia>;

	readonly nextPageRequest: NMAMediaCollectionPageRequest;

	readonly offsetCount: number;

	readonly type: NMAMediaType;
}

declare class NMAMediaCollectionPageRequest extends NMARequest {

	static alloc(): NMAMediaCollectionPageRequest; // inherited from NSObject

	static new(): NMAMediaCollectionPageRequest; // inherited from NSObject
}

declare class NMAMediaEditorial extends NMAMedia {

	static alloc(): NMAMediaEditorial; // inherited from NSObject

	static new(): NMAMediaEditorial; // inherited from NSObject

	readonly languageCode: string;
}

declare class NMAMediaImage extends NMAMedia {

	static alloc(): NMAMediaImage; // inherited from NSObject

	static new(): NMAMediaImage; // inherited from NSObject

	readonly imageSource: string;

	readonly uniqueId: string;

	readonly user: NMALink;

	URLForImageWithWidthHeight(width: number, height: number): string;
}

declare class NMAMediaRating extends NMAMedia {

	static alloc(): NMAMediaRating; // inherited from NSObject

	static new(): NMAMediaRating; // inherited from NSObject

	readonly average: number;

	readonly count: number;
}

declare class NMAMediaReview extends NMAMedia {

	static alloc(): NMAMediaReview; // inherited from NSObject

	static new(): NMAMediaReview; // inherited from NSObject

	readonly contributionDate: Date;

	readonly contributor: NMALink;

	readonly languageCode: string;

	readonly rating: number;

	readonly title: string;
}

declare const enum NMAMediaType {

	Unknown = 0,

	Editorial = 1,

	Image = 2,

	Review = 3,

	Rating = 4
}

declare class NMAPlace extends NSObject {

	static alloc(): NMAPlace; // inherited from NSObject

	static new(): NMAPlace; // inherited from NSObject

	readonly alternativeNames: NSDictionary<string, string>;

	readonly attributionText: string;

	readonly categories: NSArray<NMACategory>;

	readonly contacts: NSArray<NMAContactDetail>;

	readonly editorials: NMAMediaCollectionPage;

	readonly extendedAttributes: NSArray<NMAExtendedAttribute>;

	readonly iconUrl: string;

	readonly images: NMAMediaCollectionPage;

	readonly location: NMAPlaceLocation;

	readonly name: string;

	readonly ratings: NMAMediaCollectionPage;

	readonly related: NSDictionary<string, NMALink>;

	readonly reportingLink: NMALink;

	readonly reviews: NMAMediaCollectionPage;

	readonly supplier: NMALink;

	readonly uniqueId: string;

	readonly userRatings: NMARatings;

	readonly viewUrl: string;

	referenceIdentifiersForSource(source: string): NSArray<string>;
}

declare class NMAPlaceLink extends NMALink {

	static alloc(): NMAPlaceLink; // inherited from NSObject

	static new(): NMAPlaceLink; // inherited from NSObject

	readonly averageRating: number;

	readonly boundingBox: NMAGeoBoundingBox;

	readonly category: NMACategory;

	readonly distance: number;

	readonly isSponsored: boolean;

	readonly position: NMAGeoCoordinates;

	readonly vicinityDescription: string;

	detailsRequest(): NMAPlaceRequest;

	referenceIdentifiersForSource(source: string): NSArray<string>;
}

declare class NMAPlaceLocation extends NSObject {

	static alloc(): NMAPlaceLocation; // inherited from NSObject

	static new(): NMAPlaceLocation; // inherited from NSObject

	address: NMAAddress;

	boundingBox: NMAGeoBoundingBox;

	label: string;

	locationId: string;

	position: NMAGeoCoordinates;

	referenceIdentifiersForSource(source: string): NSArray<string>;
}

declare class NMAPlaceRequest extends NMARequest {

	static alloc(): NMAPlaceRequest; // inherited from NSObject

	static new(): NMAPlaceRequest; // inherited from NSObject

	textFormat: NMATextFormat;

	addContent(content: string): void;

	addImageSizeWithWidthHeight(width: number, height: number): void;
}

declare class NMAPlaces extends NSObject {

	static alloc(): NMAPlaces; // inherited from NSObject

	static new(): NMAPlaces; // inherited from NSObject

	static sharedPlaces(): NMAPlaces;

	createAutoSuggestionRequestWithLocationPartialTerm(location: NMAGeoCoordinates, partialTerm: string): NMAAutoSuggestionRequest;

	createAutoSuggestionRequestWithLocationPartialTermResultType(location: NMAGeoCoordinates, partialTerm: string, resultType: NMAPlacesAutoSuggestionResultType): NMAAutoSuggestionRequest;

	createExploreRequestWithLocationSearchAreaFilters(location: NMAGeoCoordinates, geoArea: NMAGeoBoundingBox, filters: NMACategoryFilter): NMADiscoveryRequest;

	createHereRequestWithLocationFilters(location: NMAGeoCoordinates, filters: NMACategoryFilter): NMADiscoveryRequest;

	createLookupRequestWithReferenceIdentifierInSource(referenceIdentifier: string, source: string): NMAPlaceRequest;

	createSearchRequestWithLocationQuery(location: NMAGeoCoordinates, query: string): NMADiscoveryRequest;

	refreshTopLevelCategoriesWithCompletion(completionBlock: (p1: NSArray<NMACategory>, p2: NSError) => void): void;

	topLevelCategories(): NSArray<NMACategory>;
}

declare const enum NMAPlacesAutoSuggestionResultType {

	Address = 1,

	Place = 2,

	Category = 4,

	Chain = 8,

	Query = 16
}

declare var NMAPlacesContentWikipedia: string;

declare var NMAPlacesSourceBuilding: string;

declare var NMAPlacesSourcePVID: string;

declare var NMAPlacesSourceSharing: string;

declare var NMAPlacesSourceVenuesAll: string;

declare var NMAPlacesSourceVenuesContent: string;

declare var NMAPlacesSourceVenuesDestination: string;

declare var NMAPlacesSourceVenuesVenue: string;

declare class NMAPositionIndicator extends NSObject {

	static alloc(): NMAPositionIndicator; // inherited from NSObject

	static new(): NMAPositionIndicator; // inherited from NSObject

	accuracyIndicatorColor: UIColor;

	accuracyIndicatorVisible: boolean;

	visible: boolean;
}

declare class NMAPositioningManager extends NSObject {

	static alloc(): NMAPositioningManager; // inherited from NSObject

	static new(): NMAPositioningManager; // inherited from NSObject

	static sharedPositioningManager(): NMAPositioningManager;

	readonly active: boolean;

	readonly currentPosition: NMAGeoPosition;

	readonly rawPosition: NMAGeoPosition;

	startPositioning(): boolean;

	stopPositioning(): void;
}

declare var NMAPositioningManagerDidLosePositionNotification: string;

declare var NMAPositioningManagerDidUpdatePositionNotification: string;

declare class NMARatings extends NSObject {

	static alloc(): NMARatings; // inherited from NSObject

	static new(): NMARatings; // inherited from NSObject

	readonly average: number;

	readonly count: number;
}

declare class NMARequest extends NSObject {

	static alloc(): NMARequest; // inherited from NSObject

	static new(): NMARequest; // inherited from NSObject

	collectionSize: number;

	languagePreference: string;

	readonly sources: NSArray<string>;

	userTag: string;

	viewport: NMAGeoBoundingBox;

	addSource(source: string): void;

	cancel(): boolean;

	startWithBlock(aBlock: (p1: NMARequest, p2: any, p3: NSError) => void): NSError;

	startWithListener(aSearchEventListener: NMAResultListener): NSError;
}

declare const enum NMARequestError {

	None = 0,

	Unknown = 1,

	AddressMissing = 2,

	LocationContextInvalid = 3,

	LocationContextMissing = 4,

	CountryCodeMissing = 5,

	SearchTextMissing = 6,

	InvalidParameter = 7,

	NetworkCommunication = 8,

	NetworkServer = 9,

	NetworkEmptyInput = 10,

	InvalidCredentials = 11,

	Http = 12,

	NetworkUnknown = 13,

	NotSupported = 14,

	NotReady = 15,

	NotFound = 16,

	AlreadyExists = 17,

	OutOfMemory = 18,

	OperationFailed = 19,

	Aborted = 20,

	FinderIndexFailure = 21,

	MovedPermanently = 22,

	NotModified = 23,

	BadRequest = 24,

	ResourceGone = 25,

	Parse = 26,

	Timeout = 27
}

interface NMAResultListener extends NSObjectProtocol {

	requestDidCompleteWithDataError(request: NMARequest, data: any, error: NSError): void;
}
declare var NMAResultListener: {

	prototype: NMAResultListener;
};

declare class NMAReverseGeocodeRequest extends NMARequest {

	static alloc(): NMAReverseGeocodeRequest; // inherited from NSObject

	static new(): NMAReverseGeocodeRequest; // inherited from NSObject
}

declare class NMAReverseGeocodeResult extends NSObject {

	static alloc(): NMAReverseGeocodeResult; // inherited from NSObject

	static new(): NMAReverseGeocodeResult; // inherited from NSObject

	readonly distance: number;

	readonly location: NMAPlaceLocation;
}

declare var NMAReverseGeocodeResultInvalidDistance: number;

declare class NMARoadElement extends NSObject {

	static alloc(): NMARoadElement; // inherited from NSObject

	static new(): NMARoadElement; // inherited from NSObject

	readonly abbreviatedName: string;

	readonly attributes: number;

	readonly averageSpeed: number;

	readonly numberOfLanes: number;

	readonly pluralType: NMARoadElementPluralType;

	readonly roadName: string;

	readonly speedLimit: number;

	readonly type: NMARoadElementType;

	readonly uniqueId: string;
}

declare const enum NMARoadElementAttribute {

	Undefined = 0,

	DirtRoad = 256,

	UsageFeeRequired = 512,

	Carpool = 1024,

	Urban = 2048,

	Tollroad = 4096,

	NoThroughTraffic = 8192,

	Tunnel = 16384,

	Sliproad = 262144,

	Highway = 524288,

	UnderConstruction = 1048576,

	HasLaneDir = 2097152,

	HasLaneExit = 4194304,

	Ferry = 8388608,

	RailFerry = 16777216
}

declare const enum NMARoadElementPluralType {

	None = 0,

	Maneuver = 1,

	Connector = 2,

	Indeterminate = 3
}

declare const enum NMARoadElementType {

	Undefined = 0,

	Motorway = 1,

	MultiCarriageway = 2,

	SingleCarriageway = 3,

	Roundabout = 4,

	Sliproad = 5,

	PedestrianZone = 6,

	PedestrianWalkway = 7,

	ServiceAccessParking = 8,

	ServiceAccessOther = 9,

	ServiceRoad = 10
}

declare class NMARoute extends NSObject {

	static alloc(): NMARoute; // inherited from NSObject

	static new(): NMARoute; // inherited from NSObject

	readonly boundingBox: NMAGeoBoundingBox;

	readonly destination: NMAWaypoint;

	readonly length: number;

	readonly maneuvers: NSArray<NMAManeuver>;

	readonly mapPolyline: NMAMapPolyline;

	readonly routingMode: NMARoutingMode;

	readonly start: NMAWaypoint;

	readonly sublegCount: number;

	readonly tta: NMARouteTta;

	userTag: string;

	readonly waypoints: NSArray<NMAWaypoint>;

	ttaForSubleg(subleg: number): NMARouteTta;
}

declare const enum NMARouteDurationDetail {

	Accurate = 0,

	BlockedRoad = 1,

	CarPool = 2,

	RestrictedTurn = 4
}

declare class NMARouteElement extends NSObject {

	static alloc(): NMARouteElement; // inherited from NSObject

	static new(): NMARouteElement; // inherited from NSObject

	readonly roadElement: NMARoadElement;

	readonly type: NMARouteElementType;
}

declare const enum NMARouteElementType {

	Road = 1,

	Invalid = 2
}

declare class NMARouteManager extends NSObject {

	static alloc(): NMARouteManager; // inherited from NSObject

	static new(): NMARouteManager; // inherited from NSObject

	static sharedRouteManager(): NMARouteManager;

	readonly busy: boolean;

	delegate: NMARouteManagerDelegate;

	calculateRouteWithStops(stops: NSArray<any> | any[]): boolean;

	calculateRouteWithStopsRoutingMode(stops: NSArray<any> | any[], mode: NMARoutingMode): boolean;

	cancel(): boolean;
}

interface NMARouteManagerDelegate extends NSObjectProtocol {

	routeManagerDidCalculateRoutesWithErrorViolatedOptions(routeManager: NMARouteManager, routes: NSArray<NMARoute> | NMARoute[], error: NMARouteManagerError, violatedOptions: NSArray<number> | number[]): void;

	routeManagerDidUpdateProgress?(routeManager: NMARouteManager, progress: number): void;
}
declare var NMARouteManagerDelegate: {

	prototype: NMARouteManagerDelegate;
};

declare const enum NMARouteManagerError {

	None = 0,

	Unknown = 1,

	OutOfMemory = 2,

	InvalidParameters = 3,

	InvalidOperation = 4,

	GraphDisconnected = 5,

	GraphDisconnectedCheckOptions = 6,

	NoStartPoint = 7,

	NoEndPoint = 8,

	NoEndPointCheckOptions = 9,

	CannotDoPedestrian = 10,

	RoutingCancelled = 11,

	ViolatesOptions = 12,

	RouteCorrupted = 13,

	InvalidCredentials = 14
}

declare var NMARouteManagerMaximumStopsCount: number;

declare var NMARouteManagerMiniumStopsCount: number;

declare var NMARouteSublegWhole: number;

declare class NMARouteTta extends NSObject {

	static alloc(): NMARouteTta; // inherited from NSObject

	static new(): NMARouteTta; // inherited from NSObject

	readonly blocked: boolean;

	readonly details: NMARouteDurationDetail;

	readonly duration: number;
}

declare const enum NMARouteViolatedOption {

	None = 0,

	BlockedRoad = 256,

	TurnRestriction = 512
}

declare class NMARoutingMode extends NSObject {

	static alloc(): NMARoutingMode; // inherited from NSObject

	static new(): NMARoutingMode; // inherited from NSObject

	departureTime: Date;

	resultLimit: number;

	routingOptions: number;

	routingType: NMARoutingType;

	transportMode: NMATransportMode;

	constructor(o: { routingType: NMARoutingType; transportMode: NMATransportMode; routingOptions: number; });

	initWithRoutingTypeTransportModeRoutingOptions(routingType: NMARoutingType, transportMode: NMATransportMode, routingOptions: number): this;
}

declare const enum NMARoutingOption {

	AvoidBoatFerry = 1,

	AvoidDirtRoad = 2,

	AvoidHighway = 4,

	AvoidPark = 8,

	AvoidTollRoad = 16,

	AvoidTunnel = 32,

	AvoidCarShuttleTrain = 64,

	AvoidCarpool = 128
}

declare const enum NMARoutingType {

	Shortest = 0,

	Fastest = 1
}

declare class NMASignpost extends NSObject {

	static alloc(): NMASignpost; // inherited from NSObject

	static new(): NMASignpost; // inherited from NSObject

	readonly exitText: string;
}

declare const enum NMATextFormat {

	HTML = 0,

	Plain = 1
}

declare const enum NMATransportMode {

	Car = 0,

	Pedestrian = 1
}

declare class NMAWaypoint extends NSObject {

	static alloc(): NMAWaypoint; // inherited from NSObject

	static new(): NMAWaypoint; // inherited from NSObject

	readonly mappedPosition: NMAGeoCoordinates;

	readonly originalPosition: NMAGeoCoordinates;
}

declare var NMA_PLACES_ERROR_DOMAIN: string;
