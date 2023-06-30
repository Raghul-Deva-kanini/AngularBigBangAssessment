import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  constructor(private service:SignupService, private router:Router){}

  ngOnInit(): void {
   this.getDoctorRequest();
  }

  public doctors: any;

  getDoctorRequest()
  {
    this.service.getDoctorRequest().subscribe(result=>{
      this.doctors = result;
      // console.log(this.doctors);
    })
  }

  acceptDoctorRequest(doctor:any)
  {
    //alert("entered")
    console.log(doctor);
    doctor.password="";
    doctor.hashKey="";
    this.service.approveStaff(doctor).subscribe(data => { console.log("Staff Register") ;
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);},
        err => {
          console.log(err)
        });
         alert("request Approved");

         this.service.DeleteProduct(doctor.id).subscribe(
          // res=>{
          //   alert("deleted")
          // }
          (result) => { alert("Staff Deleted");},
          (error)  => {
            alert("Error");
            }
        )
 }

 deleteDoctorRequest(doctor:any)
 {
  this.service.DeleteProduct(doctor.id).subscribe(
    // res=>{
    //   alert("deleted")
    // }
    (result) => { alert("Staff Deleted");},
    (error)  => {
      alert("Error");
      }
  )
  this.router.navigate(['login']);
 }
}
