myApp.controller("addStudentController",[ "$scope","webservice","$state","Excel"
,"$timeout",function($scope,webservice,$state,Excel,$timeout){
    
    $scope.saveButton=false;
    $scope.updateButton=true;
    
     $scope.monthSelectorOptions = {
            start: "year",
            depth: "year"
          };
          $scope.getType = function(x) {
            return typeof x;
          };
          $scope.isDate = function(x) {
            return x instanceof Date;
          };
          $scope.clickDate= function(stud){
              
              console.log(stud);
          }
    
    
   $scope.stList = {
   stdList: [
      {id: '3', name: 'II nd'},
      {id: '4', name: 'III rd'},
      {id: '5', name: 'IV rth'},
      {id: '6', name: 'V th'},
      {id: '7', name: 'VI th'},
      {id: '8', name: 'VII th'},
      {id: '9', name: 'VIII th'},
      {id: '10', name: 'IX th'},
      {id: '11', name: 'X'},
      {id: '12', name: 'XI th'},
      {id: '13', name: 'XII th'}
    ]
   };
    
    $scope.studDiv = {
    model: null,
    divList: [
      {id: '1', name: 'Select Devision'},
      {id: '2', name: 'A'},
      {id: '3', name: 'B'},
      {id: '4', name: 'C'},
      {id: '5', name: 'D'}
      
    ]
        
   };
    
    $scope.statusList={
        
        statusStud:[
            {id:'1',name:'Active'},
            {id:'2',name:'Deactive'}
        ]
    }
    $scope.stud={};
    
    $scope.postStudent= function(stud){
         console.log(stud);
        var formData= new FormData;
        for(key in $scope.stud){
            console.log(key,"key...");
            console.log("Values",$scope.stud[key]);
            formData.append(key,$scope.stud[key]);
        }
        var file1=$('#file1')[0].files[0];
        console.log(file1,"file1..");
        formData.append('image1',file1);
        
        var file2=$('#file2')[0].files[0];
          console.log(file2,"file2..");
        formData.append('image2',file2);
        
        var file3=$('#file3')[0].files[0];
        console.log(file3,"file3....");
        formData.append('image3',file3);
        
       console.log(formData);
         
            webservice.postStudentForm(formData).then(function(response){
                console.log(response.msg);
                if(response.msg==="success"){
                    
                    swal('Success!','Your form successfully Submited!','success')
                    $state.go("addstudent")
                    $scope.get
                }
                else{
                    
                    swal('Error!','Something went wrong','error')
                }
            });
    }
     $scope.exportToExcel=function(tableId){ // ex: '#my-table'
			var exportHref=Excel.tableToExcel(tableId,'usersheet');
			$timeout(function(){location.href=exportHref;},100); // trigger download
		}
              
            
    $scope.getStudInfo=function(){
        
        webservice.getStud().then(function(response){
            $scope.studList=response;
          
        });
    }
    
    $scope.myfunction=function(student){
//        var r= confirm("Are you sure to delete record");
//        
//        if(r == true){
//           
//        }
//        else
//            {
//                
//            }
        
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
                         $scope.delRecord(student);
                    
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
    
$scope.editStud = function(student){
    
    $scope.stud= student;
    
    $scope.btnName="Update";
   
}

    
    $scope.delRecord=function(student){
        
        webservice.deleteRecordList(student).then(function(response){
           
            console.log(response.statusText);
            if(response.msg == "success"){
                
               
               swal('Success!','Record is Successfully Deleted','success' )
                $state.go("addstudent");
                $scope.getStudInfo();
            }
            else
                {
                     swal("Sorry", "Student Record is not found", "error");
                    $state.go("addstudent")
                }
        });
    }
    
    $scope.value= function(){
        $scope.stud.fname=null;
        $scope.stud.lname=null;
        $scope.stud.selectedOption=null;
        $scope.stud.devision=null;
        $scope.stud.email=null;
        $scope.stud.mobile=null;
        $scope.stud.dob=null;
        $scope.stud.laddress=null;
        $scope.stud.cvalue=null;
        $scope.stud.paddress=null;
        
    }
    
   

     $scope.getStudInfo();
    
}]);
//myApp.directive('validfile', function validFile() {
//    
//    var validFormats = ['jpg','png','gif','pdf','jpeg'];
//   
//    return {
//        require: 'ngModel',
//        link: function (scope, elem, attrs, ctrl) {
//            ctrl.$validators.validFile = function() {
//                console.log(validFile);
//                elem.on('change', function () {
//                   var value = elem.val(),
//                       ext = value.substring(value.lastIndexOf('.') + 1).toLowerCase();   
//
//                   return validFormats.indexOf(ext) !== -1;
//                });
//           };
//        }
//    };
//});
