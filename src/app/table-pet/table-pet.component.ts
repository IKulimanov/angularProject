import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {RestService} from '../services/rest.service';
import { animate, state, style, trigger, transition } from '@angular/animations';
import { AnimalAddDialogComponent } from '../animal-add-dialog/animal-add-dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-table-pet',
  templateUrl: './table-pet.component.html',
  styleUrls: ['./table-pet.component.scss'],
  animations: [
    trigger('detailExpand',[
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TablePetComponent implements OnInit {
  page: number;
  columnsToDisplay = [ 'id','type', 'name', 'age', 'gender'];
  dataSource = new MatTableDataSource<petDetail>();
  selected = "active";
  expandedElement: petDetail|null;
  pageSize: number;
  
  constructor(private restService: RestService, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AnimalAddDialogComponent,{
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    //this.getPets();
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
     this.getPets();
    }
    
  }

  leftPage(){
    if (this.page>1){
      this.page--;
     this.getPets();
   }
   
 }

  setPetInArchive(){
    const params = {
      login: this.expandedElement.id,
  };
  this.restService.doCall('setPetInArchive',params)
  .subscribe((res:any)=> {
    this.dataSource = res;
    console.log(res)});
    this.getPets();
  }

  public getPets() {
    const params = {
      page: this.page,
      selected: this.selected
  };
  this.restService.doCall('doAllPets',params)
  .subscribe((res:any)=> {
    this.dataSource = res;
    console.log(res)});
    this.getPage();
  }
  ngOnInit() {
    this.page = 1;
    this.getPets();
    
  }

}

export interface petDetail {
  id: number;
  type: string;
  name: string;
  age: number;
  gender:  string;
  
}

/*const ELEMENT_DATA: petDetail[] = [
  {id: 1, type: 'dog', name: 'bobik', age:3, gender:"male"},
  {id: 2, type: 'cat', name: 'musya', age:1, gender:"female"},
  {id: 3, type: 'dog', name: 'sneginka', age:1, gender:"female"},
  {id: 4, type: 'cat', name: 'leopold', age:3, gender:"male"},
];*/
