'use strict';

angular.module('yawl.controllers').
    controller('wishlistCtrl', function ($scope, $routeParams, angularFire, wishlistCollection, items, $location) {
        $scope.wishlist = {};
        $scope.$locationUrl = $location.absUrl();

        $scope.ownerId = $routeParams["ownerId"];
        var wishlistId = $routeParams["wishlistId"];

        angularFire(wishlistCollection.find($scope.ownerId, wishlistId), $scope, 'wishlist');

        $scope.addNewItem = function (item) {
            //$scope.wishlist.items[new Date().getTime()] = angular.extend({reserved: ""}, item);

            // Or
            items.create(wishlistId, item);
        };

        $scope.removeItem = function(itemId) {
            delete $scope.wishlist.items[itemId];

            // Or
            //items.remove(wishlistId, itemId);
        };

        $scope.reserveItem = function (itemId) {
            var itemToReserve = items.find($scope.ownerId, wishlistId, itemId).child("reserved");
            itemToReserve.set($scope.user.id);
        };

        $scope.releaseItem = function (itemId) {
            var itemToReserve = items.find($scope.ownerId, wishlistId, itemId).child("reserved");
            itemToReserve.set("");
        };

        $scope.isReservedByMe = function (item) {
            return item.reserved == $scope.user.id;
        };

        return $scope;
    });