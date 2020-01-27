import { Component, OnInit } from '@angular/core';
import {  MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {RestService} from '../services/rest.service';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  
  /**
   * Имя пользователя
   */
  public login: string;
  /**
   * Пароль
   */
  public password: string;
   /**
   * Имя
   */
  public firstname: string;
  /**
  * Почта
  */
  public email: string;
    /**
  * Фамилия
  */
 public lastname: string;
   /**
  * Возраст
  */
 public age: string;
   /**
  * Номер телефона
  */
 public telephone: string;
    /**
  * Уведомления о новых собаках
  */
 public ntf_dog: string;
 /**
  * Уведомления о новых кошках
  */
 public ntf_cat: string;
 /**
  * Уведомления о новых птицах
  */
 public ntf_bird: string;
 /**
  * Уведомления о новых грызунах
  */
 public ntf_griz: string;
 /**
  * Заявка на волонтерство
  */
 public is_volon: string;
  constructor(private snackBar:MatSnackBar, private restService: RestService ) { }
  openSnackBar(message){
    this.snackBar.open(message);
  }
  
  openCustomSnackBar(){
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration:2000});
  }
  ngOnInit() {
  }
  public doReg() {
    console.log('login: ' + this.login);
    console.log('password: ' + this.password);
    console.log('emal: ' + this.email);
    console.log('firstname: ' + this.firstname);
    console.log('lastname: ' + this.lastname);
    console.log('age: ' + this.age);
    console.log('telephone: ' + this.telephone);
    console.log('ntf_dog: ' + this.ntf_dog);
    console.log('ntf_cat: ' + this.ntf_cat);
    console.log('ntf_bird: ' + this.ntf_bird);
    console.log('ntf_griz: ' + this.ntf_griz);
    console.log('is_volon: ' + this.is_volon);
    const params = {
      login: this.login,
      password: this.password,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      telephone: this.telephone,
      ntf_dog: this.ntf_dog,
      ntf_cat: this.ntf_cat,
      ntf_bird: this.ntf_bird,
      ntf_griz: this.ntf_griz,
      is_volon: this.is_volon

    };
    this.restService.doCall('doAccauntReg', params)
      .subscribe((res: any) => {
        console.log(res);
      });
  }

 

}
  @Component({
    selector: 'custom-snackbar',
    template: `<span style='color: green'>Вы успешно зарегестрировались</span>`
  })
  export class CustomSnackBarComponent{ 
}

