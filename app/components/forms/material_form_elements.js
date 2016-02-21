angular.module('app.form.material', ['ngMaterial', 'ngMessages'])
  .controller('SwitchCtrl',
  function ($scope) {
    $scope.data = {
      cb1: true,
      cb4: true
    };
    $scope.onChange = function (cbState) {
      $scope.message = "The switch is now: " + cbState;
    };
  })
  .controller('SliderCtrl',
  function ($scope) {
    $scope.color = {
      red: Math.floor(Math.random() * 255),
      green: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255)
    };
    $scope.rating1 = 3;
    $scope.rating2 = 2;
    $scope.rating3 = 4;
    $scope.disabled1 = 0;
    $scope.disabled2 = 70;
  })
  .controller('RadiobuttonsCtrl',
  function ($scope) {
    $scope.data = {
      group1: 'Banana',
      group2: '2',
      group3: 'avatar-1'
    };
    $scope.radioData = [
      {label: '1', value: 1},
      {label: '2', value: 2},
      {label: '3', value: '3', isDisabled: true},
      {label: '4', value: '4'}
    ];
    $scope.submit = function () {
      alert('submit');
    };
    $scope.addItem = function () {
      var r = Math.ceil(Math.random() * 1000);
      $scope.radioData.push({label: r, value: r});
    };
    $scope.removeItem = function () {
      $scope.radioData.pop();
    };
  }).
  controller('CheckboxCtrl',
  function ($scope) {
    $scope.data = {};
    $scope.data.cb1 = true;
    $scope.data.cb2 = false;
    $scope.data.cb3 = false;
    $scope.data.cb4 = false;
    $scope.data.cb5 = false;
  })
  .controller('SelectCtrl',
  function ($scope) {
    $scope.neighborhoods = ['Chelsea', 'Financial District', 'Midtown', 'West Village', 'Williamsburg'];
    $scope.neighborhoods2 = ['Chelsea', 'Financial District', 'Lower Manhattan', 'Midtown', 'Soho', 'Upper Manhattan', 'West Village', 'Williamsburg'];
  })
  .controller('InputDemoCtrl',
  function ($scope) {
    $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: '94043'
    };
  })
  .config(function ($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  })
  .controller('InputErrorsDemoCtrl',
  function ($scope) {
    $scope.project = {
      description: 'Nuclear Missile Defense System',
      rate: 500
    };
  })
  .controller('InputIconsDemoCtrl',
  function ($scope) {
    $scope.user = {
      name: 'John Doe',
      email: 'ipsum@lorem.com',
      phone: '',
      address: ''
    };
  });