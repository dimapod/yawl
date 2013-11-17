'use strict';

angular.module('yawl.services.firebaseRefs', ['firebase'])
    .factory('FireRef', ['FBURL', 'Firebase', 'loginService', '$rootScope', function (FBURL, Firebase, loginService, $rootScope) {

        function root() {
            return new Firebase(FBURL);
        }

        function wishlists(userId) {
            userId = userId || $rootScope.user.id;
            return new Firebase(FBURL + '/users/' + userId + '/wishlists');
        }

        function items(wishlistId, userId) {
            return wishlists(userId).child(wishlistId).child("items");
        }

        // Public
        return {
            root: root,
            wishlists: wishlists,
            items: items
        }
    }]);