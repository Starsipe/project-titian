import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../../../foods.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  _name = '';
  _rating;

  submitted = false;
  success = false;

  constructor(private myService: FoodsService) { // instans av FoodsService
  }

  onSubmit() {
    this.submitted = true;
    this.success = false;
  }

  finalSubmit() {
    this.addToDB();
    this.success = true;
    this.submitted = false;
    this._name = '';
    this._rating = null;
  }

  addToDB() {
    // console.log(this._name);
    // console.log(this._rating);
    // console.log(' added to database');
    this.myService.submitData(this._name, this._rating);
  }
}
