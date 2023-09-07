import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin=false;
  title = 'haletech-app';
  constructor(public service:AuthService){}
  ngDoCheck():void{
    if(this.service.getUserRole()==='admin'){
      this.isAdmin=true;
    }
    else{
      this.isAdmin=false;
    }
  }
  
}

