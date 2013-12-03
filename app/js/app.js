'use strict';

// Application dependencies
angular.module('yawl', [
    'ngRoute',
    'yawl.controllers.header',
    'yawl.controllers.login',
    'yawl.controllers.wishlists',
    'yawl.controllers.wishlist',
    'yawl.services.firebaseRefs',
    'yawl.services.wishlists'
]);

// Routes
angular.module('yawl').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/about', {templateUrl: 'partials/about.tpl.html', authRequired: true});
}]);

// Firebase URL
angular.module('yawl').constant('FBURL', 'https://[firebase name].firebaseio.com')

// Authentication
angular.module('yawl').run(['$rootScope', 'FireRef',
    function ($rootScope, FireRef) {
        $rootScope.signin = "NA";

        /*
        $rootScope.$on("$routeChangeStart", function (e, next) {
            if (next.originalPath == '/login' && !angularFireAuth._redirectTo) {
                angularFireAuth._redirectTo = "/";
            }
        });
        */

        // -- initialise angularFireAuth here --
    }]);
