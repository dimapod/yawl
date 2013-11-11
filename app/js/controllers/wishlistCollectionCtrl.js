'use strict';

angular.module('yawl.controllers').
    controller('wlCollectionCtrl', function (wishlistCollection) {
        this.list = wishlistCollection.collection();
        this.removeWishlist = function(wishlistId) {
            wishlistCollection.remove(wishlistId)
        }
    });