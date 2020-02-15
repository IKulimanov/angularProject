import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {RestService} from '../app/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private restService: RestService) { }

  postFile(fileToUpload: File) {
    const formData: FormData = new FormData();
    console.log(fileToUpload);
    console.log(fileToUpload.name);
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    const params = {
      formData: formData
  };
  this.restService.doCall('uploadImage',params)
  .subscribe((res:any)=> {
    console.log(res)});
  }
  }

