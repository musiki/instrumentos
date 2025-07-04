import * as Tone from "tone";
import Waveform from "waveform-playlist";

// State variables
let isRecording = false;
let audioBuffer = null;
let waveformInstance = null;
let mediaRecorder = null;
let audioChunks = [];

// Inject CSS dynamically
function injectCSS(styles) {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

// CSS styles
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
    height: 80%;
  }

  .record-button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    bottom: 10%;
    left: 10%;
    background-color: gray;
    border: none;
    transition: background 0.3s;
  }

  .record-button.recording {
    background-color: red;
  }
`);

// Function to initialize AudioContext
function startAudioContext() {
  if (Tone.context.state !== "running") {
    Tone.context
      .resume()
      .then(() => console.log("AudioContext resumed successfully!"))
      .catch((err) => console.error("Failed to resume AudioContext:", err));
  }
}

// Simulate a user gesture by dispatching a fake event
function simulateUserGesture() {
  const button = document.createElement("button");
  button.style.display = "none"; // Hide button
  document.body.appendChild(button);
  button.click(); // Simulate a click to trigger AudioContext
  document.body.removeChild(button); // Remove it immediately
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
function toggleRecording() {
  isRecording = !isRecording;
  updateButtonState();

  if (isRecording) {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const arrayBuffer = await audioBlob.arrayBuffer();
        audioBuffer = await Tone.getContext().rawContext.decodeAudioData(
          arrayBuffer
        );
        visualizeWaveform(audioBlob);
      };

      mediaRecorder.start();
    });
  } else if (mediaRecorder) {
    mediaRecorder.stop();
  }
}

// Function to visualize waveform
function visualizeWaveform(audioBlob) {
  if (!audioBlob) return;

  const waveformContainer = document.getElementById("waveform");
  waveformContainer.innerHTML = ""; // Clear previous waveform

  waveformInstance = Waveform({
    container: waveformContainer,
    waveColor: "white",
    progressColor: "gray",
    backgroundColor: "black",
    cursorColor: "white",
    barWidth: 2,
    responsive: true,
  });

  waveformInstance
    .load([{ src: URL.createObjectURL(audioBlob), name: "Audio" }])
    .then(() => {
      // Get buffer length and resize waveform
      Tone.getContext()
        .rawContext.decodeAudioData(audioBlob.arrayBuffer())
        .then((buffer) => {
          scaleWaveformToBuffer(buffer);
        });
    });
}

// Function to handle selection and playback
function handleSelection(start, end) {
  if (!audioBuffer) return;

  const player = new Tone.Player(audioBuffer).toDestination();
  player.loop = true;
  player.start(0, start, end - start);
}

// Function to update button state (color change)
function updateButtonState() {
  const button = document.getElementById("record-button");
  if (button) {
    button.classList.toggle("recording", isRecording);
  }
}

function scaleWaveformToBuffer(buffer) {
  const duration = buffer.duration; // Get buffer length in seconds
  const container = document.getElementById("waveform");

  // Set waveform width dynamically based on buffer length
  const scaleFactor = 100; // Adjust for zoom level
  container.style.width = `${duration * scaleFactor}px`; // Scale width based on duration
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

  app.appendChild(waveformDiv);
  app.appendChild(button);
  document.body.appendChild(app);
}

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", init);
