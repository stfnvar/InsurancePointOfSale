import { StavkaCenovnika } from "./StavkaCenovnika";
import { TipAtributa } from "./TipAtributa";

export class PredefinisanaVrednost{
    id: number;
    konkretnaVrednost: string;
    tipAtributa: TipAtributa;
    stavkeCenovnika: StavkaCenovnika[];
};