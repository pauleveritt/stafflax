import SkillsListTemplate from './skills.list.html';
import SkillsListController from './skills.list.controller.js';
import SkillTemplate from './skill.html';
import SkillController from './skill.controller.js';

function routes($stateProvider) {
    $stateProvider
        .state('skills', {
            abstract: true,
            parent: 'root',
            url: '/skills',
            template: '<ui-view></ui-view>'
        })
        .state('skills.list', {
            url: '/list',
            template: SkillsListTemplate,
            controller: SkillsListController,
            controllerAs: 'ctrl'
        })
        .state('skills.view',
            {
                url: '/{name}',
                template: SkillTemplate,
                controller: SkillController,
                controllerAs: 'ctrl'
            });
}
routes.$inject = ['$stateProvider'];

export default routes;
