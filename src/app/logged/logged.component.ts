import { Component, OnInit, Input, Output } from '@angular/core';
import {RestService} from '../services/rest.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})

export class LoggedComponent implements OnInit {

  /**
   * Имя пользователя
   */
  public login: string;
  /**
   * Пароль
   */
  public password: string;

  constructor(private restService: RestService) {
  }

  ngOnInit() {
  }

  /**
   * При нажатии на кнопку "войти"
   */
  public doLogin() {
    localStorage.setItem('login',this.login)
    console.log('login: ' + this.login);
    console.log('password: ' + this.password);
    const params = {
      login: this.login,
      password: this.password
    };
    this.restService.doCall('doLogin', params)
      .subscribe((res: any) => {
        console.log(res);
      });
      
  }
  public doTest() {
    let sdasd = this.restService.doGet('get')
      .subscribe((res: any) => {
        console.log(res);
        console.log(sdasd);
      });
      
  }

}
