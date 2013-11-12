'use strict';

angular.module('yawl.controllers').
    controller('loginCtrl', function (loginService, $rootScope) {
        this.loginWith = function (provider) {
            loginService.login(provider, $rootScope.redirect);
        };

        this.logout = function (provider) {
            loginService.logout();
        };
    });