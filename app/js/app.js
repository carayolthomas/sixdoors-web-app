'use strict';

/* App Module */

var sixdoorsApp = angular.module('sixdoorsApp', [
  'ngRoute',
  //'sixdoorsAnimations',
  'sixdoorsControllers',
  //'sixdoorsFilters',
  'sixdoorsServices'
]);

sixdoorsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/feedEntries', {
        templateUrl: 'partials/feedentries-list.html',
        controller: 'CollectionsListCtrl'
      }).
      when('/feedItems/:collectionId', {
        templateUrl: 'partials/feeditems-list.html',
        controller: 'CollectionsDetailCtrl'
      }).
      otherwise({
        redirectTo: '/feedEntries'
      });
  }]);
