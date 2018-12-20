import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FoodsService } from '../../../foods.service';

@Component({
  selector: 'app-dialograte',
  templateUrl: './dialograte.component.html',
  styleUrls: ['./dialograte.component.css']
})
export class DialograteComponent implements OnInit {

  _rating;
  food;

  submitted = false;

  constructor(private myService: FoodsService, @Inject(MAT_DIALOG_DATA) data) {
    this.food = data;
  }

  onSubmit() {
    this.submitted = true;
    this.myService.addRating(this._rating, this.food._id);
  }

  ngOnInit() {}

}
