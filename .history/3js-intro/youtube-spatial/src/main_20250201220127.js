import * as THREE from "three";
import { PositionalAudio } from "three";
import * as Tone from "tone";
import YouTubeIframeCtrl from "youtube-iframe-ctrl";

// 🎥 YouTube Video Pool
const videoCodes = [
  "dQw4w9WgXcQ", // Rickroll
  "3JZ_D3ELwOQ", // Bohemian Rhapsody
  "LXb3EKWsInQ", // Relaxing Nature
  "kJQP7kiw5Fk", // Despacito
  "9bZkp7q19f0", // Gangnam Style
  "ScMzIvxBSi4", // Lofi Chill Beats
];

// 🔀 Get Random Video
function getRandomVideo() {
  return videoCodes[Math.floor(Math.random() * videoCodes.length)];
}

// 🌌 Three.js Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5);

// 🎥 YouTube iFrame Setup
const videoElement = document.createElement("iframe");
videoElement.style.display = "none";
videoElement.src = `https://www.youtube.com/embed/${getRandomVideo()}?enablejsapi=1&autoplay=1&controls=0&mute=1&loop=1&playlist=${getRandomVideo()}`;
document.body.appendChild(videoElement);

// 🎧 Three.js Audio System
const listener = new THREE.AudioListener();
camera.add(listener);
const audio = new PositionalAudio(listener);

// 🎮 Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 📏 Grid Helper
const gridHelper = new THREE.GridHelper(20, 20);
scene.add(gridHelper);

// ✈️ Moving Plane with YouTube Texture
const planeGeometry = new THREE.PlaneGeometry(4, 2.5);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.position.set(0, 2, 0);

// 🎥 Apply YouTube Video Texture
const videoTexture = new THREE.VideoTexture(videoElement);
planeMaterial.map = videoTexture;
planeMaterial.needsUpdate = true;

// 🎧 Set YouTube Audio as Three.js Positional Audio
const youtubePlayer = new YouTubeIframeCtrl(videoElement);

youtubePlayer.onReady(() => {
  youtubePlayer.play();
  const mediaStream = youtubePlayer.getMediaStream();
  const mediaSource = Tone.context.createMediaStreamSource(mediaStream);
  const threeAudioSource = new THREE.PositionalAudio(listener);
  threeAudioSource.setMediaStreamSource(mediaStream);
  threeAudioSource.setRefDistance(1);
  plane.add(threeAudioSource);
});

// ✨ Move Plane Randomly
function movePlane() {
  plane.position.x += (Math.random() - 0.5) * 0.1;
  plane.position.y += (Math.random() - 0.5) * 0.05;
  plane.position.z += (Math.random() - 0.5) * 0.1;
}

// 🔄 Animation Loop
function animate() {
  requestAnimationFrame(animate);
  movePlane();
  renderer.render(scene, camera);
}
animate();

// 🔄 Change Video on Click
renderer.domElement.addEventListener("click", () => {
  const newVideo = getRandomVideo();
  videoElement.src = `https://www.youtube.com/embed/${newVideo}?enablejsapi=1&autoplay=1&controls=0&mute=1&loop=1&playlist=${newVideo}`;
});
