myApp.controller("displayStudentList",['webservice','$scope',function(webservice,$scope){
    
    $scope.getStudentList=function(){
        
        webservice.disStudentList().then(function(response){   
        
            $scope.studentList=response;
        }) ;
    }
    
    $scope.getStudentList();
}]);