import { Component, OnInit, ViewEncapsulation, Input,  ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import{ AnimalComponent } from '../animal/animal.component';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import {RestService} from '../services/rest.service';
@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnimalsComponent implements OnInit {
   page: number;

   collectionSize: number;



   itemsPerPage: number = 8;

 
    animals:AnimalComponent[] = [{
      id:1,
      name: "Bobik",
      age: 2,
      date_req: "12-12-2020",
      gender: "female",
      description: ""
    },{
      id:2,
      name: "Sharik",
      age: 5,
      date_req: "1-1-2020",
      gender: "male",
      description: ""

    },{
      id:3,
      name: "Sharik",
      age: 5,
      date_req: "1-1-2020",
      gender: "male",
      description: ""

    },{
      id:4,
      name: "Sharik",
      age: 5,
      date_req: "1-1-2020",
      gender: "male",
      description: ""
    },{
      id:5,
      name: "Sharik",
      age: 5,
      date_req: "1-1-2020",
      gender: "male",
      description: ""
    },{id:6,
    name: "Sharik",
    age: 5,
    date_req: "1-1-2020",
    gender: "male",
    description: ""},
    {
      id:7,
      name: "Sharik",
      age: 5,
      date_req: "1-1-2020",
      gender: "male",
      description: ""
    },{
      id:8,
      name: "Sharik",
      age: 5,
      date_req: "1-1-2020",
      gender: "male",
      description: ""
    },
   
];
    constructor(private restService: RestService) {
      this.page = 1;
      this.loadPage();
    }

    ngOnInit() {
      
    }
    onPageChanged() {
      this.loadPage();
    }
  
    private loadPage(){
      this.restService.doGetAnimals(this.page, this.itemsPerPage, "getanimals()")
      .subscribe(p => {
        debugger;
        this.animals = p.rows;
        this.collectionSize = p.totalCount;
      });
  
    


 
    }
  }

