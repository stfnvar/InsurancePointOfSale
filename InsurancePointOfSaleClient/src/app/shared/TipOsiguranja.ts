import { TipAtributa } from './TipAtributa';
import { OsiguravajucaKuca } from "./OsiguravajucaKuca";
import { Osiguranje } from "./Osiguranje";

export class TipOsiguranja{
    id: number;
    naziv: string;
    brojFormi: number;
    osiguravajucaKuca: OsiguravajucaKuca;
    osiguranja: Osiguranje[];
    tipoviAtributa: TipAtributa[];
};