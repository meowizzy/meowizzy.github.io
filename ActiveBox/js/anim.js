$(function () {

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();


    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPosition = $(this).scrollTop();
        if (scrollPosition > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");

        }
    });

    /*Smoth scroll*/

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let blockID = $(this).data('scroll');
        let elementOffset = $(blockID).offset().top;

        $("html, body").animate({
           scrollTop: elementOffset - 70
        }, 700);
        $("#nav").removeClass("show");
    });

    /*Nav toggle*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function() {
        nav.toggleClass("show");
    });



    /* Reviews: https://kenwheeler.github.io/slick/ */

    let slider = $("#reviewsSlider");

    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true

    });

});
