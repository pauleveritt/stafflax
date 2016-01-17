import angular from 'angular';
import uirouter from 'angular-ui-router';

import states from './tracks.states';

import Tracks from './tracks.service';

export default angular.module('app.tracks', [uirouter])
    .config(states)
    .service('Tracks', Tracks)
    .name;
