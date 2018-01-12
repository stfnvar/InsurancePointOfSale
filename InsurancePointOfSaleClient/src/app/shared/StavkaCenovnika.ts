import { Cenovnik } from "./Cenovnik";
import { PredefinisanaVrednost } from "./PredefinisanaVrednost";

export class StavkaCenovnika{
    id: number;
    suma: number;
    cenovnik: Cenovnik;
    predefinisanaVrednost: PredefinisanaVrednost;
};