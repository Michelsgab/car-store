import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Carstore } from 'src/Carstore';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = 'http://localhost:8080/carstore'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Carstore[]> {
    return this.http.get<Carstore[]>(this.apiUrl);
  }
}
