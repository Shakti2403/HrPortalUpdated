import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/domain/login';
import { LoginCrudService } from 'src/app/service/login-crud.service';


@Component({
  selector: 'app-verify-login',
  templateUrl: './verify-login.component.html',
  styleUrls: ['./verify-login.component.css']
})
export class VerifyLoginComponent implements OnInit {

  login : Login = new Login();
  result : boolean=false;
  userId :string = '';
  password : string = '';
  
  constructor(private loginService: LoginCrudService,
     private router: Router,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getLoginDetails(){
    console.log("in getLoginDetailsComponent()");
    this.loginService.getLoginDetails(this.login).subscribe(
      data => {
        this.login = data;
        console.log(this.login); 
        sessionStorage.setItem('login',JSON.stringify(this.login));
        if(this.login.designation === 'Team Leader') {
          this.router.navigate(['tlhomepage']); 
        }
        if(this.login.designation === 'Peoject Manager') {
          this.router.navigate(['pmhomepage']); 
        }
        if(this.login.designation === 'HR') {
          this.router.navigate(['hrhomepage']); 
        }
        if(this.login.designation === 'Interviewer') {
          this.router.navigate(['Interviewerhomepage']);
        }
      }
    );
    
  }
}
