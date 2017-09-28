myApp.controller("adminController",['$scope','fileReader','webservice','$sce','$rootScope',function($scope,fileReader,webservice,$sce,$rootScope){
    
  
    $scope.imageSrc = "";
    
    $scope.$on("fileProgress", function(e, progress) {
      $scope.progress = progress.loaded / progress.total;
        
    });
     
    $scope.getAdmin=function(request){
        
        webservice.getAdminDetails().then(function(response){
//         webservice.getUserRecord().then(function(response)   
            console.log("admin Details",response);
            // $scope.admin.imageName=response[0].picture;
            $scope.admin=response[0];
            console.log(response[0].picture);
           
            $rootScope.pic=response[0].picture;
               var imageName=response[0].picture; 
//            console.log(imageName);
            $scope.admin={
                imageSrc:'http://localhost/studentjs/web/image/'+imageName +'.jpg',
              	name:response[0].name,
              	mobile:response[0].mobile,
              	email:response[0].email

            }
            
            
        });
        
        $scope.postAdmin=function(admin){
         console.log(admin);
        }
       
    }
    
    
    $scope.admin={};
    
    $scope.postStudent= function(){
         
        var formData= new FormData;
        for(key in $scope.admin){
            console.log(key,"key...");
            console.log("Values",$scope.admin[key]);
            formData.append(key,$scope.admin[key]);
        }
        var file1=$('#file1')[0].files[0];
        console.log(file1,"file1..");
        formData.append('birth',file1);
        
       console.log(formData);
         
            webservice.updateAdminForm(formData).then(function(response){
//                console.log(response.msg);
                if(response.msg==="success"){
                    
                    swal('Success!','Your form successfully Submited!','success')
                    $state.go("adminprofile");
                   
                }
                else{
                    
                    swal('Error!','Something went wrong','error')
                }
            });
    }
//    $scope.imageSrc = 'content/images/'+$scope.admin.userId+'.jpg';
//        $http.get( $scope.imageSrc )
//                .then( function() {
//                $scope.admin.imageSrc = $scope.imageSrc;
//            }, function( error ) {
//                console.log( 'image error: ', error );
//        }
//    );
    
    $scope.getAdmin();
    
  }]);




  myApp.directive("ngFileSelect", function(fileReader, $timeout) {
    return {
      scope: {
        ngModel: '='
      },
      link: function($scope, el) {
        function getFile(file) {
          fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
              $timeout(function() {
                $scope.ngModel = result;
              });
            });
        }

        el.bind("change", function(e) {
          var file = (e.srcElement || e.target).files[0];
          getFile(file);
        });
      }
    };
  });

myApp.factory("fileReader", function($q, $log) {
  var onLoad = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.resolve(reader.result);
      });
    };
  };

  var onError = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.reject(reader.result);
      });
    };
  };

  var onProgress = function(reader, scope) {
    return function(event) {
      scope.$broadcast("fileProgress", {
        total: event.total,
        loaded: event.loaded
      });
    };
  };

  var getReader = function(deferred, scope) {
    var reader = new FileReader();
    reader.onload = onLoad(reader, deferred, scope);
    reader.onerror = onError(reader, deferred, scope);
    reader.onprogress = onProgress(reader, scope);
    return reader;
  };

  var readAsDataURL = function(file, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsDataURL(file);

    return deferred.promise;
  };

  return {
    readAsDataUrl: readAsDataURL
  };
});
    
