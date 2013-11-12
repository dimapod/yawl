'use strict';

angular.module('yawl.controllers').
    controller('loginCtrl', function (loginService) {
        this.loginWith = function (provider) {
            loginService.login(provider);
        };

        this.logout = function () {
            loginService.logout();
        };
    });