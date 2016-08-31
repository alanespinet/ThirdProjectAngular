app.directive('studentData', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'templates/studentData.html'
  };
});
