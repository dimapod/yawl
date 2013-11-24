'use strict';

angular.module('yawl.services.firebaseRefs', ['firebase'])
    .factory('FireRef', ['$rootScope', 'FBURL', 'Firebase', function ($rootScope, FBURL, Firebase) {
        return {
            root: function () {
                return new Firebase(FBURL);
            },

            wishlists: function (userId) {
                userId = userId || $rootScope.user.id;
                return new Firebase(FBURL + '/users/' + userId + '/wishlists');
            },

            items: function (wishlistId, userId) {
                return this.wishlists(userId).child(wishlistId).child("items");
            }
        }
    }]);