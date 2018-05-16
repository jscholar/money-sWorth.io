import { Component, OnInit } from '@angular/core';
import { Mcdonalds} from '../mcMenu';
import { Food } from '../Food';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  ngOnInit() {
  }

}
