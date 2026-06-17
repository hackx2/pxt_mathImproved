
// REMINDER: GET THE ICONS FROM FONTAWESOME (WHATEVER ITS CALLED)

// TODO more documentation
// TODO the rest of maths
// TODO do the blocks for LinearAlgebra

//% advanced = true
namespace MathImproved {
    export function derivative(func: (x: number) => number, dx: number = .00001): (x: number) => number {
        return (x: number) => { return (func(x + dx) - func(x)) / dx }
    }

    export function newtonIteration(func: (x: number) => number, guess: number): number {
        return guess - func(guess) / derivative(func)(guess);
    }

    /**
     * Returns an range of numbers between a min & max.
     *  ```ts
     *  // example
     *  range(0, 10); // returns: 0,1,2,3,4,5,6,7,8,9
     *  ```
     * @param max `Infinity`
     * @param min `0`
     * @return an array of numbers (number[])
     */
    //% block="range from %min to %max"
    //% weight=100
    //% group="Utils"
    export function range(max: number, min: number = 0): number[] {
        const result: number[] = [];
        for (let i = min; i < max; i++) {
            result.push(i);
        }
        return result;
    }

    //% block="is %f finite"
    //% weight=90
    //% group="Utils"
    export function isFinite(f: number): boolean {
        return !(f === POSITIVE_INFINITY || f === NEGATIVE_INFINITY || isNaN(f));
    }

    //% block="wrap %value from %min to %max"
    //% weight=85
    //% group="Utils"
    export function wrap(Value: number, Min: number, Max: number): number {
        const _range: number = Max - Min + 1;
        if (Value < Min) Value += _range * (((Min - Value) / _range + 1) | 0);
        return Min + ((Value - Min) % _range);
    }

    //% block="remap %value from [%start1 - %stop1] to [%start2 - %stop2]"
    //% weight=80
    //% group="Utils"
    export function remapToRange(
        value: number,
        start1: number,
        stop1: number,
        start2: number,
        stop2: number
    ): number {
        return start2 + (value - start1) * ((stop2 - start2) / (stop1 - start1));
    }

    //% block="decimal places in %n"
    //% weight=70
    //% group="Utils"
    export function getDecimals(n: number = 0): number {
        let parts = n.toString().split(".");
        return parts.length > 1 ? parts[1].length : 0;
    }

    //% block="approximately equal %aValueA ≈ %aValueB with tolerance %aDiff"
    //% weight=65
    //% group="Utils"
    export function equal(a: number, b: number, d: number = EPSILON): boolean {
        return Math.abs(a - b) <= d;
    }

    //% block="sinh of %n"
    //% weight=55
    //% group="Trig"
    export function sinh(n: number): number {
        return (Math.exp(n) - Math.exp(-n)) / 2;
    }

    //% block="max int of %a and %b"
    //% weight=50
    //% group="Int"
    export function maxInt(a: number, b: number): number {
        return a > b ? a : b;
    }

    //% block="min int of %a and %b"
    //% weight=45
    //% group="Int"
    export function minInt(a: number, b: number): number {
        return a < b ? a : b;
    }

    //% block="absolute int of %n"
    //% weight=40
    //% group="Int"
    export function absInt(n: number): number {
        return n >= 0 ? n : -n;
    }

    //% block="sign of %n"
    //% weight=39
    //% group="Int"
    export function signOf(n: number): number {
        return (n < 0 ? -1 : 1) | 0;
    }

    //% block="same sign: %a and %b"
    //% weight=38
    //% group="Int"
    export function sameSign(a: number, b: number): boolean {
        return signOf(a) == signOf(b);
    }

    /**
     * Moves a point from A to B using the ratio.
     * This can be used for moving sprites / objects.
     * ```ts
     * // Example:
     * game.onUpdate(function () {
     *  cur_x = Math.lerp(cur_x, 100, 0.1);
     * });
     * ```
     * @param a inital
     * @param b final
     * @param ratio
     * @returns number
     */
    //% block="lerp from %a to %b by %ratio"
    //% weight=35
    //% group="Utils"
    export function lerp(a: number, b: number, ratio: number): number {
        return a + ratio * (b - a);
    }

    //% block="bound %value between %min and %max"
    //% weight=30
    //% group="Utils"
    export function bound(Value: number, Min?: number, Max?: number): number {
        const _lBound: number = Min != null && Value < Min ? Min : Value;
        return Max != null && _lBound > Max ? Max : _lBound;
    }

    /**
     * adds up all of the values of the function between the min and max
     * inclusive min and max
     */
    //% block="sum %function between %min and %max"
    //% weight=25
    //% group="Utils"
    export function sigma(func: (x: number) => number, min: number, max: number): number {
        let acc: number = 0;
        for(let i = min; i <= max; i++) {
            acc += func(i);
        }
        return acc;
    }

    /**
     * multiplies up all of the values of the function between the min and max
     * inclusive min and max
     */
    //% block="product of %function between %min and %max"
    //% weight=25
    //% group="Utils"
    export function product(func: (x: number) => number, min: number, max: number): number {
        let acc: number = 1;
        for (let i = min; i <= max; i++) {
            acc *= func(i);
        }
        return acc;
    }

    // CONSTANTS

    //% block="MIN number value"
    //% weight=25
    //% group="Constants"
    export const MIN_VALUE_number: number = 5e-324;


    //% block="MAX number value"
    //% weight=25
    //% group="Constants"
    export const MAX_VALUE_number: number = 1.79e308;

    /**
     * Maximum integer value.
     */
    //% block="MAX int value"
    //% weight=25
    //% group="Constants"
    export const MAX_VALUE_INT: number = 0x7fffffff;

    /**
     * Minimum integer value.
     */
    //% block="MIN int value"
    //% weight=25
    //% group="Constants"
    export const MIN_VALUE_INT: number = -MAX_VALUE_INT;


    /**
     * Square Root of Two.
     */
    //% block="sqrt of 2"
    //% weight=25
    //% group="Constants"
    export const ROOT_TWO: number = 1.41421356237;

    /**
     * Pretty small number.
     */
    //% block="EPSILON"
    //% weight=25
    //% group="Constants"
    export const EPSILON: number = 1e-6; //0.0000001;

    /**
     * This represents the ratio of the circumference of a circle to its diameter, 
     * expressed as a constant. 
     * 
     * `PI` (π) is approximately `3.14159265358979323...` 
     */
    //% block="PI"
    //% weight=25
    //% group="Constants"
    export const PI: number = 3.141592653589793; // 16 digits
    
    /**
     * Tau aka 2*pi
     */
    //% block="TAU"
    //% weight=25
    //% group="Constants"
    export const TAU: number = 2*PI; // hope this works

    /**
         * e aka euler's number
         */
    //% block="e"
    //% weight=25
    //% group="Constants"
    export const E: number = 2.7182818284590452353602874713527; // hope this works

    /**
     * Rad to deg conversion, just multiply
     */
    //% block="Rad to Deg"
    //% weight=25
    //% group="Constants"
    export const RADTODEG: number = 180/PI;

    /**
     * Deg to Rad conversion, just multiply
     */
    //% block="Deg to Rad"
    //% weight=25
    //% group="Constants"
    export const DEGTORAD: number = PI/180;

    

    // eh...

    //% block="positive infinity"
    //% weight=25
    //% group="Constants"
    export const POSITIVE_INFINITY: number = Infinity;

    //% block="negative infinity"
    //% weight=25
    //% group="Constants"
    export const NEGATIVE_INFINITY: number = -Infinity;

    
}

//% advanced = true
namespace LinearAlgebra {
    export class Vector2 {
        public x: number;
        public y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public set(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public scale(scalar: number): Vector2 {
            return new Vector2(this.x * scalar, this.y * scalar);
        }

        public magnitude(): number {
            return Math.sqrt(this.x ** 2 + this.y ** 2);
        }

        public normalize(): Vector2 {
            return this.scale(1 / this.magnitude());
        }

        public add(v: Vector2): Vector2 {
            return new Vector2(this.x + v.x, this.y + v.y);
        }

        public cross(v: Vector2): number {
            return this.x * v.y - this.y * v.x;
        }

        public dot(v: Vector2): number {
            return this.x * v.x + this.y * v.y;
        }

        public toList(): number[] {
            return [this.x, this.y];
        }

        public toString(): string {
            return `(${this.x}, ${this.y})`;
        }

        public clone(): Vector2 {
            return new Vector2(this.x, this.y);
        }
    }

    export class Vector3 {
        public x: number;
        public y: number;
        public z: number;

        constructor(x: number, y: number, z: number) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        public set(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public scale(scalar: number): Vector3 {
            return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
        }

        public magnitude(): number {
            return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
        }

        public normalize(): Vector3 {
            return this.scale(1 / this.magnitude());
        }

        public add(v: Vector3): Vector3 {
            return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
        }

        public cross(v: Vector3): Vector3 {
            return new Vector3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
        }

        public dot(v: Vector3): number {
            return this.x * v.x + this.y * v.y + this.z * v.z;
        }

        public toList(): number[] {
            return [this.x, this.y, this.z];
        }

        public toVector2(): Vector2 {
            return new Vector2(this.x, this.y);
        }

        public toString(): string {
            return `(${this.x}, ${this.y}, ${this.z})`;
        }

        public clone(): Vector3 {
            return new Vector3(this.x, this.y, this.z);
        }
    }

    export class VectorN {
        private components: number[];

        constructor(length: number, args: number[] = null) {
            if (length <= 0) { throw "Vector dimension must be greater than zero"; }
            if (length % 1 != 0) { throw "Vector must have integer dimension"; }

            if (args == null || args.length == 0) { // init zero vector
                this.components = [];
                for (let i = 0; i < length; i++) {
                    this.components.push(0);
                }
            } else if (args.length != length) { throw "inputted components are too short"; } else {
                this.components = args;
            }
        }

        public set(index: number, value: number) {
            this.components[index] = value;
        }

        public get(index: number): number {
            return this.components[index];
        }

        public getDim(): number {
            return this.components.length;
        }

        public magnitude(): number {
            return Math.sqrt(this.dot(this)); // black magic: think of it as sqrt(a1*a1 + a2*a2 + ...)
        }

        public normalize(): VectorN {
            return this.scale(1 / this.magnitude());
        }

        public add(v: VectorN): VectorN {
            if (this.components.length != v.components.length) { throw "Dimensions mismatch"; }

            let result: VectorN = new VectorN(this.components.length);
            for (let i = 0; i < this.components.length; i++) {
                result.set(i, this.components[i] + v.components[i]);
            }
            return result;
        }

        public scale(scalar: number): VectorN {
            let result: VectorN = new VectorN(this.components.length);
            for (let i = 0; i < this.components.length; i++) {
                result.set(i, this.components[i] * scalar);
            }
            return result;
        }

        public dot(v: VectorN): number {
            if (this.components.length != v.components.length) { throw "Dimensions mismatch"; }
            return MathImproved.sigma((x: number) => this.components[x] * v.components[x], 0, this.components.length - 1);
        }

        public toList(): number[] {
            return this.components;
        }

        public toString(): string {
            return "(" + this.components.join(", ") + ")";
        }

        public clone(): VectorN {
            let copy = new VectorN(this.components.length);
            for (let i = 0; i < this.components.length; i++) {
                copy.set(i, this.components[i]);
            }
            return copy;
        }
    }

    export class Mat2x2 {
        /*
         * [ix, jx],
         * [iy, jy]
         * 
         * named after the fact that it is joined unit vectors
         */

        private static _identity: Mat2x2;
        public static get identity(): Mat2x2 {
            if (!this._identity) {
                this._identity = new Mat2x2(1, 0, 0, 1);
            }
            return this._identity;
        }

        public ix: number;
        public iy: number;
        public jx: number;
        public jy: number;

        constructor (ix: number, jx: number, iy: number, jy: number) {
            this.ix = ix;
            this.iy = iy;
            this.jx = jx;
            this.jy = jy;
        }

        public set(ix: number, jx: number, iy: number, jy: number) {
            this.ix = ix;
            this.iy = iy;
            this.jx = jx;
            this.jy = jy;
        }

        public scale(scalar: number): Mat2x2 {
            return new Mat2x2(this.ix * scalar, this.jx * scalar, this.iy * scalar, this.jy * scalar);
        }

        public determinant(): number {
            return this.ix * this.jy - this.jx * this.iy;
        }

        public normalize(): Mat2x2 {
            return this.scale(1/this.determinant());
        }

        public add(addend: Mat2x2): Mat2x2 {
            return new Mat2x2(this.ix + addend.ix, this.jx + addend.jx, this.iy + addend.iy, this.jy + addend.jy);
        }

        public multiply(multiplicand: Mat2x2): Mat2x2 {
            return new Mat2x2(this.ix * multiplicand.ix + this.jx * multiplicand.iy, this.ix * multiplicand.jx + this.jx * multiplicand.jy, this.iy * multiplicand.ix + this.jy * multiplicand.iy, this.iy * multiplicand.jx + this.jy * multiplicand.jy);
        }

        public inverse(): Mat2x2 {
            const det = this.determinant();

            if (det === 0) {
                throw "Matrix is not invertible";
            }

            return new Mat2x2(
                this.jy, -this.jx,
                -this.iy, this.ix
            ).scale(1 / det);
        }

        public apply(vec: Vector2) {
            return new Vector2(this.ix * vec.x + this.jx * vec.y, this.iy * vec.x + this.jy * vec.y);
        }

        public toString() {
            return `[${this.ix}, ${this.jx}\n${this.iy}, ${this.jy}]`;
        }

        public static rotationMatrix(θ: number) { // in radians
            return new Mat2x2(Math.cos(θ), -Math.sin(θ), Math.sin(θ), Math.cos(θ));
        }
    }

    export class Mat3x3 {
        /*
         * [ix, jx, kx]
         * [iy, jy, ky]
         * [iz, jz, kz]
         * 
         * named after the fact that it is joined unit vectors
         */

        private static _identity: Mat3x3;
        public static get identity(): Mat3x3 {
            if (!this._identity) {
                this._identity = new Mat3x3(
                    1, 0, 0,
                    0, 1, 0,
                    0, 0, 1
                );
            }
            return this._identity;
        }

        public ix: number; public iy: number; public iz: number;
        public jx: number; public jy: number; public jz: number;
        public kx: number; public ky: number; public kz: number;

        constructor(
            ix: number, jx: number, kx: number,
            iy: number, jy: number, ky: number,
            iz: number, jz: number, kz: number
        ) {
            this.ix = ix; this.iy = iy; this.iz = iz;
            this.jx = jx; this.jy = jy; this.jz = jz;
            this.kx = kx; this.ky = ky; this.kz = kz;
        }

        public set(
            ix: number, jx: number, kx: number,
            iy: number, jy: number, ky: number,
            iz: number, jz: number, kz: number
        ) {
            this.ix = ix; this.iy = iy; this.iz = iz;
            this.jx = jx; this.jy = jy; this.jz = jz;
            this.kx = kx; this.ky = ky; this.kz = kz;
        }

        public scale(scalar: number): Mat3x3 {
            return new Mat3x3(
                this.ix * scalar, this.jx * scalar, this.kx * scalar,
                this.iy * scalar, this.jy * scalar, this.ky * scalar,
                this.iz * scalar, this.jz * scalar, this.kz * scalar
            );
        }

        public determinant(): number {
            return (
                this.ix * (this.jy * this.kz - this.jz * this.ky) -
                this.jx * (this.iy * this.kz - this.iz * this.ky) +
                this.kx * (this.iy * this.jz - this.iz * this.jy)
            );
        }

        public normalize(): Mat3x3 {
            return this.scale(1 / this.determinant());
        }

        public add(addend: Mat3x3): Mat3x3 {
            return new Mat3x3(
                this.ix + addend.ix, this.jx + addend.jx, this.kx + addend.kx,
                this.iy + addend.iy, this.jy + addend.jy, this.ky + addend.ky,
                this.iz + addend.iz, this.jz + addend.jz, this.kz + addend.kz
            );
        }

        public multiply(m: Mat3x3): Mat3x3 {
            return new Mat3x3(
                this.ix * m.ix + this.jx * m.iy + this.kx * m.iz,
                this.ix * m.jx + this.jx * m.jy + this.kx * m.jz,
                this.ix * m.kx + this.jx * m.ky + this.kx * m.kz,

                this.iy * m.ix + this.jy * m.iy + this.ky * m.iz,
                this.iy * m.jx + this.jy * m.jy + this.ky * m.jz,
                this.iy * m.kx + this.jy * m.ky + this.ky * m.kz,

                this.iz * m.ix + this.jz * m.iy + this.kz * m.iz,
                this.iz * m.jx + this.jz * m.jy + this.kz * m.jz,
                this.iz * m.kx + this.jz * m.ky + this.kz * m.kz
            );
        }

