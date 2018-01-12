import { TipAtributa } from "./TipAtributa";
import { Osiguranje } from "./Osiguranje";

export class VrednostAtributaOsiguranja{
    id: number;
    vrednost: string;
    grupacioniBroj: number;
    tipAtributa: TipAtributa;
    osiguranje: Osiguranje;

    constructor(vrednost: string,tipAtributa: TipAtributa){
        this.vrednost = vrednost;
        this.tipAtributa = tipAtributa;
    }
};