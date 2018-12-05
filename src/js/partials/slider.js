$('.why-us-slide-wrapper').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="prev-arrow" type="button"></button>',
    nextArrow: '<button class="next-arrow" type="button"></button>',
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1281,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
                prevArrow: '<button class="prev-arrow" type="button"></button>',
                nextArrow: '<button class="next-arrow" type="button"></button>'
            }
        },
        {
            breakpoint: 999,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button class="prev-arrow" type="button"></button>',
                nextArrow: '<button class="next-arrow" type="button"></button>'
            }
        },
        {
            breakpoint: 691,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button class="prev-arrow" type="button"></button>',
                nextArrow: '<button class="next-arrow" type="button"></button>'
            }
        }
    ]
});

