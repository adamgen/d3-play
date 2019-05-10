import * as d3 from 'd3';
import {svg} from "./utils/svg";
import {setNewX} from "./utils/setNewCords";

var listenToMove = false;
svg.on('mousedown', function () {
    listenToMove = !listenToMove;
});
svg.on('mousemove', function () {
    if (!listenToMove) {
        return;
    }
    var coords = d3.mouse(this);
    console.log(coords);
    var newX1 = coords[0];
    var newY1 = coords[1];
    var newX2 = -newX1;
    var newY2 = -newY1;
    setNewX(newX1, newX2, newY1, newY2);
});
