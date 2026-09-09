const portfolioVideos = document.querySelectorAll(".reel-card video");

portfolioVideos.forEach((video) => {
  video.addEventListener("play", () => {
    portfolioVideos.forEach((otherVideo) => {
      if (otherVideo !== video) otherVideo.pause();
    });
  });
});

const revealTargets = document.querySelectorAll(
  ".hero h1, .hero-bottom, .section-heading, .feature-project, .reels, .ferrero-intro, .ferrero-gallery, .about-section, footer"
);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal");
    target.style.setProperty("--reveal-delay", `${Math.min(index * 70, 210)}ms`);
    revealObserver.observe(target);
  });
}
