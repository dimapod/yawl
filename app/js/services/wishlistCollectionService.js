'use strict';

angular.module('yawl.services.wishlist', ['yawl.services.firebaseRefs'])
    .factory('wishlistCollection', ['FireRef', 'angularFireCollection', function (FireRef, angularFireCollection) {

        function collection(cb) {
            var ref = FireRef.wishlists();
            if (ref) {
                return angularFireCollection(ref, cb);
            } else {
                return null;
            }
        }

        function find(userId, wishlistId) {
            return FireRef.wishlists(userId).child('/' + wishlistId);
        }

        function create(wishlist) {
            return FireRef.wishlists().push(
                angular.extend({ creationDate: new Date().getTime() }, wishlist)
            ).name();
        }

        function remove(wishlistId) {
            var wishlist = FireRef.wishlists().child('/' + wishlistId);
            wishlist.remove();
        }

        // Public
        return {
            collection: collection,
            find: find,
            create: create,
            remove: remove
        }
    }]);