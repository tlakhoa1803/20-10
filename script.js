document.getElementById("envelope").addEventListener("click", function() {
  // Animation to open the envelope
  this.style.transform = "rotateX(-90deg)";

  // Show the message after opening the envelope
  setTimeout(() => {
    document.getElementById("message").style.display = "block";
    showHeart();
    confettiEffect(); // Trigger confetti effect
  }, 10);
});

function confettiEffect() {
  const count = 200; // Number of confetti pieces
  const defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio) {
    confetti(Object.assign({}, defaults, {
      particleCount: Math.floor(count * particleRatio),
      spread: 160,
      startVelocity: 30,
      ticks: 60,
      gravity: 0.5,
      colors: ['#ff007f', '#00ff7f', '#007fff', '#ff7f00']
    }));
  }

  fire(0.25);
  fire(0.25);
  fire(0.25);
  fire(0.25);
}

function showHeart() {
  const heartContainer = document.getElementById("heartAnimation");
  heartContainer.style.display = "block";

  const heartPositions = [
    { left: "10%", top: "10%" }, // Top left corner
    { left: "80%", top: "10%" }, // Top right corner
    { left: "10%", top: "80%" }, // Bottom left corner
    { left: "80%", top: "80%" }, // Bottom right corner
  ];

  for (let i = 0; i < heartPositions.length; i++) {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heartContainer.appendChild(heart);

    // Set position based on predefined locations
    heart.style.left = heartPositions[i].left;
    heart.style.top = heartPositions[i].top;

    // Add pulse animation for each heart
    heart.style.animation = `pulse ${Math.random() * 1.5 + 0.5}s infinite`;
  }
}

// Handle music selection
const music = document.getElementById("music");
const musicSelect = document.getElementById("musicSelect");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSongIndex = 0; // Current song index
const songs = [
    "Music/Sao hạng A.mp3", // Update with the correct path to your music files
    "Music/Chân thành.mp3",
    "Music/Catch me.mp3",
    "Music/Em.mp3",
    "Music/Hào quang.mp3",
    "Music/KPKG.mp3",
    "Music/Thi sĩ.mp3",
    "Music/Ở lại đây.mp3",
    "Music/Khi cơn mưa dần phai.mp3",
    "Music/Anh là ai.mp3",
    "Music/ABR.mp3",
    "Music/QDQL.mp3",
    "Music/Tràn bộ nhớ.mp3",
    "Music/Eyes.mp3",
    "Music/Sóng.mp3",
    "Music/MCK.mp3"
];

// Set the initial song
music.src = songs[currentSongIndex];

// Update button state
function updateButtonState() {
    prevBtn.disabled = currentSongIndex === 0; // Disable Back button on the first song
    nextBtn.disabled = currentSongIndex === songs.length - 1; // Disable Next button on the last song
    musicSelect.selectedIndex = currentSongIndex + 1; // Update the select index
}

// Change song when current song ends
music.addEventListener("ended", function() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0; // Loop back to the first song
    }
    music.src = songs[currentSongIndex];
    music.play(); // Play the next song
    playBtn.innerText = "Pause Music"; // Change button text to "Pause Music"
    updateButtonState(); // Update button state
});

// Listen for changes in the music select dropdown
musicSelect.addEventListener("change", function() {
    currentSongIndex = this.selectedIndex - 1; // Update index based on selection
    music.src = songs[currentSongIndex];
    playBtn.disabled = false; // Enable play button
    music.play(); // Automatically play the selected song
    playBtn.innerText = "Pause Music"; // Change button text to "Pause Music"
    updateButtonState(); // Update button state
});

// Play/Pause button functionality
playBtn.addEventListener("click", function() {
    if (music.paused) {
        music.play();
        this.innerText = "Pause Music"; // Change button text to "Pause Music"
    } else {
        music.pause();
        this.innerText = "Play Music"; // Change button text back to "Play Music"
    }
});

// Previous song functionality
prevBtn.addEventListener("click", function() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1; // Loop back to the last song
    }
    music.src = songs[currentSongIndex];
    music.play(); // Play the previous song
    playBtn.innerText = "Pause Music"; // Change button text to "Pause Music"
    updateButtonState(); // Update button state
});

// Next song functionality
nextBtn.addEventListener("click", function() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0; // Loop back to the first song
    }
    music.src = songs[currentSongIndex];
    music.play(); // Play the next song
    playBtn.innerText = "Pause Music"; // Change button text to "Pause Music"
    updateButtonState(); // Update button state
});

// Volume control functionality
document.getElementById("volume").addEventListener("input", function() {
    music.volume = this.value; // Update volume
});
