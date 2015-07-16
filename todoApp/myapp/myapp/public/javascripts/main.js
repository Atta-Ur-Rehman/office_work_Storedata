/**
 * Created by AttaurRehman on 16-Jul-15.
 */
var app = angular.module('TodoApp', ['ngMaterial' ]);

app.controller('maincontroller', ['$scope', function($scope){
    $scope.heading = "My Todo App";
    $scope.mainheading = "ATTA UR REHMAN";
    $scope.user = {
        Firstname : " ",
        Lastname : " "
    }
}]);