import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobRequest } from 'src/app/domain/jobrequest';
import { JobRequestCrudService } from 'src/app/service/job-request-crud.service';

@Component({
  selector: 'app-add-new-request',
  templateUrl: './add-new-request.component.html',
  styleUrls: ['./add-new-request.component.css']
})
export class AddNewRequestComponent implements OnInit
 {
  submitted : boolean = false;
  jobrequest : JobRequest = new JobRequest;
  result : boolean = false;
  
  skill_1_array  : string[] = ['Java','Python','C++'];
  skill_2_array : string[] = ['Java','Python','C++'];
  skill_3_array : string[] = ['Java','Python','C++'];



  constructor(private router:Router, private jobRequestCrudServie:JobRequestCrudService) { }

  ngOnInit(): void {
  }




  backToAddNewRequest()
 {
   this.router.navigate(['tlhomepage']);
 }

 addNewJobRequest()
 {
   console.log("in Add new Job Address");
   this.jobRequestCrudServie.AddNewRequest(this.jobrequest).subscribe(
    data =>{
      console.log(data);
      this.result = data;
      this.submitted = true;
    }
   );
   

 }



}
