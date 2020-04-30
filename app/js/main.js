// var validator = require('validator');



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

  var checkWidth = $(window).width();

  $('.nav__submenu-item-button').on('click', function(e){
    e.preventDefault();  
    // console.log($(this));
    // console.log(this.parent())
    if (checkWidth < 768) { 
    $(this).parent().toggleClass('nav__submenu-item--active');
    }
   
})

  $('.footer__contact-button').on('click', function(e){
    e.preventDefault();  
    // console.log($(this));
    // console.log(this.parent())
    if (checkWidth < 768) { 
    $(this).parent().toggleClass('footer__contact-item--active');
    }
   
})
  $('.footer__categoriest-button').on('click', function(e){
    e.preventDefault();  
    // console.log($(this));
    // console.log(this.parent())
    if (checkWidth < 768) { 
    $(this).parent().toggleClass('footer__categoriest--active');
    }
   
})
  $('.footer__about-button').on('click', function(e){
    e.preventDefault();  
    // console.log($(this));
    // console.log(this.parent())
    if (checkWidth < 768) { 
    $(this).parent().toggleClass('footer__about--active');
    }
   
})

//   $('.nav__item-button').on('mouseover', function(e){
//     e.preventDefault();  
//     // console.log($(this));
//     // console.log(this.parent())
//     if ($('.nav__item').not($(this).parent()).is('.nav__item--active')){
//         $('.nav__item').removeClass('nav__item--active');
       
//     }
//     $(this).parent().toggleClass('nav__item--active');
   
// })
$('.description-buttons__top-item').on('click', function(e){
  e.preventDefault();  
  // console.log($(this));
  // console.log(this.parent())
  
  $(this).parent().toggleClass('description-buttons__top--active');
 
})

/////////////////////////////////////////////////////////////////////////////
 //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
 if( getCookie('popupCookie') != 'submited'){ 
  if(getCookie('popupCookie') != 'closed' ){
    $('.popup-overlay').delay(10000).css("display", "flex").hide().fadeIn();
  }
}

$('a.close').click(function(){
  $('.popup-overlay').fadeOut();
  //sets the coookie to one minute if the popup is closed (whole numbers = days)
  setCookie( 'popupCookie', 'closed', .00069444444 );
});

$('a.submit').click(function(){
  $('.popup-overlay').fadeOut();
  //sets the coookie to five minutes if the popup is submited (whole numbers = days)
  setCookie( 'popupCookie', 'submited', .0034722222 );
});

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//   var navcontanier = $('.nav__submenu-contanier');
//   var navcontchildren = $('.nav__submenu-contanier').children();

//   navcontanier.on('mouseout', function(e){
//     e.preventDefault();  
//     // console.log($(this));
//     // console.log(this.parent())
    
//         $('.nav__item').removeClass('nav__item--active');
       
    
//     // $(this).parent().toggleClass('nav__item--active');
   
// })

//  
///////////////LOAD MORE//////////////////////
$('.popular__button-item').on('click', function(e){
  e.preventDefault(); 

  var html = '';
  $.ajax({ 
    type: 'GET', 
    url: 'popular.json', 
    dataType: 'json',
    success: function (data) { 
        data.forEach(function(item){
        	html += '<div class="popular__item">'
                    + '<div class="popular__image">'
                    + '<img src="' + item.image + '" alt="" class="popular__image-item">'
                    + '</div>'
                    + '<div class="popular__discription">'
                    +   '<h6 class="popular__discription-header">'
                    +      '<span class="popular__discription-text1">' + item.title + '</span>'
                    +      '<span class="popular__discription-text1">' + item.description + '</span>'
                    +    '</h6>'
                    +    '<div class="popular__discription-footer">'
                    +      '<span class="popular__discription-price"><i class="fas fa-dollar-sign"></i>' + item.price + '</span>'
                    +    '</div>'
                    + '</div>'
                  + '</div>';
        });
        
        // тут треба пррописати $('popular').append(html);
        $('.popular__json').append(html);
    }
});

 
})
///////////////LOAD MORE//////////////////////



////////////////////////////////////////

////////////////////////////////////////

////////////////////////////////////////



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


/////////////Lang and Currency bottons action///////////

     
       
        var checkWidth = $(window).width();
        
        
          $('.features__button-currency').on('click', function(e){
            e.preventDefault();
            
            if (checkWidth < 960) { 
              $(this).parent().toggleClass('features__currency--active');
          }
          
          });
          
          $('.features__button-lang').on('click', function(e){
            e.preventDefault();
            
            if (checkWidth < 960) { 
              $(this).parent().toggleClass('features__lang--active');
            }
          });
        
      
            
    



/////////////Lang and Currency bottons action///////////

// $('.features__panel-link.user').on('click', function(data){

// $('#modalLoginForm').modal('show')
// });

$('.features__panel-link.user').on('click', function(data){

   $(this).attr('data-toggle','modal');
   $(this).attr('data-target','#modalLoginForm');

   });






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

  // $("#modalLoginForm").ready(function () {
  // $("#modalLoginForm").validate({
  //   rules: {
  //     email: {
  //       required: true,
  //       email: true
  //     },
  //     password: {
  //       required: true,
  //       minlength: 6,
  //       pwcheck:true
  
  //     }
  //   },
  //   messages: {
  //    email: {
  //       required: "We need your email address to contact you",
  //       email: "Your email address must be in the format of name@domain.com"
  //     },
  //     password: {
  //       required: "You need to enter your password here",
  //       minlength: "Your password should be at least 6 characters length",
  //       pwcheck: "Your password should contain 1 numeric, 1 uppercase letter, 1 special character"
  
  //   } 
  //  }
   
  // //  });
  
  // });
  // $.validator.addMethod("pwcheck", function(value) {
  //   return /^[A-Z0-9\d=!\-@._*]*$/.test(value) // consists of only these
  //       // && /[a-z]/.test(value) // has a lowercase letter
  //       // && /\d/.test(value) // has a digit
  // })
  // });



 	  
    

      



