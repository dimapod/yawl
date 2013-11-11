'use strict';

angular.module('yawl.controllers').
    controller('loginCtrl', function (loginService) {
        this.loginWith = function (provider) {
            loginService.login(provider, '/wl-collection');
        };

        this.logout = function (provider) {
            loginService.logout();
        };
    });