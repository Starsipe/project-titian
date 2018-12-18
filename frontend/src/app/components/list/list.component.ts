import { Component, OnInit, Input } from '@angular/core';
import { FoodsService } from '../../foods.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  today: number = Date.now();
  foods: any;

  constructor(private myService: FoodsService) { // instans av FoodsService

  }

  getData() {
    return this.myService.someMethod().subscribe(data => this.foods = data); // Hämtar data från Service
  }

  ngOnInit () {
    this.getData();
  }

}
