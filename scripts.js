const root = document.documentElement;

// Hero entrance: wait briefly for fonts so the headline doesn't jump mid-animation.
const markReady = () => setTimeout(() => root.classList.add("is-ready"), 60);
Promise.race([document.fonts.ready, new Promise((resolve) => setTimeout(resolve, 900))]).then(markReady);

const nav = document.getElementById("nav");
const updateNav = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
updateNav();
window.addEventListener("scroll", updateNav, { passive: true });

// Duplicate each reel track so the loop is seamless.
document.querySelectorAll(".reel-track").forEach((track) => {
  [...track.children].forEach((tile) => track.appendChild(tile.cloneNode(true)));
});

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

const revealTargets = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-in"));
}
