'use strict';

angular.module('yawl.services.firebaseRefs', ['firebase'])
    .factory('FireRef', ['FBURL', 'Firebase', function (FBURL, Firebase) {

        function root() {
            return new Firebase(FBURL);
        }

        function wishlists() {
            return new Firebase(FBURL + '/wishlists');
        }

        // Public
        return {
            root: root,
            wishlists: wishlists
        }
    }]);