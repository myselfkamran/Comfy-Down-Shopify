(function ($) {
  var halo = {
    initTextLeftSlider: function () {
      var textLeft = $('[data-text-left-slider]');

      textLeft.each(function () {
        var self = $(this),
            rows = parseInt(self.data('row')),
            centerMode = self.data('center'),
            sliderMobile = self.data('slider-mobile'), // true or false
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
            pauseOnHover: false,
            nextArrow: window.arrows.icon_next,
            prevArrow: window.arrows.icon_prev,
            rtl: window.rtl_slick,
            responsive: [
              {
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
                settings:  {
                  centerMode: false,
                  arrows: false,
                  dots: false,
                  slidesToShow: 5,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 768,
                settings:  {
                  centerMode: false,
                  arrows: false,
                  dots: false,
                  slidesToShow: 3.5,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 568,
                settings: sliderMobile ? {
                  centerMode: false,
                  arrows: false,
                  dots: false,
                  slidesToShow: 2,
                  slidesToScroll: 1
                } : "unslick"
              }
            ]
          });
        }
      });
    }
  };

  halo.initTextLeftSlider();

  // Optional: reinit on resize if needed
  $(window).on('resize', function () {
    $('[data-text-left-slider]').each(function () {
      var sliderMobile = $(this).data('slider-mobile');
      if (!$(this).hasClass('slick-initialized') && window.innerWidth > 992) {
        halo.initTextLeftSlider();
      } else if (sliderMobile && !$(this).hasClass('slick-initialized')) {
        halo.initTextLeftSlider();
      }
    });
  });

  if ($('body').hasClass('cursor-fixed__show')) {
    window.sharedFunctionsAnimation.onEnterButton();
    window.sharedFunctionsAnimation.onLeaveButton();
  }
})(jQuery);