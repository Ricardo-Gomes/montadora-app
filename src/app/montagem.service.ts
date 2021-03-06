import { MontagemVeiculo } from './montagem/montagem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MontagemService {

  constructor(private http : HttpClient) { }

 // apiUrl : string = environment.apiUrl + '/api/montagem';

  realizarMontagem(montagemVeiculo: MontagemVeiculo): Observable<MontagemVeiculo> {
    return this.http.post<MontagemVeiculo>('http://localhost:8080/api/montagem', montagemVeiculo);
  }

  getVeiculo(): Observable<MontagemVeiculo[]>{
    return this.http.get<MontagemVeiculo[]>('http://localhost:8080/api/montagem');
  }
}
