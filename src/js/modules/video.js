const video = (videosSelector, videoPageSelector) => {

    const videos = document.querySelectorAll(videosSelector);
    const videoPage = document.querySelector(videoPageSelector);
    const body = document.querySelector('body');
  
   
    function init() {
      const tag = document.createElement('script');
  
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  
    function bildPlayer() {
      videos.forEach(video => {
        video.addEventListener('click', () => {
          let path;
          if(document.querySelector('iframe#player')) {
            videoPage.style.display = 'flex';
            if (path !== video.getAttribute('data-url')) {
                path = video.getAttribute('data-url');
                document.querySelector('body').style.overflow = 'hidden';
                player.loadVideoById({videoId: path});
            }
          } else {
            videoPage.style.display = 'flex';
  
            document.querySelector('body').style.overflow = 'hidden';
            path = video.getAttribute('data-url');
            createPlayer(path);
          }
        });
      });
    }
  
    videoPage.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-close') == "" || e.target === videoPage) {
        closePlayer();
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && videoPage.style.display === 'flex') {
        closePlayer();
      }
    });
  
    function closePlayer() {
      player.stopVideo();
      videoPage.style.display = 'none';
      body.style.overflow = '';
    }
  
    let player;
    function createPlayer(url) {
      player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: `${url}`,
      });
    }
  
    bildPlayer();
    init();
    
  };
  
  export default video;