
import { TipOsiguranja } from "./TipOsiguranja";
import { KontrolniAtribut } from "./KontrolniAtribut";
import { TipAtributa } from "./TipAtributa";

export class KontekstAtributa{
    id: number;
    naziv: string;
    visestrukoDodavanje: boolean;
    redniBrojForme: number;
    predstavljaGrupu: boolean;
    tipoviAtributa: TipAtributa[];
    kontrolniAtributi: KontrolniAtribut[];
    tipoviOsiguranja: TipOsiguranja[];
};