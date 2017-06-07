angular.module('clipBoardApp', ['ui.router','ui.bootstrap'])
  .config( function ( $stateProvider, $urlRouterProvider ) {

    $stateProvider
      .state('home',{
        url:'/',
        templateUrl: "../views/home.html",
        controller: "homeController",
        controllerAs: "homeCtrl"
      })
      .state('test',{
        url:'/test',
        templateUrl: "../views/test.html",
        controller: "testController",
        controllerAs: "testCtrl"
      });
      console.log("app.js!");

      // $urlRouterProvider
      // .otherwise('home');
});

angular.module('clipBoardApp')
  .controller('homeController', function($scope){
    console.log("This is home!");
  });

angular.module('clipBoardApp')
  .controller('testController', function($scope){
    console.log("COOL!");
  });
