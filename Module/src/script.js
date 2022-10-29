import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const canvas = document.querySelector(".webgl");

// Cursor
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = -(e.clientY / sizes.height - 0.5);
});

//scene
const scene = new THREE.Scene();

//Red cube(object = geometry + material)
// const geometry = new THREE.BoxGeometry(1, 1, 1,2,2,2);
const geometry = new THREE.BufferGeometry();
const positionsArray = new Float32Array([
  0,0,1,
  0,1,0,
  1,0,0
]);

const positionsAttribute = new THREE.BufferAttribute(positionsArray,3);
geometry.setAttribute('position', positionsAttribute);

// positionsArray[0] = 0;
// positionsArray[1] = 0;
// positionsArray[2] = 0;

// positionsArray[3] = 0;
// positionsArray[4] = 1;
// positionsArray[5] = 0;

// positionsArray[6] = 1;
// positionsArray[7] = 0;
// positionsArray[8] = 0;

const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
const axis = new THREE.AxesHelper();
scene.add(mesh, axis);

//sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
});

window.addEventListener('dblclick', () => {
  if(!document.fullscreenElement){
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//Render

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

// Animation
const tick = () => {
  // Render
  renderer.render(scene, camera);
  controls.update();

  window.requestAnimationFrame(tick);
};

tick();
