import {simulateForce} from "./simulateForce";

let _x1: number;
let _x2: number;
let _y1: number;
let _y2: number;

export function setNewX(x1?: number, x2?: number, y1?: number, y2?: number) {
    if (!x1 && !_x1) {
        return;
    }
    if (x1) {
        _x1 = x1;
    } else {
        x1 = _x1;
    }
    if (x2) {
        _x2 = x2;
    } else {
        x2 = _x2;
    }

    if (y1) {
        _y1 = y1;
    } else {
        y1 = _y1;
    }
    if (y2) {
        _y2 = y2;
    } else {
        y2 = _y2;
    }
    simulateForce(x1, x2, y1, y2);
}
