'use strict'

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 2,
        dots: true,
        adaptiveHeight: true,
        variableWidth: true,
        speed: 800,
        easing: 'ease',
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});