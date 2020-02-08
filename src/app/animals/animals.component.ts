import { Component, Inject, OnInit, ViewEncapsulation, Input,  ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatCardModule, MatCard } from '@angular/material/card';
import{ AnimalComponent } from '../animal/animal.component';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator} from '@angular/material';
import { FormBuilder } from '@angular/forms';
import {RestService} from '../services/rest.service';
import { AnimalDialogReqComponent } from '../animal-dialog-req/animal-dialog-req.component';
import { MatDialog } from '@angular/material';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
  
})
export class AnimalsComponent implements OnInit {
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
   page: number;
   length = 100;
   pageSize = 8;
   pageSizeOptions: number[] = [5, 10, 25, 100];
   obs: Observable<any>;
   datasource = new MatTableDataSource<MatCard>();
 
   // MatPaginator Output
   pageEvent: PageEvent;
 
    animals:AnimalComponent[] = [{
      id:1,
      name: "Сэм",
      age: 2,
      type: "dog",
      gender: "male",
      image: "https://ik.imagekit.io/a0bvwbc2p/2_dWhtlw-ts.jpg"
    },{
      id:2,
      name: "Шарик",
      age: 5,
      type: "dog",
      gender: "male",
      image:"https://ik.imagekit.io/a0bvwbc2p/6_Oe1iWD8faG.jpeg"

    },{
      id:3,
      name: "Дружок",
      age: 5,
      type: "dog",
      gender: "male",
      image:"https://ik.imagekit.io/a0bvwbc2p/7_PRd2jcZQh.jpeg"

    },{
      id:4,
      name: "Пудинг",
      age: 5,
      type: "dog",
      gender: "male",
      image:"https://ik.imagekit.io/a0bvwbc2p/3_0NnbNWAVcW.jpg"
    },{
      id:5,
      name: "Джек",
      age: 5,
      type: "dog",
      gender: "male",
      image:"https://ik.imagekit.io/a0bvwbc2p/1_-0Cjpt_kiM.jpg"
    },
    {
      id:6,
     name: "Лесси",
    age: 5,
    type: "dog",
    gender: "female",
    image:"https://ik.imagekit.io/a0bvwbc2p/4_-2mbsKSwiX.jpg"
    },
    {
      id:7,
      name: "Снежинка",
      age: 5,
      type: "dog",
      gender: "female",
      image:"https://ik.imagekit.io/a0bvwbc2p/5_a4B5S4gS0.jpg"
    },{
      id:8,
      name: "Куджо",
      age: 5,
      type: "dog",
      gender: "male",
      image:"https://ik.imagekit.io/a0bvwbc2p/8_b3_WaG39i.jpg"
    }
];
    constructor(private restService: RestService,public dialog: MatDialog) {
      this.page = 1;
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(AnimalDialogReqComponent,{
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    public doGetAnimal() {
      this.restService.doGet('doGetAnimal')
        .subscribe((res: any) => {
          console.log(res);
        });
      }
  

    ngOnInit() {
      this.datasource.paginator = this.paginator;
      this.obs = this.datasource.connect();
    }
   
  

   
  }
  

