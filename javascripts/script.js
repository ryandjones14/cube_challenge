$(function(){

  $('.car').on('click', function(e) {
    e.preventDefault();
    console.log("CAR CLICKED");
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
  });

  $(document).keydown(function(e){
    console.log(e.keyCode);
    if($('.active').hasClass('horiz')){
      console.log("ACTIVE IS H");
      if (e.keyCode === 68){
        $('.active').animate({left:'+=60px'});
        addMoves();
      } else if (e.keyCode === 65){
        $('.active').animate({left:'-=60px'});
        subMoves();
      }
    }else if($('.active').hasClass('vert')){
      console.log("ACTIVE IS V");
      if (e.keyCode === 87){
        $('.active').animate({top:'-=60px'});
      } else if (e.keyCode === 83){
        $('.active').animate({top:'+=60px'});
      }
    }
    winner();
  });
// Determine if user wins
  var myCarMoves = 0;
  function addMoves(){
    if($('#myCar').hasClass('active')){
      myCarMoves++;
    }
    console.log("myCarMoves = ", myCarMoves);
  }
  function subMoves(){
    if($('#myCar').hasClass('active')){
      myCarMoves--;
    }
    console.log("myCarMoves = ", myCarMoves);
  }
  function winner(){
    if (myCarMoves===4){
      changeLevel();
    }
  }
// Determine what level user is on
  function changeLevel(){
    $('.nextLevel').removeClass('hide');
  //   $.ajax({
  //     url: 'https://www.espn.go.com',
  //     type: 'GET',
  //     dataType: 'html'
  //   })
  //   .done(function() {
  //     console.log("success");
  //   })
  //   .fail(function() {
  //     console.log("error");
  //   })
  //   .always(function() {
  //     console.log("complete");
  //   });
  // }
  }
})
