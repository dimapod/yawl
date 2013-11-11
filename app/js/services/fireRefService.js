'use strict';

angular.module('yawl.services.firebaseRefs', ['firebase'])
    .factory('FireRef', ['FBURL', 'Firebase', 'loginService', '$rootScope', function (FBURL, Firebase, loginService, $rootScope) {

        function root() {
            return new Firebase(FBURL);
        }

        function wishlists(userId) {
            if (!userId) {
                if ($rootScope.user) {
                    userId = $rootScope.user.id;
                } else {
                    return null;
                }
            }
            console.log("REF", FBURL + '/users/' + userId + '/wishlists')
            return new Firebase(FBURL + '/users/' + userId + '/wishlists');
        }

        // Public
        return {
            root: root,
            wishlists: wishlists
        }
    }]);