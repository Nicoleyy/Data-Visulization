/* App Module */
angular.module('DataVisualization',['ngRoute']).
  config(['$routeProvider',  function($routeProvider) {
    $routeProvider.
      when('/getDataset', {
        templateUrl: 'views/index.html',
        controller: AppCtrl
      }).
      otherwise({
        redirectTo: '/getDataset'
      });
  }]);