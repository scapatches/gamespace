{"filter":false,"title":"java.js","tooltip":"/java.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":66,"column":1},"action":"insert","lines":["$('#backgroundmusic')[0].play();","var audio = $(\"#shoot\")[0];","","$(window).keypress(function(e) {","    // space key","    if (e.keyCode === 0 || e.keyCode === 32) {","        e.preventDefault();","       //Restart Shooting Sound ","       audio.pause();","        audio.currentTime = 0;","        audio.play();","      ","        // $(\"#bullet\").show();","        var shipposition = Math.floor($(\"#ship\").position().left / 50) *","            50;","       ","        var $samecol = $('.stormtrooper:not(\".hidden\")').filter(","            function() {","                return Math.round($(this).position().left) ===","                    shipposition;","            });","","        var largestTop = 0;","        var $bottomEl;","        $samecol.each(function() {","            if (!$bottomEl || parseInt($(this).position().top) >","                largestTop) {","                largestTop = parseInt($(this).position().top);","                $bottomEl = $(this);","            }","        });","        $bottomEl.css('background-image', 'url(\"https://s-media-cache-ak0.pinimg.com/originals/10/92/fa/1092fa7d42c7db063aaf5f1d517b1692.gif\")');","       ","         setTimeout(function () {","          $bottomEl.addClass('hidden');","        }, 1000);","     checkIfGameIsOver();","","    }","});","","$('body').keydown(function(e){","    if (e.keyCode == 37) {","        $('#ship').finish();","        if ($(\"#ship\").position().left > 0) {","            $('#ship').animate({","                left: '-=50'","            });","        }","    }","  ","    if (e.keyCode == 39) {","        $('#ship').finish();","        if ($(\"#ship\").position().left < 350) {","            $('#ship').animate({","                left: '+=50'","            });","        }","    }","});","","function checkIfGameIsOver(){","  if ($('.stormtrooper:not(\".hidden\")').length == 1){","    $('#game-over').show();","  }","","}"],"id":1}]]},"ace":{"folds":[],"scrolltop":533,"scrollleft":0,"selection":{"start":{"row":47,"column":15},"end":{"row":47,"column":15},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":284,"mode":"ace/mode/javascript"}},"timestamp":1470341327810,"hash":"dc23faefff5a3b09fdc256d68f1005e37cd2cd3e"}