import { Component, OnInit } from '@angular/core';
import { FoodsService } from './foods.service';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project-titan';
  /* foods: any;
  path = 'http://localhost:3000/p'; */

  constructor(private http: HttpClient) {

  }
  ngOnInit () {
    // this.getPosts();
  }

  /* someMethod() {
    return this.http.get(this.path).pipe(map(res => {
      return res;
    }));
  }

  getPosts() {
    this.someMethod().subscribe(data => this.foods = data);
  }
 */




  /* getPosts() {
    return this.http.get('http://localhost:3000/p').subscribe((data) => {
      console.log('food: ');
      console.log(this.foods);
      console.log('data: ');
      console.log(data);
    });
  } */
}

