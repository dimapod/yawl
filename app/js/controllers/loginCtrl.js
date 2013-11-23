'use strict';

angular.module('yawl.controllers').
    controller('loginCtrl', ['$rootScope', 'loginService', function ($rootScope, loginService) {
        this.loginWith = function (provider) {
            loginService.login(provider);
        };

        $rootScope.$on("user:logout", function () {
            loginService.logout();
        });
    }]);
