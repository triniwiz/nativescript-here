import { HereBase, HereMarker } from './here.common';

export { HereMarker, HereMapStyle } from './here.common';

export declare class Here extends HereBase {
    public static init(appId: string, appCode: string): void;

    _getMarkersCount(): number;

    setCenter(lat: number, lon: number, animated: boolean): Promise<any>;

    addMarkers(markers: HereMarker[]): Promise<any>;

    removeMarkers(markers?: number[]): Promise<any>;

    updateMarkers(markers: HereMarker[]): Promise<any>;

    updateMarker(marker: HereMarker): Promise<any>;
}
