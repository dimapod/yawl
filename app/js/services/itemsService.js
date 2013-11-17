'use strict';

angular.module('yawl.services.items', ['yawl.services.firebaseRefs'])
    .factory('items', ['angularFireCollection', 'FireRef', function (angularFireCollection, FireRef) {

        function collection(user, wishlistId, cb) {
            return angularFireCollection(FireRef.items(wishlistId, user), cb);
        }

        function create(wishlistId, item) {
            return FireRef.items(wishlistId).push(angular.extend({reserved: ""}, item)).name();
        }

        function find(userId, wishlistId, itemId) {
            return FireRef.items(wishlistId, userId).child(itemId);
        }

        function remove(wishlistId, itemId) {
            var wishlist = FireRef.items(wishlistId).child(itemId);
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