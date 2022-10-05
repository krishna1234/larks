$(document).ready(function () {
    $("[data-trigger]").on("click", function () {
        var trigger_id = $(this).attr('data-trigger');
        $(trigger_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
    });

    // close button 
    $(".btn-close").click(function (e) {
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("offcanvas-active");
    });

    // active nav link    
    // console.log(location.pathname.split('/').slice(-1)[0])
    $("a[href='"+ location.pathname.split('/').slice(-1)[0] +"']").parent().addClass("active");

    // $("a[href='"+ location.pathname.split('/')[1] +"']").parent().addClass("active");


    $('.customer-testimonials').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow:"<button type='button' class='previous-button'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='next-button'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});