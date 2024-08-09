const uMatrixTexture = new THREE.TextureLoader().load("path_to_u_matrix.jpg");
const sigmaMatrixTexture = new THREE.TextureLoader().load(
  "path_to_sigma_matrix.jpg"
);
const vMatrixTexture = new THREE.TextureLoader().load("path_to_vt_matrix.jpg");

const uMatrixGeometry = new THREE.PlaneGeometry(2, 2);
const sigmaMatrixGeometry = new THREE.PlaneGeometry(1, 2);
const vMatrixGeometry = new THREE.PlaneGeometry(2, 2);

const uMatrixMaterial = new THREE.MeshBasicMaterial({ map: uMatrixTexture });
const sigmaMatrixMaterial = new THREE.MeshBasicMaterial({
  map: sigmaMatrixTexture,
});
const vMatrixMaterial = new THREE.MeshBasicMaterial({ map: vMatrixTexture });

const uMatrix = new THREE.Mesh(uMatrixGeometry, uMatrixMaterial);
const sigmaMatrix = new THREE.Mesh(sigmaMatrixGeometry, sigmaMatrixMaterial);
const vMatrix = new THREE.Mesh(vMatrixGeometry, vMatrixMaterial);

scene.add(uMatrix);
scene.add(sigmaMatrix);
scene.add(vMatrix);

uMatrix.position.set(0, 0, 0);
sigmaMatrix.position.set(2, 0, 0);
vMatrix.position.set(4, 0, 0);
