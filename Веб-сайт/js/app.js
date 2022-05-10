$(function () {
  let header = $('#header');
  let scrollPos = $(window).scrollTop();
   

//  $(window).on('scroll', function(){
//     scrollPos = $(this).scrollTop();

//     if(scrollPos > 0) {
//        header.addClass('fixed');
//     } else {
//        header.removeClass('fixed');
//     }
      
//  })

  let nav = $('#nav')
  let navToggle = $('#navMenu')
  navToggle.on('click', function(event) {
     event.preventDefault();

     nav.toggleClass('show');
  })
});

 $(function() {
    // FIXED MENU - SCROLL > 200PX
    $(window).scroll(function(){
      if ($(this).scrollTop() > 0) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      }
    });
  });