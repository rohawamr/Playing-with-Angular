var myApp = angular.module('myApp', [
  'ngRoute',
  'artistC'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }). when('/details/:itemNo', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);