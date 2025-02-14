
(function($) {
    "use strict";
    $(document).on('ready', function() {

    /* ========== # Carousel Slide For Services Section =========== */
    $('.carousel-service-items').owlCarousel({
        loop: true,
        autoplay: true,
        nav: false,
        dots: true,
        items: 1,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    })

    /* ========== # Carousel Slide For Journey Section =========== */
    timeline(document.querySelectorAll('.timeline'), {
        forceVerticalMode: 991,
        mode: 'horizontal',
        verticalStartPosition: 'left',
        visibleItems: 3
    });

    /* ========== # Testimonial Slide For Testimonials Section =========== */
    $('.testimonials').owlCarousel({
       loop: false,
       nav: false,
       dots: true,
       items: 1,
       navText: [
           "<i class='fa fa-angle-left'></i>",
           "<i class='fa fa-angle-right'></i>"
       ],
    });

    /* ========== # Goal Info For Fun Factor Init Section =========== */
    $('.timer').countTo();
    $('.fun-fact').appear(function() {
        $('.timer').countTo();
    }, {
        accY: -100
    });


    });
})(jQuery);


/* ========== # Time Line Auto Play =========== */
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelector(".timeline-items");
    const items = document.querySelectorAll(".timeline-item");

    items.forEach((item) => {
        item.addEventListener("mouseenter", function () {
            timelineItems.style.animationPlayState = "paused";
        });
        item.addEventListener("mouseleave", function () {
            timelineItems.style.animationPlayState = "running";
        });
    });
});

