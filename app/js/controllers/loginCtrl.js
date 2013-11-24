'use strict';

angular.module('yawl.controllers.login', []).
    controller('loginCtrl', ['$rootScope', 'angularFireAuth', '$location', function ($rootScope, angularFireAuth, $location) {
        this.loginWith = function (provider) {
            angularFireAuth.login(provider);
        };

        $rootScope.$on("user:logout", function () {
            angularFireAuth.logout();
            $location.path('/login');
        });
    }]);
