import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";
import { Login } from "../serviceclass/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../main.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiServiceService) { }

  name:string="";
  password:string="";
  returnLogin = new Login;

  ngOnInit(): void {
  }

  loginUser(){

    var postLogin = new Login();
    postLogin.userName = this.name;
    postLogin.userPassword = this.password; 

    this.api.postLogin(postLogin).subscribe(
      loginData => {
        this.returnLogin = loginData; 
      }
    );
  }

}
