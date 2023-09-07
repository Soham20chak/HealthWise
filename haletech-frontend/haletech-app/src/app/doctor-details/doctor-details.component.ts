import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent {
  doctors : any;
  id:number;
  doctor:Doctor;
  constructor(private route:ActivatedRoute,private doctorService:DoctorService,private router:Router){}

  ngOnInit() : void {
    this.id = this.route.snapshot.params['id'];
    this.doctor = new Doctor();
    this.doctorService.getDoctorById(this.id).subscribe(data => {
      this.doctor=data;
    });
    this.getDoctors();
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
