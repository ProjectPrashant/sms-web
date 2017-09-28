'use strict';
var myApp = angular.module('myApplication',['ui.router', 'ui.bootstrap','dirApp','myUpload']);

myApp.config(function($stateProvider,$urlRouterProvider)  {
    $stateProvider
   
    
    .state('home', {
         url: '/home',
             templateUrl: 'templates/home.html',
             controller:'homeController'
       })
    
    .state('view', {
         url: '/view',
             templateUrl: 'templates/view.html',
             controller: 'viewController'
       })
//    .state('student', {
//         url: '/student',
//             templateUrl: 'templates/student.html',
//             controller: 'studentController'
//       })
    .state('addstudent', {
         url: '/addstudent',
             templateUrl: 'templates/addstudent.html',
             controller: 'addStudentController'
       })
    
    .state('displayStudent',{
                url:'/displayStudent',
                templateUrl:'templates/displayStudent.html',
                controller:'displayStudentList'
    })
    .state('displayUser',{
        url:'/displayUser',
        templateUrl:'templates/displayUser.html',
        controller:'displayUserList'
    })
    .state('user', {
         url: '/user',
             templateUrl: 'templates/users.html',
             controller:'userController'
       })
    .state('dashbord',{
        
        url:'/dashbord',
        templateUrl:'templates/dashbord.html',
        controller:'dashbordController'
    })
    
    .state('adminprofile',{
        
        url:'/adminprofile',
        templateUrl:'templates/adminprofile.html',
        controller: 'adminController'
    })
    
    .state('changepassword',{
           
           url: '/changepassword',
           templateUrl: 'templates/changePassword.html',
           controller: 'changePassController' 
           
           })
    .state('login',{
        
        url:'/login',
        templateUrl:'templates/login.html',
        controller:'loginController'
    })
    $urlRouterProvider.otherwise('/login');
//    .state('fee',{
//           
//           url: '/fee',
//           templateUrl: 'templates/fee.html',
//           controller: 'feecontroller' 
//           
//           })
//    .state('play',{
//           
//           url: '/play',
//           templateUrl: 'templates/playing.html',
//           controller: 'playcontroller' 
//           
//           })
//    
//    .state('contact',{
//           
//           url: '/contactus',
//           templateUrl: 'templates/contactus.html',
//           controller: 'contactcontroller' 
//           
//           })
//    
      // if none of the above states are matched, use this as the fallback
//     $urlRouterProvider.otherwise('/webpage');
});

myApp.directive('header', function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        templateUrl: "templates/partial/header.html",
        controller: ['$scope','$location', function ($scope,$location) {
            // Your behaviour goes here :)
            //LogOut Session
           
          
        }]
    }
});







//}).directive('footer', function () {
//    return {
//        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
//        templateUrl: "templates/partial/footer.html",
//        controller: ['$scope', '$filter', function ($scope, $filter) {
//            // Your behaviour goes here :)
//        }]
//    }
//});