// jQuery(function(){

// 	$(".container").imagezoomsl({ 
		
// 		descarea: ".big-caption", 				
// 		zoomrange: [1.68, 10],
// 		zoomstart: 1.68,
// 		cursorshadeborder: "10px solid black",
// 		magnifiereffectanimate: "fadeIn",	
// 	});
  

	// $(".tmb-caption img").click(function(){

	//     var that = this;
	// 	$(".container").fadeOut(600, function(){
		
	// 		$(this).attr("src", 	   $(that).attr("src"))
	// 			   .attr("data-large", $(that).attr("data-tmb-large"))
	// 			   .fadeIn(1000);				
	// 	});

	//     return false;
	// });  

// });



  // $('.slider').slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   // fade: true,
  //   adaptiveHeight:true,
  //   // speed:1000,
  //   // easing:'ease',
  //   // infinite:true,
  //   // initialSlide:0,
  //   // autoplay:false,
  //   // draggable:true,
  //   // swipe:true,
  //   // centerMode: true,
  //   // focusOnSelect: true,
  //   vertical:true,
  //   asNavFor: ".sliderbig"
    
  // });
  // $('.sliderbig').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   adaptiveHeight:true,
  //   // speed:1000,
  //   // easing:'ease',
  //   // infinite:true,
  //   // initialSlide:0,
  //   // autoplay:false,
  //   // swipe:true,
  //   vertical:true,
  //   // centerMode: true,
  //   // focusOnSelect: true,
  //   asNavFor: ".slider"
    
  // });


  // // $('.slider-nav').slick({
  // //   slidesToShow: 4,
  // //   slidesToScroll: 1,
  // //   asNavFor: '.slider',
  // //   dots: true,
  // //   centerMode: true,
  // //   focusOnSelect: true
  // // });
  // });



  $(document).ready(function () {
  
  $.validator.addMethod('strongPassword', function(value, element) {
    // return this.optional(element) 
    //   || value.length >= 6
    //   && /\d/.test(value)
    //   && /[a-z]/i.test(value)
    //   && /[A-Z]/i.test(value);
    return /^[A-Za-z0-9\d=!\-@.!#$%^&?_*]*$/.test(value) // consists of only these
       && /[A-Z]/.test(value) // has a uppercase letter
       && /[0-9]/.test(value) // has a numeric
       && /[-@.!#$%^&?_*]/.test(value) // has a symbol
       && /\d/.test(value); // has a digit
  }, 'Your password must be at least 6 characters length,contain 1 numeric, 1 uppercase letter, 1 special character.')

  $("#modalLoginForm").validate({
    rules: {
      email: {
        required: true,
        email: true
        // remote: "http://localhost:3000/inputValidator"
      },
      password: {
        required: true,
        minlength:6,
        strongPassword: true
      }
      
    },
    messages: {
      email: {
        required: 'Please enter an email address.',
        email: 'Please enter a <em>valid</em> email address.',
        // remote: $.validator.format("{0} is already associated with an account.")
      }
    }
  });
  console.log();
});


$(document).ready(function () {
$('body').on('click', '.password-control', function(){
	if ($('#password').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password').attr('type', 'password');
	}
	return false;
});
});


$(document).ready(function () {
  function postsCarousel() {
   var checkWidth = $(window).width();
   var owlPost = $(".popular__wrapper");
   if (checkWidth > 767) {
     if(typeof owlPost.data('owl.carousel') != 'undefined'){
       owlPost.data('owl.carousel').destroy(); 
     }
     owlPost.removeClass('owl-carousel');
   } else if (checkWidth < 768) {
     owlPost.addClass('owl-carousel');
     owlPost.owlCarousel({
       items : 1,
       slideSpeed : 500,
       animateOut: 'fadeOut',
       touchDrag: true,
       mouseDrag: true,
       autoplay: true,
       autoplaySpeed: 8000,
       autoplayTimeout: 8000,
       dots: true,
       loop: true
     });
   }
 }

 postsCarousel();
 $(window).resize(postsCarousel);   
}); 







$(document).ready(function () {

    
   
      
  $(".my-foto-container").imagezoomsl({

    descarea: ".big-caption", 				
    zoomrange: [1.68, 10],
    zoomstart: 1.68,
    cursorshadeborder: "10px solid black",
    magnifiereffectanimate: "fadeIn",	
  });

//клик по превью-картинке
  $(".my-foto").click(function(){

     var that = this;

   //копируем атрибуты из превью-картинки в контейнер-картинку
     $(".my-foto-container").fadeOut(600, function(){

       $(this).attr("src",               $(that).attr("data-large"))              // путь до small картинки
              .attr("data-large",       $(that).attr("data-large"))       // путь до big картинки
    
              //дополнительные атрибуты, если есть
              //.attr("data-title",       $(that).attr("data-title"))       // заголовок подсказки
              //.attr("data-help",        $(that).attr("data-help"))        // текст подсказки    
              //.attr("data-text-bottom", $(that).attr("data-text-bottom")) // текст снизу картинки
              
              .fadeIn(1000);				
     });
 });	  
 });