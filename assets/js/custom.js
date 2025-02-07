
(function($) {
    "use strict";
    $(document).on('ready', function() {

    /* ========== # Carousel Slide For Services Section =========== */
    $('.carousel-service-items').owlCarousel({
        loop: false,
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


    });
})(jQuery);
