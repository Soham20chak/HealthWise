import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { PatientsComponent } from './patients/patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  {path: 'doctors',component: DoctorsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home' ,  component:HomeComponent  }, 
  {path: 'create-doctors',component: CreateDoctorComponent,canActivate:[AuthGuard]},
  {path: 'update-doctor/:id',component: UpdateDoctorComponent,canActivate:[AuthGuard]},
  {path: 'doctor-details/:id',component: DoctorDetailsComponent},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path:'patients',component:PatientsComponent},
  {path:'appointments',component:CreatePatientComponent},
  {path: 'update-patient/:id',component: UpdatePatientComponent,canActivate:[AuthGuard]},
  {path: 'patient-details',component: PatientDetailsComponent,canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
