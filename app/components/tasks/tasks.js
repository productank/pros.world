angular.module('todomvc', [])
  .controller('TodoCtrl',
  function ($scope, $routeParams, $filter, store) {
    'use strict';

    var todos = $scope.todos = store.todos;

    $scope.newTodo = '';
    $scope.editedTodo = null;

    $scope.$watch('todos', function () {
      $scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
      $scope.completedCount = todos.length - $scope.remainingCount;
      $scope.allChecked = !$scope.remainingCount;
    }, true);

    // Monitor the current route for changes and adjust the filter accordingly.
    $scope.$on('$routeChangeSuccess', function () {
      var status = $scope.status = $routeParams.status || '';
      $scope.statusFilter = (status === 'active') ?
      { completed: false } : (status === 'completed') ?
      { completed: true } : {};
    });

    $scope.addTodo = function () {
      var newTodo = {
        title: $scope.newTodo.trim(),
        completed: false
      };

      if (!newTodo.title) {
        return;
      }

      $scope.saving = true;
      store.insert(newTodo)
        .then(function success() {
          $scope.newTodo = '';
        })
        .finally(function () {
          $scope.saving = false;
        });
    };

    $scope.editTodo = function (todo) {
      $scope.editedTodo = todo;
      // Clone the original todo to restore it on demand.
      $scope.originalTodo = angular.extend({}, todo);
    };

    $scope.saveEdits = function (todo, event) {
      // Blur events are automatically triggered after the form submit event.
      // This does some unfortunate logic handling to prevent saving twice.
      if (event === 'blur' && $scope.saveEvent === 'submit') {
        $scope.saveEvent = null;
        return;
      }

      $scope.saveEvent = event;

      if ($scope.reverted) {
        // Todo edits were reverted-- don't save.
        $scope.reverted = null;
        return;
      }

      todo.title = todo.title.trim();

      if (todo.title === $scope.originalTodo.title) {
        $scope.editedTodo = null;
        return;
      }

      store[todo.title ? 'put' : 'delete'](todo)
        .then(function success() {}, function error() {
          todo.title = $scope.originalTodo.title;
        })
        .finally(function () {
          $scope.editedTodo = null;
        });
    };

    $scope.revertEdits = function (todo) {
      todos[todos.indexOf(todo)] = $scope.originalTodo;
      $scope.editedTodo = null;
      $scope.originalTodo = null;
      $scope.reverted = true;
    };

    $scope.removeTodo = function (todo) {
      store.delete(todo);
    };

    $scope.saveTodo = function (todo) {
      store.put(todo);
    };

    $scope.toggleCompleted = function (todo, completed) {
      if (angular.isDefined(completed)) {
        todo.completed = completed;
      }
      store.put(todo, todos.indexOf(todo))
        .then(function success() {}, function error() {
          todo.completed = !todo.completed;
        });
    };

    $scope.clearCompletedTodos = function () {
      store.clearCompleted();
    };

    $scope.markAll = function (completed) {
      todos.forEach(function (todo) {
        if (todo.completed !== completed) {
          $scope.toggleCompleted(todo, completed);
        }
      });
    };
  }).directive('todoEscape', function () {
    'use strict';

    var ESCAPE_KEY = 27;

    return function (scope, elem, attrs) {
      elem.bind('keydown', function (event) {
        if (event.keyCode === ESCAPE_KEY) {
          scope.$apply(attrs.todoEscape);
        }
      });

      scope.$on('$destroy', function () {
        elem.unbind('keydown');
      });
    };
  }).directive('todoFocus', function todoFocus($timeout) {
    'use strict';

    return function (scope, elem, attrs) {
      scope.$watch(attrs.todoFocus, function (newVal) {
        if (newVal) {
          $timeout(function () {
            elem[0].focus();
          }, 0, false);
        }
      });
    };
  }).factory('todoStorage', function ($http, $injector) {
    'use strict';

    // Detect if an API backend is present. If so, return the API module, else
    // hand off the localStorage adapter
    return $http.get('/')
      .then(function () {
        return $injector.get('localStorage');
      });
  })
  .factory('localStorage', function ($q) {
    'use strict';

    var STORAGE_ID = 'todos-angularjs';

    var store = {
      todos: [],

      _getFromLocalStorage: function () {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },

      _saveToLocalStorage: function (todos) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
      },

      clearCompleted: function () {
        var deferred = $q.defer();

        var completeTodos = [];
        var incompleteTodos = [];
        store.todos.forEach(function (todo) {
          if (todo.completed) {
            completeTodos.push(todo);
          } else {
            incompleteTodos.push(todo);
          }
        });

        angular.copy(incompleteTodos, store.todos);

        store._saveToLocalStorage(store.todos);
        deferred.resolve(store.todos);

        return deferred.promise;
      },

      delete: function (todo) {
        var deferred = $q.defer();

        store.todos.splice(store.todos.indexOf(todo), 1);

        store._saveToLocalStorage(store.todos);
        deferred.resolve(store.todos);

        return deferred.promise;
      },

      get: function () {
        var deferred = $q.defer();

        angular.copy(store._getFromLocalStorage(), store.todos);
        deferred.resolve(store.todos);

        return deferred.promise;
      },

      insert: function (todo) {
        var deferred = $q.defer();

        store.todos.push(todo);

        store._saveToLocalStorage(store.todos);
        deferred.resolve(store.todos);

        return deferred.promise;
      },

      put: function (todo, index) {
        var deferred = $q.defer();

        store.todos[index] = todo;

        store._saveToLocalStorage(store.todos);
        deferred.resolve(store.todos);

        return deferred.promise;
      }
    };

    return store;
  });