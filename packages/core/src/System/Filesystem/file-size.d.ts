/**
 * @link https://npm.io/package/file-size
 */
declare module 'file-size' {

    export interface Options {
        /** Number of positions after the decimal to show, default is 2 */
        fixed?: number | undefined;
        /** Space between the number and the unit, default is a space*/
        spacer?: string | undefined;
    }

    export type Spec = "si" | "iec" | "jedec";

    export type Unit = "B" | "KB" | "MB" | "GB" | "TB" | "PB" | "EB" | "ZB" | "YB";

    export interface Bits {
        result: number;
        fixed: string;
    }

    export interface Calculated {
        suffix: string;
        magnitude: number;
        result: number;
        fixed: string;
        bits: Bits;
    }

    export interface Result {
        human(spec?: Spec): string;
        to(unit: Unit, spec?: Spec): string;
        calculate(spec?: Spec): Calculated;
    }

    export default function fileSize<T extends Options>(bytes: number, options?: T): Required<T> & Result;

}
