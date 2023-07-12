/*
  Challenge: Complete the drum kit app
   * Add the button and audio elements for the
     snare, tom, and hi-hat sounds.
   * Update the JavaScript so clicking each button
     will play the corresponding sound.
   * Play each sound when pressing a specific key.
*/

// Retrieve the kick button element
const boomButton = document.getElementById("boom");
const clapButton = document.getElementById("clap");
const hihatButton = document.getElementById("hihat");
const kickButton = document.getElementById("kick");
const openhatButton = document.getElementById("openhat");
const rideButton = document.getElementById("ride");
const snareButton = document.getElementById("snare");
const tinkButton = document.getElementById("tink");
const tomButton = document.getElementById("tom");

// Retrieve the kick sound element
const boomSound = document.getElementById("boom-sound");
const clapSound = document.getElementById("clap-sound");
const hihatSound = document.getElementById("hihat-sound");
const kickSound = document.getElementById("kick-sound");
const openhatSound = document.getElementById("openhat-sound");
const rideSound = document.getElementById("ride-sound");
const snareSound = document.getElementById("snare-sound");
const tinkSound = document.getElementById("tink-sound");
const tomSound = document.getElementById("tom-sound");

// Attach a click event listener to the kick button
boomButton.addEventListener("click", function() {
  // Reset the sound time to replay it
  boomSound.currentTime = 0;
  
  // Play the kick sound
  boomSound.play();
});

clapButton.addEventListener("click", function() {
  clapSound.currentTime = 0;
  clapSound.play();
});

hihatButton.addEventListener("click", function() {
  hihatSound.currentTime = 0;
  hihatSound.play();
});

kickButton.addEventListener("click", function() {
  kickSound.currentTime = 0;
  kickSound.play();
});

openhatButton.addEventListener("click", function() {
  openhatSound.currentTime = 0;
  openhatSound.play();
});

rideButton.addEventListener("click", function() {
  rideSound.currentTime = 0;
  rideSound.play();
});

snareButton.addEventListener("click", function() {
  snareSound.currentTime = 0;
  snareSound.play();
});

tinkButton.addEventListener("click", function() {
  tinkSound.currentTime = 0;
  tinkSound.play();
});

tomButton.addEventListener("click", function() {
  tomSound.currentTime = 0;
  tomSound.play();
});

// Attach a keydown event listener to the document
document.addEventListener("keydown", function(event) {
  // Check if the pressed key is "a"
  if (event.key === "a") {
    boomSound.currentTime = 0;
    boomSound.play();
  } else if (event.key === "s") {
    clapSound.currentTime = 0;
    clapSound.play();
  } else if (event.key === "d") {
    hihatSound.currentTime = 0;
    hihatSound.play();
  } else if (event.key === "f") {
    kickSound.currentTime = 0;
    kickSound.play();
  } else if (event.key === "g") {
    openhatSound.currentTime = 0;
    openhatSound.play();
  } else if (event.key === "h") {
    rideSound.currentTime = 0;
    rideSound.play();
  } else if (event.key === "j") {
    snareSound.currentTime = 0;
    snareSound.play();
  } else if (event.key === "k") {
    tinkSound.currentTime = 0;
    tinkSound.play();
  } else if (event.key === "l") {
    tomSound.currentTime = 0;
    tomSound.play();
  }
});