import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrHomePageComponent } from './component/HR/hr-home-page/hr-home-page.component';
import { InterviewerHomePageComponent } from './component/Interviewer/interviewer-home-page/interviewer-home-page.component';
import { LoginMenuComponent } from './component/login/login-menu/login-menu.component';
import { VerifyLoginComponent } from './component/login/verify-login/verify-login.component';
import { PmHomePageComponent } from './component/PM/pm-home-page/pm-home-page.component';
import { AddNewRequestComponent } from './component/TL/add-new-request/add-new-request.component';
import { ExistingRequestComponent } from './component/TL/existing-request/existing-request.component';
import { TlHomePageComponent } from './component/TL/tl-home-page/tl-home-page.component';

const routes: Routes = [
 
  {path:"login", component: VerifyLoginComponent},
  {path:"tlhomepage", component: TlHomePageComponent},
  {path:"pmhomepage", component: PmHomePageComponent},
  {path:"hrhomepage", component: HrHomePageComponent},
  {path:"Interviewerhomepage", component: InterviewerHomePageComponent},
  {path:"addnewrequest" ,component:AddNewRequestComponent},
  {path:"existingempoyees" ,component:ExistingRequestComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
