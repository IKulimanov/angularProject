import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {RestService} from '../services/rest.service';
import { animate, state, style, trigger, transition } from '@angular/animations';
@Component({
  selector: 'app-table-req-give',
  templateUrl: './table-req-give.component.html',
  styleUrls: ['./table-req-give.component.scss'],
  animations: [
    trigger('detailExpand',[
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableReqGiveComponent implements OnInit {
  constructor(private restService: RestService) { }
  page: number;
  columnsToDisplay = [ 'login', 'nameuser','email', 'phone', 'typepet','namepet', 'agepet', 'genderpet'];
  dataSource = new MatTableDataSource<reqGiveDetail>();
  selected = "active";
  loginsearch: string;
  search: string;
  expandedElement: reqGiveDetail|null;
  pageSize: number;
  is_child: string;
  is_pet: string;
  is_house: string;
  selectedStatus: string;


  rightPage()
  {
    if (this.page < this.pageSize){
     this.page++;
     this.getReqGive();
    }
    
  }

  public getPage() {
    this.restService.doGet('getPage')
      .subscribe((res: any) => {
        this.pageSize = res;
        console.log(res);
      });
    }

  leftPage(){
    if (this.page>1){
      this.page--;
     this.getReqGive();
   }
   
 }

  setReqStatus(){
    const params = {
      id: this.expandedElement.id,
      status: this.selectedStatus
  };
  this.restService.doCall('setReqStatusGive',params)
  .subscribe((res:any)=> {
    this.dataSource = res;
    console.log(res)});
    this.getReqGive();
  }

  public getReqGive() {
    switch (this.loginsearch){
      case undefined: {this.search = "any"; break;}
      default: {this.search = this.loginsearch; break;}
    }

    const params = {
      page: this.page,
      search: this.search,
      selected: this.selected
  };
  this.restService.doCall('doGiveReq',params)
  .subscribe((res:any)=> {
    this.dataSource = res;
   


    console.log(res)});
    this.getPage();
  }
  ngOnInit() {
    this.page = 1;
    this.getReqGive();
  }

}

export interface reqGiveDetail {
  id: number;
  login: string;
  nameuser: string;
  email: string;
  phone: string;
  typepet:  string;
  namepet: string;
  agepet: number;
  genderpet: string;
}

/*const ELEMENT_DATA: reqGiveDetail[] = [
  {id: 1,login: 'Mud1',nameuser: "Mud", email: 'mud@mail.ru', phone:"555", typepet:"dog", namepet:"Pes1", agepet:1, genderpet:"male"},
  {id: 2,login: 'Mud2',nameuser: "Mud", email: 'mud@mail.ru', phone:"555", typepet:"dog", namepet:"Pes1", agepet:1, genderpet:"male"},
  {id: 3,login: 'Mud3',nameuser: "Mud", email: 'mud@mail.ru', phone:"555", typepet:"cat", namepet:"Cat1", agepet:1, genderpet:"female"},
  {id: 4,login: 'Mud1',nameuser: "Mud", email: 'mud@mail.ru', phone:"555", typepet:"cat", namepet:"Cat1", agepet:1, genderpet:"female"},
  {id: 5,login: 'Mud1',nameuser: "Mud", email: 'mud@mail.ru', phone:"555", typepet:"dog", namepet:"Pes1", agepet:1, genderpet:"male"},
];*/