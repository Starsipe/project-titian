import { Component, OnInit } from '@angular/core';

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
    console.log(this._name);
    console.log(this._rating);
    console.log(' added to database');
  }

  constructor() { }

}
