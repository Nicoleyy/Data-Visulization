/* App Module */
angular.module('DataVisualization',['ngRoute','amChartsDirective']).
  config(['$routeProvider',  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/index.html',
        controller: AppCtrl
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);