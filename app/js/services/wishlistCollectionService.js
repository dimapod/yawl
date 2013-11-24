'use strict';

angular.module('yawl.services.wishlist', ['yawl.services.firebaseRefs'])
    .factory('wishlistCollection', ['FireRef', 'angularFireCollection', function (FireRef, angularFireCollection) {
        return {
            collection: function (cb) {
                return angularFireCollection(FireRef.wishlists(), cb);
            },

            find: function (userId, wishlistId) {
                return FireRef.wishlists(userId).child('/' + wishlistId);
            },

            create: function (wishlist) {
                return FireRef.wishlists().push(
                    angular.extend({ creationDate: new Date().getTime() }, wishlist)
                ).name();
            },

            remove: function (wishlistId) {
                var wishlist = FireRef.wishlists().child('/' + wishlistId);
                wishlist.remove();
            }
        }
    }]);