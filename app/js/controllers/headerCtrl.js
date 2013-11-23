'use strict';

angular.module('yawl.controllers').
    controller('headerCtrl', ['$rootScope', function ($rootScope) {
        this.logout = function () {
            $rootScope.$broadcast("user:logout");
        };
    }]);