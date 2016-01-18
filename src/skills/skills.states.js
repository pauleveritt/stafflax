import SkillsListTemplate from './skills.list.html';
import SkillsListController from './skills.list.controller.js';
import SkillTemplate from './skill.html';
import SkillController from './skill.controller.js';
import SkillAddTemplate from './Skill.add.html';
import SkillAddController from './Skill.add.controller';
import SkillEditTemplate from './skill.edit.html';
import SkillEditController from './skill.edit.controller';

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
        .state('skills.add', {
            url: '/add',
            template: SkillAddTemplate,
            controller: SkillAddController,
            controllerAs: 'ctrl'
        })
        .state('skills.view',
            {
                url: '/{name}',
                template: SkillTemplate,
                controller: SkillController,
                controllerAs: 'ctrl'
            })
        .state('skills.edit',
            {
                url: '/{name}/edit',
                template: SkillEditTemplate,
                controller: SkillEditController,
                controllerAs: 'ctrl'
            });

}
routes.$inject = ['$stateProvider'];

export default routes;
