import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private idpet:number = 0;
  onClick:EventEmitter<number> = new EventEmitter(); 
  doClick(){
    this.onClick.emit(this.idpet);
  }
  constructor() { }
}
