const films = document.querySelectorAll(".film");

films.forEach((film) => {
  const video = film.querySelector("video");
  const playButton = film.querySelector(".film-play");

  video.controls = false;
  playButton.hidden = false;

  playButton.addEventListener("click", () => {
    video.controls = true;
    playButton.hidden = true;
    video.play();
  });

  video.addEventListener("play", () => {
    films.forEach((other) => {
      const otherVideo = other.querySelector("video");
      if (otherVideo !== video) otherVideo.pause();
    });
  });
});

const revealTargets = document.querySelectorAll(
  ".hero h1, .hero-foot, .case-head, .case-text, .case-media, .case-gallery .shot, .about-statement, .about-body, .facts, .contact .wrap"
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
    { threshold: 0.12 }
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    revealObserver.observe(target);
  });
}
