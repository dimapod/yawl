'use strict';

angular.module('yawl', [
        'ngRoute',
        'firebase',
        'yawl.controllers.header',
        'yawl.controllers.login',
        'yawl.controllers.wlCollection',
        'yawl.controllers.wishlist',
        'yawl.services.firebaseRefs',
        'yawl.services.wishlist',
        'yawl.services.items',
        'yawl.services.login'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {templateUrl: 'partials/login.tpl.html'});
        $routeProvider.when('/wl-collection', {templateUrl: 'partials/wishlist-collection.tpl.html'});
        $routeProvider.when('/wl/:ownerId/:wishlistId', {templateUrl: 'partials/wishlist.tpl.html'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.tpl.html'});
        $routeProvider.otherwise({redirectTo: '/login'});
    }])
    // Firebase URL
    .constant('FBURL', 'https://yawl.firebaseio.com')

    // authentication
    .run(['angularFireAuth', 'FBURL', '$rootScope', 'FireRef', '$location',
        function (angularFireAuth, FBURL, $rootScope, FireRef, $location) {
            $rootScope.signin = "NA";
            $rootScope.redirect = "/wl-collection";

            $rootScope.$watch(function () {
                return $location.path();
            }, function (newValue, oldValue) {
                if (!$rootScope.user) {
                    if (oldValue != "/login") {
                        $rootScope.redirect = oldValue;
                    }
                    $location.url('/login');
                } else if (newValue == '/login') {
                    $location.url("/wl-collection");
                }
            });

            angularFireAuth.initialize(FireRef.root(), {scope: $rootScope, name: 'user',
                callback: function (err, user) {
                    if (err || !user) {
                        $rootScope.signin = err ? "LOGIN_ERR" : "LOGGED_OUT";
                        $location.path("/login");
                    } else {
                        $rootScope.signin = "LOGGED_IN";
                        $location.path($rootScope.redirect);
                    }
                }
            });
        }]);
