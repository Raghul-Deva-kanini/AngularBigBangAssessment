import { Component } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { UserDTOModel } from '../register/model/userDTO.model';
import { registerModel } from '../register/register.component';

import { LoggedInUserModel } from '../register/model/loggedinuser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalid_user:string=''

  register:registerModel
  userDTO:UserDTOModel
  loggedInUser:LoggedInUserModel

  showError = false;
  

  constructor(private signupService : SignupService, private router : Router){
    this.userDTO=new UserDTOModel();
    this.loggedInUser=new LoggedInUserModel();
    this.register= new registerModel();

  }

 

  Login(){
    console.log(this.userDTO)
    if (this.userDTO.email != '' || this.userDTO.password != '')
    {
      this.signupService.userLogin(this.userDTO).subscribe(data=>{
        console.log(data)
        this.loggedInUser = data as LoggedInUserModel;
        console.log(this.loggedInUser);
        
        localStorage.setItem("token",this.loggedInUser.token);
        localStorage.setItem("UserID",this.loggedInUser.id);
        localStorage.setItem("role",this.loggedInUser.role);
        localStorage.setItem("login", new Date().toDateString());
        // console.log(localStorage.getItem("login"));
        // alert("Login Successful")
        // this.router.navigateByUrl('homepage');
        if (localStorage.getItem("role")=="Admin")
        {
          this.router.navigateByUrl('admin');
        }
        else if (localStorage.getItem("role")=="Doctor")
        {
          this.router.navigateByUrl('doctorContent');
        }
        else{
          //this.router.navigateByUrl('homepage');
          this.router.navigateByUrl('content');
        }
        
      },
      err=>{
        console.log(err)
        this.invalid_user='Invalid Username/password';
      });  
    }

    else if (this.userDTO.email === '' || this.userDTO.password === '') {
      this.showError = true;
    }
    
  }

  clearForm() 
  {
    // this.userDTO = {}; // Clear the userDTO object to reset the form fields
    this.userDTO.email = '';
    this.userDTO.password = '';
    this.showError = false;
    this.invalid_user='';
  }

  move(){
    this.router.navigateByUrl('register');
  }

  passwordVisible = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  LogOut()
  {
    this.router.navigateByUrl('homepage');
  }
}
