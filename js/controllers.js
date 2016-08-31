app.controller('dataController', ['$scope', function($scope){
  $scope.students =
  [
    {
      name: 'Yely',
      age: 30,
      gender: 'F'
    },
    {
      name: 'Alan',
      age: 32,
      gender: 'M'
    },
    {
      name: 'Heather',
      age: 7,
      gender: 'F'
    }
  ];
}]);
