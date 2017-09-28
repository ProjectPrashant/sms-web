myApp.controller("displayUserList",['webservice','$scope',function(webservice,$scope){
    
    $scope.disUserList=function(){
        
        webservice.disUserForm().then(function(response){
           
            $scope.userList=response;
        });
    }
    $scope.disUserList();
    
}]);