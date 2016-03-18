angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [{
    title: 'Reggae',
    id: 1
  }, {
    title: 'Chill',
    id: 2
  }, {
    title: 'Dubstep',
    id: 3
  }, {
    title: 'Indie',
    id: 4
  }, {
    title: 'Rap',
    id: 5
  }, {
    title: 'Cowbell',
    id: 6
  }];
})

.controller('RegisterCtrl', function($scope) {
  $scope.date = "";
  $scope.items = ['Bono', 'Kiss', 'John Lennon', 'Celine Dion'];
})

.controller('GridCtrl', function($scope) {
  HTMLImports.whenReady(function() {
    var randomUserUrl = 'https://randomuser.me/api/';
    var template = template || document.querySelector('template.my-grid-with-template');
    var grid = document.querySelector('#my-grid-with-template');

    template.onSelect = function() {
      if (grid.selection.selected().length === 0) {
        template.selected = null;
      } else {
        template.selected = template.users[grid.selection.selected()];
      }
    };

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {

      if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 200) {
          template.users = JSON.parse(xhr.responseText).results;
        }
      }
    }
    xhr.open("GET", randomUserUrl + "?results=25", true);
    xhr.send();
  });
})

.controller('ExpenseManagerCtrl', function($scope) {
  $scope.merchants = ["Office supplies", "Shuttle", "Breakfast", "Restaurant", "Electronics", "Hotel", "Taxi", "Ride sharing", "Fast food", "Parking", "Rental car", "Airline"];

  $scope.generateGridData = function() {
    var expenses = [];
    var dates = ["2016-02-07", "2016-02-06", "2016-02-05", "2016-02-04"];
    var merchants = ["Shuttle", "Turku", "Wings", "Vaadiners"];
    var total = ["$752.76", "$421.12", "$511.41", "$421.12"];
    var status = ["New", "Reimbursed", "Salary", "Traveling invoice"];
    var comment = ["Expense from my business trip.", "Expense from my holiday.", "Expense from my travelling.", "Expense from my business."];
    for (var i = 0; i < 400; i++) {
      var row = [];
      [dates, merchants, total, status, comment].forEach(function(array) {
        row.push(array[Math.floor(Math.random() * array.length)]);
      });
      expenses.push(row);
    }
    window.addEventListener('WebComponentsReady', function() {
      document.querySelector('vaadin-grid').items = expenses;
    });
    setTimeout(function(){
      document.querySelector('vaadin-grid').items = expenses;
    }, 5000);
    setTimeout(function(){
      document.querySelector('vaadin-grid').items = expenses;
    }, 10000);
    //console.log(document.querySelector('vaadin-grid'));
    //document.querySelector('vaadin-grid').items = expenses;
    //console.log(expenses);
    $scope.expenses = expenses;
  };
  $scope.generateGridData();
  //console.log();
})




.controller('PlaylistCtrl', function($scope, $stateParams) {});
