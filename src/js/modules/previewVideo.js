const previewVideo = (videosSelector) => {
    const videos = document.querySelectorAll(videosSelector);
    let playPromise;
    if (window.innerWidth >= 769) {
        videos.forEach(video => {
            video.addEventListener('mouseenter', () => {
                playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        // Воспроизведение началось успешно
                    })
                    .catch(error => {
                        // Обработка ошибки
                        console.error('Error starting video playback:', error);
                    });
                }
            });

            video.addEventListener('mouseleave', () => {
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        video.pause();
                        video.load();
                    })
                    .catch(error => {
                        // Обработка ошибки
                        console.error('Error pausing video:', error);
                    });
                }
            });
        });
    }
}

export default previewVideo;