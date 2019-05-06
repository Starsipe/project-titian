// Service for passing data to node and mongodb

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  top10Path = 'http://217.210.174.92/getTop10';
  karallenPath = 'http://217.210.174.92/getKarallen';
  zenitPath = 'http://217.210.174.92/getZenit';
  foodTruckPath = 'http://217.210.174.92:3000/getFoodTruck';
  mocadoPath = 'http://217.210.174.92/getMocado';
  kebabHusetPath = 'http://217.210.174.92:3000/getKebabHuset';

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

    this.http.post('http://217.210.174.92/create',
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

  addRating (_rating, food_data ) {
alert(_rating);
    this.http.post('http://217.210.174.92/addRating',
    {
      rating: _rating,
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
