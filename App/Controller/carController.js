/**
 * Created by lenovo on 2017/10/19.
 */
app.controller("carController",["$scope","carServer",function($scope,carServer){
    carServer.getCar().then(function(car){
        $scope.cars=car.data;

    })
}]);