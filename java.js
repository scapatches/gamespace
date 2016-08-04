$('#backgroundmusic')[0].play();
var audio = $("#shoot")[0];

$(window).keypress(function(e) {
    // space key
    if (e.keyCode === 0 || e.keyCode === 32) {
        e.preventDefault();
       //Restart Shooting Sound 
       audio.pause();
        audio.currentTime = 0;
        audio.play();
      
        // $("#bullet").show();
        var shipposition = Math.floor($("#ship").position().left / 50) *
            50;
       
        var $samecol = $('.stormtrooper:not(".hidden")').filter(
            function() {
                return Math.round($(this).position().left) ===
                    shipposition;
            });

        var largestTop = 0;
        var $bottomEl;
        $samecol.each(function() {
            if (!$bottomEl || parseInt($(this).position().top) >
                largestTop) {
                largestTop = parseInt($(this).position().top);
                $bottomEl = $(this);
            }
        });
        $bottomEl.css('background-image', 'url("https://s-media-cache-ak0.pinimg.com/originals/10/92/fa/1092fa7d42c7db063aaf5f1d517b1692.gif")');
       
         setTimeout(function () {
          $bottomEl.addClass('hidden');
        }, 1000);
     checkIfGameIsOver();

    }
});

$('body').keydown(function(e){
    if (e.keyCode == 37) {
        $('#ship').finish();
        if ($("#ship").position().left > 0) {
            $('#ship').animate({
                left: '-=50'
            });
        }
    }
  
    if (e.keyCode == 39) {
        $('#ship').finish();
        if ($("#ship").position().left < 350) {
            $('#ship').animate({
                left: '+=50'
            });
        }
    }
});

function checkIfGameIsOver(){
  if ($('.stormtrooper:not(".hidden")').length == 1){
    $('#game-over').show();
  }

}