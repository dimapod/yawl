'use strict';

angular.module('yawl.controllers').
    controller('headerCtrl', function ($rootScope) {
        this.logout = function () {
            $rootScope.$broadcast("user:logout");
        };
    });