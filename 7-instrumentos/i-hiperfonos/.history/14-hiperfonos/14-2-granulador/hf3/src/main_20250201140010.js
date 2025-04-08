import * as Tone from "tone";
import EventEmitter from "event-emitter";
import WaveformPlaylist from "waveform-playlist";

// State variables
let isRecording = false;
let audioBuffer = null;
window.waveformInstance = null;
let mediaRecorder = null;
let audioChunks = [];
let selectionStart = 0;
let selectionEnd = 0;
let playbackPosition = 0;
let showHud = true; // HUD visibility
let ee = EventEmitter(); // EventEmitter for waveform control

// Inject CSS dynamically
function injectCSS(styles) {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

// HUD + Styling
injectCSS(`
  body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
  }

.waveform {
  width: 100%;
  height: 70vh; /* 70% of the viewport height */
  background-color: black; /* Background of the waveform */
  position: absolute;
  top: 15vh; /* Centered vertically */
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.waveform canvas {
  background-color: black !important; /* Ensure waveform background stays black */
}

.waveform .channel-wrapper {
  filter: invert(100%); /* Invert colors to make waveform white */
}

.waveform .cursor {
  background-color: white !important; /* Cursor color */
}

.waveform .selection {
  background-color: rgba(255, 255, 255, 0.3) !important; /* Selection box in white */
}

  .record-button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    bottom: 10%;
    margin: auto;
    background-color: gray;
    border: none;
    transition: background 0.3s;
  }

  .record-button.recording {
    background-color: red;
  }

  .hud {
    position: absolute;
    bottom: 10%;
    left: 5%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 14px;
    padding: 10px;
    border-radius: 5px;
    display: ${showHud ? "block" : "none"};
  }
`);

// **🔹 Load Eruda Debugging if not already present**
(function () {
  var script = document.createElement("script");
  script.src = "//cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script);
  script.onload = function () {
    eruda.init();
    console.log("✅ Eruda Debugging Loaded!");
  };
})();

// Function to initialize AudioContext
function startAudioContext() {
  if (Tone.context.state !== "running") {
    Tone.context
      .resume()
      .then(() => console.log("AudioContext resumed successfully!"));
  }
}

// Simulate a user gesture by dispatching a fake event
function simulateUserGesture() {
  const button = document.createElement("button");
  button.style.display = "none";
  document.body.appendChild(button);
  button.click();
  document.body.removeChild(button);
}

// Try to resume AudioContext when the page loads
document.addEventListener("DOMContentLoaded", () => {
  simulateUserGesture();
  startAudioContext();
});

// Also attempt to resume when the user interacts with the page
document.addEventListener("click", startAudioContext);
document.addEventListener("touchstart", startAudioContext);
document.addEventListener("keydown", startAudioContext);

// Function to toggle recording state
async function toggleRecording() {
  isRecording = !isRecording;
  updateButtonState();

  if (isRecording) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("❌ getUserMedia not supported on this device.");
      alert(
        "❌ Microphone access is not supported on this device. Please use Safari on iOS with HTTPS."
      );
      return;
    }

    try {
      // Required for iOS: Ensure a user gesture first
      await startAudioContext();

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        try {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });

          // Ensure Blob is correctly converted to an ArrayBuffer
          const reader = new FileReader();
          reader.readAsArrayBuffer(audioBlob);

          reader.onloadend = async () => {
            try {
              const arrayBuffer = reader.result; // Get the ArrayBuffer from FileReader
              audioBuffer = await Tone.getContext().rawContext.decodeAudioData(
                arrayBuffer
              );
              visualizeWaveform(audioBlob);
            } catch (decodeError) {
              console.error("❌ Error decoding audio data:", decodeError);
            }
          };
        } catch (err) {
          console.error("❌ Error handling audio Blob:", err);
        }
      };

      mediaRecorder.start();
    } catch (err) {
      console.error("❌ Error accessing microphone:", err);
      alert(
        "❌ Microphone access denied. Go to Settings > Safari > Enable Microphone."
      );
    }
  } else if (mediaRecorder) {
    mediaRecorder.stop();
  }
}

