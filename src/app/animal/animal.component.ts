import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
import { Url } from 'url';



export class AnimalComponent  {
  public id:number;
  public name: string;
    public age: number;
    public gender: string;
    public type: string;
    public photo: string;
    public active: boolean;

  constructor() { }
}
