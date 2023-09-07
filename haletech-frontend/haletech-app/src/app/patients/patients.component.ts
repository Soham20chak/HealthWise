import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
  patients : any;
  searchText;
  constructor(private patientService : PatientService,private router:Router){}

  ngOnInit(){
    this.getPatients();
   // let response = this.http.get("http://localhost:8080/api/v1/doctors");
    //response.subscribe((data)=>this.doctors=data);
  } 

  private getPatients(){
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    });
  }

  patientDetails(id:number){
    this.router.navigate(['patient-details',id])
  }

  updatePatient(id:number){
    this.router.navigate(['update-patient',id])
  }

  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    });
  }
}
