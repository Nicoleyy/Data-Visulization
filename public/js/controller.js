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
        var data = $scope.amChartOptions.data;
        $scope.amChartOptions = property.Opt;
        $scope.amChartOptions.data = data;
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
    });
    var dropZone = $("#chartContainer")[0];
    dropZone.addEventListener("dragover", dragOver, false);
    dropZone.addEventListener("drop"    , drop    , false);
    function dragOver(event){
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    };
    function drop(event){
        event.stopPropagation();
        event.preventDefault();
        var fileList = event.dataTransfer.files;
        for(var i=0; i < fileList.length; i++ ) {
            var file = fileList[i];
            loadAsText(file);
        }
    };
    function loadAsText(theFile){
        var newData = null;
        var reader = new FileReader();
        reader.onload = function(loadedEvent){
            // result contains loaded file.
            newData = loadedEvent.target.result;
        };
        reader.onloadend = function(){
            if(newData){
                $scope.valueAxes = "";
                $scope.categoryAxis = "";
                newData = CSV2JSON(newData);
                $scope.amChartOptions.data = newData;
                $scope.modelKeys = Object.keys(newData[0]);
                $scope.amChartOptions.categoryField = $scope.modelKeys[0];
                $scope.amChartOptions.graphs[0].valueField = $scope.modelKeys[1];
                $scope.$broadcast('amCharts.renderChart', $scope.amChartOptions, 'myChart');
            }
        }
        reader.readAsText(theFile);
    };
    function CSVToArray(strData, strDelimiter){
        // Check to see if the delimiter is defined. If not,then default to comma.
        strDelimiter = (strDelimiter || ",");
        // Create a regular expression to parse the CSV values.
        var objPattern = new RegExp((
        // Delimiters.
        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
        // Quoted fields.
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
        // Standard fields.
        "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
        // Create an array to hold our data. Give the array a default empty first row.
        var arrData = [[]];
        // Create an array to hold our individual pattern matching groups.
        var arrMatches = null;
        // Keep looping over the regular expression matches until we can no longer find a match.
        while (arrMatches = objPattern.exec(strData)) {
          //remove blank line 
            if(arrMatches[0] == "\n"){
                continue;
            }
            // Get the delimiter that was found.
            var strMatchedDelimiter = arrMatches[1];
            /*Check to see if the given delimiter has a length (is not the start of string) and if it matches
            field delimiter. If id does not, then we know that this delimiter is a row delimiter.*/
            if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                // Since we have reached a new row of data,add an empty row to our data array.
                arrData.push([]);
            }
            /*Now that we have our delimiter out of the way,
            let's check to see which kind of value we captured (quoted or unquoted).*/
            if (arrMatches[2]) {
                // We found a quoted value. When we capture this value, unescape any double quotes.
                var strMatchedValue = arrMatches[2].replace(
                new RegExp("\"\"", "g"), "\"");
            } else {
                // We found a non-quoted value.
                var strMatchedValue = arrMatches[3];
            }
            // Now that we have our value string, let's add it to the data array.
            arrData[arrData.length - 1].push(strMatchedValue);
        }
        return (arrData);
    };
    function CSV2JSON(csv){
        var array = CSVToArray(csv);
        var objArray = [];
        for (var i = 1; i < array.length; i++) {
            objArray[i - 1] = {};
            for (var k = 0; k < array[0].length && k < array[i].length; k++) {
                var key = array[0][k];
                objArray[i - 1][key] = array[i][k]
            }
        }
        return objArray;
    };
}