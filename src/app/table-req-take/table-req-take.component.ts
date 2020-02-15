import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {RestService} from '../services/rest.service';
import { animate, state, style, trigger, transition } from '@angular/animations';
@Component({
  selector: 'app-table-req-take',
  templateUrl: './table-req-take.component.html',
  styleUrls: ['./table-req-take.component.scss'],
  animations: [
    trigger('detailExpand',[
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableReqTakeComponent implements OnInit {
  constructor(private restService: RestService) { }
  page: number;
  columnsToDisplay = [ 'login', 'nameuser','email', 'phone', 'typepet','namepet', 'agepet', 'genderpet'];
  dataSource = new MatTableDataSource<reqTakeDetail>();
  selected = "active";
  loginsearch: string;
  search: string;
  expandedElement: reqTakeDetail|null;
  pageSize: number;
  is_child: string;
  is_pet: string;
  is_house: string;
  selectedStatus: string;
  //is_child =  this.expandedElement.is_child;
  //is_pet = this.expandedElement.is_pet;

  //is_house = this.expandedElement.is_house;

  getParam(){
    this.is_child =  this.expandedElement.is_child;
  this.is_pet = this.expandedElement.is_pet;
  this.is_house = this.expandedElement.is_house;
  }
  
  public getPage() {
    this.restService.doGet('getPage')
      .subscribe((res: any) => {
        this.pageSize = res;
        console.log(res);
      });
    }

  rightPage()
  {
    if (this.page < this.pageSize){
     this.page++;
     this.getReqTake();
    }
    
  }

  leftPage(){
    if (this.page>1){
      this.page--;
     this.getReqTake();
   }
   
 }

  setReqStatus(){
    const params = {
      id: this.expandedElement.id,
      status: this.selectedStatus
  };
  this.restService.doCall('setReqStatus',params)
  .subscribe((res:any)=> {
    this.dataSource = res;
    console.log(res)});
    this.getReqTake();
  }

  public getReqTake() {
    switch (this.loginsearch){
      case undefined: {this.search = "any"; break;}
      default: {this.search = this.loginsearch; break;}
    }
    //this.is_child = this.expandedElement.is_child;
    //this.is_pet = this.expandedElement.is_pet;
    //this.is_house = this.expandedElement.is_house;
    const params = {
      page: this.page,
      search: this.search,
      selected: this.selected
  };
  this.restService.doCall('doTakeReq',params)
  .subscribe((res:any)=> {
    this.dataSource = res;

    //this.is_child = res["is_child"];
    //this.is_pet = res["is_pet"];
    //this.is_house = res["is_house"];
    
    console.log(res)});
    this.getPage();
  }
  ngOnInit() {
    this.page = 1;
    this.getReqTake();
  
  }

}

export interface reqTakeDetail {
  id: number;
  login: string;
  nameuser: string;
  email: string;
  phone: string;
  typepet:  string;
  namepet: string;
  agepet: number;
  genderpet: string;
  is_child: string;
  is_pet: string;
  is_house: string;
}
/*
const ELEMENT_DATA: reqTakeDetail[] = [
  {id: 1,login: 'Mud1',nameuser: "Mud", email: 'mud@mail.ru', phone:"555", typepet:"dog", namepet:"Pes1", agepet:1, genderpet:"male", is_child: "yes", is_house: "chastnii", is_pet: "yes"},
  {id: 2,login: 'Mud2',nameuser: "Mud", email: 'mud@mail.ru', phone:"555", typepet:"dog", namepet:"Pes1", agepet:1, genderpet:"male", is_child: "no", is_house: "chastnii", is_pet: "yes"},
  {id: 3,login: 'Mud3',nameuser: "Mud", email: 'mud@mail.ru', phone:"555", typepet:"cat", namepet:"Cat1", agepet:1, genderpet:"female", is_child: "yes", is_house: "chastnii", is_pet: "yes"},
  {id: 4,login: 'Mud1',nameuser: "Mud", email: 'mud@mail.ru', phone:"555", typepet:"cat", namepet:"Cat1", agepet:1, genderpet:"female",is_child: "no", is_house: "chastnii", is_pet: "yes"},
  {id: 5,login: 'Mud1',nameuser: "Mud", email: 'mud@mail.ru', phone:"555", typepet:"dog", namepet:"Pes1", agepet:1, genderpet:"male",is_child: "yes", is_house: "chastnii", is_pet: "yes"},
];*/