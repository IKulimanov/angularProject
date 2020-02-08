import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-animal-dialog-req',
  templateUrl: './animal-dialog-req.component.html',
  styleUrls: ['./animal-dialog-req.component.scss']
})
export class AnimalDialogReqComponent implements OnInit {

  constructor(private restService: RestService, public dialoge: MatDialog) { }

  public is_child;
  public is_house;
  public is_pets;
  public is_login;
  public doReqGive() {
    this.dialoge.closeAll();
    console.log('is_child: ' + this.is_child);
    console.log('is_house: ' + this.is_house);
    console.log('is_pets: ' + this.is_pets);
    console.log('is_login: ' + localStorage['login'])
    const params = {
      
      is_child: this.is_child,
      is_house: this.is_house,
      is_pets: this.is_pets,
      is_login: localStorage['login']
    };
    this.restService.doCall('doReqGive', params)
      .subscribe((res: any) => {
        console.log(res);
      });

  }
  ngOnInit() {
  }

}
