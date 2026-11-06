const audioPlayer = document.getElementById("audioPlayer");
const fileInput = document.getElementById("fileInput");
const uploadButton = document.getElementById("uploadButton");
const heroUploadButton = document.getElementById("heroUploadButton");
const emptyUploadButton = document.getElementById("emptyUploadButton");
const uploadNav = document.getElementById("uploadNav");
const libraryNav = document.getElementById("libraryNav");
const shuffleNav = document.getElementById("shuffleNav");

const playlist = document.getElementById("playlist");
const emptyState = document.getElementById("emptyState");
const trackCount = document.getElementById("trackCount");

const currentTitle = document.getElementById("currentTitle");
const currentArtist = document.getElementById("currentArtist");
const miniArt = document.getElementById("miniArt");

const playButton = document.getElementById("playButton");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const shuffleButton = document.getElementById("shuffleButton");
const repeatButton = document.getElementById("repeatButton");

const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");
const volumeBar = document.getElementById("volumeBar");

let tracks = [];
let currentTrackIndex = -1;
let isShuffleEnabled = false;
let repeatMode = "off";

audioPlayer.volume = Number(volumeBar.value);

// Open the file picker
function openFilePicker() {
    fileInput.click();
}

uploadButton.addEventListener("click", openFilePicker);
heroUploadButton.addEventListener("click", openFilePicker);
emptyUploadButton.addEventListener("click", openFilePicker);
uploadNav.addEventListener("click", openFilePicker);

// Navigate to the music library
libraryNav.addEventListener("click", () => {
    document.getElementById("librarySection").scrollIntoView({
        behavior: "smooth"
    });
});

// Format seconds into minutes and seconds
function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

// Clean up and format track names
function getTrackName(fileName) {
    return fileName
        .replace(/\.[^/.]+$/, "")
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

// Upload audio files
fileInput.addEventListener("change", (event) => {
    const selectedFiles = Array.from(event.target.files);

    const audioFiles = selectedFiles.filter(file =>
        file.type.startsWith("audio/")
    );

    if (audioFiles.length === 0) {
        alert("Please select valid audio files.");
        fileInput.value = "";
        return;
    }

    audioFiles.forEach(file => {
        const track = {
            id: `${Date.now()}-${Math.random()}`,
            name: getTrackName(file.name),
            artist: "Local audio file",
            file: file,
            url: URL.createObjectURL(file),
            duration: 0
        };

        tracks.push(track);

        // Read the audio duration
        const metadataAudio = new Audio();

        metadataAudio.preload = "metadata";
        metadataAudio.src = track.url;

        metadataAudio.addEventListener("loadedmetadata", () => {
            track.duration = metadataAudio.duration;
            renderPlaylist();
        });

        metadataAudio.addEventListener("error", () => {
            track.duration = 0;
            renderPlaylist();
        });
    });

    renderPlaylist();

    // Automatically play the first uploaded track
    if (currentTrackIndex === -1 && tracks.length > 0) {
        playTrack(0);
    }

    fileInput.value = "";
});

// Display playlist
function renderPlaylist() {
    playlist.innerHTML = "";

    trackCount.textContent =
        `${tracks.length} ${tracks.length === 1 ? "TRACK" : "TRACKS"}`;

    if (tracks.length === 0) {
        playlist.appendChild(emptyState);
        return;
    }

    tracks.forEach((track, index) => {
        const row = document.createElement("div");

        row.className = "track-row";

        if (index === currentTrackIndex) {
            row.classList.add("selected");
        }

        const number = document.createElement("span");
        number.className = "track-number";
        number.textContent =
            index === currentTrackIndex && !audioPlayer.paused
                ? "♫"
                : String(index + 1);

        const info = document.createElement("div");
        info.className = "track-info";

        const art = document.createElement("div");
        art.className = "track-art";
        art.textContent = "♫";

        const details = document.createElement("div");

        const name = document.createElement("p");
        name.className = "track-name";
        name.textContent = track.name;

        const artist = document.createElement("p");
        artist.className = "track-subtitle";
        artist.textContent = track.artist;

        details.append(name, artist);
        info.append(art, details);

        const duration = document.createElement("span");
        duration.className = "track-duration";
        duration.textContent = formatTime(track.duration);

        const action = document.createElement("button");
        action.className = "track-action";
        action.type = "button";
        action.textContent =
            index === currentTrackIndex && !audioPlayer.paused
                ? "Playing"
                : "Play";

        action.addEventListener("click", () => {
            playTrack(index);
        });

        row.append(number, info, duration, action);

        row.addEventListener("dblclick", () => {
            playTrack(index);
        });

        playlist.appendChild(row);
    });
}

// Select and play a track
function playTrack(index) {
    if (index < 0 || index >= tracks.length) {
        return;
    }

    currentTrackIndex = index;

    const track = tracks[index];

    audioPlayer.src = track.url;
    audioPlayer.load();

    currentTitle.textContent = track.name;
    currentArtist.textContent = track.artist;

    audioPlayer.play()
        .then(() => {
            updatePlayButton();
            renderPlaylist();
        })
        .catch(error => {
            console.warn("Playback could not start:", error);
            updatePlayButton();
            renderPlaylist();
        });
}

// Play and pause
playButton.addEventListener("click", () => {
    if (tracks.length === 0) {
        openFilePicker();
        return;
    }

    if (audioPlayer.paused) {
        if (currentTrackIndex === -1) {
            playTrack(0);
        } else {
            audioPlayer.play().catch(error => {
                console.warn("Playback error:", error);
            });
        }
    } else {
        audioPlayer.pause();
    }
});

function updatePlayButton() {
    const isPlaying = !audioPlayer.paused;

    playButton.textContent = isPlaying ? "Ⅱ" : "▶";
    playButton.setAttribute(
        "aria-label",
        isPlaying ? "Pause" : "Play"
    );

    renderPlaylist();
}

audioPlayer.addEventListener("play", updatePlayButton);
audioPlayer.addEventListener("pause", updatePlayButton);

// Next track
function playNext() {
    if (tracks.length === 0) return;

    if (isShuffleEnabled && tracks.length > 1) {
        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * tracks.length);
        } while (randomIndex === currentTrackIndex);

        playTrack(randomIndex);
        return;
    }

    const nextIndex = currentTrackIndex + 1;

    if (nextIndex < tracks.length) {
        playTrack(nextIndex);
    } else if (repeatMode === "all") {
        playTrack(0);
    } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        updatePlayButton();
    }
}

