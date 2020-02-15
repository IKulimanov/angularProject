import { Component, OnInit, ViewChild } from '@angular/core';
import {RestService} from '../services/rest.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {merge, Observable} from "rxjs";
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  login: string;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  age: number;
  name_pet: string;
  age_pet: string;
  gender_pet: string;
  type_pet:string;
  id_user:number;
  is_take: boolean;

  ngAfteViewInit(){
  
  }

  displayedColumns: string[] = [ 'namepet', 'type', 'status'];
  dataSource = new MatTableDataSource<TakePet>();

  constructor(private restService: RestService) { }

  ngOnInit() {
    
    this.login = localStorage.getItem("login");
    this.getUserDetail();
    this.gettakepet();
  
  }

  public getUserDetail(){
    const params = {
      login: localStorage.getItem("login")

  };
  this.restService.doCall('doFindUser',params)
  .subscribe((res:any)=> {
    this.firstname = res["firstname"];
    this.lastname = res["lastname"];
    this.age = res["age"];
    this.phone = res["telephone"];
    this.email = res["email"];
    console.log(res)});
  }


  public gettakepet() {
    this.is_take = true;
    const params = {
      login: localStorage.getItem("login")

  };
  this.restService.doCall('doUserReqTake',params)
  .subscribe((res:any)=> {
    this.dataSource = res;
    console.log(res)});
  }

  public getgivepet() {
    const params = {
      login: localStorage.getItem("login")

  };
  this.restService.doCall('doUserReqGive',params)
  .subscribe((res:any)=> {
    this.dataSource = res;
    console.log(res)});
  }


  public givepet() {
    this.is_take = false;
    console.log('namepet: ' + this.name_pet);
    console.log('age_pet: ' + this.age_pet);
    console.log('gender_pet: ' + this.gender_pet);
    console.log('type_pet: ' + this.type_pet);
    console.log('login: ' + this.id_user);
    const params = {
      login: this.login,
      name: this.name_pet,
      age: this.age_pet,
      type: this.type_pet,
      gender: this.gender_pet
     
    };
    this.restService.doCall('doReqAnimalGive', params)
      .subscribe((res: any) => {
        console.log(res);
      });
      if(this.is_take == false){
        this.getgivepet();
      }
  }

}

export interface TakePet {
  namepet: string;
  type: string;
  status: string;
}



