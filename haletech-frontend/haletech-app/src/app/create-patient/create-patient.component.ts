import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {
  patients : any;
  patient:Patient = new Patient();
  constructor(private patientService:PatientService,private router: Router,private builder:FormBuilder){}
  ngOnInit():void{
    this.getPatients();
  }

  appointment = this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
    
  })

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      
    },
    error => console.log(error)
    );

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

  

  onSubmit(){
    console.log(this.patient);
    this.savePatient();
    this.getPatients();
    alert("The appointment has been confirmed . You can make changes to the timings or preference before the specific date and time . Have a great day and stay healthy ")
  }
}
