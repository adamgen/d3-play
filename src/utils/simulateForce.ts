
import {simulation} from "./simulation";
import {Datum} from "./Datum.interface";

export function simulateForce(x1: number, x2: number, y1: number, y2: number) {
    simulation.force<any>("x").x((d: Datum) => d.type === 'red' ? x1 : x2);
    simulation.force<any>("y").y((d: Datum) => d.type === 'red' ? y1 : y2);
    simulation.alpha(0.5).restart();
}
