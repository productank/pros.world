angular.module('app.ui.toolbar', ['ngMaterial', 'ngMessages'])
  .controller('ToolbarShrinkCtrl',
  function ($scope) {
    var item = {
      face: 'dist/images/team1.jpg',
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      notes: "I'll be in your neighborhood doing errands."
    };
    $scope.todos = [];
    for (var i = 0; i < 15; i++) {
      $scope.todos.push({
        face: 'dist/images/team1.jpg',
        what: "Brunch this weekend?",
        who: "Min Li Chan",
        notes: "I'll be in your neighborhood doing errands."
      });
    }
  });