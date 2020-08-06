import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";
import { Register } from "../serviceclass/register";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../main.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api:ApiServiceService) { }

  name:string="";
	email:string="";
	city:string="";
	mobile:string="";
  password:string="";
  returnRegister = new Register;

  ngOnInit(): void {

    
    
  }

  registerUser(){

    var postRegister = new Register();   
    postRegister.userName = this.name;
    postRegister.userEmail = this.email;
    postRegister.userCity = this.city;
    postRegister.userMobile = this.mobile;
    postRegister.userPassword = this.password; 

    
    this.api.postRegister(postRegister).subscribe(
      registerData => {
        this.returnRegister = registerData;

      }
    );
      
  }
 

}
