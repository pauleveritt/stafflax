'use strict';

export function routingRun ($rootScope, $state, $mdToast) {
    $rootScope.$on(
        '$stateChangeStart',
        (event, toState) => {
            //if (!auth.isAuthenticated() && !toState.isPublic) {
            //    // Need to authenticate before entering this state
            //    event.preventDefault();
            //    $mdToast.show($mdToast.simple().content('Login required'));
            //    $state.go('login');
            //}
        });
}
routingRun.$inject = ['$rootScope', '$state', '$mdToast'];
