// Global currently playing audio
let currentAudio = null;

// Play a clip, stopping any currently playing audio
function playClip(filename) {
  // Stop current audio if exists
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create new Audio instance for this clip
  currentAudio = new Audio(`audio/${filename}.mp3`);
  currentAudio.play().catch(err => console.warn(`Failed to play ${filename}:`, err));
}
