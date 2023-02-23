const video = (videosSelector, videoPageSelector, videoCloseSelector, videoBlockSelector) => {

  const videos = document.querySelectorAll(videosSelector);
  const videoPage = document.querySelector(videoPageSelector);
  const videoClose = document.querySelector(videoCloseSelector);
  const videoBlock = document.querySelector(videoBlockSelector);

  function init() {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
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

  function closePlayer() {
    videoClose.addEventListener('click', () => {
      player.stopVideo();
      videoPage.style.display = 'none';
      document.querySelector('body').style.overflow = '';
    });
  }

  var player;
  function createPlayer(url) {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
    });
  }

  bildPlayer();
  closePlayer();
  init();
  
};

export default video;