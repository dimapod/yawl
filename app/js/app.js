'use strict';

angular.module('yawl', [
        'ngRoute',
        'firebase',
        'yawl.controllers',
        'yawl.services.firebaseRefs'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/wl-collection', {templateUrl: 'partials/wishlist-collection.tpl.html'});
        $routeProvider.when('/wl-new', {templateUrl: 'partials/wishlist-new.tpl.html'});
        $routeProvider.when('/wl/:wishlistId', {templateUrl: 'partials/wishlist.tpl.html'});
        $routeProvider.otherwise({redirectTo: '/wl-collection'});
    }])
    // Firebase URL
    .constant('FBURL', 'https://yawl.firebaseio.com')

    // authentication
//    .run(['angularFireAuth', 'FBURL', '$rootScope', 'FireRef',
//        function (angularFireAuth, FBURL, $rootScope, FireRef) {
//            angularFireAuth.initialize(FireRef.root(), {scope: $rootScope, name: 'auth', path: '/signin'});
//            $rootScope.FBURL = FBURL;
//        }]);
