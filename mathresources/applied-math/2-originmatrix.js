const originalMatrixTexture = new THREE.TextureLoader().load(
  "path_to_image.jpg"
);
const originalMatrixGeometry = new THREE.PlaneGeometry(3, 3);
const originalMatrixMaterial = new THREE.MeshBasicMaterial({
  map: originalMatrixTexture,
});
const originalMatrix = new THREE.Mesh(
  originalMatrixGeometry,
  originalMatrixMaterial
);

scene.add(originalMatrix);
originalMatrix.position.set(-3, 0, 0);
