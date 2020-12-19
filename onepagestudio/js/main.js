
/*---------------- Mobile Menu Start ------------------*/

$(".m-menu-btn").click(function () {
    $(".header-section").toggleClass("menu-open");
    $(this).toggleClass("m-menu-btn-ext");
    $(".menu").slideToggle("slow");
});
$(".menu-close-btn").click(function () {
    $(".header-section").removeClass("menu-open");
    $(".m-menu-btn").removeClass("m-menu-btn-ext");
});

/*---------------- Mobile Menu End ------------------*/

/*---------------- Counter Js Start ------------------*/
$(function () {
    $('.count-num').rCounter({
        duration: 30
    });
});
/*---------------- Counter Js End ------------------*/

/*---------------- Testimonial slider Js Start ------------------*/
$('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$('.our-team-slider').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
/*---------------- Testimonial slider Js End ------------------*/

/*---------------- Our Work slider Js Start ------------------*/
$('.our-work-slider').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
/*---------------- Our Work slider Js Start ------------------*/