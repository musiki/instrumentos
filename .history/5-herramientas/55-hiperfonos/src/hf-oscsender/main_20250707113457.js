import './style.css';
import * as THREE from 'three';
import * as Tone from 'tone';
import OSC from 'osc-js';

const app = document.getElementById('app');

// --- HTML STRUCTURE ---
app.innerHTML = `
  <div id="hud-panel" class="hud open">
      <div id="hud-toggle" class="hud-toggle">☰</div>
    
    <div class="hud-content">
      <div class="hud-title">OSC Sensor HUD</div>
      <div id="hud-data"></div>
      <div class="hud-inputs">
        <input id="ip-input" type="text" pattern="^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$" placeholder="IP address (e.g. 192.168.1.2)" maxlength="15" />
        <input id="port-input" type="number" min="1" max="65535" placeholder="Port" maxlength="5" />
        <button id="connect-btn">Connect</button>

    </div>
  </div>
  <div id="threejs-canvas"></div>
  <div id="bottom-bar">
      <img src="/ui-logo-50.svg" class="hud-logo" alt="logo" />
    <span id="osc-led" class="led" title="OSC"></span>
     </div>
  </div>
`;

// --- HUD FOLDING ---
const hudPanel = document.getElementById('hud-panel');
document.getElementById('hud-toggle').onclick = () => {
  hudPanel.classList.toggle('open');
};

// --- HUD DATA UPDATE ---
const hudData = document.getElementById('hud-data');
function updateHUD(data) {
  hudData.innerHTML = `
    <b>Gyro:</b> X: ${data.gx.toFixed(2)} Y: ${data.gy.toFixed(2)} Z: ${data.gz.toFixed(2)}<br>
    <b>Accel:</b> X: ${data.ax.toFixed(2)} Y: ${data.ay.toFixed(2)} Z: ${data.az.toFixed(2)}<br>
    <b>Alpha:</b> ${data.alpha.toFixed(1)}° <b>Beta:</b> ${data.beta.toFixed(1)}° <b>Gamma:</b> ${data.gamma.toFixed(1)}°
  `;
}

// --- THREE.JS SETUP ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 8);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-canvas').appendChild(renderer.domElement);

// Sphere (wireframe)
const sphereMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), sphereMat);
scene.add(sphere);

// Grid
const grid = new THREE.GridHelper(8, 20, 0x888888, 0x222222);
grid.position.y = -2.5;
scene.add(grid);

// Gimbal (XZT lines)
const gimbalGroup = new THREE.Group();
const axes = [
  { color: 0xff3333, dir: [1, 0, 0] },
  { color: 0x33ff33, dir: [0, 0, 1] },
  { color: 0x3333ff, dir: [0, 1, 0] },
];
axes.forEach(({ color, dir }) => {
  const mat = new THREE.LineBasicMaterial({ color });
  const pts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(...dir).multiplyScalar(3)];
  const geo = new THREE.BufferGeometry().setFromPoints(pts);
  const line = new THREE.Line(geo, mat);
  gimbalGroup.add(line);
});
scene.add(gimbalGroup);

// --- RESIZE HANDLER ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- SENSOR DATA ---
let sensorsEnabled = false;
let gyro = { gx: 0, gy: 0, gz: 0, alpha: 0, beta: 0, gamma: 0 };
let accel = { ax: 0, ay: 0, az: 0 };

// --- OSC ---
let osc, oscConnected = false;
const led = document.getElementById('osc-led');
function setLed(state) { led.style.background = state ? '#0f0' : '#333'; }
setLed(false);

