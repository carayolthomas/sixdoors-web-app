'use strict';

/* Controllers */

var sixdoorsControllers = angular.module('sixdoorsControllers', []);

sixdoorsControllers.controller('CollectionsListCtrl', ['$scope', 'Collections',
  function($scope, Collections) {
    $scope.feedEntries = Collections.queryEntries();
    $scope.orderProp = 'id';
  }]);

sixdoorsControllers.controller('CollectionsDetailCtrl', ['$scope', '$routeParams', 'Collections1',
  function($scope, $routeParams, Collections1) {
    $scope.feedItems = Collections1.queryItems({collectionId: $routeParams.collectionId.replace("collection:","")});
    $scope.orderProp = 'id';
  }]);