import { Chasi } from './montagem/chasi';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChasiService {

  constructor(private http: HttpClient) { }

 // apiUrl: string = environment.apiUrl + '/api/chasi';

  getChasis(): Observable<Chasi[]>{
    return this.http.get<Chasi[]>('http://localhost:8080/api/chasi');
  }
}
