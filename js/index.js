/*- - - - - - - - - - - - - - - - - - 
        Loading Section
- - - - - - - - - - - - - - - - - -*/
 
  /*- - - - - - - - - - - - - - - - - - 
        Scroll To Top
- - - - - - - - - - - - - - - - - -*/
$(document).ready(function(){
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.go-top').fadeIn();
  } else {
      $('.go-top').fadeOut();
  }
});

//Click event to scroll to top
$('.go-top').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});
});


$(window).load(function() {
  $(".loader").delay(1200).fadeOut(800);
  
})


