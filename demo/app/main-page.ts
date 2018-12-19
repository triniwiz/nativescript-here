import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { Here, HereMarker } from 'nativescript-here';

let page;
let markers;

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    page = <pages.Page>args.object;
    markers = [1];
    page.bindingContext = new HelloWorldModel();
    page.getViewById('map').on('mapReady', onMapReady.bind(this));
    page.getViewById('map').on('mapClick', onMapClick.bind(this));
    page.getViewById('map').on('mapLongClick', onMapLongClick.bind(this));

}


export function onLoaded(args) {
    console.log('mapLoaded');
    args.object.on('mapReady', args => {
        onMapReady(args);
    });
}

export function removeMarkers() {
    page.getViewById('map').removeMarkers(markers);
}

function onMapClick(event) {
    const map = event.object;
    const count = map._getMarkersCount();
    const next = count + 1;
    /*
    map.addMarkers(<HereMarker[]>[{
        id: next,
        latitude: event.latitude,
        longitude: event.longitude,
        title: `Click ${next}`
    }]);
    markers.push(next);
    */
}

function onMapLongClick(event) {
    const map = event.object;
    const count = map._getMarkersCount();
    const next = count + 1;
    map.addMarkers(<HereMarker[]>[{
        id: next,
        latitude: event.latitude,
        longitude: event.longitude,
        title: `Long Click ${next}`,
        onTap: (marker) => {
            const updatedMarker = Object.assign({}, marker, {
                selected: !marker.selected
            });
            map.updateMarker(updatedMarker);
        }
    }]);
    markers.push(next);

}

export function goToNY() {
    const map = page.getViewById('map') as Here;
    map.setCenter(40.6976701, -74.2598632, true);
}

export function updateMarker(event) {
    page.getViewById('map').updateMarker({
        id: 1,
        latitude: 10.6689243,
        longitude: -61.5315486,
    });
}

function onMapReady(event) {
    const map = event.object;
    map.addMarkers(<HereMarker[]>[{
        id: 1,
        latitude: 10.6689243,
        longitude: -61.5315486,
        title: 'Home',
        description: 'Hmmm ... 🤔',
        draggable: true,
        onTap: (marker) => {
            const updatedMarker = Object.assign({}, marker, {
                selected: !marker.selected
            });
            map.updateMarker(updatedMarker);
        }
    }]);
}