$(function() {
    $(window).scroll(function() {

        if ($(window).scrollTop() > 400) {
            $('.fixed-colorBackground').addClass('cb-fixed');
        } else {
            $('.fixed-colorBackground').removeClass('cb-fixed');

        }

    });
});