import {Datum} from "./Datum.interface";

export class XYSetter {
    static get instance(): XYSetter {
        return this._instance ? this._instance : this._instance = new XYSetter();
    }

    private static _instance: XYSetter;

    x1: number;
    x2: number;
    y1: number;
    y2: number;

    getXY(x1 = this.x1, x2 = this.x2, y1 = this.y1, y2 = this.y2) {
        return {x1, x2, y1, y2};
    }

    // set(x1 = this.x1, x2 = this.x2, y1 = this.y1, y2 = this.y2) {
    //     simulation.force<any>("x").x((d: Datum) => d.type === 'red' ? x1 : x2);
    //     simulation.force<any>("y").y((d: Datum) => d.type === 'red' ? y1 : y2);
    //     simulation.alpha(0.5).restart();
    // }
}
