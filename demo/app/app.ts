import * as application from 'tns-core-modules/application';
import { Here } from 'nativescript-here';

application.on('launch', () => {
    Here.init('', '');
});

application.start({moduleName: 'main-page'});
