'use strict';

angular.module('yawl.services.items', ['yawl.services.firebaseRefs'])
    .factory('items', ['angularFireCollection', 'FireRef', function (angularFireCollection, FireRef) {
        return {
            create: function (wishlistId, item) {
                return FireRef.items(wishlistId).push(angular.extend({reserved: ""}, item)).name();
            },

            find: function (userId, wishlistId, itemId) {
                return FireRef.items(wishlistId, userId).child(itemId);
            },

            remove: function (wishlistId, itemId) {
                var wishlist = FireRef.items(wishlistId).child(itemId);
                wishlist.remove();
            }
        }
    }]);