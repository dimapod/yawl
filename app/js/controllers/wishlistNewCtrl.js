'use strict';

angular.module('yawl.controllers').
    controller('wlNewCtrl', function ($location, wishlistCollection) {
        this.wishList = {
            name: "",
            description: "",
            anonymous: false
        };

        this.newWishlist = function() {
            wishlistCollection.create(this.wishList);

            $location.path('/wl-collection')
        };
    });