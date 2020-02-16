$(function() {
    $(window).scroll(function() {

        if ($(window).scrollTop() > 515) {
            $('.fixed-colorBackground').addClass('cb-fixed');
        } else {
            $('.fixed-colorBackground').removeClass('cb-fixed');

        }
    });
});