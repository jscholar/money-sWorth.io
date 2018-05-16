import { Component, OnInit } from '@angular/core';
import { Food } from '../Food';
import { Mcdonalds } from '../mcMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu = Mcdonalds;
  constructor() { }

  ngOnInit() {
  }

}
