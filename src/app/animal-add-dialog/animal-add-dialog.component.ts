import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import {FileUploadService} from '../file-upload.service';
@Component({
  selector: 'app-animal-add-dialog',
  templateUrl: './animal-add-dialog.component.html',
  styleUrls: ['./animal-add-dialog.component.scss']
})
export class AnimalAddDialogComponent implements OnInit {

  constructor(private restService: RestService, public dialoge: MatDialog, private fileUploadService:  FileUploadService) { }
  petid: number;
  selected: string;
  name: string;
  age: number;
  gender: string;
  photo: string;
  active: boolean = true;
  FileToUpload: File = null;
 
  handleFileInput(files: FileList){
    this.FileToUpload = files.item(0);
  }

  uploadFileToActivity(){
    this.fileUploadService.postFile(this.FileToUpload);
  }

  public addPet() {
    this.dialoge.closeAll();
    const params = {
      petId: this.petid,
      type: this.selected,
      name: this.name,
      age: this.age,
      gender: this.gender,
      photo: this.photo,
active: this.active

    };
    this.restService.doCall('addPets', params)
      .subscribe((res: any) => {
        console.log(res);
      });
    }
  ngOnInit() {
  }

}
