import { TipOsiguranja } from "./TipOsiguranja";
import { VrednostAtributaOsiguranja } from "./VrednostAtributaOsiguranja";
import { Klijent } from "./Klijent";

export class Osiguranje{
    id: number;
    datumSklapanja: string;
    tipOsiguranja: TipOsiguranja;
    klijent: Klijent;
    vrednostiAtributaOsiguranja: VrednostAtributaOsiguranja[];

    public constructor(){
        this.vrednostiAtributaOsiguranja = new Array();
    }
};