import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor';
import { HttpClient } from '@angular/common/http';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit{
  doctors : any;
  searchText;
  constructor(private doctorService : DoctorService,private router:Router){}

  ngOnInit(){
    this.getDoctors();
   // let response = this.http.get("http://localhost:8080/api/v1/doctors");
    //response.subscribe((data)=>this.doctors=data);
  } 

  private getDoctors(){
    this.doctorService.getDoctorList().subscribe(data => {
      this.doctors = data;
    });
  }

  doctorDetails(id:number){
    this.router.navigate(['doctor-details',id])
  }

  updateDoctor(id:number){
    this.router.navigate(['update-doctor',id])
  }

  deleteDoctor(id:number){
    this.doctorService.deleteDoctor(id).subscribe(data => {
      console.log(data);
      this.getDoctors();
    });
  }

  

}
