import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' 
import { PaisesResponse } from '../interfaces/paisResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set('fields','name,capital,population,flags,alpha2Code' )
  }

  constructor(
    private http: HttpClient
  ) { }

  getPorPais(term: string):Observable<PaisesResponse[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<PaisesResponse[]>(url, {params: this.httpParams});
  }

  getPorCapital(term: string):Observable<PaisesResponse[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<PaisesResponse[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha(id: string):Observable<PaisesResponse[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<PaisesResponse[]>(url);
  }

  getPaisPorRegion(id: string):Observable<PaisesResponse[]> {
    const url = `${this.apiUrl}/region/${id}`;
    return this.http.get<PaisesResponse[]>(url, {params: this.httpParams});
  }
}
