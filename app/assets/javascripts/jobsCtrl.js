(function(){
  "use Strict"
  angular.module("app").controller("jobsCtrl",
    function($scope, $http){
      $scope.setup = function(){
        $http.get("/api/v1/jobs.json").then(function(response){
          $scope.jobs = response.data;
        });
      }

      $scope.addJob = function(newTitle, newDesc, newSalary){
        var job = {
          title: newTitle,
          description: newDesc,
          salary: newSalary
        }
        $scope.jobs.push(job);
        $scope.newJobTitle = null;
        $scope.newJobDesc = null;
        $scope.newJobSalary = null;

      }
      window.$scope = $scope;
  });
})();
