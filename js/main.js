//  ================ Функция для слайдера =========== //

$(document).ready(function() {
    $('.our_works').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        waitForAnimate: false,
        slidesToScroll: 1, 
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
    });

    // ============== Burger Menu =======================

$(".burger_menu").click(function() {
    $(".header-menu2").slideToggle(500);
        if($(".burger_menu").html() == '<i class="fas fa-bars"></i>') {
            $(this).html('<i class="fas fa-times"></i>');
        }
        else {
            $(this).html('<i class="fas fa-bars"></i>');
            }
    });

    // ============== Кнопка "Навверх" ================

    $(window).scroll(function() {
        if($(this).scrollTop() != 0)
            $("#toTop").fadeIn();
        else
            $("#toTop").fadeOut();
    });
    
        $("#toTop").click(function() {
            $('body, html').animate({
                scrollTop:0
            }, 800);
        });

    // ============= Функции для меню ==========

    $('#homes').on("click", function(e){
        e.preventDefault();
            var top = $(".home").offset().top;
        $('html,body').animate({
           scrollTop: top
        }, 900);
    });

    $('#abouts').on("click", function(e){
        e.preventDefault();
            var top = $("#aboutDesktop").offset().top;
        $('html,body').animate({
           scrollTop: top
        }, 900);
    });

    $('#services').on("click", function(e){
        e.preventDefault();
            var top = $(".service_cont").offset().top;
        $('html,body').animate({
           scrollTop: top
        }, 900);
    });

    $('#portfolios').on("click", function(e){
        e.preventDefault();
            var top = $(".portfolio").offset().top;
        $('html,body').animate({
           scrollTop: top
        }, 900);
    });

    $('#contacts').on("click", function(e){
        e.preventDefault();
            var top = $(".footer").offset().top;
        $('html,body').animate({
           scrollTop: top
        }, 900);
    });

     // ============= Функции для меню мобильной версий ==========

     $('#home').on("click", function(e){
        e.preventDefault();
            var top = $(".home").offset().top;
        $('html,body').animate({
           scrollTop: top
        }, 900);
    });

    $('#about').on("click", function(e){
        e.preventDefault();
            var top = $("#aboutDesktop").offset().top;
        $('html,body').animate({
           scrollTop: top
        }, 900);
    });

    $('#service').on("click", function(e){
        e.preventDefault();
            var top = $(".service_cont").offset().top;
        $('html,body').animate({
           scrollTop: top
        }, 900);
    });

    $('#portfolio').on("click", function(e){
        e.preventDefault();
            var top = $(".portfolio").offset().top;
        $('html,body').animate({
           scrollTop: top
        }, 900);
    });

    $('#contact').on("click", function(e){
        e.preventDefault();
            var top = $("#footer").offset().top;
        $('html,body').animate({
           scrollTop: top
        }, 900);
    });