import TracksListTemplate from './tracks.list.html';
import TracksListController from './tracks.list.controller';
import TrackTemplate from './track.html';
import TrackController from './track.controller';
import TrackAddTemplate from './track.add.html';
import TrackAddController from './track.add.controller';

function routes($stateProvider) {
    $stateProvider
        .state('tracks', {
            abstract: true,
            parent: 'root',
            url: '/tracks',
            template: '<ui-view></ui-view>'
        })
        .state('tracks.list', {
            url: '/list',
            template: TracksListTemplate,
            controller: TracksListController,
            controllerAs: 'ctrl'
        })
        .state('tracks.add', {
            url: '/add',
            template: TrackAddTemplate,
            controller: TrackAddController,
            controllerAs: 'ctrl'
        })
        .state('tracks.view',
            {
                url: '/{name}',
                template: TrackTemplate,
                controller: TrackController,
                controllerAs: 'ctrl'
            });
}
routes.$inject = ['$stateProvider'];

export default routes;
