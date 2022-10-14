import './style.css';
import * as THREE from 'three';

//scene
const scene = new THREE.Scene();

//Red cube(object = geometry + material)
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

//sizes
const sizes = {
    width: 800,
    height: 600
};

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);

//Render
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas
});
renderer.setSize(sizes.width, sizes.height);

let time = Date.now();

// Animation
const tick = () => {

    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;

    // Update Object
    mesh.rotation.y += 0.001 * deltaTime;

    // Render
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
};

tick();