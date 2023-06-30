import { HttpClient } from "@angular/common/http";
import { registerModel } from "../register/model/register.model";
import { UserDTOModel } from "../register/model/userDTO.model";
import {Injectable} from '@angular/core';

@Injectable()
export class SignupService{

    staffMembers: any[] = [];

    addStaffMember(member: any) {
        this.staffMembers.push(member);
      }

      getStaffMembers() {
        return this.staffMembers;
      }

    private register: registerModel[] = [];

    constructor(private httpClient:HttpClient)
    {

    }

    addUser(register: registerModel) {
        this.register.push(register);
        console.log(register);
      }
    
      getUsers(): registerModel[] {
        return this.register;
      }

    signup(register:registerModel){
        console.log("register in servive")
        return this.httpClient.post("https://localhost:7192/api/User/Register",register);
    }

    signupStaff(register:registerModel)
    {
        console.log("register in service staff");
        return this.httpClient.post("https://localhost:7192/api/Staff",register);

    }

    userLogin(userDTO:UserDTOModel){
        return this.httpClient.post("https://localhost:7192/api/User/Login",userDTO);
    }
}