// Function to visualize waveform with EventEmitter
async function visualizeWaveform(audioBlob) {
  window.waveformInstance = WaveformPlaylist(
    {
      container: waveformContainer,
      state: "select",
      zoomLevels: [128, 256, 512, 1024, 2048],
      samplesPerPixel: 512,
      waveHeight: 100,
      isAutomaticScroll: true,
    },
    ee // Attach EventEmitter
  );

  if (!audioBlob) return;
  console.log("✅ visualizeWaveform called"); // Debugging start

  const waveformContainer = document.getElementById("waveform");
  waveformContainer.innerHTML = ""; // Clear previous waveform

  try {
    console.log("🔄 Converting Blob to ArrayBuffer...");
    const arrayBuffer = await audioBlob.arrayBuffer();
    console.log("✅ ArrayBuffer conversion successful");

    console.log("🔄 Decoding Audio Data...");
    audioBuffer = await Tone.getContext().rawContext.decodeAudioData(
      arrayBuffer
    );
    console.log("✅ Audio Decoded:", audioBuffer);

    // Initialize WaveformPlaylist
    console.log("🔄 Initializing WaveformPlaylist...");
    waveformInstance = WaveformPlaylist(
      {
        container: waveformContainer,
        state: "select",
        zoomLevels: [128, 256, 512, 1024, 2048],
        samplesPerPixel: 512,
        waveHeight: 100,
        isAutomaticScroll: true,
      },
      ee // Attach EventEmitter
    );

    console.log("✅ WaveformPlaylist Initialized");

    // Load the waveform after decoding
    console.log("🔄 Loading Waveform...");
    await waveformInstance.load([
      { src: URL.createObjectURL(audioBlob), name: "Audio" },
    ]);

    console.log("✅ Waveform Loaded Successfully");

    updateHUD();
    resizeWaveform(audioBuffer); // Ensure the waveform scales correctly

    // Handle selection event
    ee.on("select", (start, end) => {
      selectionStart = start;
      selectionEnd = end;
      console.log(`🎛️ Selection: ${selectionStart} - ${selectionEnd}`);
      updateHUD();
      loopSelectedAudio();
    });

    // Handle zooming
    ee.on("zoomin", () => console.log("🔍 Zoomed In"));
    ee.on("zoomout", () => console.log("🔍 Zoomed Out"));

    // Handle playback tracking
    ee.on("timeupdate", (time) => {
      playbackPosition = time;
      console.log(`⏳ Playback Time: ${playbackPosition}`);
      updateHUD();
    });
  } catch (err) {
    console.error("❌ Error visualizing waveform:", err);
  }
}

// Function to dynamically resize the waveform
function resizeWaveform(buffer) {
  const duration = buffer.duration;
  const container = document.getElementById("waveform");
  const screenWidth = window.innerWidth;

  // Adjust waveform width based on duration and screen width
  const scaleFactor = screenWidth / duration;
  container.style.width = `${scaleFactor * duration}px`;

  // Automatically zoom based on waveform duration
  if (duration < 5) {
    ee.emit("zoomin");
  } else if (duration > 15) {
    ee.emit("zoomout");
  }

  updateHUD();
}

// Function to loop selected portion of the audio
function loopSelectedAudio() {
  if (!audioBuffer || selectionStart >= selectionEnd) return;

  const player = new Tone.Player(audioBuffer).toDestination();
  player.loop = true;
  player.start(0, selectionStart, selectionEnd - selectionStart);
}

// Function to update button state
function updateButtonState() {
  const button = document.getElementById("record-button");
  if (button) {
    button.classList.toggle("recording", isRecording);
  }
}

// Function to update HUD display
function updateHUD() {
  if (!showHud) return;

  const hud = document.getElementById("hud");
  if (hud) {
    hud.innerHTML = `
      <b>Buffer Size:</b> ${audioBuffer ? audioBuffer.length : "N/A"}<br>
      <b>Total Time:</b> ${
        audioBuffer ? audioBuffer.duration.toFixed(2) : "N/A"
      } sec<br>
      <b>Selection Start:</b> ${selectionStart.toFixed(2)} sec<br>
      <b>Selection End:</b> ${selectionEnd.toFixed(2)} sec<br>
      <b>Playback Position:</b> ${playbackPosition.toFixed(2)} sec<br>
      <b>Window Width:</b> ${window.innerWidth}px
    `;
  }
}

// Initialize the UI
function init() {
  const app = document.createElement("div");
  app.className = "app";

  const waveformDiv = document.createElement("div");
  waveformDiv.id = "waveform";
  waveformDiv.className = "waveform";

  const button = document.createElement("button");
  button.id = "record-button";
  button.className = "record-button";
  button.onclick = toggleRecording;

  const hud = document.createElement("div");
  hud.id = "hud";
  hud.className = "hud";

  app.appendChild(waveformDiv);
  app.appendChild(button);
  app.appendChild(hud);
  document.body.appendChild(app);
}

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", updateHUD);

export { visualizeWaveform, toggleRecording, startAudioContext };
