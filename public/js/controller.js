/* Controllers */
function AppCtrl($scope,$http,$q,$compile){
    console.log("My Name is Nicole");
    $scope.amChartOptions = chartDefaultOpt;
    $scope.themeProperties = themeProperties;
    $scope.chartTypes = chartTypes;
    $scope.setTheme = function(property){
        $scope.amChartOptions.theme = property.theme;
        $("#chartContainer").attr('style', property.data_css);
        $scope.$broadcast('amCharts.renderChart', $scope.amChartOptions, 'myChart');
    }
    $scope.setType = function(property){
        $scope.amChartOptions = property.Opt;
        $scope.amChartOptions.data = $scope.data;
        $scope.$broadcast('amCharts.renderChart', $scope.amChartOptions, 'myChart');
    }
    $http.get('/getData').success(function(respose){
        console.log("i got a data respose");
        $scope.amChartOptions.data = $scope.data = respose;
        var amChartElement = $compile('<am-chart id="myChart" options="amChartOptions"></am-chart>')($scope);
        $("#chartContainer").append(amChartElement);
        $scope.modelKeys = Object.keys(respose[0]);
    });
}