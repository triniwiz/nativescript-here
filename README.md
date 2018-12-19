[![npm](https://img.shields.io/npm/v/nativescript-here.svg)](https://www.npmjs.com/package/nativescript-here)
[![npm](https://img.shields.io/npm/dt/nativescript-here.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-here)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-here.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-here)


# NativeScript Here



## Prerequisites

You need a Here APP ID & APP Code so sign up with [Here](https://developer.here.com/?create=Freemium-Basic&keepState=true&step=account). Once you've registered go to your Project > (Your Project Name) > Generate `Keys for your Starter SDKs.

## Installation


```javascript
tns plugin add nativescript-here
```



### Android

Add the following to your `ApplicationManifest.xml` anywhere after your application opening tag an before it's closing 

```xml

<meta-data android:name="com.here.android.maps.appid" android:value="YOUR_APP_ID"/>
<meta-data android:name="com.here.android.maps.apptoken" android:value="YOUR_APP_CODE"/>
		
```


### IOS

Place the following in your `app.ts , app.js or main.ts`

```typescript
import { Here } from 'nativescript-here';

import * as application from 'tns-core-modules/application';
import { Here } from 'nativescript-here';

application.on('launch', () => {
    Here.init('APP_ID', 'APP_CODE');
});
```

## Usage 


IMPORTANT: Make sure you include xmlns:map="nativescript-here" on the Page element



```xml
<map:Here mapStyle="hybrid_day" mapReady="onMapReady" row="3" id="map" zoomLevel="12"  disableZoom="false" disableScroll="false" latitude="10.6689243" longitude="-61.5315486"/>
```


```typescript
import { HereMarker } from 'nativescript-here';
export function onMapReady(event){
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
```
## API

    
| Property | Default | Description |
| --- | --- | --- |
| mapStyle | normal_day |  |
| latitude | 0 | Set the center of the map by passing this in |
| longitude | 0 | .. and this as well |
| zoomLevel | 0 |  |
| mapReady | - | The name of a callback function you can declare to interact with the map after it has been drawn |

    
## License

Apache License Version 2.0, January 2004