        public inverse(): Mat3x3 {
            const det = this.determinant(); // magic

            if (det === 0) {
                throw "Matrix is not invertible";
            }

            const ix = this.ix, jx = this.jx, kx = this.kx;
            const iy = this.iy, jy = this.jy, ky = this.ky;
            const iz = this.iz, jz = this.jz, kz = this.kz;

            const c00 = (jy * kz - jz * ky);
            const c01 = -(iy * kz - iz * ky);
            const c02 = (iy * jz - iz * jy);

            const c10 = -(jx * kz - jz * kx);
            const c11 = (ix * kz - iz * kx);
            const c12 = -(ix * jz - iz * jx);

            const c20 = (jx * ky - jy * kx);
            const c21 = -(ix * ky - iy * kx);
            const c22 = (ix * jy - iy * jx);

            return new Mat3x3(
                c00, c10, c20,
                c01, c11, c21,
                c02, c12, c22
            ).scale(1 / det);
        }

        public apply(vec: Vector3) {
            return new Vector3(
                this.ix * vec.x + this.jx * vec.y + this.kx * vec.z,
                this.iy * vec.x + this.jy * vec.y + this.ky * vec.z,
                this.iz * vec.x + this.jz * vec.y + this.kz * vec.z
            );
        }

        public toString() {
            return `[${this.ix}, ${this.jx}, ${this.kx}\n` +
                ` ${this.iy}, ${this.jy}, ${this.ky}\n` +
                ` ${this.iz}, ${this.jz}, ${this.kz}]`;
        }

        public static rotationX(theta: number): Mat3x3 {
            const c = Math.cos(theta);
            const s = Math.sin(theta);
            return new Mat3x3(
                1, 0, 0,
                0, c, -s,
                0, s, c
            );
        }

        public static rotationY(theta: number): Mat3x3 {
            const c = Math.cos(theta);
            const s = Math.sin(theta);
            return new Mat3x3(
                c, 0, s,
                0, 1, 0,
                -s, 0, c
            );
        }

        public static rotationZ(theta: number): Mat3x3 {
            const c = Math.cos(theta);
            const s = Math.sin(theta);
            return new Mat3x3(
                c, -s, 0,
                s, c, 0,
                0, 0, 1
            );
        }
    }

    export class MatNxM {
        private data: number[][];
        private rows: number;
        private cols: number;

        constructor(rows: number, cols: number, args: number[][] = null) {
            if (rows <= 0 || cols <= 0) { throw "Matrix dimensions must be greater than zero"; }
            if (rows % 1 !== 0 || cols % 1 !== 0) { throw "Matrix dimensions must be integers"; }

            this.rows = rows;
            this.cols = cols;

            if (!args || args.length === 0) {
                // zero matrix
                this.data = [];
                for (let r = 0; r < rows; r++) {
                    const row: number[] = [];
                    for (let c = 0; c < cols; c++) {
                        row.push(0);
                    }
                    this.data.push(row);
                }
            } else {
                if (args.length !== rows) { throw "Row count mismatch"; }
                for (let r = 0; r < rows; r++) {
                    if (args[r].length !== cols) { throw "Column count mismatch"; }
                }

                // deep copy
                this.data = args.map(row => row.slice());
            }
        }

        public get(r: number, c: number): number {
            return this.data[r][c];
        }

        public set(r: number, c: number, value: number) {
            this.data[r][c] = value;
        }

        public getRows(): number {
            return this.rows;
        }

        public getCols(): number {
            return this.cols;
        }

        public getRow(r: number): VectorN {
            return new VectorN(this.cols, this.data[r].slice());
        }

        public getCol(c: number): VectorN {
            const col: number[] = [];
            for (let r = 0; r < this.rows; r++) {
                col.push(this.data[r][c]);
            }
            return new VectorN(this.rows, col);
        }

        public static fromVectors(vectors: VectorN[], asColumns: boolean = true): MatNxM {
            if (vectors.length === 0) { throw "No vectors provided"; }

            const dim = vectors[0].getDim();
            for (let v of vectors) {
                if (v.getDim() !== dim) { throw "Vector dimension mismatch"; }
            }

            if (asColumns) {
                const result = new MatNxM(dim, vectors.length);
                for (let c = 0; c < vectors.length; c++) {
                    for (let r = 0; r < dim; r++) {
                        result.set(r, c, vectors[c].get(r));
                    }
                }
                return result;
            } else {
                const result = new MatNxM(vectors.length, dim);
                for (let r = 0; r < vectors.length; r++) {
                    for (let c = 0; c < dim; c++) {
                        result.set(r, c, vectors[r].get(c));
                    }
                }
                return result;
            }
        }

        public clone(): MatNxM {
            return new MatNxM(this.rows, this.cols, this.data);
        }

