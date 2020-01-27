import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name_pet: string;
  age_pet: string;
  gender_pet: string;
  type_pet:string;
  constructor(private restService: RestService) { }

  ngOnInit() {
  }
  public givepet() {
    console.log('namepet: ' + this.name_pet);
    console.log('age_pet: ' + this.age_pet);
    console.log('gender_pet: ' + this.gender_pet);
    console.log('type_pet: ' + this.type_pet);
    const params = {
      namepet: this.name_pet,
      agepet: this.age_pet,
      genderpet: this.gender_pet,
      typepet: this.type_pet
    };
    this.restService.doCall('givepet', params)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
