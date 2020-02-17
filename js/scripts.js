$(function() {
    $(window).scroll(function() {

        if ($(window).scrollTop() > 400) {
            $('.fixed-colorBackground').addClass('cb-fixed');
            $('.btn--up').addClass('show');
        } else {
            $('.fixed-colorBackground').removeClass('cb-fixed');
            $('.btn--up').removeClass('show');
        }
    });
    $('.btn--up').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
});