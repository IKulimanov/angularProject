import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-animal-dialog-req',
  templateUrl: './animal-dialog-req.component.html',
  styleUrls: ['./animal-dialog-req.component.scss']
})
export class AnimalDialogReqComponent implements OnInit {

  constructor(private share: ShareService,private restService: RestService, public dialoge: MatDialog) {
    this.share.onClick.subscribe(idpet=>this.idpet = idpet)
   }
  idpet: number;
  selectedPet: boolean = false;
  selectedChild: boolean = false;
  selectedHouse: boolean =  false;

  public doReqGive() {
    this.dialoge.closeAll();
    
    const params = {
      login: localStorage['login'],
      idAnimal: this.idpet,
      childs: this.selectedChild,
      pets: this.selectedPet,
      house: this.selectedHouse
    };
    this.restService.doCall('doReqAnimalTake', params)
      .subscribe((res: any) => {
        console.log(res);
      });

  }
  ngOnInit() {
  }

}
