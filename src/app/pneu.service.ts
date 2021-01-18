import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pneu } from './montagem/pneu';

@Injectable({
  providedIn: 'root'
})
export class PneuService {

  constructor(private http: HttpClient) { }

  //apiUrl: string = environment.apiUrl + '/api/pneu';

  getPneus(): Observable<Pneu[]>{
    return this.http.get<Pneu[]>('http://localhost:8080/api/pneu');
  }
}
