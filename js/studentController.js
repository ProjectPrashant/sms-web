myApp.controller("studentController",function($scope){
  var studentList=[
        {name:"Kishore Patil",address:"Pune",mobile:"9850809214", standerd:"VI", devision:"A"},
        {name:"Mandar Ghodke",address:"Kolhapur",mobile:"9988554411", standerd:"V", devision:"B"},
        {name:"Pratap Kulkarni",address:"Sangli",mobile:"9644551122", standerd:"X", devision:"A"},
        {name:"Rohanil Raje",address:"Mumbai",mobile:"8899556622", standerd:"XI", devision:"A"},
        {name:"Sajil Kallur",address:"Benguluru",mobile:"7854112266", standerd:"XI", devision:"C"},{name:"Ramesh Shaende",address:"Pune",mobile:"9655441122", standerd:"IX", devision:"B"},
        {name:"Kishore Patil",address:"Pune",mobile:"8955662211", standerd:"VI", devision:"B"},
    ]
   
    $scope.studList = studentList;
    

        $scope.serach= function(items){
            
            if($scope.searchText== undefined){
                
                return true;
            }
            else{
                if(items.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!= -1 ||
                  items.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!= -1 ){
                    
                    return true;
                }
                
            }
            return false;
        }

});