nextButton.addEventListener("click", playNext);

// Previous track
previousButton.addEventListener("click", () => {
    if (tracks.length === 0) return;

    if (audioPlayer.currentTime > 3) {
        audioPlayer.currentTime = 0;
        return;
    }

    if (currentTrackIndex > 0) {
        playTrack(currentTrackIndex - 1);
    } else if (repeatMode === "all") {
        playTrack(tracks.length - 1);
    }
});

// Automatically move to the next track
audioPlayer.addEventListener("ended", () => {
    if (repeatMode === "one") {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    } else {
        playNext();
    }
});

// Update progress bar
audioPlayer.addEventListener("timeupdate", () => {
    const duration = audioPlayer.duration;

    if (!Number.isFinite(duration) || duration <= 0) {
        return;
    }

    const progress = (audioPlayer.currentTime / duration) * 100;

    progressBar.value = progress;
    currentTime.textContent = formatTime(audioPlayer.currentTime);
    durationDisplay.textContent = formatTime(duration);
});

audioPlayer.addEventListener("loadedmetadata", () => {
    durationDisplay.textContent = formatTime(audioPlayer.duration);

    if (currentTrackIndex >= 0) {
        tracks[currentTrackIndex].duration = audioPlayer.duration;
        renderPlaylist();
    }
});

// Seek through a track
progressBar.addEventListener("input", () => {
    if (Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0) {
        audioPlayer.currentTime =
            (Number(progressBar.value) / 100) * audioPlayer.duration;
    }
});

// Volume control
volumeBar.addEventListener("input", () => {
    audioPlayer.volume = Number(volumeBar.value);
});

// Shuffle
shuffleButton.addEventListener("click", toggleShuffle);
shuffleNav.addEventListener("click", () => {
    if (tracks.length === 0) {
        openFilePicker();
        return;
    }

    isShuffleEnabled = true;
    shuffleButton.classList.add("enabled");

    const randomIndex = Math.floor(Math.random() * tracks.length);
    playTrack(randomIndex);
});

function toggleShuffle() {
    isShuffleEnabled = !isShuffleEnabled;

    shuffleButton.classList.toggle("enabled", isShuffleEnabled);
    shuffleButton.title = isShuffleEnabled
        ? "Shuffle is on"
        : "Shuffle is off";
}

// Repeat modes: off → all → one → off
repeatButton.addEventListener("click", () => {
    if (repeatMode === "off") {
        repeatMode = "all";
    } else if (repeatMode === "all") {
        repeatMode = "one";
    } else {
        repeatMode = "off";
    }

    repeatButton.classList.toggle("enabled", repeatMode !== "off");
    repeatButton.textContent = repeatMode === "one" ? "↻¹" : "↻";
    repeatButton.title = `Repeat: ${repeatMode}`;
});

// Keyboard shortcuts
document.addEventListener("keydown", (event) => {
    const tag = document.activeElement.tagName;

    if (tag === "INPUT" || tag === "TEXTAREA") {
        return;
    }

    if (event.code === "Space") {
        event.preventDefault();
        playButton.click();
    }

    if (event.code === "ArrowRight" && tracks.length > 0) {
        audioPlayer.currentTime = Math.min(
            audioPlayer.currentTime + 5,
            audioPlayer.duration || audioPlayer.currentTime + 5
        );
    }

    if (event.code === "ArrowLeft" && tracks.length > 0) {
        audioPlayer.currentTime = Math.max(
            audioPlayer.currentTime - 5,
            0
        );
    }
});

// Initial interface state
renderPlaylist();
updatePlayButton();

// Release temporary audio URLs when leaving the page
window.addEventListener("beforeunload", () => {
    tracks.forEach(track => URL.revokeObjectURL(track.url));
});
