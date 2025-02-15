// music

const audioButton = document.getElementById("audioButton");
const audio = document.getElementById("audio");
const indicator = document.querySelector(".indicator");

let isPlaying = true;
audio.play().then(() => {
  indicator.classList.add("active");
});

audioButton.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    indicator.classList.remove("active");
    isPlaying = false;
  } else {
    audio.play().then(() => {
      indicator.classList.add("active");
      isPlaying = true;
    });
  }
});

// Set up the box video
var allBoxs = document.querySelector(".all-boxes");
var box = document.querySelector(".box");

// Create video element for the box
var boxVideo = document.createElement("video");
box.appendChild(boxVideo);
boxVideo.autoplay = true;
boxVideo.loop = true;
boxVideo.muted = false;
boxVideo.style.width = "100%";
boxVideo.style.height = "100%";
boxVideo.style.objectFit = "cover";

// Available videos
var videos = [
  "videos/hero-1.mp4",
  "videos/hero-2.mp4",
  "videos/hero-3.mp4",
  "videos/hero-4.mp4",
];

// Current video indices
var boxIndex = 0;
var allBoxIndex = 1;

// Set the first video for both all-boxes background and box
var allBoxVideo = document.querySelector(".background-video"); // Background video in all-boxes
allBoxVideo.src = videos[allBoxIndex];
boxVideo.src = videos[boxIndex];

// Using Click event to change the video
box.addEventListener("click", () => {
  boxIndex = (boxIndex + 1) % videos.length;

  // Move to the next video in the array for the background video (allBoxIndex)
  allBoxIndex = (allBoxIndex + 1) % videos.length;

  // Update the video source for both the box and the background video
  boxVideo.src = videos[boxIndex];
  allBoxVideo.src = videos[allBoxIndex];

  // Play the videos
  boxVideo.play();
  allBoxVideo.play();
});

gsap.to(".section-2-btm", {
  top: "20",
  zIndex: "0",
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section-2-btm",
    start: "0% 10%",
    end: "top top",
    scrub: true,
  }
});

gsap.to(".section-2-img", {
  width: "100vw",
  height: "100vh",
  borderRadius: "0",
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section-2-img",
    start: "0% 10%",
    end: "top top",
    scrub: true,
  }
});


// navbar scrolling effect

gsap.to("#navbar", {
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  duration: 0.3,
  scrollTrigger: {
    trigger: "body",
    start: "top+=10 top",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".right-nav a", {
  color: "#000",
  scrollTrigger: {
    trigger: "body",
    start: "top+=10 top",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".left-nav #primary-btn", {
  backgroundColor: "#000",
  color: "#fff",
  scrollTrigger: {
    trigger: "body",
    start: "top+=10 top",
    toggleActions: "play none none reverse",
  },
});