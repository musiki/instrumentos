import "./styles.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";
// import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";

let camera, scene, renderer;

let scene2, renderer2;

let mouseX = 0,
  mouseY = 0;

let controls;

let sphere;

let lights = [];

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let lookAt = new THREE.Vector3(0, 0, 0);

let lightMovementAmplitude = 200;

init();
animate(performance.now());

function init() {
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.set(0, 0, 500);

  scene = new THREE.Scene();
  scene2 = new THREE.Scene();

  var element = document.createElement("iframe");
  element.style.width = "300px";
  element.style.height = "200px";
  element.style.opacity = 0.999;
  element.src = "https://www.youtube.com/embed/bpOSxM0rNPM";

  var domObject = new CSS3DObject(element);
  scene2.add(domObject);

  var material = new THREE.MeshPhongMaterial({
    opacity: 0.2,
    color: new THREE.Color("black"),
    blending: THREE.NoBlending,
    side: THREE.DoubleSide,
  });
  var geometry = new THREE.PlaneGeometry(300, 200);
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(domObject.position);
  mesh.rotation.copy(domObject.rotation);
  //mesh.scale.copy( domObject.scale );
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  scene.add(mesh);

  // make a geometry to see if we can clip it with the DOM elememt.
  var material2 = new THREE.MeshPhongMaterial({
    color: 0x156289,
    emissive: 0x000000,
    specular: 0x111111,
    side: THREE.DoubleSide,
    flatShading: false,
    shininess: 30,
  });
  var geometry2 = new THREE.SphereGeometry(70, 32, 32);
  sphere = new THREE.Mesh(geometry2, material2);
  sphere.position.z = 0;
  sphere.castShadow = true;
  sphere.receiveShadow = false;
  sphere.position.set(0, 0, 100);
  scene.add(sphere);

  // light
  var ambientLight = new THREE.AmbientLight(0x000000);
  scene.add(ambientLight);

  lights[0] = new THREE.PointLight(0xffffff, 1, 0);
  lights[0].castShadow = true;
  lights[0].position.z = 300;
  lights[0].shadow.mapSize.width = 256; // default
  lights[0].shadow.mapSize.height = 256; // default
  lights[0].shadow.camera.near = 1; // default
  lights[0].shadow.camera.far = 2000; // default

  scene.add(lights[0]);

  //

  renderer2 = new CSS3DRenderer();
  renderer2.setSize(window.innerWidth, window.innerHeight);
  renderer2.domElement.style.position = "absolute";
  renderer2.domElement.style.top = 0;
  document.querySelector("#css").appendChild(renderer2.domElement);

  let controls = new OrbitControls(camera, renderer2.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  document.querySelector("#webgl").appendChild(renderer.domElement);

  let controls2 = new OrbitControls(camera, renderer.domElement);
  controls2.target.set(0, 0, 0);
  controls2.update();

  document.addEventListener("mousemove", onDocumentMouseMove, false);
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function animate(time) {
  sphere.position.x += (mouseX - sphere.position.x) * 0.005;
  sphere.position.y += (-mouseY - sphere.position.y) * 0.005;

  lights[0].position.x = 200 * Math.sin(time * 0.003);
  lights[0].position.y = 200 * Math.cos(time * 0.002);

  camera.lookAt(lookAt);

  renderer.render(scene, camera);
  renderer2.render(scene2, camera);

  requestAnimationFrame(animate);
}
