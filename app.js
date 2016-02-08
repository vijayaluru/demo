// inject environment module into your module
 var mainApp=angular.module('acme', ['environment']);
	// inject environmentServiceProvider into your config
	mainApp.config(function(envServiceProvider) {
		// set the domains and variables for each environment
		envServiceProvider.config({
			domains: {
				development: ['localhost', 'dev.local'],
				production: ['acme.com', 'acme.net', 'acme.org']
				// anotherStage: []
			},
			vars: {
				development: {
					apiUrl: '//localhost/api',
					staticUrl: '//localhost/static'
					// antoherCustomVar: ''
				},
				production: {
					apiUrl: '//api.acme.com/v2',
					staticUrl: '//static.acme.com'
					// antoherCustomVar: ''
				}
			}
		});

		// run the environment check, so the comprobation is made
		// before controllers and services are built
		envServiceProvider.check();
	});
	
	 mainApp.value("defaultInput", 5);
	 
	mainApp.controller('Pages', ['$rootScope', '$scope','envService', function($rootScope,$scope, envService) {
		$scope.environment = envService.get(); // store the current environment
		$scope.vars = envService.read('all');
		  $rootScope.$broadcast('topic', 'vijay aluru');
	}]);
	
	
	mainApp.controller('ctrlSubscribe', ['$scope',
function ($scope) {

  $scope.$on('topic', function (event, arg) { 
    $scope.receiver = 'got your ' + arg;
	
	alert($scope.receiver);
  });

}]);


