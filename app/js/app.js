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
    .run(['angularFireAuth', 'FBURL', '$rootScope', 'FireRef',
        function (angularFireAuth, FBURL, $rootScope, FireRef) {
            angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'user'});
        }]);
