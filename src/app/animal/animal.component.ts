import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';



export class AnimalComponent  {
  public id: number;
  public name: string;
    public age: number;
    public gender: string;
    public date_req: string;
    public description: string
  constructor() { }
}
