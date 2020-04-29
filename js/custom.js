(function ($) {

    "use strict";

    // COLOR MODE

    function toggleDarkMode() {
        $('.color-mode-icon').toggleClass('active');
        $('body').toggleClass('dark-mode');
        $('#navbar').toggleClass('bg-white');
        $('#navbar-name').toggleClass('text-dark')
    }

    $('.color-mode').click(function() {
        toggleDarkMode();
    });

    function testDarkMode() {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            toggleDarkMode();
        }
    }

    testDarkMode();

    // HEADERs
    //$(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true
    });

    // SMOOTHSCROLL
    $(function () {
        $('.nav-link, .custom-btn-link').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
