import * as THREE from "three";
import * as Tone from "tone";

// **🔹 Configuración de rangos**
const minFreq = 200,
  maxFreq = 2000;
const scaleZ = 1.5;
let sensorsEnabled = false;

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

// **🔹 Simple Synth**
const synth = new Tone.Synth().toDestination();

// **🔹 HUD for Sensor Data (Upper Left)**
const hud = document.createElement("div");
Object.assign(hud.style, {
  position: "fixed",
  top: "10px",
  left: "10px",
  color: "lightgray",
  fontSize: "1.1em",
  fontFamily: "monospace",
  background: "rgba(0, 0, 0, 0.5)",
  padding: "5px 10px",
  borderRadius: "5px",
  zIndex: "1000",
  pointerEvents: "none",
  display: "block",
});
document.body.appendChild(hud);

// **🔹 Function to Update HUD**
const updateHUD = (alpha, beta, gamma, freq) => {
  hud.innerHTML = `
    Rot X (Beta): ${beta.toFixed(1)}°<br>
    Rot Y (Gamma): ${gamma.toFixed(1)}°<br>
    Rot Z (Alpha): ${alpha.toFixed(1)}°<br>
    <b>Frequency:</b> ${freq.toFixed(1)} Hz
  `;
};

// **🔹 Request Permissions (Sensors + Audio)**
async function requestPermissions() {
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    try {
      const permissionState = await DeviceMotionEvent.requestPermission();
      if (permissionState === "granted") {
        sensorsEnabled = true;
        console.log("✅ Sensors enabled!");
      } else {
        console.error("❌ Sensor access denied");
      }
    } catch (error) {
      console.error("❌ Sensor Permission Error:", error);
    }
  } else {
    sensorsEnabled = true;
  }

  await Tone.start(); // 🔊 **Start Tone.js**
  console.log("✅ AudioContext Started!");
}

// **🔹 Sensor Data Handling**
let rotX = 0,
  rotY = 0,
  rotZ = 0;

// **🔹 Gyroscope Listener**
const orientationHandler = (event) => {
  if (!sensorsEnabled) return;
  rotX = event.beta || 0; // **Front-back tilt**
  rotY = event.gamma || 0; // **Left-right tilt**
  rotZ = event.alpha || 0; // **Compass rotation**

  // **🔹 Map Frequency (RotX - Beta)**
  const frequency = minFreq + (maxFreq - minFreq) * (rotX / 90);
  synth.set({ frequency });

  // **🔹 Move Sphere Based on Rotation**
  sphere.position.x = rotY * 0.05; // Move left/right
  sphere.position.z = rotX * 0.05; // Move forward/back
  sphere.scale.setScalar(1 + (Math.abs(rotX) / 90) * scaleZ);

  updateHUD(rotX, rotY, rotZ, frequency);
};

// **🔹 Toggle Sound & Sensors on Tap**
let isRed = false;
document.body.addEventListener("touchend", async () => {
  isRed = !isRed;
  sphereMaterial.color.set(isRed ? 0xff0000 : 0xffffff);

  if (isRed) {
    console.log("🚀 Requesting Permissions...");
    await requestPermissions();
    if (sensorsEnabled) {
      window.addEventListener("deviceorientation", orientationHandler, false);
      synth.triggerAttack("C4"); // 🔊 **Start Sound**
      console.log("✅ Sensors & Sound Activated!");
    }
  } else {
    console.log("❌ Sensors Disabled");
    window.removeEventListener("deviceorientation", orientationHandler);
    synth.triggerRelease(); // 🔇 **Stop Sound**
  }
});

// **🔹 Initialize Three.js Scene**
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 10, 0);
camera.lookAt(0, 0, 0);

// **🔹 Renderer**
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// **🔹 Grid & Sphere**
let gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  sphereMaterial
);
scene.add(sphere);

// **🔹 Animate Sphere**
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphere.rotation.set(rotX * 0.01, rotY * 0.01, rotZ * 0.01);
};
animate();

// **🔹 Global Styles Fix (Full Screen Canvas)**
const css = document.createElement("style");
css.type = "text/css";
css.innerHTML = `
  body { margin: 0; overflow: hidden; touch-action: none; background: black; }
  canvas { display: block; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 0; }
  div { position: fixed; z-index: 1000; }
`;
document.head.appendChild(css);
