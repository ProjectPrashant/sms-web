myApp.controller('loginController',['$scope','$rootScope','$state',"webservice",function($scope,$rootScope,$state,webservice){
    
    var roleAdmin=1;
     var roleMod=2;
     var roleData=3;
    
     $scope.getDetails = function (login) {
         console.log(login);
         if($scope.login.email == null){
        
                swal ( "Error !" ,  "UserName is Missing" ,  "error" )
         } 
            else if($scope.login.password == null){
        
                    swal ( "Error!" ,  "Password is Missing" ,  "error" )
            }
         
         else
         {
               webservice.postLoginForm(login).then(function(response){
                   
                        console.log(response);

                   if(!response.msg)
                   {
                  
                         if($scope.login.email==response[0].email && $scope.login.password==response[0].password && roleAdmin==response[0].roleId){
                            $rootScope.uName=response[0].email;
                              $state.go("dashbord");
                             $scope.admin=false;
                             $scope.moderator=true;
                             $scope.dataEntry=true;
                          }else if($scope.login.email==response[0].email && $scope.login.password==response[0].password && roleMod==response[0].roleId){
                              
                              $state.go("dashbord");
                               $scope.admin=true;
                             $scope.moderator=false;
                             $scope.dataEntry=true;
                             
                          }
                         else if($scope.login.email==response[0].email && $scope.login.password==response[0].password && roleData==response[0].roleId){
                             
                              $state.go("dashbord");
                              $scope.admin=true;
                             $scope.moderator=true;
                             $scope.dataEntry=false;
                           
                         }
                    }
                   else {
                       
                       swal ( "Sorry!" ,  "User is not Registered" ,  "error" )
                   }
                         
                        
               
             
                    
                });
              }   
                   
//                if($scope.stud.username== 'prashant@gmail.com' && $scope.stud.password== 'prashant'){
//                    
//                     $state.go("dashbord");
//                }
//             else{
//                swal('Error!','Invalid Login ID or Password','error')
//             }
       
         
         
        
            
//            if (data.Username == "Prashant") {
//                if (data.Password == "Pra") {
//                    
//                    $state.go('app.dashboard');
//                }
//            }
//            else
//                     {
//                        Flash.create('danger', 'Invalid Username', 'large-text'); 
//                     }
//                
//               
                
//            
//            else
//                Flash.create('danger', 'Invalid Username', 'large-text');
        };

        
  
    
    
    
    
    
    
    
    
    
}]);
       