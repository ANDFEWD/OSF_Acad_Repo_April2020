$(document).ready(function() {
  $('.nav__item-button').on('click', function(e){
    e.preventDefault();  
    // console.log($(this));
    // console.log(this.parent())
    if ($('.nav__item').not($(this).parent()).is('.nav__item--active')){
        $('.nav__item').removeClass('nav__item--active');
       
    }
    $(this).parent().toggleClass('nav__item--active');
   
})


  $('.navbar-toggler').on('click', function(e){
    e.preventDefault();
    
    $('.nav').toggleClass('nav--active');
    
    // if($('.nav').css('display','none')){
    //     $('.nav').css('display','flex');
    // }
    // else {
    //     $('.nav').css('display','none');
    // }
    
})

$('.button-plus').on('click', function(e){
    e.preventDefault();
    var parsetext = parseInt($('.features__panel-counter-number-bag').text())+1
    console.log(parsetext);
    $('.features__panel-counter-number-bag').text(parsetext);

})

$('.button-heart').on('click', function(e){
    e.preventDefault();
    var parsetext = parseInt($('.features__panel-counter-number-heart').text())+1
    console.log(parsetext);
    $('.features__panel-counter-number-heart').text(parsetext);

})


});

$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });
