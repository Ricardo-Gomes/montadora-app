import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cor } from './montagem/cor';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorService {

  
  constructor(private http: HttpClient) { }

  //apiUrl: string = environment.apiUrl + '/api/cor';

  getCores(): Observable<Cor[]>{
    return this.http.get<Cor[]>('http://localhost:8080/api/cor');
  }
}
