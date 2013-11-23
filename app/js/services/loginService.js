'use strict';

angular.module('yawl.services.login', [])
    .factory('loginService', ['angularFireAuth', '$location', function (angularFireAuth, $location) {
        function login(provider, redirect, callback) {
            var p = angularFireAuth.login(provider);
            p.then(function (user) {
                if (redirect) {
                    $location.path(redirect);
                }
                callback && callback(null, user);
            }, callback);
        }

        function logout(redirectPath) {
            angularFireAuth.logout();
            if (redirectPath) {
                $location.path(redirectPath);
            }
        }

        // Public
        return {
            login: login,
            logout: logout
        }
    }]);