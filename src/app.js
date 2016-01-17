import 'angular-material/angular-material.css';

import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import uirouter from 'angular-ui-router';
import 'angular-material-icons';
import 'angular-material-icons/angular-material-icons.css'

import themingConfig from './app.theming';
import root from './root';
import home from './home';

let appModule = angular.module('app', [
    ngMessages,
    ngMaterial,
    'ngMdIcons',
    uirouter,
    root,
    home
]);

appModule.config(themingConfig);

export default appModule;
