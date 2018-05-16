import { Component, OnInit } from '@angular/core';
import { Food } from '../Food';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dummy(): void {
    this.messages.add('Please implement me');
  }
  constructor(
    private messages: MessagesService
  ) { }

  ngOnInit() {
  }

}
