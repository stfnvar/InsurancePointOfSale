import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { OsiguravajucaKuca } from './shared/OsiguravajucaKuca';
import { OsiguracajucaKucaService } from './services/osiguracajuca-kuca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  osiguravajucaKuca: OsiguravajucaKuca;

  constructor(private osiguravajucaKuceService: OsiguracajucaKucaService) {
    this.getTipoviOsiguranja();
  }

  ngOnInit() {
  }

  getTipoviOsiguranja(){
    this.osiguravajucaKuceService.getOsiguravajucaKuca()
      .then(osiguravajucaKuca => this.osiguravajucaKuca = osiguravajucaKuca);
  }

}
