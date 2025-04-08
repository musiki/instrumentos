import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import * as Tone from "tone";
import YouTubeIFrameCtrl from "youtube-iframe-ctrl";

// 🎵 Unlock AudioContext on User Interaction
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
  "dQw4w9WgXcQ", // Rick Roll
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
camera.position.set(0, 2, 20); // 🔍 Zenithal View
camera.lookAt(new THREE.Vector3(0, 0, 0));

// 🎞️ **CSS3DRenderer for YouTube Video**
const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = "absolute";
document.body.appendChild(cssRenderer.domElement);

// 🎬 Create YouTube IFrame (Fullscreen)
const iframe = document.createElement("iframe");
iframe.id = "youtube-iframe";
iframe.style.width = "1280px";
iframe.style.height = "720px";
iframe.style.border = "none";
iframe.src = `https://www.youtube-nocookie.com/embed/${videoIDs[0]}?enablejsapi=1&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0`;
document.body.appendChild(iframe);

// 🎮 YouTube Controller
const youtubePlayer = new YouTubeIFrameCtrl(iframe);
youtubePlayer.mute();
youtubePlayer.play();

// 📺 **CSS3DObject for Video**
const cssObject = new CSS3DObject(iframe);
// cssObject.position.set(0, 0, 0);
scene.add(cssObject);

// 🎞️ WebGLRenderer for 3D Scene
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// // 🎧 **Positional Audio Setup**
// const listener = new THREE.AudioListener();
// camera.add(listener);

// 🎮 Orbit Controls (Disabled Zoom)
const controls = new OrbitControls(camera, cssRenderer.domElement);
controls.enableDamping = true;
controls.enableZoom = true;
controls.enableRotate = true;

// 🔲 **Grid for 3D Space Perception**
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

// 💡 **Add 10 Random Lights**
for (let i = 0; i < 10; i++) {
  const light = new THREE.PointLight(0xffffff, 5000, 100);
  light.position.set(Math.random() * 200 - 100, 50, Math.random() * 200 - 100);
  scene.add(light);
}

// 🎧 **Positional Audio Setup**
const listener = new THREE.AudioListener();
camera.add(listener);
const positionalAudio = new THREE.PositionalAudio(listener);
positionalAudio.setMediaElementSource(iframe);
positionalAudio.setRefDistance(10);
positionalAudio.setRolloffFactor(1);
positionalAudio.setMaxDistance(100);
positionalAudio.setLoop(true);
positionalAudio.setVolume(0); // Start Muted
cssObject.add(positionalAudio);

// 🔊 **Smooth Volume Fade-In**
youtubePlayer.play().then(() => {
  setTimeout(async () => {
    await youtubePlayer.unMute();
    for (let i = 0; i <= 100; i += 2) {
      youtubePlayer.setVolume(i);
      positionalAudio.setVolume(i / 100); // Sync Three.js Audio
      await new Promise((res) => setTimeout(res, 20)); // Smooth fade
    }
    console.log("🔊 Volume fully restored!");
  }, 500);
});

// 🎬 **Switch Video on Click or Spacebar**
function changeVideo() {
  const newVideoID = videoIDs[Math.floor(Math.random() * videoIDs.length)];
  youtubePlayer.command("loadVideoById", [newVideoID]);
  youtubePlayer.mute();
  youtubePlayer.play();

  // 🎶 Apply Smooth Volume Transition for New Video
  setTimeout(async () => {
    await youtubePlayer.unMute();
    for (let i = 0; i <= 100; i += 2) {
      youtubePlayer.setVolume(i);
      positionalAudio.setVolume(i / 100);
      await new Promise((res) => setTimeout(res, 20));
    }
    console.log("🔊 Volume fully restored for new video!");
  }, 500);
}
document.addEventListener("click", changeVideo);
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") changeVideo();
});

// 🎭 **Random Opacity Transitions**
function applyOpacityTransition() {
  const opacity = Math.random() * 0.6 + 0.4; // 🎭 Opacity between 0.4 - 1
  cssObject.element.style.opacity = opacity;
  setTimeout(applyOpacityTransition, Math.random() * 5000 + 2000); // Apply again randomly (2s - 7s)
}
applyOpacityTransition();

// 🔄 **Animation Loop**
function animate() {
  requestAnimationFrame(animate);

  // 🎞️ Keep Video Plane Aligned to Window
  const aspectRatio = window.innerWidth / window.innerHeight;
  cssObject.scale.set(aspectRatio, 1, 1);

  controls.update();
  renderer.render(scene, camera);
  cssRenderer.render(scene, camera);
}
animate();

// 🎯 **Resize Handler**
window.addEventListener("resize", () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  camera.aspect = aspectRatio;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
});
