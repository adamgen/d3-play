import {SimulationNodeDatum} from "d3-force";
import * as _ from "lodash";
import * as d3 from "d3";

export const nodes: SimulationNodeDatum[] = _.map<number, SimulationNodeDatum>(d3.range(300), (i: number) => ({
    type: i & 1 ? "red" : "black",
    index: i
}));

(window as any).nodes = nodes;
