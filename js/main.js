(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    $(document).ready(function () {
        // For larger screens (desktop), dropdowns appear on hover
        if ($(window).width() >= 992) {
            $('.navbar .nav-item').hover(function () {
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
            }, function () {
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
            });
        }

        // For smaller screens (mobile), dropdowns appear on click
        $('.navbar .nav-item .dropdown-toggle').on('click', function (e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).next('.dropdown-menu').stop(true, true).slideToggle(300);
            }
        });

        // Re-apply behavior on window resize
        $(window).resize(function () {
            if ($(window).width() >= 992) {
                // Desktop hover behavior
                $('.navbar .nav-item').hover(function () {
                    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
                }, function () {
                    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
                });
            } else {
                // Mobile click behavior
                $('.navbar .nav-item .dropdown-toggle').off('hover').on('click', function (e) {
                    e.preventDefault();
                    $(this).next('.dropdown-menu').stop(true, true).slideToggle(300);
                });
            }
        });
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


})(jQuery);
