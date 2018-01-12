import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OsiguravajucaKuca } from '../shared/OsiguravajucaKuca';

@Injectable()
export class OsiguracajucaKucaService {

  constructor(private http: Http) { }

  getOsiguravajucaKuca(): Promise<OsiguravajucaKuca>{
    return this.http.get('/api/osiguravajuceKuce')
      .toPromise()
      .then(response => response.json() as OsiguravajucaKuca)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }

}
