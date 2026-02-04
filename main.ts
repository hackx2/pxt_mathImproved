
// REMINDER: GET THE ICONS FROM FONTAWESOME (WHATEVER ITS CALLED)

// TODO more documentation
namespace MathImproved {
    // courtesy of thomas
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
     *  range(0, 10); // returns: 0,1,2,3,4,5,6,7,8,9,10
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

    //% block="2D dot product (%ax,%ay) - (%bx,%by)"
    //% weight=75
    //% group="Vector2"
    export function dotProduct(
        ax: number,
        ay: number,
        bx: number,
        by: number
    ): number {
        return ax * bx + ay * by;
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

    //% block="fast sin of %n radians"
    //% weight=60
    //% group="Approx"
    export function fastSin(n: number): number {
        n *= (1 / Math.PI);

        if (n > 1) {
            n -= (Math.ceil(n) >> 1) << 1;
        } else if (n < -1) {
            n += (Math.ceil(-n) >> 1) << 1;
        }

        return (n > 0) ?
            n * (3.1 + n * (0.5 + n * (-7.2 + n * 3.6)))
            :
            n * (3.1 - n * (0.5 + n * (7.2 + n * 3.6)));

    }

    //% block="fast cos of %n radians"
    //% weight=59
    //% group="Approx"
    export function fastCos(n: number): number {
        return fastSin(n + 1.570796327);
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
    export const SQUARE_ROOT_OF_TWO: number = 1.41421356237;

    //% block="EPSILON"
    //% group="Constants"
    export const EPSILON: number = 1e-6; //0.0000001;

    // eh...

    //% block="positive infinity"
    //% group="Constants"
    export const POSITIVE_INFINITY: number = Infinity;

    //% block="negative infinity"
    //% group="Constants"
    export const NEGATIVE_INFINITY: number = -Infinity;
}