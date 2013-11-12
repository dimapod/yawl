'use strict';

angular.module('yawl', [
        'ngRoute',
        'firebase',
        'yawl.controllers',
        'yawl.services.firebaseRefs',
        'yawl.services.login'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {templateUrl: 'partials/login.tpl.html'});
        $routeProvider.when('/wl-collection', {templateUrl: 'partials/wishlist-collection.tpl.html'});
        $routeProvider.when('/wl-new', {templateUrl: 'partials/wishlist-new.tpl.html'});
        $routeProvider.when('/wl/:userId/:wishlistId', {templateUrl: 'partials/wishlist.tpl.html'});
        $routeProvider.otherwise({redirectTo: '/wl-collection'});
    }])
    // Firebase URL
    .constant('FBURL', 'https://yawl.firebaseio.com')

    // authentication
    .run(['angularFireAuth', 'FBURL', '$rootScope', 'FireRef', '$location',
        function (angularFireAuth, FBURL, $rootScope, FireRef, $location) {
            $rootScope.signin = "NA";
            $rootScope.redirect = "/wl-collection";

            angularFireAuth.initialize(FireRef.root(), {scope: $rootScope, name: 'user',
                callback: function (err, user) {
                    console.log("Login state changed", err, user);
                    if (err) {
                        $location.path("/login");
                        return;
                    }

                    if (!user) {
                        if ($location.path() != "/login") {
                            $rootScope.redirect = $location.path();
                        }
                        //console.log("Go to login");
                        $location.path("/login");
                    }
                }
            });
        }]);
