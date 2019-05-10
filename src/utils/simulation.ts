import * as d3 from "d3";
import {nodes} from "./nodes.const";
import {tick} from "./tick";

export const simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(-10))
    .force('collision', d3.forceCollide().radius(0))
    .alphaDecay(0)
    .force("x", d3.forceX().strength(0.05))
    .force("y", d3.forceY().strength(0.05))
    .on('tick', tick)
    .stop();
