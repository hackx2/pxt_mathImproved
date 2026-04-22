// tests go here; this will not be compiled when this package is used as an extension.
import Vector2 = LinearAlgebra.Vector2;
import Vector3 = LinearAlgebra.Vector3;
import VectorN = LinearAlgebra.VectorN;
import Mat2x2 = LinearAlgebra.Mat2x2;

let mat: Mat2x2 = new Mat2x2(0, 3, 5, 3);
console.log(mat)
console.log(mat.toString())