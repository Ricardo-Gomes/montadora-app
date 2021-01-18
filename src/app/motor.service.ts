import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Motor } from './montagem/motor';

@Injectable({
  providedIn: 'root'
})
export class MotorService {

  
  
  constructor(private http: HttpClient) { }

  //apiUrl: string = environment.apiUrl + '/api/motor';

  getMotores(): Observable<Motor[]>{
    return this.http.get<Motor[]>('http://localhost:8080/api/motor');
  }
}
