'use strict';

import RootController from './root.controller';
import RootTemplate from './root.html';

import NotFoundController from './notfound.controller';
import NotFoundTemplate from './notfound.html';

function routes ($stateProvider) {
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
}
routes.$inject = ['$stateProvider'];

export default routes;