        public add(m: MatNxM): MatNxM {
            if (this.rows !== m.rows || this.cols !== m.cols) {
                throw "Matrix dimension mismatch";
            }

            const result = new MatNxM(this.rows, this.cols);

            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.cols; c++) {
                    result.data[r][c] = this.data[r][c] + m.data[r][c];
                }
            }

            return result;
        }

        public scale(scalar: number): MatNxM {
            const result = new MatNxM(this.rows, this.cols);

            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.cols; c++) {
                    result.data[r][c] = this.data[r][c] * scalar;
                }
            }

            return result;
        }

        public multiply(m: MatNxM): MatNxM {
            if (this.cols !== m.rows) {
                throw "Matrix multiplication dimension mismatch";
            }

            const result = new MatNxM(this.rows, m.cols);

            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < m.cols; c++) {
                    let sum = 0;
                    for (let k = 0; k < this.cols; k++) {
                        sum += this.data[r][k] * m.data[k][c];
                    }
                    result.data[r][c] = sum;
                }
            }

            return result;
        }

        public apply(vec: VectorN): VectorN {
            if (this.cols !== vec.getDim()) {
                throw "Matrix-vector dimension mismatch";
            }

            const result = new VectorN(this.rows);

            for (let r = 0; r < this.rows; r++) {
                let sum = 0;
                for (let c = 0; c < this.cols; c++) {
                    sum += this.data[r][c] * vec.get(c);
                }
                result.set(r, sum);
            }

            return result;
        }

        public transpose(): MatNxM {
            const result = new MatNxM(this.cols, this.rows);

            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.cols; c++) {
                    result.data[c][r] = this.data[r][c];
                }
            }

            return result;
        }

        public swapRows(r1: number, r2: number) {
            const temp = this.data[r1];
            this.data[r1] = this.data[r2];
            this.data[r2] = temp;
        }

        public determinant(): number {
            if (this.rows !== this.cols) {
                throw "Determinant only defined for square matrices";
            }

            const mat = this.clone().data;
            let det = 1;
            let sign = 1;

            for (let i = 0; i < this.rows; i++) {
                // find pivot
                let pivot = i;
                while (pivot < this.rows && mat[pivot][i] === 0) {
                    pivot++;
                }

                if (pivot === this.rows) return 0;

                if (pivot !== i) {
                    [mat[i], mat[pivot]] = [mat[pivot], mat[i]];
                    sign *= -1;
                }

                const pivotVal = mat[i][i];
                det *= pivotVal;

                for (let r = i + 1; r < this.rows; r++) {
                    const factor = mat[r][i] / pivotVal;
                    for (let c = i; c < this.cols; c++) {
                        mat[r][c] -= factor * mat[i][c];
                    }
                }
            }

            return det * sign;
        }

        public inverse(): MatNxM { // gauss-jordan alg
            if (this.rows !== this.cols) {
                throw "Inverse only defined for square matrices";
            }

            const n = this.rows;
            const mat = this.clone().data;
            const inv = MatNxM.identity(n).data;

            for (let i = 0; i < n; i++) {
                // find pivot
                let pivot = i;
                while (pivot < n && mat[pivot][i] === 0) {
                    pivot++;
                }

                if (pivot === n) {
                    throw "Matrix is not invertible";
                }

                // swap rows
                [mat[i], mat[pivot]] = [mat[pivot], mat[i]];
                [inv[i], inv[pivot]] = [inv[pivot], inv[i]];

                const pivotVal = mat[i][i];

                // normalize row
                for (let c = 0; c < n; c++) {
                    mat[i][c] /= pivotVal;
                    inv[i][c] /= pivotVal;
                }

                // eliminate others
                for (let r = 0; r < n; r++) {
                    if (r === i) continue;

                    const factor = mat[r][i];
                    for (let c = 0; c < n; c++) {
                        mat[r][c] -= factor * mat[i][c];
                        inv[r][c] -= factor * inv[i][c];
                    }
                }
            }

            return new MatNxM(n, n, inv);
        }

        public toString(): string {
            return this.data.map(row => "[" + row.join(", ") + "]").join("\n");
        }

        public toList(): number[][] {
            return this.data.map(row => row.slice());
        }

        public static identity(size: number): MatNxM {
            const result = new MatNxM(size, size);
            for (let i = 0; i < size; i++) {
                result.data[i][i] = 1;
            }
            return result;
        }
    }
}