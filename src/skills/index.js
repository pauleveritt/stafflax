import angular from 'angular';
import uirouter from 'angular-ui-router';

import states from './skills.states.js';

import Skills from './skills.service.js';

export default angular.module('app.Skills', [uirouter])
    .config(states)
    .service('Skills', Skills)
    .name;
