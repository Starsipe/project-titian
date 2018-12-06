import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  today: number = Date.now();


  food_list = [
    {title: 'Sukaldari', rating: 4.5},
    {title: 'Shawarma', rating: 4.3},
    {title: 'Döner', rating: 4.2},
    {title: 'Pandori', rating: 4.1},
    {title: 'Falafel', rating: 3.8},
    {title: 'Hamburgare', rating: 3.2},
    {title: 'Kebab', rating: 3.1},
    {title: 'Grillen', rating: 2.9},
  ];

  constructor() { }

  ngOnInit() {
  }

}
