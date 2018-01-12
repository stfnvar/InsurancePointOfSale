import { Osiguranje } from "./Osiguranje";

export class Klijent{
    id: number;
    ime: string;
    prezime: string;
    jmbg: string;
    brojPasosa: string;
    adresa: string;
    brojTelefona: string;
    email: string;
    osiguranja: Osiguranje[];
};