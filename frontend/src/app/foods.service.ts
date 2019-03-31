// Service for passing data to node and mongodb

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  top10Path = 'http://localhost:3000/getTop10';
  karallenPath = 'http://localhost:3000/getKarallen';
  zenitPath = 'http://localhost:3000/getZenit';
  foods: any;

  constructor(private http: HttpClient) {}

  getTop10() {
    return this.http.get(this.top10Path).pipe(map(res => {
      return res;
    }));
  }
  getKarallen() {
    return this.http.get(this.karallenPath).pipe(map(res => {
      return res;
    }));
  }
  getZenit() {
    return this.http.get(this.zenitPath).pipe(map(res => {
      return res;
    }));
  }

  getData() {
    //return this.someMethod().subscribe(data => this.foods = data);
  }

  submitData(name, rating, restaurant) {
    // console.log('name: ', name);
    // console.log('rating: ', rating);
    // console.log('restaurant: ', restaurant);
    // console.log('Submitted data from service');
    this.http.post('http://localhost:3000/create',
    {name: name, rating: rating, restaurant: restaurant})
                    .subscribe(
                        (res) => {
                            console.log(res);
                        },
                        err => console.log(err)
                    );
  }

  addRating (rating, id) {
    this.http.post('http://localhost:3000/addRating',
    {rating: rating, id: id})
      .subscribe(
        (res) => {
          console.log(res);
        },
          err => console.log(err)
        );

  }

}
