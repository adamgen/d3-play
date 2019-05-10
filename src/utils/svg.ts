import * as d3 from "d3";

const width = 900;
const height = 600;

export const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("style", 'border: 1px solid')
    .attr("viewBox", `${-width / 2} ${-height / 2} ${width} ${height}`);
