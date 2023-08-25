import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService, loginModel } from 'src/app/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginModel:loginModel={}as loginModel;
  loginModel01:loginModel={}as loginModel;

  form: FormGroup= this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
  });



  constructor(private loginservice:LoginserviceService, private fb:FormBuilder, private router:Router){}

  
    
  


  login(){
    let user = this.loginservice.login(
      this.form.value.username,
      this.form.value.password
    );
      
    
    if(user){
      console.log(user.username);  
      if(user.username==='admin')
        this.router.navigateByUrl('/admin')
      else{
        this.router.navigateByUrl('/user')
      }
    }else{
      alert('Username or Password incorrect')
    }
  }
}
