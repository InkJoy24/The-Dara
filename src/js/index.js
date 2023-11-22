import navMobile from './modules/navMobile.js';
import navigation from './modules/navigation.js';
import slider from './modules/slider.js';
import previewVideo from './modules/previewVideo.js';
import video from './modules/video.js';
import hideHeader from './modules/hideHeader.js';

document.addEventListener('DOMContentLoaded', function() {
    navMobile('.header__btn__mobile', '.nav__mobile', '.link-close-nav');
    navigation();
    slider('.releases__block__container', '.current-slide', '.total-slides');
    previewVideo('#video');
    video('.video', '.modal-window');
    hideHeader('.header');
    
});