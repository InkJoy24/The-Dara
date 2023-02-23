import previewVideo from "./modules/previewVideo";
import nav from './modules/nav';
import video from "./modules/video";

addEventListener('DOMContentLoaded', () => {
    previewVideo('#video');
    video('#video', '.work__page', '.work__page__close', '.work__page__video__block');
    nav();
});
