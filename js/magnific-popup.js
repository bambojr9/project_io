$(".img__popup ").click(function() {
    $('.popup-gallery').magnificPopup({
        delegate: '.img__popup', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});