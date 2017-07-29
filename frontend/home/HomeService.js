app.service('HomeService', function() {
  this.getPrediction = function (x) {
    return x*x;
  }
});