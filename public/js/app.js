/* App Module */
angular.module('DataVisualization',['ngRoute','amChartsDirective']).
  config(['$routeProvider',  function($routeProvider) {
    $routeProvider.
      when('/getData', {
        templateUrl: 'views/index.html',
        controller: AppCtrl
      }).
      otherwise({
        redirectTo: '/getData'
      });
  }]);