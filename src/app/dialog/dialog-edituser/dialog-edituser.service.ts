import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MemberModel } from 'src/app/member/member.service';

@Injectable({
  providedIn: 'root'
})
export class DialogEdituserService {

  constructor(private http: HttpClient) { }

  searchDetail(model : MemberModel){
    return this.http.post<MemberModel>(`http://localhost:8080/member/searchDetail`,model)
  }

  edit(model : MemberModel){
    return this.http.post<MemberModel>(`http://localhost:8080/member/edit`,model)
  }
}
