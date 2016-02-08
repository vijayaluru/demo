var myApp = angular.module('myApp',['acme','ngResource','ngRoute']);

	


myApp.controller('customersCtrl', function($scope, $http) {
  $http.get("http://www.w3schools.com/angular/customers.php").then(function (response) {
      $scope.myData = response.data.records;
  });
});

myApp.factory('myFactoryService',function(){




    var data="";

    return{
        setData:function(str){
            data = str;
        },

        getData:function(){
            return data;
        }
    }


});


myApp.controller('SomeController', ['$scope', 'envService', function($scope, envService) {
	
	var environment = envService.get();
	
	var allenvironment=envService.read('all');
	
	
	
	var str = JSON.stringify(allenvironment);
	
console.log(str); 
	
	alert(str);
}]);


myApp.controller('PromiseCtrl', [ '$scope', 'envService','$resource', function($scope,envService, $resource) {
	var resource = $resource('http://www.w3schools.com/angular/customers.php');
	
	var allenvironment=envService.read('all');
	
	
	
	var str = JSON.stringify(allenvironment);
	
console.log(str); 
	
	alert(str);
    
	$scope.example1 = resource.get();
    
	resource.get().$promise.then(function(value) {
		$scope.example2 = value;
	});
 
} ]); 


myApp.controller('FirstController',  function($scope,myFactoryService){
    myFactoryService.setData("Im am set in first controller");
});



myApp.controller('SecondController',function($scope,myFactoryService){
    $scope.rslt = myFactoryService.getData();
	
});