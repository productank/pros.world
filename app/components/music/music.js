angular.module("app.music",[]).controller('AudioJsCtrl',
  function ($scope) {

    audiojs.events.ready(function() {
      var audios = document.getElementsByTagName('audio');
      //console.log(audios[0]);

      /*jshint multistr: true */

      _.each(audios,function(audio){

        var a1 = audiojs.create(audio, {
          css: false,
          createPlayer: {
            markup: '\
                     <div class="play-pause"> \
                     <p class="play"><button class="trigger"><i class="fa fa-play fa-2x"></i></button></p> \
                     <p class="pause"><button class="trigger"><i class="fa fa-pause fa-2x"></i></button></p> \
                     <p class="loading_music"><button class="trigger"><i class="fa fa-refresh fa-spin fa-2x"></button></i></p> \
                     <p class="error"></p> \
                     </div> \
                     <div class="scrubber"> \
                     <div class="progress"></div> \
                     <div class="loaded"></div> \
                     </div> \
                     <div class="time"> \
                     <em class="played">00:00</em>/<strong class="duration">00:00</strong> \
                     </div> \
                     <div class="error-message"></div>',
            playPauseClass: 'play-pause',
            scrubberClass: 'scrubber',
            progressClass: 'progress',
            loaderClass: 'loaded',
            timeClass: 'time',
            durationClass: 'duration',
            playedClass: 'played',
            errorMessageClass: 'error-message',
            playingClass: 'playing',
            loadingClass: 'player-loading',
            errorClass: 'error'
          }
        });

      });
    });

  });
