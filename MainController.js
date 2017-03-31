// Code goes here


(function() {

     var app = angular.module("githubViewer")

     var MainController = function($scope, github, $interval,$location) {


          var onUserComplete = function(data) {
               
               //$scope.user = response.data;
              // $http.get($scope.user.repos_url).then(onRepos, onError);
               
                $scope.user = data;
               github.getRepos($scope.user).then(onRepos);
          };

          var onRepos = function(data) {
               //$scope.repos = response.data;
               $scope.repos = data;
          }

          var onError = function(reason) {
               $scope.error = "Can't retrieve data."
          };

          var decrementCount = function() {
               $scope.countdown -= 1;
               if ($scope.countdown < 1) {
                    $scope.search($scope.username);

               }
          };
          
          var countDownInterval =null;
          var startCount = function() {
               countDownInterval = $interval(decrementCount, 1000, $scope.countdown);
          };



          $scope.search = function(username) {
              // $http.get("https://api.github.com/users/" + username)
                   // .then(onUserComplete, onError);
                    if(countDownInterval){
                 $interval.cancel(countDownInterval);
                 $scope.countDown = null;}
                    
                    $location.path("/user/" + username);
          };

          $scope.username = "Angular";
          $scope.message = "Github Viewer";
          $scope.repoSortOrder = "-stargazers_count";
          $scope.countdown = 5;
          startCount();

     };

     app.controller("MainController", MainController);

}());