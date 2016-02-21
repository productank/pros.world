angular.module('app.user', ['ngMaterial', 'ngMessages'])
  .controller('UserTabsCtrl',
  function ($scope, $log) {
    var tabs = [
      {title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
      {title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
      {
        title: 'Three',
        content: "You can bind the selected tab via the selected attribute on the md-tabs element."
      },
      {title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."}
    ];
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
  }).controller('UserStaticTabs',
  function ($scope) {
    $scope.next = function () {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
    };
    $scope.previous = function () {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  }).controller('UserContactChipDemoCtrl',
  function ($timeout, $q) {
    var self = this;
    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [];
    self.filterSelected = true;
    /**
     * Search for contacts.
     */
    function querySearch(query) {
      var results = query ?
        self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);
      };
    }

    function loadContacts() {
      var contacts = [
        'Marina Augustine',
        'Oddr Sarno',
        'Nick Giannopoulos',
        'Narayana Garner',
        'Anita Gros',
        'Megan Smith',
        'Tsvetko Metzger',
        'Hector Simek',
        'Some-guy withalongalastaname'
      ];
      return contacts.map(function (c, index) {
        var cParts = c.split(' ');
        var contact = {
          name: c,
          email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
          image: 'http://lorempixel.com/50/50/people?' + index
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  });