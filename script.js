// script.js — Full rewrite for audio toggle behavior

// Single audio player for all clips
const audioPlayer = new Audio();
let currentClip = null;

/**
 * Play, stop, or switch audio clip depending on user interaction
 * @param {string} filename - The filename of the clip (without extension)
 */
function playClip(filename) {
    // Case 1: same clip clicked
    if (currentClip === filename) {
        if (!audioPlayer.paused) {
            // Stop the clip
            audioPlayer.pause();
            audioPlayer.currentTime = 0; // optional: reset to start
        } else {
            // Resume if paused (optional: play from start)
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        }
    } 
    // Case 2: new clip clicked
    else {
        // Stop any current clip
        if (!audioPlayer.paused) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }
        // Load and play new clip
        audioPlayer.src = `audio/${filename}.mp3`;
        audioPlayer.currentTime = 0;
        audioPlayer.play();
        currentClip = filename;
    }
}
