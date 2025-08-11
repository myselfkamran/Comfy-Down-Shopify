(function ($) {
    var halo = {
        initTextRightSlider: function () {
            var textRight = $('[data-text-right-slider]');

            textRight.each(function () {
                var self = $(this),
                    rows = parseInt(self.data('row')),
                    centerMode = self.data('center'),
                    row_tablet = (rows > 1 ? parseInt(rows - 1) : 1);

                if (self.not('.slick-initialized')) {
                    self.slick({
                        centerMode: centerMode,
                        centerPadding: '25%',
                        slidesToShow: 8,
                        slidesToScroll: 1,
                        autoplay: true,
                        dots: false,
                        speed: 7000,
                        autoplaySpeed: 0,
                        cssEase: 'linear',
                        pauseOnHover:false,
                        nextArrow: window.arrows.icon_next,
                        prevArrow: window.arrows.icon_prev,
                        rtl: window.rtl_slick,
                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    centerMode: false,
                                    arrows: false,
                                    dots: false,
                                    slidesToShow: 6,
                                    slidesToScroll: row_tablet
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    centerMode: false,
                                    arrows: false,
                                    dots: false,
                                    slidesToShow: 5,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    centerMode: false,
                                    arrows: false,
                                    dots: false,
                                    slidesToShow: 3.5,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 568,
                                settings: {
                                    centerMode: false,
                                    arrows: false,
                                    dots: false,
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                }
            });
        }
    }
    halo.initTextRightSlider();
    if ($('body').hasClass('cursor-fixed__show')){
        window.sharedFunctionsAnimation.onEnterButton();
        window.sharedFunctionsAnimation.onLeaveButton();
    }
})(jQuery);