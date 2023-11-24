import $ from "jquery";
import 'slick-carousel';

const slider = (containerSliderSelector, currentSlideSelector, totalSlidesSelector) => {
    let isDesktop = matchMedia('(min-width: 769px)').matches;
    let resizeTimer;

    function toggleSlider() {
    if (isDesktop) {
        if ($(containerSliderSelector).hasClass('slick-initialized')) {
            $(containerSliderSelector).slick('unslick');
        }        
    } else {
        if (!$(containerSliderSelector).hasClass('slick-initialized')) {
            $(containerSliderSelector).slick({
                arrows: false,
                centerMode: true,
                centerPadding: '9.2%',
                responsive: [{
                    breakpoint: 451,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '4.16%',
                    }
                }]
            }).on('afterChange', function(event, slick, currentSlide){
                let totalSlides = slick.slideCount;
                let currentSlideIndex = slick.currentSlide + 1;
                $(currentSlideSelector).text(currentSlideIndex);
                $(totalSlidesSelector).text(totalSlides);
            });
        }    
    }
}

    toggleSlider();

    $(window).on('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            isDesktop = matchMedia('(min-width: 769px)').matches;
            toggleSlider();
        }, 250);
    });
}

export default slider;

