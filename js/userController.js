myApp.controller("userController", ["$scope", "webservice", "$state","$http","Excel","$timeout" ,function ($scope, webservice,$state,$http,Excel,$timeout) {
    
    $scope.cpass=false;
    $scope.saveData=false;
    $scope.updateData=true;
    $scope.use = {

        userList: [
            { id: '1', name: 'Select User' },
            { id: '2', name: 'Moderator' },
            { id: '3', name: 'Data Entry Operator' }

        ]
    };
    
    $scope.exportToExcel=function(tableId){ // ex: '#my-table'
			var exportHref=Excel.tableToExcel(tableId,'usersheet');
			$timeout(function(){location.href=exportHref;},100); // trigger download
		}

    $scope.postExcel=function(){
        var formData = new FormData;
                 //getting the file
                  var file = $('#file')[0].files[0];
                  console.log(file, "file....");
                  formData.append('excel',file);
        console.log(formData);
        webservice.postExcelForm(formData).then(function(response){
            
            
        });
//        console.log(formData);
////         $http.post('http://localhost/products',formData,{
////                      transformRequest: angular.identity,
////                      headers: {
////                        'Content-Type' : undefined
////                      }
////                  }).then(function(){res});
    }
    

    $scope.getUserList = function (request) {
        webservice.getUserRecord().then(function (response) {
            console.log(response);
        //     console.log("len",response.length);
        //     console.log(response[0].roleId);
//            for(var i=0; i<=response.length ; i++){
////                    console.log("roleId",response[i].roleId);
//            
//                if (response[i].roleId == 1) {
//                    // $scope.user={
//                    //     roleId: 'ADMIN'
//                    var rolename = "admin";
//                    console.log("role name",rolename);
//                    
//                }
//                else if (response[i].roleId == 2) {
//                 var rolename = "Moderator";
//                    console.log("role name",rolename);
//                    $scope.roleDis=rolename;
//                }
//                else 
//                {
//                    var rolename = "Data";
//                    console.log("role name",rolename);
//                }
//             
//            
//        }
            $scope.userList = response;
            //            $scope.userList=response;
        });
    }

//    $scope.postUser = function (user) {
//        webservice.postUserForm(user, Response);
//
//        function Response(result) {
//
//            
//            swal('Success!', 'Your form successfully Submited!', 'success');
//        }
//    }
        $scope.postUser =function(user){
            webservice.postUserForm(user).then(function(response){
//               console.log(response.msg);
                if(response.msg === "success"){
                    
                    swal('Success!', 'Your form successfully Submited!', 'success')
                    $scope.getUserList();
//                    $scope.content_value();
                }
                else{
                    swal('Error!','Something went wrong','error')
                }
            });
        }

    $scope.editUser = function (user) {
        
        webservice.editUserList(user).then(function(response){
           // $scope.user.userId=response.userId;
            $scope.cpass=true;
            $scope.saveData=true;
            $scope.updateData=false;
            $scope.user=response[0];
//           $scope.user = {
//            name : response[0].name,
//            email : response[0].email,
//            password : response[0].password,
//            roleId : response[0].roleId,
//            mobile : response[0].mobile
//           }
        });
       
    }
    $scope.updateUser=function(user,userId){
        webservice.updateUserList(user,userId).then(function(response){
            console.log(response);
            if(response.msg=== "successfully updated"){
                 swal('Success!', 'Your Record Successfully Updated', 'success')
                 $scope.getUserList();
                $state.go("user");
                $scope.content_value();
                $scope.cpass=false;
                $scope.saveData=false;
                $scope.updateData=true;
                
            }
            else{
                swal('Sorry!','Something went wrong','error')
                $state.go("user");
                $scope.content_value();
            }
                $scope.saveData=false;
                $scope.updateData=true;
        })
    }

    $scope.deleteRecord = function (user) {

        swal({
            title: 'Are you sure?',
            text: "To Delete Record!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function () {
            $scope.deleteUser(user);

        }, function (dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === 'cancel') {
                swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    $scope.deleteUser = function (user) {
        
        webservice.deleteUserList(user).then(function (response) {
                    console.log(response.status);
            if (response.msg === "success") {
                swal('Success!', 'Record is Successfully Deleted', 'success')
              $state.go("user")
                $scope.getUserList();
            }
            else {

                swal("Sorry", "Student Record is not found", "error");
               $state.go("user")
                
            }
        });
    }
    
    $scope.content_value=function(){
        
        $scope.user.name='';
        $scope.user.email='';
        $scope.user.password='';
        $scope.user.cpassword='';
        $scope.user.mobile='';
        $scope.user.roleId='';
    }

    $scope.getUserList();
}]);