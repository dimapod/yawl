'use strict';

// Application dependencies
angular.module('yawl', [
    'ngRoute',
    'firebase',
    'yawl.controllers.header',
    'yawl.controllers.login',
    'yawl.controllers.wishlists',
    'yawl.controllers.wishlist',
    'yawl.services.firebaseRefs',
    'yawl.services.wishlists',
    'yawl.services.items'
]);

// Routes
angular.module('yawl').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {templateUrl: 'partials/login.tpl.html'});
    $routeProvider.when('/', {templateUrl: 'partials/wishlists.tpl.html', authRequired: true});
    $routeProvider.when('/wl/:ownerId/:wishlistId', {templateUrl: 'partials/wishlist.tpl.html', authRequired: true});
    $routeProvider.when('/about', {templateUrl: 'partials/about.tpl.html', authRequired: true});
    $routeProvider.otherwise({redirectTo: '/'});
}])

// Firebase URL
angular.module('yawl').constant('FBURL', 'https://yawl.firebaseio.com')

// Authentication
angular.module('yawl').run(['$rootScope', 'angularFireAuth', 'FireRef',
    function ($rootScope, angularFireAuth, FireRef) {
        $rootScope.signin = "NA";

        $rootScope.$on("$routeChangeStart", function (e, next) {
            if (next.originalPath == '/login' && !angularFireAuth._redirectTo) {
                angularFireAuth._redirectTo = "/";
            }
        });

        angularFireAuth.initialize(FireRef.root(), { scope: $rootScope, name: 'user', path: '/login',
            callback: function () {
                $rootScope.signin = "DONE";
            }
        });
    }]);
