angular.module("app.chat", []).controller('ChatWindowCtrl',
  function ($scope, $timeout, $mdSidenav, $log,$firebase,$firebaseObject,$firebaseArray) {
    
    var friend = this.friend = {
        image: '',
        name: '',
        status: 0
      },
      send_text = this.send_text = {
        value: ''
      };

    this.friends_list = [
      {
        chat_friend_name: 'Philip Gragoline',
        chat_friend_location: 'New york',
        chat_friend_image: 'dist/images/team1.jpg',
        chat_friend_online: 1
      },
      {
        chat_friend_name: 'Chris Factory',
        chat_friend_location: 'New York',
        chat_friend_image: 'dist/images/team2.jpg',
        chat_friend_online: 1
      },
      {
        chat_friend_name: 'Tony Banken',
        chat_friend_location: 'DC City',
        chat_friend_image: 'dist/images/team3.jpg',
        chat_friend_online: 1
      },
      {
        chat_friend_name: 'Angus Dokey',
        chat_friend_location: 'Stanford',
        chat_friend_image: 'dist/images/team4.jpg',
        chat_friend_online: 1
      },
      {
        chat_friend_name: 'Chad Stokely',
        chat_friend_location: 'Chicago',
        chat_friend_image: 'dist/images/team5.jpg',
        chat_friend_online: 1
      },
      {
        chat_friend_name: 'Francis Copeland',
        chat_friend_location: 'San Francisco',
        chat_friend_image: 'dist/images/team6.jpg',
        chat_friend_online: 1
      },
      {
        chat_friend_name: 'Philip Gragoline',
        chat_friend_location: 'New york',
        chat_friend_image: 'dist/images/team1.jpg',
        chat_friend_online: 0
      },
      {
        chat_friend_name: 'Chris Factory',
        chat_friend_location: 'New York',
        chat_friend_image: 'dist/images/team2.jpg',
        chat_friend_online: 0
      },
      {
        chat_friend_name: 'Tony Banken',
        chat_friend_location: 'DC City',
        chat_friend_image: 'dist/images/team3.jpg',
        chat_friend_online: 0
      },
      {
        chat_friend_name: 'Angus Dokey',
        chat_friend_location: 'Stanford',
        chat_friend_image: 'dist/images/team4.jpg',
        chat_friend_online: 0
      },
      {
        chat_friend_name: 'Chad Stokely',
        chat_friend_location: 'Chicago',
        chat_friend_image: 'dist/images/team5.jpg',
        chat_friend_online: 0
      },
      {
        chat_friend_name: 'Francis Copeland',
        chat_friend_location: 'San Francisco',
        chat_friend_image: 'dist/images/team6.jpg',
        chat_friend_online: 0
      }
    ];

    this.close = function () {
      $mdSidenav('chatwindow').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };

    this.toggleRightNavbar = function(image, name, status) {
      friend.image = image;
      friend.name = name;
      friend.status = status;

      $mdSidenav('chatwindow').toggle()
        .then(function(){

        });
    };

    this.appendMessage = function () {

      if(send_text.value !== ''){
        $(".chat_talk").append('<div class="chat_talk__message chat__message--sent"> <img src="dist/images/user.png" class="chat__message__image img40_40 img-rounded" alt=""> <div class="chat__message--received-text"> <span>' + send_text.value  + ' </span> </div> </div>');
        send_text.value = '';
      }
    };

  }).directive('friendItem',
  function () {

    return {
      restrict: 'E',
      templateUrl: 'app/components/chat/friend_item.html',
      scope: false,
      link: function (scope, element, attrs) {

      }
    };
  });