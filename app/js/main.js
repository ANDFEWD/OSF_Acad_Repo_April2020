

// $(document).ready(function() {
//     $('.navbar-toggler').click(function() {
//       $('.navbar-toggler').removeClass('active');
//       if ($(this).next('.nav__submenu-contanier').css("display") == "none") {
//         $('.nav__submenu-contanier').hide('normal');
//         $(this).next('.nav__submenu-contanier').toggle('normal');
//         $('.navbar-toggler').removeClass('active');
//         $(this).toggleClass('active');
//       } else $('.nav__submenu-contanier').hide('normal');
//       return false;
//     });
//   });

$(document).ready(function() {
  $('.nav__item-button').on('click', function(e){
    e.preventDefault();
        if($('.nav__item').not(this).is('.nav__item--active'))
    {
        $('.nav__item').removeClass('nav__item--active'); 
    }
    $(this).parent().toggleClass('nav__item--active','switch');
})


  $('.navbar-toggler').on('click', function(e){
    e.preventDefault();
    
        if($('.nav').css('display','none'))
    {
        $('.nav').css('display','flex')
    }
    else 
    {
        $('.nav').css('display','none')
    }
    
})


});

// $("#selectBackground ul li a").click(function(e) {
//     e.preventDefault();
//     $("#selectBackground ul li a").removeClass('active');
//     $(this).addClass('active');
//   })

// $(document).ready(function() {

//     function func(){
//         this.className = '--active';
//     }

//     var listObj = document.querySelectorAll('.block');

//     for (var i=0; i<listObj.length; i++){
//         listObj[i].onclick = func;
//     }
// };


//     $('.navbar-toggler').click(function() {
     
//   });