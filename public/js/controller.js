/* Controllers */
function AppCtrl($scope,$http){
    console.log("My Name is Nicole");
    $http.get('/getDataset').success(function(respose){
        console.log("i got a data respose");
    });
}