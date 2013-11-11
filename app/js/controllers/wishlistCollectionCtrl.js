'use strict';

angular.module('yawl.controllers').
    controller('wlCollectionCtrl', function ($scope, wishlistCollection) {

        this.getWishlistCollection = function () {
            this.list = wishlistCollection.collection();
        };

        var self = this;
        $scope.$on('angularFireAuth:login', function() {
            self.getWishlistCollection();
        });

        this.removeWishlist = function(wishlistId) {
            wishlistCollection.remove(wishlistId);
        };
    });