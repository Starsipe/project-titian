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
  foodTruckPath = 'http://localhost:3000/getFoodTruck';
  mocadoPath = 'http://localhost:3000/getMocado';
  kebabHusetPath = 'http://localhost:3000/getKebabHuset';

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
  getFoodtruck() {
    return this.http.get(this.foodTruckPath).pipe(map(res => {
        return res;
    }));
  }
  getMocado() {
    return this.http.get(this.mocadoPath).pipe(map(res => {
        return res;
    }));
  }
  getKebabHuset() {
    return this.http.get(this.kebabHusetPath).pipe(map(res => {
        return res;
    }));
  }
  

  submitData(name, rating, restaurant, available) {

    this.http.post('http://localhost:3000/create',
    {
      name: name,
      rating: rating,
      restaurant: restaurant,
      available: available,

    }).subscribe(
       (res) => {
          console.log(res);
        },
          err => console.log(err)
        );
  }

  addRating (rating, food_data ) {
    this.http.post('http://localhost:3000/addRating',
    {
      rating: rating,
      id: food_data._id,
      ratingAvg: food_data.ratingAvg,
      restaurant: food_data.restaurant,
      name: food_data.name,

    })
      .subscribe(
        (res) => {
          console.log(res);
        },
          err => console.log(err)
        );
  }
}