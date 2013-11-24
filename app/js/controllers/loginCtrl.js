'use strict';

angular.module('yawl.controllers.login', ['yawl.services.login']).
    controller('loginCtrl', ['$rootScope', 'loginService', '$scope', function ($rootScope, loginService, $scope) {
        this.signin = "NA";

        this.loginWith = function (provider) {
            loginService.login(provider);
        };

        $rootScope.$on("user:logout", function () {
            loginService.logout('/login');
        });

        var self = this;
        $scope.$on("angularFireAuth:logout", function(evt) {
            self.signin = "LOGOUT";
        });
    }]);
