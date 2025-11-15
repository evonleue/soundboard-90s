// Minimal audio system foundation.
// Does nothing yet — safe test step.

const audioPlayer = new Audio();

function playClip(filename) {
  audioPlayer.src = `audio/${filename}.mp3`;
  audioPlayer.currentTime = 0;
  audioPlayer.play();
}
