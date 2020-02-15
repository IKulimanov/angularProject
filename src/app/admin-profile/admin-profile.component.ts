import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  tab1: boolean = false; 
  tab2: boolean = false;
  tab3: boolean = false;
  tab4: boolean = false;   

  constructor() { }

  toggle1(){
    this.tab1= true;
    this.tab2=false;
    this.tab3=false;
    this.tab4=false;
}


toggle2(){
  this.tab2=true;
  this.tab1=false;
  this.tab3=false;
  this.tab4=false;
}

toggle3(){
  this.tab3=true;
  this.tab1=false;
  this.tab2=false;
  this.tab4=false;
}


toggle4(){
  this.tab4=true;
  this.tab1=false;
  this.tab2=false;
  this.tab3=false;
}

  ngOnInit() {
  }

}
