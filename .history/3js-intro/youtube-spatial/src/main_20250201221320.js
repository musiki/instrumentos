import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as Tone from "tone";
import YouTubeIFrameCtrl from "youtube-iframe-ctrl";

// 🎵 Auto-Unlock AudioContext on Interaction
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

// 🎬 Create YouTube IFrame
const iframe = document.createElement("iframe");
iframe.id = "youtube-iframe";
iframe.style.display = "none";
iframe.src = `https://www.youtube-nocookie.com/embed/${videoIDs[0]}?enablejsapi=1&autoplay=1&mute=1`;
document.body.appendChild(iframe);

// 🎮 YouTube Controller
const youtubePlayer = new YouTubeIFrameCtrl(iframe);
youtubePlayer.mute();
youtubePlayer.play();

// 🎥 Change Video on Click
function changeVideo() {
  const newVideoID = videoIDs[Math.floor(Math.random() * videoIDs.length)];
  youtubePlayer.command("loadVideoById", [newVideoID]);
  youtubePlayer.mute();
  youtubePlayer.play();
}

// 🌌 **Three.js Scene Setup**
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 20);

// 🚀 Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 🎮 Orbital Controls (Trackpad)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 🎞️ Video Texture
const texture = new THREE.VideoTexture(iframe);
texture.colorSpace = THREE.SRGBColorSpace;
const material = new THREE.MeshBasicMaterial({ map: texture });

// 📺 Create a Moving Plane with YouTube Video Texture
const planeGeometry = new THREE.PlaneGeometry(16, 9);
const plane = new THREE.Mesh(planeGeometry, material);
scene.add(plane);

// 🎤 Positional Audio (Tone.js)
const sound = new Tone.Player({
  url: "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3",
  loop: true,
}).toDestination();

function startAudio() {
  if (Tone.context.state !== "running") {
    Tone.context.resume();
  }
  sound.start();
}
document.addEventListener("click", startAudio, { once: true });

// 🔲 **Add Grid Helper**
const gridHelper = new THREE.GridHelper(100, 50);
scene.add(gridHelper);

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

// 🔄 **Animation Loop**
function animate() {
  requestAnimationFrame(animate);

  // Move Plane Randomly in Space
  plane.position.x = Math.sin(Date.now() * 0.0005) * 10;
  plane.position.y = Math.cos(Date.now() * 0.0003) * 5;
  plane.position.z = Math.sin(Date.now() * 0.0002) * 15;

  // Update WASD Movement
  const speed = 0.1;
  camera.position.x += movement.right * speed;
  camera.position.z += movement.forward * speed;
  camera.position.y += movement.up * speed;

  controls.update();
  renderer.render(scene, camera);
}
animate();

// 🎬 Click to Change Video
renderer.domElement.addEventListener("click", changeVideo);
