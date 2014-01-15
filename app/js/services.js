'use strict';

/* Services */

var sixdoorsServices = angular.module('sixdoorsServices', ['ngResource']);

sixdoorsServices.factory('Collections', ['$resource',
  function($resource){
    return $resource('https://api-staging.sixdoors.com/v1/feed_entries', {}, {
      queryEntries: {
      	method:'GET', 
      	isArray:false,
      	//headers: { 'auth-token': "6D‐Client" }
      }
    });
  }]);

sixdoorsServices.factory('Collections1', ['$resource',
  function($resource){
    return $resource('https://api-staging.sixdoors.com/v1/collections/:collectionId/feed_items', {}, {
      queryItems: {
      	method:'GET', 
      	isArray:false,
      	//headers: { 'auth-token': "6D‐Client" }
      }
    });
  }]);