# 🎵 PulseWave — Modern Music Player

**A sleek, responsive, browser-based music player built with HTML5, CSS3, and JavaScript.**

PulseWave is a modern music player interface designed to deliver a clean and enjoyable music-listening experience. It allows users to upload audio files directly from their devices, manage a personal playlist, and control playback through an intuitive interface.

Built with a focus on responsive design, interactive functionality, and clean front-end development practices.

<p align="center">
  <strong>🎧 Your Music. Your Moments. Your Experience.</strong>
</p>

---

## 🌐 Live Demo

**GitHub Repository:**  
https://github.com/Regalson001/PulseWave-Music-Player

**Live Application:**  
https://regalson001.github.io/PulseWave-Music-Player/

> The live application can be published using GitHub Pages. Audio files are selected locally by each visitor and are not hosted by the application.

---

## 📸 Project Overview

PulseWave combines a modern dark-themed interface with practical music playback features.

The interface includes:

- A modern sidebar navigation.
- A visually engaging welcome section.
- A dynamic music playlist.
- A dedicated now-playing section.
- Interactive playback controls.
- A responsive layout for desktop, tablet, and mobile devices.

---

## ✨ Key Features

### 🎶 Music Management
- Upload multiple audio files directly from your device.
- Automatically display uploaded tracks in the playlist.
- Extract track names from uploaded filenames.
- Display audio track durations.
- Select and play individual tracks.
- Automatically update the currently playing track.

### ▶️ Playback Controls
- Play and pause functionality.
- Next and previous track navigation.
- Interactive playback progress bar.
- Seek forward and backward through tracks.
- Real-time playback timer.
- Adjustable volume control.

### 🔀 Listening Modes
- Shuffle playback.
- Repeat all tracks.
- Repeat a single track.
- Normal playback mode.

### 🎨 User Interface
- Modern dark-themed design.
- Purple accent color palette.
- Animated music equalizer.
- Custom music-player controls.
- Interactive hover effects.
- Clean typography and spacing.
- Responsive layout across different screen sizes.

### 📱 Responsive Design
- Desktop-friendly layout.
- Tablet-compatible interface.
- Mobile-friendly navigation and controls.
- Flexible CSS Grid and Flexbox layouts.

### ⌨️ Keyboard Shortcuts

| Keyboard Shortcut | Action |
|---|---|
| `Space` | Play / Pause |
| `Arrow Right` | Seek forward 5 seconds |
| `Arrow Left` | Seek backward 5 seconds |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure and audio elements |
| CSS3 | Styling, layouts, animations, and responsiveness |
| JavaScript (ES6+) | Playback logic and interactive functionality |
| HTML5 Audio API | Browser-based audio playback |
| File API | Handling locally uploaded audio files |
| URL API | Creating temporary audio URLs |
| CSS Grid | Main application layout |
| Flexbox | Component alignment and positioning |
| Google Fonts | Modern typography |

---

## 📂 Project Structure

```text
PulseWave-Music-Player/
│
├── index.html       # Application structure
├── styles.css       # Styling and responsive design
├── script.js        # Music player functionality
├── .gitignore       # Git ignored files
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

Follow these instructions to run PulseWave on your local machine.

### 1. Clone the Repository

Open your terminal and execute:

```bash
git clone https://github.com/Regalson001/PulseWave-Music-Player.git
```

### 2. Navigate to the Project Directory

```bash
cd PulseWave-Music-Player
```

### 3. Open the Project

Open the folder in Visual Studio Code:

```bash
code .
```

### 4. Run the Application

Open `index.html` in your browser.

Alternatively, use the **Live Server** extension in Visual Studio Code:

1. Install the Live Server extension.
2. Open `index.html`.
3. Right-click inside the editor.
4. Select **Open with Live Server**.

The application will open in your default browser.

---

## 🎧 How to Use PulseWave

1. Open the PulseWave application.
2. Click **Add Music** or **Upload Your Music**.
3. Select one or multiple supported audio files from your computer.
4. Your uploaded tracks will appear in the playlist.
5. Select a track to start playback.
6. Use the player controls to pause, resume, skip, shuffle, or repeat tracks.
7. Adjust the volume and seek through your favourite songs.

### Supported Audio Formats

Supported formats depend on the browser and operating system. Common formats include:

- MP3
- WAV
- OGG
- FLAC
- M4A
- AAC

---

## ⚙️ Technical Implementation

### Dynamic Playlist Rendering

JavaScript dynamically generates playlist entries from uploaded audio files. Each track displays its filename, playback duration, and playback action.

### Browser-Based Audio Playback

The application uses the HTML5 Audio API to control playback, track progress, volume, and playback events.

### Local File Handling

The browser File API handles uploaded audio files, while `URL.createObjectURL()` creates temporary URLs for playback.

### Interactive Playback State

JavaScript manages the current track, playback state, shuffle mode, and repeat settings to keep the player interface synchronized with the audio element.

### Responsive Layout

CSS Grid, Flexbox, media queries, and fluid sizing help the interface adapt to different screen sizes.

---

## 🔒 Privacy and Data Handling

PulseWave processes uploaded music locally within the user's browser.

- Audio files are not uploaded to a remote music server.
- No user account is required.
- No backend database is required.
- Temporary audio URLs are released when the page is closed.
- Uploaded tracks are not permanently saved by the application.

**Note:** Refreshing or closing the page clears the current playlist. Users must upload their music again when they return.

---

## 🔮 Future Improvements

Potential enhancements for future versions include:

- [ ] Persistent playlists using IndexedDB.
- [ ] Track artwork and album cover extraction.
- [ ] Audio visualizer with real-time frequency analysis.
- [ ] Drag-and-drop audio uploads.
- [ ] Search and filter functionality.
- [ ] Playlist creation and management.
- [ ] Track duration and metadata improvements.
- [ ] Playback speed controls.
- [ ] Light and dark themes.
- [ ] Progressive Web App (PWA) support.

---

## 🧠 What I Learned

Developing PulseWave provided practical experience in:

- Building responsive front-end applications.
- Working with the HTML5 Audio API.
- Handling user-uploaded files using JavaScript.
- Managing application state and playback events.
- Dynamically rendering interface components.
- Implementing interactive controls and event listeners.
- Designing responsive interfaces using CSS Grid and Flexbox.
- Organizing and documenting a GitHub project.

---

## 👨‍💻 Developer

**Stephen Oyugi Nyarangi**

Front-End Developer | AI Automation Engineer | Machine Learning Practitioner

Interested in building modern web applications, intelligent automation systems, and practical AI-powered solutions.

- **GitHub:** [@Regalson001](https://github.com/Regalson001)
- **LinkedIn:** [Stephen Oyugi](https://www.linkedin.com/in/stephenoyugi001)
- **Email:** [stephennyarangi03@gmail.com](mailto:stephennyarangi03@gmail.com)

---

## 🤝 Contributions

Suggestions, improvements, and contributions are welcome.

To contribute:

1. Fork this repository.
2. Create a feature branch.
3. Make your changes.
4. Commit your updates.
5. Submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project in accordance with the license terms.

---

<p align="center">
  <strong>PulseWave Music Player</strong><br>
  Built with HTML5, CSS3, and JavaScript.<br><br>
  🎵 <em>Let the rhythm move you.</em>
</p>
