var artistC=angular.module('artistC',[]);
  
artistC.controller('ListController',['$scope','$http',function($scope,$http){

	//This is where we are defining our module which is simple JS object
  $http.get('js/data.json').success(function(data){

      $scope.artists=data;
      $scope.orderbyname='name';

  });


}]);

artistC.controller('DetailsController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){

  //This is where we are defining our module which is simple JS object
  $http.get('js/data.json').success(function(data){

      $scope.artists=data;
      $scope.whichItem=$routeParams.itemNo;

      if($routeParams.itemNo>0){
        $scope.prevItem=Number($routeParams.itemNo)-1;
      }else{
        $scope.prevItem=$scope.artists.length-1;
      }
      if($routeParams.itemNo<$scope.artists.length-1){
        $scope.nextItem=Number($routeParams.itemNo)+1;
      }else{
        $scope.nextItem=0;
      }


  });


}]);