import HomeController from './home.controller';
import HomeTemplate from './home.html';

function routes($stateProvider) {
    $stateProvider
        .state('home', {
            parent: 'root',
            url: '/',
            template: HomeTemplate,
            controller: HomeController,
            controllerAs: 'ctrl',
            isPublic: true
        });
}
routes.$inject = ['$stateProvider'];

export default routes;
