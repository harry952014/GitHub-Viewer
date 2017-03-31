// Code goes here


(function() {

     var app = angular.module("githubViewer");

     var UserController = function($scope, github , $http, $routeParams) {


          var onUserComplete = function(data) {
               //$scope.user = response.data;
              // $http.get($scope.user.repos_url).then(onRepos, onError);
               
                $scope.user = data;
               github.getRepos($scope.user).then(onRepos);
          };

          var onRepos = function(data) {
               //$scope.repos = response.data;
               $scope.repos = data;
               
          };
          
       


          var onError = function(reason) {
               $scope.error = "Can't retrieve data.";
          };

        

          $scope.username = $routeParams.username;
          $scope.repoSortOrder = "-stargazers_count";
          github.getUser($scope.username).then(onUserComplete);

     };

     app.controller("UserController", UserController);

}());