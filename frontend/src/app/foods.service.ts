// Service for passing data to node and mongodb

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

//För raspberry-version
 /* top10Path = 'http://217.210.174.92/getTop5';
  karallenPath = 'http://217.210.174.92/getKarallen';
  zenitPath = 'http://217.210.174.92/getZenit';
  foodTruckPath = 'http://217.210.174.92/getFoodTruck';
  mocadoPath = 'http://217.210.174.92/getMocado';
  kebabHusetPath = 'http://217.210.174.92/getKebabHuset';
  */

  top10Path = 'http://localhost:3001/getTop5';
  karallenPath = 'http://localhost:3001/getKarallen';
  zenitPath = 'http://localhost:3001/getZenit';
  foodTruckPath = 'http://localhost:3001/getFoodTruck';
  mocadoPath = 'http://localhost:3001/getMocado';
  kebabHusetPath = 'http://localhost:3001/getKebabHuset';


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
  deleteFood(data){
    // Raspberry
    // this.http.post('http://217.210.174.92/delete',
     this.http.post('http://localhost:3001/delete',{id: data._id}).subscribe((res) => {
          console.log(res);
        },
          err => console.log(err)
        );
  }

  submitData(name, rating, restaurant, available, price) {
    // Raspberry
    // this.http.post('http://217.210.174.92/create',
     this.http.post('http://localhost:3001/create',
    {
      name: name,
      rating: rating,
      restaurant: restaurant,
      available: available,
      price: price

    }).subscribe(
       (res) => {
          console.log(res);
        },
          err => console.log(err)
        );
  }

  addRating (_rating, food_data ) {
// Raspberry
//    this.http.post('http://217.210.174.92/addRating',
  this.http.post('http://localhost:3001/addRating',
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
