import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  userData:any;
  constructor(private builder: FormBuilder,private service:AuthService,private router:Router){

    sessionStorage.clear();
  }

  loginForm = this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
    
  })

  login(){
    if(this.loginForm.valid){
      this.service.getById(this.loginForm.value.username).subscribe(res=>{
        this.userData=res;
        console.log(this.userData)
        if(this.userData.password===this.loginForm.value.password){
          if(this.userData.isactive){
            sessionStorage.setItem('username',this.userData.id)
            sessionStorage.setItem('role',this.userData.role)
            this.router.navigate(['create-doctors'])
          }
          else{
            console.log("You are an inactive User")
            alert("Wrong credentials")
          }
        }
        else if(this.userData.password!==this.loginForm.value.password || this.userData.username!==this.loginForm.value.username){
          alert("Wrong credentials")
        }
        
      })
    }
    else{
      console.log("Invalid Credential")
      alert("Wrong credentials")
    }

  }


}
