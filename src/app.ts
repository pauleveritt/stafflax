import {bootstrap} from 'angular2/platform/browser';
import {StafflaxApp} from './app/stafflax';

import {provide} from 'angular2/core';
import {FirebaseService} from 'firebase-angular2/core';

// Tell TypeScript that Firebase is a global object.
declare var Firebase;

bootstrap(StafflaxApp, [
    provide(FirebaseService, {
        useFactory: () => new FirebaseService(new Firebase('https://stafflax.firebaseio.com/'))
    })
]
);