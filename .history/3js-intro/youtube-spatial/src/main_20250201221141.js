import * as THREE from "three";
import YouTubeIFrameCtrl from "youtube-iframe-ctrl";

// 🎥 YouTube Video List
const videoCodes = [
  "LXb3EKWsInQ",
  "dQw4w9WgXcQ",
  "3JZ_D3ELwOQ",
  "9bZkp7q19f0",
  "kJQP7kiw5Fk",
];

// 📺 Select Random Video
let currentVideoIndex = Math.floor(Math.random() * videoCodes.length);
const videoUrl = `https://www.youtube-nocookie.com/embed/${videoCodes[currentVideoIndex]}?enablejsapi=1&autoplay=1&mute=1`;

// 🔹 Create Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);

// 🎞️ Create YouTube IFrame
const iframe = document.createElement("iframe");
iframe.setAttribute("id", "youtube-iframe");
iframe.setAttribute("src", videoUrl);
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("allow", "autoplay; encrypted-media");
iframe.style.width = "1280px";
iframe.style.height = "720px";
iframe.style.position = "absolute";
iframe.style.left = "-9999px"; // Hide it off-screen
document.body.appendChild(iframe);

// 🎮 YouTube Controller
const youTubeCtrl = new YouTubeIFrameCtrl(iframe);
youTubeCtrl.mute(); // Auto-mute for autoplay permission
youTubeCtrl.play(); // Start video

// 🎥 Video Texture
const video = document.createElement("video");
video.crossOrigin = "anonymous";
video.loop = true;
video.autoplay = true;
video.muted = true;
video.style.display = "none";
document.body.appendChild(video);

const texture = new THREE.VideoTexture(video);
const material = new THREE.MeshBasicMaterial({ map: texture });

// 📦 Plane with Video Texture
const geometry = new THREE.PlaneGeometry(4, 2.25);
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// 🎯 Grid Helper
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// 🚀 Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 🔄 Animation Loop
function animate() {
  requestAnimationFrame(animate);
  plane.rotation.y += 0.005; // Slight rotation
  texture.needsUpdate = true; // Ensure texture updates
  renderer.render(scene, camera);
}
animate();

// 🎬 Click to Change Video
window.addEventListener("click", async () => {
  currentVideoIndex = (currentVideoIndex + 1) % videoCodes.length;
  const newVideoUrl = `https://www.youtube-nocookie.com/embed/${videoCodes[currentVideoIndex]}?enablejsapi=1&autoplay=1&mute=1`;
  iframe.setAttribute("src", newVideoUrl);
  await youTubeCtrl.stop();
  await youTubeCtrl.play();
});
