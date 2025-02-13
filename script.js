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


gsap.registerPlugin(ScrollTrigger);
let section_2_btm = document.querySelector("section-2-btm");
document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".section-2-img", {
    scrollTrigger: {
      trigger: ".section-2-img",
      start: "5% 25%",
      end: "bottom 50%",
      scrub: true,
    },
    width: "100vw",
    height: "100vh",
    borderRadius: "0",
    duration: 1.5,
    ease: "power2.out",
  });
});
