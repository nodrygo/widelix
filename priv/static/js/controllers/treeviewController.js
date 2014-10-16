app.controller('treeviewController', function($scope,Datas){
    $scope.datas = Datas.datas;

    $scope.$watch( 'fileName.currentNode', function( newObj, oldObj ) {
      if( $scope.fileName && angular.isObject($scope.fileName.currentNode) ) {
        //console.log( $scope.fileName.currentNode.label);
        Datas.setCurrentFileName($scope.fileName.currentNode.label);
     }
   }, false);

    $scope.treedata = $scope.datas.treeFiles;
  
  });

