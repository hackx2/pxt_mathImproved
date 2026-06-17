// tests go here; this will not be compiled when this package is used as an extension.
import Vector2 = LinearAlgebra.Vector2;
import Vector3 = LinearAlgebra.Vector3;
import VectorN = LinearAlgebra.VectorN;
import Mat2x2 = LinearAlgebra.Mat2x2;
import Mat3x3 = LinearAlgebra.Mat3x3;
import MatNxM = LinearAlgebra.MatNxM;

const a = new Mat3x3(1, 2, 3, 2, 6, 1, 5, 2, 5); 
const b = new Mat3x3(9, 8, 7, 6, 5, 4, 3, 2, 1); 
const result = a.multiply(a.inverse());
console.log(result)