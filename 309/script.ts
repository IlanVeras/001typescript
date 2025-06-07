const video = document.querySelector(".player")!

if (video instanceof HTMLVideoElement) {
  console.log(video.volume);
}
