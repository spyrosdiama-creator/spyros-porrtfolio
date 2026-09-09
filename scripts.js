const portfolioVideos = document.querySelectorAll(".reel-card video");

portfolioVideos.forEach((video) => {
  video.addEventListener("play", () => {
    portfolioVideos.forEach((otherVideo) => {
      if (otherVideo !== video) otherVideo.pause();
    });
  });
});
