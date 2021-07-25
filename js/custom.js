(function ($) {
    "use strict";

    //sticky menu
    $(window).on('scroll', function () {
        var window_top = $(window).scrollTop() + 0;
        if (window_top > 0) {
            $('.cre_header_part').addClass('menu_fixed animated slideInDown');
        } else {
            $('.cre_header_part').removeClass('menu_fixed animated slideInDown');
        }
    });

}(jQuery));