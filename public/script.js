   async function getRandomVideo() {
      try {
        const url = 'https://shoti-srv1.onrender.com/api/v1/request-f';
        const rawResponse = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ apikey: "shoti-1hgn30msgapp542i0qg" })
        });
        const content = await rawResponse.json();
        document.getElementById('video').src = content.data.url;
      } catch (e) {
        console.error("Error fetching Shoti video", e);
      }
    }

    getRandomVideo();

    document.getElementById('next-button').addEventListener('click', getRandomVideo);

    document.getElementById('fullscreen-button').addEventListener('click', () => {
      const video = document.getElementById('video');
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    });

    document.getElementById('video').addEventListener('ended', getRandomVideo);
