import { Component, OnInit, Input, Output } from '@angular/core';
import {RestService} from '../services/rest.service';
import { RouterLink } from '@angular/router';
import { Router } from "@angular/router";

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

  constructor(private restService: RestService, private  router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem["role"] == "admin"){ 
      this.router.navigate(["adminprofile"]);
    } else if (localStorage.getItem["role"] =="user"){
      this.router.navigate(["profile"]);
    }
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
        if ((res != "login or password bad")||(res != "user lock")){
        localStorage.setItem("login",res["login"]);
        localStorage.setItem("role",res["role"]);
          if (res["role"] == "admin"){
          
            this.router.navigate(["adminprofile"]);
          } else if (res["role"]=="user"){
            this.router.navigate(["profile"]);
            
          }
        }
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
