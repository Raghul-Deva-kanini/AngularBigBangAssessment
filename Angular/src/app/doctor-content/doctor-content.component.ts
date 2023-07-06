import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-doctor-content',
  templateUrl: './doctor-content.component.html',
  styleUrls: ['./doctor-content.component.css']
})
export class DoctorContentComponent implements OnInit{

  counter : number;
  femaleCounter: number;
  
  constructor(private router:Router, private service:SignupService)
  {
      this.counter = 1;
  }

  

  ngOnInit(): void {
    this.getDoctors();
    this.getPatients();
   }

   incrementCounter(): void {
    this.counter++;
    console.log(this.counter);
  }

  public doctors: any;

  getDoctors()
  {
    this.service.getDoctorData().subscribe(result=>{
      this.doctors = result;
    })    
  }

  public patients:any

  getPatients()
  {
    console.log("ENTERED");
    this.service.getPatientData().subscribe(result=>{
      this.patients = result;
      console.log(this.patients)
    }

    )
  }
  
  LogOut()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("role");
    this.router.navigateByUrl('homepage');
  }
}
