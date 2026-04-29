
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
    //% group="Constants"
    export const MIN_VALUE_number: number = 5e-324;


    //% block="MAX number value"
    //% group="Constants"
    export const MAX_VALUE_number: number = 1.79e308;

    /**
     * Maximum integer value.
     */
    //% block="MAX int value"
    //% group="Constants"
    export const MAX_VALUE_INT: number = 0x7fffffff;

    /**
     * Minimum integer value.
     */
    //% block="MIN int value"
    //% group="Constants"
    export const MIN_VALUE_INT: number = -MAX_VALUE_INT;


    /**
     * Square Root of Two.
     */
    //% block="sqrt of 2"
    //% group="Constants"
    export const ROOT_TWO: number = 1.41421356237;

    /**
     * Pretty small number.
     */
    //% block="EPSILON"
    //% group="Constants"
    export const EPSILON: number = 1e-6; //0.0000001;

    /**
     * This represents the ratio of the circumference of a circle to its diameter, 
     * expressed as a constant. 
     * 
     * `PI` (π) is approximately `3.14159265358979323...` 
     */
    //% block="PI"
    //% group="Constants"
    export const PI: number = 3.141592653589793; // 16 digits
    
    /**
     * Tau aka 2*pi
     */
    //% block="TAU"
    //% group="Constants"
    export const TAU: number = 2*PI; // hope this works

    /**
         * e aka euler's number
         */
    //% block="e"
    //% group="Constants"
    export const E: number = 2.7182818284590452353602874713527; // hope this works

    /**
     * Rad to deg conversion, just multiply
     */
    //% block="Rad to Deg"
    //% group="Constants"
    export const RADTODEG: number = 180/PI;

    /**
     * Deg to Rad conversion, just multiply
     */
    //% block="Deg to Rad"
    //% group="Constants"
    export const DEGTORAD: number = PI/180;

    

    // eh...

    //% block="positive infinity"
    //% group="Constants"
    export const POSITIVE_INFINITY: number = Infinity;

    //% block="negative infinity"
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

        public apply(vec: Vector2) {
            return new Vector2(this.ix * vec.x + this.jx * vec.y, this.iy * vec.x + this.jy * vec.y);
        }

        public toString() {
            return `[${this.ix}, ${this.jx}
${this.iy}, ${this.jy}]`;
        }

        public static rotationMatrix(θ: number) { // in radians
            return new Mat2x2(Math.cos(θ), -Math.sin(θ), Math.sin(θ), Math.cos(θ));
        }
    }
}