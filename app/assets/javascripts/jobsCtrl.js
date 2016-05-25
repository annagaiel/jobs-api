(function(){
  "use Strict"
  angular.module("app").controller("jobsCtrl",
    function($scope, $http){
      $scope.setup = function(){
        $http.get("/api/v1/jobs.json").then(function(response){
          $scope.jobs = response.data;
        });
      }
      window.$scope = $scope;
  });
})();
