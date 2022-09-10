import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobRequest } from '../domain/jobrequest';

@Injectable({
  providedIn: 'root'
})
export class JobRequestCrudService {
  
  baseURL:string = "http://localhost:8080/jobrequestapi";
  constructor(private httpClient : HttpClient )
   { 

   }
  
   AddNewRequest(jobrequest : JobRequest) : Observable<boolean>
   {
    console.log("In Add New request");
    console.log(jobrequest);
    
    return this.httpClient.post<boolean>(this.baseURL+"/jobrequest" , jobrequest);
   }

   getAllJobRequests() : Observable<JobRequest[]>
   {
      return this.httpClient.get<JobRequest[]>(this.baseURL+"/all")
   }


}
