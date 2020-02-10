/*global $:false, jQuery:false, console:false */
jQuery(document).ready(function($) {
    "use strict";

    $('.accordion').on('show', function(e) {

        $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
        $(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
        $(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
    });

    $('.accordion').on('hide', function(e) {
        $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
        $(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
        $(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
    });


    //$('.cover').css(top:'100%');
    $('.thumb-wrapp').hover(function() {
        $('.folio-image', this).stop().animate({
            bottom: '20px'
        }, {
            queue: false,
            duration: 300
        });
        $('.folio-caption', this).stop().animate({
            bottom: '-20px'
        }, {
            queue: false,
            duration: 300
        });
    }, function() {
        $('.folio-image', this).stop().animate({
            bottom: '0'
        }, {
            queue: false,
            duration: 300
        });
        $('.folio-caption', this).stop().animate({
            bottom: '0'
        }, {
            queue: false,
            duration: 300
        });
    });
    // $('ul.nav li.dropdown').hover(function() {
    //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    // }, function() {
    //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    // });
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('#featured').parallax("50%", 0.1);
    $('#services').parallax("50%", 0.2);
    $('#bottom').parallax("50%", 0.1);

    $('.flexslider').flexslider({
        animation: "fade"
    });

    $(".letter-container h2").lettering();


    $('.navigation').onePageNav({
        begin: function() {
            console.log('start');
        },
        end: function() {
            console.log('stop');
        },
        scrollOffset: 0
    });

});


$(window).scroll(function() {
    "use strict";
    if ($(window).scrollTop() < 10) {
        $('.fade').stop(true, true).fadeTo("slow", 1);
    } else {
        $('.fade').stop(true, true).fadeTo("slow", 0.33);
    }
});