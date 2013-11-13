'use strict';

angular.module('yawl.controllers').
    controller('wishlistCtrl', function ($scope, $routeParams, wishlistCollection, angularFire) {
        $scope.wishlist = {}
        $scope.newItem = {};

        $scope.userId = $routeParams.userId;
        angularFire(wishlistCollection.find($scope.userId, $routeParams.wishlistId), $scope, 'wishlist');

        $scope.addNewItem = function (newItem) {
            if (!$scope.wishlist.items)
                $scope.wishlist.items = [];
            newItem.reserved = false;
            $scope.wishlist.items.push(angular.copy(newItem));
        };

        $scope.removeItem = function(item) {
            var index = $scope.wishlist.items.indexOf(item);
            $scope.wishlist.items.splice(index, 1);
        };

        $scope.reserveItem = function (item) {
            item.reserved = !item.reserved;
        };

        return $scope;
    });