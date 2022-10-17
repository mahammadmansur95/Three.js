import "./style.css";
import * as THREE from "three";
import gsap from "gsap";


// Cursor
const cursor = {
    x : 0,
    y: 0,
};
window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - 0.5
    cursor.y = -(e.clientY / sizes.height - 0.5)
});

//scene
const scene = new THREE.Scene();

//Red cube(object = geometry + material)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
const axis = new THREE.AxesHelper();
scene.add(mesh,axis);

//sizes
const sizes = {
  width: 800,
  height: 600,
};

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// const aspectRation = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRation,
//   1 * aspectRation,
//   1,
//   -1,
//   0.1,
//   100
// );
camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);

//Render
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animation
const tick = () => {
  // Render
  renderer.render(scene, camera);

  //update camera
  camera.position.x = cursor.x * 3
  camera.position.y = cursor.y * 3
  camera.lookAt(mesh.position);

//   mesh.rotation.y += 0.1;

  window.requestAnimationFrame(tick);
};

tick();
