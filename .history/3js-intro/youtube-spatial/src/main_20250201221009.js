import * as THREE from "three";
import * as Tone from "tone";
import YouTubeIFrameCtrl from "youtube-iframe-ctrl";

// Function to resume AudioContext on user interaction
function unlockAudioContext() {
  if (Tone.context.state !== "running") {
    Tone.context
      .resume()
      .then(() => {
        console.log("✅ AudioContext resumed successfully!");
      })
      .catch((err) => {
        console.error("❌ Failed to resume AudioContext:", err);
      });
  }
}

// Listen for user interaction once
document.addEventListener("click", unlockAudioContext, { once: true });
document.addEventListener("touchstart", unlockAudioContext, { once: true });
document.addEventListener("keydown", unlockAudioContext, { once: true });

// Lista de videos aleatorios de YouTube
const videoIDs = [
  "LXb3EKWsInQ", // Relaxing nature
  "dQw4w9WgXcQ", // Rick Roll
  "kJQP7kiw5Fk", // Despacito
  "9bZkp7q19f0", // Gangnam Style
  "3JZ_D3ELwOQ", // Bohemian Rhapsody
  "tgbNymZ7vqY", // Nyan Cat
];

// Elemento iFrame
const iframe = document.createElement("iframe");
iframe.id = "youtube-iframe";
iframe.style.display = "none";
iframe.src = `https://www.youtube-nocookie.com/embed/${videoIDs[0]}?enablejsapi=1&autoplay=1&mute=1`;
document.body.appendChild(iframe);

// Controlador de YouTube
let youtubePlayer = new YouTubeIFrameCtrl(iframe);

// Escuchar eventos del reproductor
iframe.addEventListener("ytstatechange", (event) => {
  console.log("Estado del video:", event.detail);
});

// Función para cambiar video aleatoriamente
function cambiarVideo() {
  const newVideoID = videoIDs[Math.floor(Math.random() * videoIDs.length)];
  youtubePlayer.command("loadVideoById", [newVideoID]);
  youtubePlayer.mute();
  youtubePlayer.play();
}

// **Three.js Setup**
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// **Crear plano para la textura de video**
const geometry = new THREE.PlaneGeometry(16, 9);
const texture = new THREE.VideoTexture(iframe);
const material = new THREE.MeshBasicMaterial({ map: texture });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

camera.position.z = 20;

// **Animación del plano**
function animate() {
  requestAnimationFrame(animate);
  plane.rotation.y += 0.001;
  plane.rotation.x += 0.001;
  renderer.render(scene, camera);
}
animate();

// **Detección de clic para cambiar de video**
renderer.domElement.addEventListener("click", cambiarVideo);
