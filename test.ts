// tests go here; this will not be compiled when this package is used as an extension.
import Vector2 = LinearAlgebra.Vector2;
import Vector3 = LinearAlgebra.Vector3;
import VectorN = LinearAlgebra.VectorN;
import Mat2x2 = LinearAlgebra.Mat2x2;
let mat: Mat2x2 = Mat2x2.rotationMatrix(MathImproved.PI);
let vec: Vector2 = new Vector2(3.4, 6.5);
vec = mat.apply(vec);
console.log(vec);