import {nodes} from "./nodes.const";
import * as d3 from "d3";
import {tick} from "./tick";
import {simulation} from "./simulation";
import {setNewX} from "./setNewCords";

const addNode = () => {
    const i = nodes.length;
    const node = {
        type: i & 1 ? "red" : "black",
        index: i
    };
    d3.forceSimulation([node])
        .force('charge', d3.forceManyBody().strength(-10))
        .force('collision', d3.forceCollide().radius(0))
        .alphaDecay(0)
        .force("x", d3.forceX().strength(0.05))
        .force("y", d3.forceY().strength(0.05))
        .on('tick', tick)
        .stop();
    simulation.nodes();
    nodes.push(node);

    setNewX();
};


const intervalsId: any[] = [];
const intervalAddNodes = (intervals = 1) => {
    for (let i = 0; i < intervals; i++) {
        intervalsId.push(setInterval(() => {
            addNode();
        }, 500));
    }
};
const intervalRemoveNodes = (intervals = 1) => {
    for (let i = 0; i < intervals; i++) {
        intervalsId.push(setInterval(() => {
            nodes.pop();
        }, 500));
    }
};
const clearIntervals = () => {
    intervalsId.forEach((intervalId) => {
        clearInterval(intervalId);
    });
};

(window as any).addNode = addNode;
(window as any).intervalAddNodes = intervalAddNodes;
(window as any).clearIntervals = clearIntervals;
(window as any).intervalRemoveNodes = intervalRemoveNodes;
