$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
    });
});


$(document).ready(function () {
    $('.burger_box').click(function (event) {
        $('.burger_box ,.nav_b ,.logo_link_b ,.head_ul_b ,.head_li_b').toggleClass('active');
    });
});

