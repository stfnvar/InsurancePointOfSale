import { OsiguravajucaKuca } from "./OsiguravajucaKuca";
import { StavkaCenovnika } from "./StavkaCenovnika";

export class Cenovnik{
    id: number;
    datumOd: string;
    datumDo: string;
    osiguravajucaKuca: OsiguravajucaKuca;
    stavkaCenovnika: StavkaCenovnika;
};