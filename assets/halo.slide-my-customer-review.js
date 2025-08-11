(function ($) {
    var halo = {
        initMyReviewSlider: function () {
            var policyMyBlock = $('[data-my-review-slider]');

            policyMyBlock.each(function () {
                var self = $(this),
                    rows = parseInt(self.data('row')),
                    centerMode = self.data('center'),
                    row_tablet = (rows > 1 ? parseInt(rows - 1) : 1);

                if (self.not('.slick-initialized')) {
                    self.slick({
                        centerMode: centerMode,
                        centerPadding: '25%',
                        slidesToShow: rows,
                        slidesToScroll: rows,
                        autoplay: true,
                        dots: false,
                        speed: 5000,
                        autoplaySpeed: 3000,
                        infinite: true,
                        nextArrow: window.arrows.icon_next,
                        prevArrow: window.arrows.icon_prev,
                        rtl: window.rtl_slick,
                        infinite: true,
                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    centerMode: false,
                                    arrows: false,
                                    dots: false,
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    centerMode: false,
                                    arrows: false,
                                    dots: false,
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    centerMode: false,
                                    arrows: false,
                                    dots: false,
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                }
            });
        }
    }
    halo.initMyReviewSlider();
    if ($('body').hasClass('cursor-fixed__show')){
        window.sharedFunctionsAnimation.onEnterButton();
        window.sharedFunctionsAnimation.onLeaveButton();
    }
})(jQuery);