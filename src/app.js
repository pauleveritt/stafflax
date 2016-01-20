import 'angular-material/angular-material.css';

import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import uirouter from 'angular-ui-router';
import 'firebase';
import 'angularfire';
import 'angular-material-icons';
import 'angular-material-icons/angular-material-icons.css'

import videogular from 'videogular';
import videogularBuffering from 'videogular-buffering';
import videogularControls from 'videogular-controls';
import videogularOverlayPlay from 'videogular-overlay-play';
import videogularPoster from 'videogular-poster';

import themingConfig from './app.theming';
import root from './root';
import home from './home';
import tracks from './tracks';
import skills from './skills';

let appModule = angular.module('app', [
    ngMessages,
    ngMaterial,
    'ngMdIcons',
    uirouter,
    'firebase',
    ngSanitize,
    videogular,
    videogularBuffering,
    videogularControls,
    videogularOverlayPlay,
    videogularPoster,
    root,
    home,
    tracks,
    skills
]);

appModule
    .config(themingConfig)
    .constant('FBURL', 'https://burning-torch-5178.firebaseio.com/');

export default appModule;
