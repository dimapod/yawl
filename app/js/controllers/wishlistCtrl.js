'use strict';

angular.module('yawl.controllers.wishlist', []).
    controller('wishlistCtrl', ['$scope', '$routeParams', '$location', 'angularFire', 'wishlistCollection', 'FireRef',
        function ($scope, $routeParams, $location, angularFire, wishlistCollection, FireRef) {
            $scope.wishlist = {};
            $scope.$locationUrl = $location.absUrl();

            $scope.ownerId = $routeParams["ownerId"];
            var wishlistId = $routeParams["wishlistId"];

            angularFire(wishlistCollection.find($scope.ownerId, wishlistId), $scope, 'wishlist');

            $scope.addNewItem = function (item) {
                if (!$scope.wishlist.items) $scope.wishlist.items = {};
                $scope.wishlist.items[new Date().getTime()] = angular.extend({reserved: ""}, item);
            };

            $scope.removeItem = function (itemId) {
                delete $scope.wishlist.items[itemId];
            };

            $scope.reserveItem = function (itemId) {
                $scope.wishlist.items[itemId].reserved = $scope.user.id;

//                var itemToReserve = FireRef.items(wishlistId, $scope.ownerId).child(itemId).child("reserved");
//                itemToReserve.set($scope.user.id);
            };

            $scope.releaseItem = function (itemId) {
                $scope.wishlist.items[itemId].reserved = "";

//                var itemToReserve = FireRef.items(wishlistId, $scope.ownerId).child(itemId).child("reserved");
//                itemToReserve.set("");
            };

            $scope.isReservedByMe = function (item) {
                return $scope.user && item.reserved == $scope.user.id;
            };

            return $scope;
        }]);