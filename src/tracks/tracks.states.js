import TracksListTemplate from './tracks.list.html';
import TracksListController from './tracks.list.controller';

function routes($stateProvider) {
    $stateProvider
        .state('tracks', {
            parent: 'root',
            url: '/tracks',
            template: TracksListTemplate,
            controller: TracksListController,
            controllerAs: 'ctrl'
        });
}
routes.$inject = ['$stateProvider'];

export default routes;
