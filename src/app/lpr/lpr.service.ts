import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface LprModel {
  licen_plates: string;
  lpDate: string;
  lpTime: string;
}
@Injectable({
  providedIn: 'root'
})
export class LprService {

  constructor(private http: HttpClient) { }

  search(term: any) {
    return this.http.post<any>(`http://localhost:8080/lpr/search`, JSON.stringify(term)
    , {headers: new HttpHeaders().set('Content-Type', 'application/json;utf-8')});
  }

  searchOut(term: any) {
    return this.http.post<any>(`http://localhost:8080/lpr/searchOut`, JSON.stringify(term)
    , {headers: new HttpHeaders().set('Content-Type', 'application/json;utf-8')});
  }



}
