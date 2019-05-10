import {SimulationNodeDatum} from "d3-force";

interface DatumProps {
    type: string;
}

export type Datum = SimulationNodeDatum & SVGElement & DatumProps;
