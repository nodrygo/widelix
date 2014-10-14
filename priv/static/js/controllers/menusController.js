
app.controller('MenuController',[ '$scope',function($scope){
    $scope.mainmenu = "Main menu HERE";
    $scope.addItem = function() {
        $scope.mainmenu = "";
    };
}]);





