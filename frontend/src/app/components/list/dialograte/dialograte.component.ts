import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FoodsService } from '../../../foods.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-dialograte',
  templateUrl: './dialograte.component.html',
  styleUrls: ['./dialograte.component.css']
})
export class DialograteComponent implements OnInit {

 // @Output() rated = new EventEmitter();

  cookieValue: String;
  _rating: number;// = 2; // two way binding funkar ej
  food;

  submitted = false;

  constructor(
    private myService: FoodsService,
   @Inject(MAT_DIALOG_DATA) data, 
   private cookieService: CookieService,
   public dialogRef: MatDialogRef<DialograteComponent>) {
    this.food = data;
  }

  onSubmit() {
    alert(this._rating);
    this.submitted = true;
    this.myService.addRating(this._rating, this.food);
    this.onRate();
  }

  ngOnInit() {
    this.cookieValue = this.cookieService.get(this.food._id);
    if (this.cookieValue == "1"){
      this.submitted=true;
      //this.submitted == false;
    }
  }
  onRate(){
    this.cookieService.set( this.food._id , '1' );
    this.cookieValue = this.cookieService.get(this.food._id);
    if (this.cookieValue == "1"){
      this.submitted=true;
    }
  this.dialogRef.close();
  }
  deleteFood(){
    this.myService.deleteFood(this.food);
    this.dialogRef.close();
  }
  clearCookies(){
    this.cookieService.set( this.food._id, '0' );
    this.cookieValue = this.cookieService.get(this.food._id);
    this.submitted=false;
    }
}
