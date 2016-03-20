/* Controllers */
function AppCtrl($scope,$http,$q,$compile,$timeout){
    console.log("My Name is Nicole");
    $scope.amChartOptions = chartDefaultOpt;
    $scope.themeProperties = themeProperties;
    $scope.chartTypes = chartTypes;
    $scope.modelKeys = null;
    $scope.valueAxes = [];
    $scope.categoryAxis = [];
    $scope.setTheme = function(property){
        $scope.amChartOptions.theme = property.theme;
        $("#chartContainer").attr('style', property.data_css);
        $scope.$broadcast('amCharts.renderChart', $scope.amChartOptions, 'myChart');
    };
    $scope.setType = function(property){
        $scope.amChartOptions = property.Opt;
        $scope.amChartOptions.data = $scope.data;
        $scope.$broadcast('amCharts.renderChart', $scope.amChartOptions, 'myChart');
    };
    $scope.dropOption = {
        accept: function(dragEl) {
            if ($scope.list1.length >= 1) {
                return false;
            } else {
                return true;
            }
        }
    };
    $http.get('/getData').success(function(respose){
        console.log("i got a data respose");
        $scope.amChartOptions.data = $scope.data = respose;
        var amChartElement = $compile('<am-chart id="myChart" options="amChartOptions"></am-chart>')($scope);
        $("#chartContainer").append(amChartElement);
        // $scope.modelKeys = Object.keys(respose[0]);
        $scope.modelKeys = [{"key": "data"}];
    });
}