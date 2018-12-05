$('.header-hamburger-menu').on('click', function () {
    $(this).toggleClass('menu-opened');
    $('.header-mobile-menu').toggleClass('opened-mobile-wrapper');
    $('body').toggleClass('body-overflow');
    $('html').toggleClass('body-overflow');
});


$(".why-us-wrapper").hover(function() {
    $(this).find("p")
        .stop(true)
        .queue('fx',
            function () {
                $(this)
                    .slideToggle({
                        duration: 300,
                    })
                    .dequeue('fx');
            });
});