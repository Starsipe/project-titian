import { Component, OnInit, Input } from '@angular/core';
import { FoodsService } from '../../foods.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  today: number = Date.now();

  foods = {};

  constructor(private myService: FoodsService) { // instans av FoodsService

  }

  ngOnInit () {
    this.foods = this.myService.getData(); // Hämtar data från Service
  }

}
