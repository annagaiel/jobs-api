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
        $http.post('/api/v1/jobs.json', job).then(function(response) {
          $scope.jobs.push(response.data);
          $scope.newJobTitle = null;
          $scope.newJobDesc = null;
          $scope.newJobSalary = null;
        }, function(error) {
          $scope.errors = error.data.errors;
        });
      }

      $scope.deleteJob = function(job){
        $http.delete('/api/v1/jobs/' + job.id + '.json').then(function(response){
          var index = $scope.jobs.indexOf(job);
          $scope.jobs.splice(index, 1);
        });
      }
      window.$scope = $scope;
  });
})();
