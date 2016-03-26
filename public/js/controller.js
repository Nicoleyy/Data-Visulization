/* Controllers */
function AppCtrl($scope,$http,$q,$compile,$timeout){
    console.log("My Name is Nicole");
    $scope.amChartOptions = chartDefaultOpt;
    $scope.themeProperties = themeProperties;
    $scope.chartTypes = chartTypes;
    $scope.modelKeys = null;
    $scope.valueAxes = "";
    $scope.categoryAxis = "";
    $scope.setTheme = function(property){
        $scope.amChartOptions.theme = property.theme;
        $("#chartContainer").attr('style', property.data_css);
        $scope.$broadcast('amCharts.renderChart', $scope.amChartOptions, 'myChart');
    };
    $scope.setType = function(property){
        $scope.valueAxes = "";
        $scope.categoryAxis = "";
        $scope.amChartOptions = property.Opt;
        $scope.amChartOptions.data = $scope.data;
        $scope.$broadcast('amCharts.renderChart', $scope.amChartOptions, 'myChart');
    };
    $scope.bindingChanges = function(event, ui){
        switch($scope.amChartOptions.type){
            case "serial":
            case "radar":
                if($scope.valueAxes){
                    $scope.amChartOptions.graphs[0].valueField=$scope.valueAxes;
                };
                if ($scope.categoryAxis) {
                    if($scope.amChartOptions.categoryAxis){
                        if($scope.categoryAxis=="data"){
                            $scope.amChartOptions.categoryAxis.parseDates = true;
                        }else{
                            $scope.amChartOptions.categoryAxis.parseDates = false;
                        }
                    }
                    $scope.amChartOptions.categoryField = $scope.categoryAxis;
                };
                break;
            case "pie":
                if($scope.valueAxes){
                    $scope.amChartOptions.valueField=$scope.valueAxes;
                };
                if($scope.categoryAxis){
                    $scope.amChartOptions.titleField=$scope.categoryAxis;
                };
                break;
            case "xy":
            default:
                break;
        }
        $scope.$broadcast('amCharts.renderChart', $scope.amChartOptions, 'myChart');
    };
    $http.get('/getData').success(function(respose){
        console.log("i got a data respose");
        $scope.amChartOptions.data = $scope.data = respose;
        var amChartElement = $compile('<am-chart id="myChart" options="amChartOptions"></am-chart>')($scope);
        $("#chartContainer").append(amChartElement);
        $scope.modelKeys = Object.keys(respose[0]);
        // $scope.modelKeys = [{"key": "data"}];
    });
}