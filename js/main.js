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