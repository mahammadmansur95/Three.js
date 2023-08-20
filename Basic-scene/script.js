
const canvas =document.querySelector('.canvas');

//create scene
const scene = new THREE.Scene();

//cude
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color : "red"});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


//camera
const sizes = {
    width: 800,
    height: 600, 
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);


//render
const renderer = new THREE.WebGLRenderer({
    canvas
});

renderer.setSize( sizes.width , sizes.height );

renderer.render(scene, camera);
