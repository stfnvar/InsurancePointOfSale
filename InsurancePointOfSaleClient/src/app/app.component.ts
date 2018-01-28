import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { OsiguravajucaKuca } from './shared/OsiguravajucaKuca';
import { OsiguracajucaKucaService } from './services/osiguracajuca-kuca.service';

import { User } from './shared/user';
import { KeycloakService } from './services/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  osiguravajucaKuca: OsiguravajucaKuca;
  profile: User;

  constructor(private osiguravajucaKuceService: OsiguracajucaKucaService, private keycloakService: KeycloakService) {
    this.getTipoviOsiguranja();
  }

  ngOnInit() {
    this.profile = this.keycloakService.getUser();
  }

  getTipoviOsiguranja(){
    this.osiguravajucaKuceService.getOsiguravajucaKuca()
      .then(osiguravajucaKuca => this.osiguravajucaKuca = osiguravajucaKuca);
  }

  public isAdmin(): boolean {
    return this.keycloakService.hasRole('Prodavac');
  }

  public logout() {
    this.keycloakService.logout();
  }
  
  	public getUsername(): string {
		return this.keycloakService.getUser().username;
	}
}
