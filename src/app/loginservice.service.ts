import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';


export interface loginModel{
  userName:string,
  pass:string,
}
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  loginModel:loginModel={}as loginModel;
  users: any[] =[
    {
      id:1,
      name:'Mongkol',
      username:'63021350',
      password:'@Bb0630194309'
    },
    {
      id:2,
      name:'Andy',
      username:'admin',
      password:'@Admin'
    },
    {
      id:3,
      name:'มงคล คงภิวัฒนา',
      username:'650001',
      password:'@650001'
    },
    
  ]

  session:any;
  constructor(private router:Router,private http: HttpClient) { 
    let session: any = localStorage.getItem('session')
    if(session){
      session=JSON.parse(session);
    }
    this.session=session;
  }

    // login(model:loginModel){
       
    //  return this.http.post<any>(`http://localhost:8080/login/login`, model);

    // }
  login(username:string,password:string){
    let user = this.users.find((u)=>u.username===username && u.password===password);

    if(user){
      this.session = user;
      localStorage.setItem('session',JSON.stringify(this.session));
    }
    


    return user;
  }


  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
