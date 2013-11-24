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
        $routeProvider.when('/wl-collection', {templateUrl: 'partials/wishlist-collection.tpl.html', authRequired: true});
        $routeProvider.when('/wl/:ownerId/:wishlistId', {templateUrl: 'partials/wishlist.tpl.html', authRequired: true});
        $routeProvider.when('/about', {templateUrl: 'partials/about.tpl.html', authRequired: true});
        $routeProvider.otherwise({redirectTo: '/wl-collection'});
    }])
    // Firebase URL
    .constant('FBURL', 'https://yawl.firebaseio.com')

    // authentication
    .run(['angularFireAuth', 'FBURL', '$rootScope', 'FireRef',
        function (angularFireAuth, FBURL, $rootScope, FireRef) {
            $rootScope.signin = "NA";

            $rootScope.$on("$routeChangeStart", function (e, next) {
                if (next.originalPath == '/login' && !angularFireAuth._redirectTo) {
                    angularFireAuth._redirectTo = "/wl-collection";
                }
            });

            angularFireAuth.initialize(FireRef.root(), { scope: $rootScope, name: 'user', path: '/login',
                callback: function () {
                    $rootScope.signin = "DONE";
                }
            });
        }]);
