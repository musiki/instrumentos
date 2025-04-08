import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import * as Tone from "tone";
import YouTubeIFrameCtrl from "youtube-iframe-ctrl";

// 🎵 Unlock AudioContext
function unlockAudioContext() {
  if (Tone.context.state !== "running") {
    Tone.context.resume().then(() => console.log("✅ AudioContext Unlocked!"));
  }
}
document.addEventListener("click", unlockAudioContext, { once: true });
document.addEventListener("touchstart", unlockAudioContext, { once: true });
document.addEventListener("keydown", unlockAudioContext, { once: true });

// 🎥 YouTube Video List
const videoIDs = [
  "LXb3EKWsInQ", // Nature
  "dQw4w9WgXcQ", // Rick Roll
  "kJQP7kiw5Fk", // Despacito
  "9bZkp7q19f0", // Gangnam Style
  "3JZ_D3ELwOQ", // Bohemian Rhapsody
  "tgbNymZ7vqY", // Nyan Cat
];

// 🌌 **Three.js Scene**
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
camera.position.set(0, 2, 20);

// **WebGLRenderer for 3D Scene**
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// **CSS3DRenderer for YouTube Video**
const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = "absolute";
document.body.appendChild(cssRenderer.domElement);

// 🎬 Create YouTube IFrame Element
const iframe = document.createElement("iframe");
iframe.style.width = "640px";
iframe.style.height = "360px";
iframe.style.border = "none";
iframe.src = `https://www.youtube-nocookie.com/embed/${videoIDs[0]}?enablejsapi=1&autoplay=1&mute=1`;
document.body.appendChild(iframe);

// 🎮 YouTube Controller
const youtubePlayer = new YouTubeIFrameCtrl(iframe);
youtubePlayer.mute();
youtubePlayer.play();

// **Create CSS3DObject for YouTube Video**
const domObject = new CSS3DObject(iframe);
scene.add(domObject);

// **Create Mesh for WebGL Plane**
const geometry = new THREE.PlaneGeometry(640, 360);
const material = new THREE.MeshPhongMaterial({
  opacity: 0.2,
  color: "black",
  blending: THREE.NoBlending,
  side: THREE.DoubleSide,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.copy(domObject.position);
mesh.rotation.copy(domObject.rotation);
scene.add(mesh);

// 🔲 **Grid for Spatial Reference**
const gridHelper = new THREE.GridHelper(100, 50);
scene.add(gridHelper);

// 🎧 **Positional Audio Setup**
const listener = new THREE.AudioListener();
camera.add(listener);
const positionalAudio = new THREE.PositionalAudio(listener);
positionalAudio.setMediaElementSource(iframe);
positionalAudio.setRefDistance(10);
positionalAudio.setRolloffFactor(1);
positionalAudio.setMaxDistance(100);
positionalAudio.setLoop(true);
positionalAudio.setVolume(0); // 🎧 Start Muted
domObject.add(positionalAudio);

// 🎶 **Fade-in YouTube Volume After 1 Second**
youtubePlayer.play().then(() => {
  setTimeout(async () => {
    await youtubePlayer.unMute();
    for (let i = 0; i <= 100; i += 2) {
      youtubePlayer.setVolume(i);
      await new Promise((res) => setTimeout(res, 50)); // Smooth transition
    }
    console.log("🔊 Volume fully restored!");
  }, 1000);
});

// 🎮 **WASD Movement for Camera**
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

  // 🎶 Fade-in volume for new video
  setTimeout(async () => {
    await youtubePlayer.unMute();
    for (let i = 0; i <= 100; i += 2) {
      youtubePlayer.setVolume(i);
      await new Promise((res) => setTimeout(res, 50));
    }
    console.log("🔊 Volume fully restored for new video!");
  }, 1000);
}
cssRenderer.domElement.addEventListener("click", changeVideo);

// 🎮 Orbit Controls
const controls = new OrbitControls(camera, cssRenderer.domElement);
controls.enableDamping = true;

// 🔄 **Animation Loop**
function animate() {
  requestAnimationFrame(animate);

  // 🎥 Move Video Panel in Space
  domObject.position.x = Math.sin(Date.now() * 0.0005) * 10;
  domObject.position.y = Math.cos(Date.now() * 0.0003) * 5;
  domObject.position.z = Math.sin(Date.now() * 0.0002) * 15;

  // 🚀 Apply WASD Movement
  const speed = 0.1;
  camera.position.x += movement.right * speed;
  camera.position.z += movement.forward * speed;
  camera.position.y += movement.up * speed;

  controls.update();
  renderer.render(scene, camera);
  cssRenderer.render(scene, camera);
}
animate();
