import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginMenuComponent } from './component/login/login-menu/login-menu.component';
import { VerifyLoginComponent } from './component/login/verify-login/verify-login.component';
import { TlHomePageComponent } from './component/TL/tl-home-page/tl-home-page.component';
import { PmHomePageComponent } from './component/PM/pm-home-page/pm-home-page.component';
import { HrHomePageComponent } from './component/HR/hr-home-page/hr-home-page.component';
import { InterviewerHomePageComponent } from './component/Interviewer/interviewer-home-page/interviewer-home-page.component';
import { FormsModule } from '@angular/forms';
import { TlMenuComponent } from './component/TL/tl-menu/tl-menu.component';
import { AddNewRequestComponent } from './component/TL/add-new-request/add-new-request.component';
import { ExistingRequestComponent } from './component/TL/existing-request/existing-request.component';
import { UpdateRequestComponent } from './component/TL/update-request/update-request.component';
import { AllRequestComponent } from './component/TL/all-request/all-request.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginMenuComponent,
    VerifyLoginComponent,
    TlHomePageComponent,
    PmHomePageComponent,
    HrHomePageComponent,
    InterviewerHomePageComponent,
    TlMenuComponent,
    AddNewRequestComponent,
    ExistingRequestComponent,
    UpdateRequestComponent,
    AllRequestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
