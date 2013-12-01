'use strict';

angular.module('yawl.controllers.wishlist', []).
    controller('wishlistCtrl', ['$scope', '$routeParams', '$location', 'angularFire', 'wishlistCollection',
        function ($scope, $routeParams, $location, angularFire, wishlistCollection) {
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
            };

            $scope.releaseItem = function (itemId) {
                $scope.wishlist.items[itemId].reserved = "";
            };

            $scope.isReservedByMe = function (item) {
                return $scope.user && item.reserved == $scope.user.id;
            };

            return $scope;
        }]);