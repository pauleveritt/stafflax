import './root.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

// Wire up sub-app
import states from './root.states';
import {routingRun} from './root.routingRun';

export default angular.module('app.root', [uirouter])
    .config(states)
    .run(routingRun)
    .name;
