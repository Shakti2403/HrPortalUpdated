import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobRequest } from 'src/app/domain/jobrequest';
import { JobRequestCrudService } from 'src/app/service/job-request-crud.service';

@Component({
  selector: 'app-existing-request',
  templateUrl: './existing-request.component.html',
  styleUrls: ['./existing-request.component.css']
})
export class ExistingRequestComponent implements OnInit {

  allRequests : JobRequest[] =[];
  
  constructor(private router: Router ,private jobRequestCrudService:JobRequestCrudService) { }

  ngOnInit(): void {
  }

  updateDetails(job_id:number){
    console.log("in updateDetails()");
    console.log(job_id);
    this.router.navigate(['updatedetails']);
    

  }

  showAllRequests()
  {
    this.jobRequestCrudService.getAllJobRequests().subscribe(
      data => {
        this.allRequests = data;
        console.log(data);
      }
    );
  }





 
}
