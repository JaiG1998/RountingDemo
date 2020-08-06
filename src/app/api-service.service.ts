import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Register } from "./serviceclass/register";
import { Login } from "./serviceclass/login";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }

postRegister(post:Register):Observable<any>{
  return this.httpClient.post("http://localhost:8080/UserInfoWebApi/rest/userResource", post);

}

postLogin(post:Login):Observable<any>{
  return this.httpClient.post("http://localhost:8080/UserInfoWebApi/rest/userResource/login", post);
  
  }
}
