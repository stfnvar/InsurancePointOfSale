import { Component, OnInit } from '@angular/core';
import { TipOsiguranja } from '../shared/TipOsiguranja';
import { OsiguravajucaKuca } from '../shared/OsiguravajucaKuca';
import { TipOsiguranjaService } from '../services/tip-osiguranja.service';

@Component({
  selector: 'app-tipovi-osiguranja',
  templateUrl: './tipovi-osiguranja.component.html',
  styleUrls: ['./tipovi-osiguranja.component.scss']
})
export class TipoviOsiguranjaComponent implements OnInit {

  tipoviOsiguranja: TipOsiguranja[];  

  constructor(private tipOsiguranjaService: TipOsiguranjaService) {
    this.getTipoviOsiguranja();
  }

  ngOnInit() {
  }

  getTipoviOsiguranja(){
    this.tipOsiguranjaService.getAllTypesOfInsurance()
      .then(tipoviOsiguranja => this.tipoviOsiguranja = tipoviOsiguranja);
  }

}
