import {svg} from "./svg";
import {nodes} from "./nodes.const";
import {Datum} from "./Datum.interface";
import * as d3 from "d3";
import {setNewX} from "./setNewCords";

export function tick() {

    const u = svg
        .selectAll('circle')
        .data(nodes);

    u.enter()
        .append('circle')
        .attr('r', 1)
        .on('click', function (d: Datum) {
            d3.event.stopPropagation();
            d.type = d.type === 'red' ? 'black' : 'red';
            setNewX();
        });

    u
        .attr('cx', (d: Datum) => d.x || 0)
        .attr('cy', (d: Datum) => d.y || 0)
        .attr("fill", (d: Datum) => d.type);

    u.attr('r', function (d: Datum) {
        const oldR = parseFloat(d3.select(this).attr('r'));
        return oldR > 10 ? oldR : oldR + 0.1;
    });

    u.exit().remove();

    setNewX();

}
