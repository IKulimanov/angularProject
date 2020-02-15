import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {RestService} from '../services/rest.service';
import { animate, state, style, trigger, transition } from '@angular/animations';
@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss'],
  animations: [
    trigger('detailExpand',[
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableUserComponent implements OnInit {
  page: number;
  columnsToDisplay = [ 'login', 'email', 'phone', 'firstname','lastname'];
  dataSource = new MatTableDataSource<userDetail>();
  selected = "active";
  loginsearch: string;
  search: string;
  expandedElement: userDetail|null;
  pageSize: number;
  
  constructor(private restService: RestService) { }

  rightPage()
  {
    if (this.page < this.pageSize){
     this.page++;
     this.getUsers();
    }
    
  }

  leftPage(){
    if (this.page>1){
      this.page--;
     this.getUsers();
   }
   
 }

 public getPage() {
  this.restService.doGet('getPage')
    .subscribe((res: any) => {
      this.pageSize = res;
      console.log(res);
    });
  }


  setUserInArchive(){
    const params = {
      login: this.expandedElement.login,
  };
  this.restService.doCall('setUserInArchive',params)
  .subscribe((res:any)=> {
    
    console.log(res)});
    this.getUsers();
  }

  public getUsers() {
    switch (this.loginsearch){
      case undefined: {this.search = "any"; break;}
      default: {this.search= this.loginsearch; break;}
    }
    const params = {
      page: this.page,
      search: this.search,
      selected: this.selected
  };
  this.restService.doCall('doAllUsers',params)
  .subscribe((res:any)=> {
    this.dataSource = res;
    console.log(res)});
    this.getPage();
  }
  ngOnInit() {
    this.page = 1;
    this.getUsers();
  }

}

export interface userDetail {
  login: string;
  email: string;
  phone: string;
  firstname:  string;
  lastname: string;
}

/*const ELEMENT_DATA: userDetail[] = [
  {login: 'Mud1', email: 'mud@mail.ru', phone:"555", firstname:"Mud", lastname:"Mudov"},
  {login: 'Mud2', email: 'mud@mail.ru', phone:"555", firstname:"Mud", lastname:"Mudov"},
  {login: 'Mud3', email: 'mud@mail.ru', phone:"555", firstname:"Mud", lastname:"Mudov"},
  {login: 'Mud4', email: 'mud@mail.ru', phone:"555", firstname:"Mud", lastname:"Mudov"},
  {login: 'Mud5', email: 'mud@mail.ru', phone:"555", firstname:"Mud", lastname:"Mudov"},  
];*/