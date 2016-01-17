'use strict';

import RootController from './root.controller';
import RootTemplate from './root.html';

import NotFoundController from './notfound.controller';
import NotFoundTemplate from './notfound.html';

function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('root', {
                abstract: true,
                views: {
                    '@': {
                        template: RootTemplate,
                        controller: RootController,
                        controllerAs: 'ctrl'
                    }
                }
            }
        )
        .state('notfound', {
            isPublic: true,
            parent: 'root',
            template: NotFoundTemplate,
            controller: NotFoundController,
            controllerAs: 'ctrl'
        });
    $urlRouterProvider.otherwise('/')
}
routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default routes;
