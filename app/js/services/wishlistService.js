'use strict';

angular.module('yawl.services.wishlist', ['yawl.services.firebaseRefs'])
    .factory('wishlist', ['angularFireCollection', 'FireRef', function (angularFireCollection, FireRef) {

        function items(cb) {
            return angularFireCollection(FireRef.wishlists(), cb);
        }

        function createItem(item) {
            return FireRef.wishlists().push({
                name: item.name,
                description: item.description,
                price: item.price,
                creationDate: new Date()
            }).name();
        }

        function removeItem(itemId) {
            var wishlist = FireRef.wishlists().child('/' + wishlistId);
            wishlist.remove();
        }

        // Public
        return {
            collection: collection,
            create: create,
            remove: remove
        }
    }]);