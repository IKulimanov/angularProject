import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-frame',
  templateUrl: './nav-frame.component.html',
  styleUrls: ['./nav-frame.component.scss']
})
export class NavFrameComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private routerLink: Router) {}

  isLogged(){
    console.log("hello");
    if (localStorage.getItem("role")=="user"){
      this.routerLink.navigate(["profile"]);
    }
    else if (localStorage.getItem("role") == "admin"){
      this.routerLink.navigate(["adminprofile"]);
    }
    this.routerLink.navigate(["logged"]);
  }
}
