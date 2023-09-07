import { Component } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  searchText;
  patients : any;
  id:number;
  patient:Patient;
  constructor(private route:ActivatedRoute,private patientService:PatientService,private router:Router){}

  ngOnInit() : void {
    this.id = this.route.snapshot.params['id'];
    this.patient = new Patient();
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient=data;
    });
    this.getPatients();
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
