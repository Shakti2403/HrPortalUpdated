import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../domain/login';

@Injectable({
  providedIn: 'root'
})
export class LoginCrudService {

  private baseUrl : string = "http://localhost:8080/loginapi/logindetails";

  constructor(private httpClient: HttpClient) { 
  }

  getLoginDetails(login : Login) : Observable<Login>{
    console.log("in getLoginDetails()");
   return this.httpClient.post<Login>(this.baseUrl  , login);
  }
}
