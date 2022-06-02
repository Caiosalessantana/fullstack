let video = document.getElementsByClassName("videosol")[0];

function play() {
  video.play();
}
function pause() {
  video.pause();
  video.currentTime = 1;
}
function stop() {
  video.pause();
  video.currentTime = 0;
}
function dec() {
  video.playbackRate -= 0.1;
  video.play();
}
function inc() {
  video.playbackRate += 0.1;
  video.play();
}
function retroceder() {
  video.currentTime -= 10;
}
function avancar() {
  video.currentTime += 10;
}
