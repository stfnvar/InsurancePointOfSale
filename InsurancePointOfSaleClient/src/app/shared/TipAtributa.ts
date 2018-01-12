import { DomenAtributa } from "./DomenAtributa";
import { KontekstAtributa } from "./KontekstAtributa";
import { PredefinisanaVrednost } from "./PredefinisanaVrednost";
import { TipOsiguranja } from "./TipOsiguranja";
import { VrednostAtributaOsiguranja } from "./VrednostAtributaOsiguranja";
import { KontrolniAtribut } from "./KontrolniAtribut";

export class TipAtributa{
    id: number;
    naziv: string;
    domen: DomenAtributa;
    obavezan: boolean;
    uticeNaCenu: boolean;
    slobodnoPolje: boolean;
    regex: string;
	minimalnaDuzina: number;
	maksimalnaDuzina: number;
    kontekst: KontekstAtributa;
    kontrolniAtributi: KontrolniAtribut[];
    predefinisaneVrednosti: PredefinisanaVrednost[];
    vrednostiAtributa: VrednostAtributaOsiguranja[];
    tipoviOsiguranja: TipOsiguranja[];
};