import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  path = 'http://localhost:3000/p';
  foods: any;

  constructor(private http: HttpClient) {}

  someMethod() {
    return this.http.get(this.path).pipe(map(res => {
      return res;
    }));
  }

  getData() {
    return this.someMethod().subscribe(data => this.foods = data);
  }


  submitData(name, rating) {
    console.log('name: ', name);
    console.log('raing: ', rating);
    console.log('Submitted data from service');
    this.http.post('http://localhost:3000/t', {name: name, rating: rating})
                    .subscribe(
                        (res) => {
                            console.log(res);
                        },
                        err => console.log(err)
                    );
  }

}
