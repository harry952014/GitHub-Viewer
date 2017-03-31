// Code goes here


(function() {

     var module = angular.module("githubViewer");

     var RepoController = function($scope, github, $routeParams) {



          var onRepo = function(data) {
               $scope.repo = data;
               


          };

          var onError = function(reason) {
               $scope.error = reason;
          };


          var reponame = $routeParams.reponame;
          var username = $routeParam.username;

          github.getRepoDetails(username, reponame).then(onRepo, onError);



     };

    module.controller("RepoController", RepoController);

}());