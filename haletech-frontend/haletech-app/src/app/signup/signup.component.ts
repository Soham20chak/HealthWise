import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  
  constructor(private builder: FormBuilder,private service:AuthService,private router:Router){}

  registerForm = this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    password:this.builder.control('',Validators.required),
    role:this.builder.control(''),
    isactive:this.builder.control('false')
  })

  registration(){
    if(this.registerForm.valid){
      this.service.registerData(this.registerForm.value).subscribe((res=>{
        this.router.navigate(['login'])
      }))
    }
    else{
      
    }
  }

  

  

}
