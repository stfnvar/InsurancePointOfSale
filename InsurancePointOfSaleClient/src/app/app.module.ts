import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { TipoviOsiguranjaComponent } from './tipovi-osiguranja/tipovi-osiguranja.component';
import { OsiguracajucaKucaService } from './services/osiguracajuca-kuca.service';
import { OsiguranjeService } from './services/osiguranje.service';
import { TipOsiguranjaService } from './services/tip-osiguranja.service';
import { OsiguranjeComponent } from './osiguranje/osiguranje.component';


@NgModule({
  declarations: [
    AppComponent,
    TipoviOsiguranjaComponent,
    OsiguranjeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    OsiguracajucaKucaService,
    OsiguranjeService,
    TipOsiguranjaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
