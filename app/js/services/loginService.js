'use strict';

angular.module('yawl.services.login', [])
    .factory('loginService', ['angularFireAuth', '$location', '$rootScope',
        function (angularFireAuth, $location, $rootScope) {
            return {
                login: function (provider, redirect, callback) {
                    var p = angularFireAuth.login(provider);
                    p.then(function (user) {
                        if (redirect) {
                            $location.path(redirect);
                        }
                        callback && callback(null, user);
                    }, callback);
                },
                logout: function (redirectPath) {
                    angularFireAuth.logout();
                    if (redirectPath) {
                        $location.path(redirectPath);
                    }
                }
            }
        }])