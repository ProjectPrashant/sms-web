myApp.service("webservice", ["$http", function ($http) {

    this.postLoginForm =function(login){
        var request= $http({
                    method:'POST',
                    url:'http://localhost/api/index.php/student/login',
                    data: login,
                    contentType:'application/json'
        });
        return(request.then(handleSuccess,handleError));
    }
    
    this.postExcelForm=function(formData){
//        console.log(formData);
        var request=$http({
                    method:'POST',
                    url:'',
                    data:formData,
                    contentType:'application/json'
                    
        });
        return(request.then(handleSuccess,handleError));
    }
    
    this.postChangePass=function(change){
        
        var request=$http({
                    method:'PUT',
                    url:'http://localhost/api/index.php/student/changepassword',
                    data:change,
                    contentType:'application/json'
            
        });
        return(request.then(handleSuccess,handleError));
    }
    this.getAdminDetails=function(request){
        var request=$http({
                    method:'GET',
                    url:'http://localhost/api/index.php/student/adminid',
                    dataType:'json',
                    contenType:'application/json'
            
        });
        return(request.then(handleSuccess,handleError));
    }
    
    this.updateAdminForm=function(formData){
        
        var request=$({
                    method:'PUT',
                    url:'',
                    data:formData,
                    contentType:'application/json'
        });
        return(request.then(hendleSuccess,handleError));
    }
    
    this.postStudentForm = function (formData) {
        console.log(formData);
        var request = $http({
            method: 'POST',
            url: 'http://localhost/api/index.php/student/addstudent',
            data: formData,
            contentType: 'application/json'

        });
         return (request.then(handleSuccess, handleError));
    }

    this.postUserForm = function (user) {
        console.log(user);
        var request = $http({
            method: 'POST',
            url: 'http://localhost/api/index.php/student/adduser',
            data: user,
            contentType:'application/json'
        });
         return (request.then(handleSuccess, handleError));
//        .then(function(response){
//            return response;
//        },function(rejection){
//            console.log(rejection);
//        });

        // request.then(handleSuccess, handleError);
    }
    
    this.editUserList= function(user){
        console.log(user);
        var request=$http({
            method:'POST',
            url:'http://localhost/api/index.php/student/upuser',
            data:user,
            dataType:'json',
            contentType:'application/json'
        });
        return(request.then(handleSuccess,handleError));
    }
    
    this.updateUserList=function(user,userId){
        console.log(user);
        console.log(userId);
        var request=$http({
            method:'PUT',
            url:'http://localhost/api/index.php/student/update/'+userId,
            data:user,
            contentType:'application/json'
        });
        return(request.then(handleSuccess,handleError));
    }
    this.getStud = function (request) {

        var request = $http({
            method: 'GET',
            url: 'http://localhost/api/index.php/student/studentlist',
            dataType: 'json',
            contentType: 'application/json'

        });
        return (request.then(handleSuccess, handleError));
    }
    
    this.disStudentList=function(){
        
        var request=$http({
                    method:'GET',
                    url:'http://localhost/api/index.php/student/studentlist',
                    datatype:'json',
                    contentType:'application/json'
        });
         return (request.then(handleSuccess, handleError));
    }

    this.getUserRecord = function (request) {
        var request = $http({
            method: 'GET',
            url: 'http://localhost/api/index.php/student/userlist',
            dataType: 'json',
            contentType: 'application/json'
        });
        return (request.then(handleSuccess, handleError));
    }
    
    this.disUserForm=function(){
        var request=$http({
                    method:'GET',
                    url:'http://localhost/api/index.php/student/userlist',
                    dataType:'json',
                    contentType:'application/json'
        });
        return(request.then(handleSuccess, handleError));
    }

    this.deleteRecordList = function (student) {
        var request = $http({
            method: 'DELETE',
            url: 'http://localhost/api/index.php/student/deletestudent',
            data: student,
            contentType: 'application/json'

        });
        return (request.then(handleSuccess, handleError));
    }

    this.deleteUserList = function (user) {

        var request = $http({
            method: 'DELETE',
            url: 'http://localhost/api/index.php/student/deleteuser',
            data: user,
            contentType: 'application/json'

        });
        return (request.then(handleSuccess, handleError));
    }


    function handleSuccess(response) {
        return (response.data);
    }
    function handleError(response) {
        swal('Server Not Found', response.data, 'error');
        // return (response.data);
    }

}]);