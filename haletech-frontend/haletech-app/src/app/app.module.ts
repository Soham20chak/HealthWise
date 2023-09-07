import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from './app-routing.module';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    CreateDoctorComponent,
    UpdateDoctorComponent,
    DoctorDetailsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CreatePatientComponent,
    PatientsComponent,
    PatientDetailsComponent,
    UpdatePatientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
