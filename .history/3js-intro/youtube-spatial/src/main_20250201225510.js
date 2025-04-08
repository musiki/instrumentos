import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import * as Tone from "tone";
import YouTubeIFrameCtrl from "youtube-iframe-ctrl";

// 🎵 Auto-Unlock AudioContext
function unlockAudioContext() {
  if (Tone.context.state !== "running") {
    Tone.context.resume().then(() => console.log("✅ AudioContext Unlocked!"));
  }
}
document.addEventListener("click", unlockAudioContext, { once: true });
document.addEventListener("touchstart", unlockAudioContext, { once: true });
document.addEventListener("keydown", unlockAudioContext, { once: true });

// 🎥 List of YouTube Video IDs
const videoIDs = [
  "LXb3EKWsInQ", // Nature
  "dQw4w9WgXcQ", // Rick Astley
  "kJQP7kiw5Fk", // Despacito
  "9bZkp7q19f0", // Gangnam Style
  "3JZ_D3ELwOQ", // Bohemian Rhapsody
  "tgbNymZ7vqY", // Nyan Cat
];

// **🌌 Three.js Scene Setup**
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 20);

// 🎞️ **CSS3DRenderer for YouTube Video**
const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = "absolute";
document.body.appendChild(cssRenderer.domElement);

// 🎬 Create YouTube IFrame
const iframe = document.createElement("iframe");
iframe.id = "youtube-iframe";
iframe.style.width = "640px";
iframe.style.height = "360px";
iframe.style.border = "none";
iframe.src = `https://www.youtube-nocookie.com/embed/${videoIDs[0]}?enablejsapi=1&autoplay=1&mute=1`;
document.body.appendChild(iframe);

// 🎮 YouTube Controller
const youtubePlayer = new YouTubeIFrameCtrl(iframe);
youtubePlayer.mute();
youtubePlayer.play();

// 📺 Create a CSS3D Plane Object for Video
const cssObject = new CSS3DObject(iframe);
scene.add(cssObject);

// 🎞️ WebGLRenderer for 3D Scene
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 🎮 Orbit Controls for Smooth Interaction
const controls = new OrbitControls(camera, cssRenderer.domElement);
controls.enableDamping = true;

// 🔲 **Grid for 3D Space Perception**
const gridHelper = new THREE.GridHelper(100, 50);
scene.add(gridHelper);

// 🎧 **Positional Audio Setup**
const listener = new THREE.AudioListener();
camera.add(listener);

const audioElement = new Audio();
audioElement.src = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"; // Placeholder Audio
audioElement.loop = true;

const positionalAudio = new THREE.PositionalAudio(listener);
positionalAudio.setMediaElementSource(audioElement);
positionalAudio.setRefDistance(10);
positionalAudio.setRolloffFactor(1);
positionalAudio.setMaxDistance(100);
positionalAudio.setLoop(true);
positionalAudio.setVolume(1);

cssObject.add(positionalAudio);

// 🔊 **Start Audio when Clicked**
function startAudio() {
  if (Tone.context.state !== "running") {
    Tone.context.resume();
  }
  audioElement.play();
  positionalAudio.play();
}
document.addEventListener("click", startAudio, { once: true });

// 🎮 **WASD Controls for Free Flying Camera**
const movement = { forward: 0, right: 0, up: 0 };
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      movement.forward = 1;
      break;
    case "s":
      movement.forward = -1;
      break;
    case "a":
      movement.right = -1;
      break;
    case "d":
      movement.right = 1;
      break;
    case "ArrowUp":
      movement.up = 1;
      break;
    case "ArrowDown":
      movement.up = -1;
      break;
  }
});
document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "w":
    case "s":
      movement.forward = 0;
      break;
    case "a":
    case "d":
      movement.right = 0;
      break;
    case "ArrowUp":
    case "ArrowDown":
      movement.up = 0;
      break;
  }
});

// 🎬 **Click to Change Video**
function changeVideo() {
  const newVideoID = videoIDs[Math.floor(Math.random() * videoIDs.length)];
  youtubePlayer.command("loadVideoById", [newVideoID]);
  youtubePlayer.mute();
  youtubePlayer.play();
}
cssRenderer.domElement.addEventListener("click", changeVideo);

// 🔄 **Animation Loop**
function animate() {
  requestAnimationFrame(animate);

  // Move Video Plane Randomly in Space
  cssObject.position.x = Math.sin(Date.now() * 0.0005) * 10;
  cssObject.position.y = Math.cos(Date.now() * 0.0003) * 5;
  cssObject.position.z = Math.sin(Date.now() * 0.0002) * 15;

  // Update WASD Movement
  const speed = 0.1;
  camera.position.x += movement.right * speed;
  camera.position.z += movement.forward * speed;
  camera.position.y += movement.up * speed;

  controls.update();
  renderer.render(scene, camera);
  cssRenderer.render(scene, camera);
}
animate();
