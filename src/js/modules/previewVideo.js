
const previewVideo = (videoSelector) => {
    const video = document.querySelectorAll(videoSelector);

    video.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.play();
        });
    
        item.addEventListener('mouseout', () => {
            item.load();
        });

    });

};

export default previewVideo;