'use strict';

angular.module('yawl.controllers.login', ['yawl.services.login']).
    controller('loginCtrl', ['$rootScope', 'loginService', function ($rootScope, loginService) {
        this.loginWith = function (provider) {
            loginService.login(provider);
        };

        $rootScope.$on("user:logout", function () {
            loginService.logout();
        });
    }]);
