import { Component, Inject, OnInit, ViewEncapsulation, Input,  ViewChild, ChangeDetectorRef  } from '@angular/core';
import{ AnimalComponent } from '../animal/animal.component';
import { MatTableDataSource, MatPaginator} from '@angular/material';
import { FormBuilder } from '@angular/forms';
import {RestService} from '../services/rest.service';
import { AnimalDialogReqComponent } from '../animal-dialog-req/animal-dialog-req.component';
import { MatDialog } from '@angular/material';
import {PageEvent} from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
import { ShareService } from '../share.service'

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
  
})
export class AnimalsComponent implements OnInit {
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  idpet: number; 
  page: number;
   type: string;
   gender: string;
   age: number;
   active: boolean;
   pageSize = 0;
   selectedType: string;
   selectedGen: string;
   selectedAge: string;
   

 
   // MatPaginator Output
   pageEvent: PageEvent;
   animals:AnimalComponent[];

   rightPage()
   {
     if (this.page < this.pageSize){
      this.page++;
      this.doGetAnimal();
     }
     
   }

   leftPage(){
     if (this.page>1){
       this.page--;
      this.doGetAnimal();
    }
    
  }

   
    constructor(private share: ShareService,private restService: RestService,public dialog: MatDialog) {
      this.page = 1;
      this.share.onClick.subscribe(idpet => this.idpet  = idpet);
    }



    openDialog(): void {
      this.share.doClick();
      const dialogRef = this.dialog.open(AnimalDialogReqComponent,{
      
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    public getPageAnimal() {
    
       this.restService.doGet('getPage')
         .subscribe((res: any) => {
           this.pageSize = res;
           console.log(res);
         });
       }

    public doGetAnimal() {
     switch (this.selectedType){
       case undefined: {this.type = "any"; break;}
       case "cat": {this.type = "cat"; break;}
       case "dog": {this.type = "dog"; break;}
       default: {break;}
     }
     switch (this.selectedAge){
      case undefined: {this.age = 0; break;}
      case "ageOne": {this.age = 1; break;}
      case "ageTwo": {this.age = 2; break;}
      case "ageTree": {this.age = 3; break;}
      case "ageFour": {this.age = 4; break;}
      default: {break;}
    }
    switch (this.selectedGen){
      case undefined: {this.gender = "any"; break;}
      case "female": {this.gender = "female"; break;}
      case "male": {this.gender = "male"; break;}
      default: {break;}
    }
      const params = {
        page: this.page,
        type: this.type,
        gender: this.gender,
        age: this.age,
        active: this.active
        
      };
      this.restService.doCall('getAnimal',params)
        .subscribe((res: any) => {
          this.animals = res;
          console.log(res);
          
        });
        this.getPageAnimal();
      }
  

    ngOnInit() {
     this.page = 1;
     this.active = true;  
     this.doGetAnimal();
    }
   
   
  

   
  }
  

