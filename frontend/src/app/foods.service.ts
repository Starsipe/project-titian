import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor() {}

  getData () {
    return [
      {name: 'Sukaldari', rating: 4.5},
      {name: 'Grillen', rating: 4.3},
      {name: 'Sushi', rating: 4.1},
      {name: 'Shawarma', rating: 3.8},
      {name: 'Falafel', rating: 3.7},
      {name: 'Kebab', rating: 3.5},
    ];
  }

  submitData() {
    console.log('Submitted data');
  }

}
