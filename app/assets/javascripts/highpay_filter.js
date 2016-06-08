angular.module("app").filter('highpay', [function () {
  return function(jobs) {
    if (jobs) {
      var highpayJobs = [];
      for (var i = 0; i < jobs.length; i++) {
        if (parseInt(jobs[i].salary) > 500000){
          highpayJobs.push(jobs[i]);
        }
      }
      return highpayJobs;
    }
  }
}]);
