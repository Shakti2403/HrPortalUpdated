import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tl-menu',
  templateUrl: './tl-menu.component.html',
  styleUrls: ['./tl-menu.component.css']
})
export class TlMenuComponent implements OnInit {
  submitted : boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addNewAddress(){
    this.router.navigate(['addnewrequest']);
  }

  goTOTLHomePage()
  {
    this.router.navigate(['existingempoyees']);
  }

  

  
  

 

}
