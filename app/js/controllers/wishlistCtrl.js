'use strict';

angular.module('yawl.controllers.wishlist', []).
    controller('wishlistCtrl', ['$scope', '$routeParams', '$location', 'wishlistCollection', 'FireRef',
        function ($scope, $routeParams, $location, wishlistCollection, FireRef) {
            $scope.$locationUrl = $location.absUrl();

            // -- controller code here --

            return $scope;
        }]);