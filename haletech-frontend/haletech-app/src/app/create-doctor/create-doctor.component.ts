import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent {
  searchText;
  doctors : any;
  doctor:Doctor = new Doctor();
  constructor(private doctorService:DoctorService,private router: Router){}
  ngOnInit():void{
    this.getDoctors();
  }

  saveDoctor(){
    this.doctorService.createDoctor(this.doctor).subscribe(data=>{
      console.log(data);
      
    },
    error => console.log(error)
    );

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

  

  onSubmit(){
    console.log(this.doctor);
    this.saveDoctor();
    this.getDoctors();
  }

}
