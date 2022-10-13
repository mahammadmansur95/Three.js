import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
mesh.position.set(0.7,-0.6,1);

//scale
mesh.scale.y = 0.5;

//rotation
mesh.rotation.reorder('YXZ');
mesh.rotation.x = 0.5;
mesh.rotation.y = 0.5;


scene.add(mesh);

// console.log('distance between center of scene to object',mesh.position.length());

/* Axis Healper */
const axisHelper = new THREE.AxesHelper();
scene.add(axisHelper);


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);

console.log('distance between camera and cube ',mesh.position.distanceTo(camera.position));

// You can normalize its values (meaning that you will reduce the length of the vector to 1 unit but preserve its direction)
// mesh.position.normalize();

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)