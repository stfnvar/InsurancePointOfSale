import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { TipOsiguranja } from '../shared/TipOsiguranja';

@Injectable()
export class TipOsiguranjaService {

  constructor(private http: Http) { }

  getAllTypesOfInsurance(): Promise<TipOsiguranja[]>{
    return this.http.get("/api/tipoviOsiguranja")
    .toPromise()
    .then(response => response.json() as TipOsiguranja[])
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }

}