function validateIP(ip) {
  return /^([0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip);
}

function connectOSC(ip, port) {
  if (!validateIP(ip) || !port) return;
  if (osc) osc.close();
  osc = new OSC({ plugin: new OSC.DatagramPlugin({ send: { host: ip, port: Number(port) }, open: { host: '0.0.0.0', port: 0 } }) });
  osc.on('open', () => { oscConnected = true; setLed(true); });
  osc.on('close', () => { oscConnected = false; setLed(false); });
  osc.open();
  // handshake: send a test message
  setTimeout(() => {
    osc.send(new OSC.Message('/hello', 'browser-osc'));
  }, 500);
}

document.getElementById('connect-btn').onclick = () => {
  const ip = document.getElementById('ip-input').value;
  const port = document.getElementById('port-input').value;
  if (!validateIP(ip)) {
    alert('Invalid IP address!');
    return;
  }
  if (!port || isNaN(port)) {
    alert('Invalid port!');
    return;
  }
  connectOSC(ip, port);
};

// --- SENSORS ---
async function requestPermissions() {
  if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
    try {
      const perm = await DeviceMotionEvent.requestPermission();
      if (perm === 'granted') sensorsEnabled = true;
    } catch {}
  } else {
    sensorsEnabled = true;
  }
  await Tone.start();
}

document.body.addEventListener('touchend', async () => {
  if (!sensorsEnabled) {
    await requestPermissions();
    if (sensorsEnabled) {
      window.addEventListener('deviceorientation', orientationHandler, false);
      window.addEventListener('devicemotion', motionHandler, false);
    }
  }
});

function orientationHandler(event) {
  gyro = {
    gx: event.beta || 0,
    gy: event.gamma || 0,
    gz: event.alpha || 0,
    alpha: event.alpha || 0,
    beta: event.beta || 0,
    gamma: event.gamma || 0,
  };
}

function motionHandler(event) {
  accel = {
    ax: event.accelerationIncludingGravity?.x || 0,
    ay: event.accelerationIncludingGravity?.y || 0,
    az: event.accelerationIncludingGravity?.z || 0,
  };
}

// --- ANIMATION LOOP ---
const synth = new Tone.Synth().toDestination();
function animate() {
  requestAnimationFrame(animate);
  // Sphere rotation from gyro
  sphere.rotation.set(gyro.beta * 0.01, gyro.gamma * 0.01, gyro.alpha * 0.01);
  // Gimbal orientation from accel
  gimbalGroup.rotation.set(accel.ax * 0.2, accel.ay * 0.2, accel.az * 0.2);
  // Send OSC
  if (osc && oscConnected) {
    osc.send(new OSC.Message('/gyro', gyro.gx, gyro.gy, gyro.gz));
    osc.send(new OSC.Message('/accel', accel.ax, accel.ay, accel.az));
  }
  // HUD
  updateHUD({ ...gyro, ...accel });
}
animate();

// --- STYLES (for new UI elements) ---
const style = document.createElement('style');
style.innerHTML = `
#threejs-canvas { position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:0; }
.hud { position:fixed; top:0; left:0; width:270px; max-width:90vw; height:100vh; background:rgba(18,18,18,0.92); color:#eee; z-index:10; border-top-right-radius:18px; border-bottom-right-radius:18px; box-shadow:2px 0 12px #000a; transition:transform 0.3s; display:flex; flex-direction:column; }
.hud:not(.open) { transform:translateX(-95%); }
#hud-toggle { position:absolute; left:100%; top:16px; width:38px; height:38px; border-radius:0 8px 8px 0; background:#222; color:#fff; border:none; font-size:1.6em; z-index:11; cursor:pointer; }
.hud-content { margin:56px 12px 12px 12px; }
.hud-title { font-weight:bold; font-size:1.2em; margin-bottom:8px; }
.hud-inputs { margin-top:14px; display:flex; flex-direction:column; gap:8px; }
.hud-inputs input { border-radius:6px; border:1px solid #444; padding:7px 10px; font-size:1em; background:#181818; color:#eee; }
.hud-inputs button { border-radius:6px; border:none; background:#333; color:#fff; padding:7px 0; font-size:1em; cursor:pointer; }
#bottom-bar { position:fixed; left:0; bottom:0; width:100vw; height:54px; background:rgba(0,0,0,0.18); display:flex; align-items:center; justify-content:center; z-index:20; }
.led { display:inline-block; width:18px; height:18px; border-radius:50%; background:#333; border:2px solid #222; margin-right:7px; vertical-align:middle; transition:background 0.2s; }
.led-label { color:#eee; font-size:1.1em; }
@media (max-width:600px) { .hud { width:90vw; border-radius:0 18px 18px 0; } }
`;
document.head.appendChild(style);
