(function () {
  'use strict';
  angular
    .module('app.site_autocomplete', ['ngMaterial'])
    .controller('siteAutocompleteCtrl', SiteAutoComplete);
  function SiteAutoComplete($timeout, $q, $log) {
    var self = this;
    //Turn to false to not simmulate query (or replace the timeout by your own query search)
    self.simulateQuery = true;
    self.isDisabled = false;
    // list of `state` value/display objects
    self.states = loadAll();
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
      var results = query ? self.states.filter(createFilterFor(query)) : self.states,
        deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () {
          deferred.resolve(results);
        }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `users` list of key/value pairs
     */
    function loadAll() {
      /*jshint multistr: true */
      var users = [
        {
          value: 'phillip',
          display: 'Phillip Gragolline',
          image: 'dist/images/team1.jpg',
          url: 'pages/profile',
        },
        {
          value: 'chris',
          display: 'Chris Factory',
          image: 'dist/images/team2.jpg',
          url: 'pages/profile',
        },
        {
          value: 'tony',
          display: 'Tony Banken',
          image: 'dist/images/team3.jpg',
          url: 'pages/profile',
        },
        {
          value: 'angus',
          display: 'Angus Dokey',
          image: 'dist/images/team4.jpg',
          url: 'pages/profile',
        },
        {
          value: 'chad',
          display: 'Chad Stokely',
          image: 'dist/images/team5.jpg',
          url: 'pages/profile',
        },
        {
          value: 'francis',
          display: 'Francis Copeland',
          image: 'dist/images/team6.jpg',
          url: 'pages/profile',
        }
      ];

      var pages = [
        {
          value: 'dashboard',
          display: 'Dashboard',
          icon: 'dist/img/icons/ic_dashboard_24px.svg',
          url: 'dashboard'
        },
        {
          value: 'ui',
          display: 'Ui Elements',
          icon: 'dist/img/icons/ic_layers_24px.svg',
          url: 'ui/buttons'
        },
        {
          value: 'custom',
          display: 'Custom Pages',
          icon: 'dist/img/icons/ic_pages_24px.svg',
          url: 'pages/profile'
        },
        {
          value: 'tables',
          display: 'Table Styles',
          icon: 'dist/img/icons/ic_view_module_24px.svg',
          url: 'tables/static'
        },
        {
          value: 'forms',
          display: 'Form elements',
          icon: 'dist/img/icons/ic_transform_24px.svg',
          url: 'forms/elements'
        },
        {
          value: 'charting',
          display: 'Form elements',
          icon: 'dist/img/icons/ic_trending_up_24px.svg',
          url: 'charts/flot'
        },
        {
          value: 'maps',
          display: 'Maps',
          icon: 'dist/img/icons/ic_map_24px.svg',
          url: 'maps/gmap'
        },
        {
          value: 'tasks',
          display: 'Tasks',
          icon: 'dist/img/icons/ic_done_all_24px.svg',
          url: 'tasks'
        }
      ];

      return users.concat(pages);
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }
  }
})();