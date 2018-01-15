import { VrednostAtributaOsiguranja } from './../shared/VrednostAtributaOsiguranja';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { OsiguranjeService } from '../services/osiguranje.service';

import { TipAtributa } from '../shared/TipAtributa';
import { TipOsiguranja } from '../shared/TipOsiguranja';
import { PredefinisanaVrednost } from '../shared/PredefinisanaVrednost';
import { KontekstAtributa } from '../shared/KontekstAtributa';
import { Osiguranje } from '../shared/Osiguranje';
import { FormGroup } from '@angular/forms';
import { KontrolniAtribut } from '../shared/KontrolniAtribut';

@Component({
  selector: 'app-osiguranje-modal',
  templateUrl: './osiguranje.component.html',
  styleUrls: ['./osiguranje.component.scss']
})
export class OsiguranjeComponent implements OnInit {

  @Input('childData') public tipOsiguranja: TipOsiguranja;

  public modalRef: BsModalRef;

  choosenItem: string = '';
  redniBrojKonteksta: number = 1;
  konteksti: Map<number, KontekstAtributa>;
  tipoviAtributa: Map<number, TipAtributa[]>; //KEY: redniBrojKonteksta, VALUE: TipAtributa[] (kontekstu sa ID pripadaju atributi)
  predefinisaneVrednosti: Map<number, PredefinisanaVrednost[]>; //KEY: tipAtributaId, VALUE: PredefinisanaVrednost[]
  kontrolniAtributi: Map<number, KontrolniAtribut>;
  ponavljajuciAtributi: Array<number>;
  osiguranje: Osiguranje;
  
  vrednostiAtributa: Map<number,VrednostAtributaOsiguranja[]>; //KEY: tipAtributaId, VALUE: VrednostAtributa

  constructor(private osiguranjeService: OsiguranjeService, private modalService: BsModalService) {
      this.tipoviAtributa = new Map();
      this.predefinisaneVrednosti = new Map();
      this.vrednostiAtributa = new Map();
      this.konteksti = new Map();
      this.kontrolniAtributi = new Map();
      this.ponavljajuciAtributi = new Array();
      this.osiguranje = new Osiguranje();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.getKontekstiZaTipOsiguranja(this.tipOsiguranja.id);
  }

  getKontekstiZaTipOsiguranja(tipOsiguranjaId: number){
    this.osiguranjeService.getKontekstiAtributaZaTipOsiguranja(tipOsiguranjaId)
      .then(response => {
          var index: number = 0, kontekst: KontekstAtributa;
          for(index = 0; index < response.length; index++){
            kontekst = response[index];
            this.konteksti.set(kontekst.redniBrojForme,kontekst);
            this.getTipoviAtributaZaKontekst(kontekst.id, kontekst.redniBrojForme);
            if(kontekst.visestrukoDodavanje){
              this.getKontrolniAtributZaKontekst(kontekst.id);
            }
          }
      });
  }

  getKontrolniAtributZaKontekst(kontekstId: number){
    this.osiguranjeService.getKontrolniAtributZaKontekst(kontekstId)
      .then(response => {
        this.kontrolniAtributi.set(response.kontekstAtributa.id,response);
      });
  }

  getTipoviAtributaZaKontekst(kontekstaAtributaId: number, redniBrojForme: number){
    this.osiguranjeService.getTipoviAtributaZaKontekstAtributa(kontekstaAtributaId)
      .then(atributi => {
            var index: number = 0;
            this.tipoviAtributa.set(redniBrojForme, atributi);
            for(index = 0; index < atributi.length; index++){
              if(!atributi[index].slobodnoPolje){
                this.getPredefinisaneVrednosti(atributi[index]);
              }else{
                this.initializeVrednostAtributa(atributi[index], '');
              }
            }
      });
  }

  getPredefinisaneVrednosti(tipAtributa: TipAtributa) {
    this.osiguranjeService.getPredefinisaneVrednostiZaTipAtributa(tipAtributa.id)
      .then(response => {
                          this.predefinisaneVrednosti.set(tipAtributa.id, response)
                          this.initializeVrednostAtributa(tipAtributa, response[0].konkretnaVrednost);
                        });
  }

  initializeVrednostAtributa(tipAtributa: TipAtributa, vrednost: string) {

    var vrednosti: VrednostAtributaOsiguranja[] = new Array();

    if(!tipAtributa.kontekst.visestrukoDodavanje){
      var vrednostAtributa: VrednostAtributaOsiguranja = new VrednostAtributaOsiguranja(vrednost,tipAtributa);
      vrednosti.push(vrednostAtributa);
    }
    this.vrednostiAtributa.set(tipAtributa.id,vrednosti);
  }

  incrementKontekstNumber(){
    if(this.tipOsiguranja.brojFormi == this.redniBrojKonteksta){
      return;
    }
    this.redniBrojKonteksta++;
    let kontekst = this.konteksti.get(this.redniBrojKonteksta);
    if(kontekst.visestrukoDodavanje){
      this.ponavljajuciAtributi.splice(0,this.ponavljajuciAtributi.length);
      let kontrolniAtribut: KontrolniAtribut = this.kontrolniAtributi.get(kontekst.id);
      let brojac: number = Number.parseInt(this.vrednostiAtributa.get(kontrolniAtribut.tipAtributa.id)[0].vrednost);
      let tipoviAtributa: TipAtributa[] = this.tipoviAtributa.get(this.redniBrojKonteksta);
      for(let i = 0; i < tipoviAtributa.length;i++){
        this.vrednostiAtributa.get(tipoviAtributa[i].id).splice(0,this.vrednostiAtributa.get(tipoviAtributa[i].id).length);
      }
      for(let index = 0; index < brojac;index++){
        this.ponavljajuciAtributi.push(1);
        for(let i = 0; i < tipoviAtributa.length;i++){
          this.vrednostiAtributa.get(tipoviAtributa[i].id).push(new VrednostAtributaOsiguranja('',tipoviAtributa[i]));
        }
      }
    }
  }

  decrementKontekstNumber(){
    if(this.redniBrojKonteksta == 1){
      return;
    }
    this.redniBrojKonteksta--;
  }

  poruci(){
    this.vrednostiAtributa.forEach((value, key) => {
      this.osiguranje.vrednostiAtributaOsiguranja = this.osiguranje.vrednostiAtributaOsiguranja.concat(value);
    });
    this.osiguranjeService.postOsiguranje(this.osiguranje,this.tipOsiguranja.id);
    this.modalRef.hide();
    this.osiguranje.vrednostiAtributaOsiguranja = new Array();
  }

  enteredValue($event,tipAtributa: TipAtributa,index: number){
    this.vrednostiAtributa.get(tipAtributa.id)[index].vrednost = $event.target.value;
  }

  removeSelection(tipAtributaId){
    var atributi: TipAtributa[] = this.tipoviAtributa.get(this.redniBrojKonteksta);
    for(var index in atributi){
      this.vrednostiAtributa.get(atributi[index].id)[0].vrednost = this.predefinisaneVrednosti.get(atributi[index].id)[0].konkretnaVrednost;
    }
  }

}