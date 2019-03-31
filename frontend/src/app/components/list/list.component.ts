import { Component, OnInit, Input } from '@angular/core';
import { FoodsService } from '../../foods.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialograteComponent} from './dialograte/dialograte.component';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cookieValue: String;
  hasRated: boolean;

  today: number = Date.now();
  
  foods: any;
  karallenFoods: any;
  zenitFoods: any;

  constructor(private myService: FoodsService,
   public dialog: MatDialog,
   private cookieService: CookieService) {
  }

  ngOnInit () {
    this.getData();
  }

  openRateDialog(foodObj): void {
    const dialog = this.dialog.open(DialograteComponent, {
      width: '250px',
      data: foodObj
    });

    dialog.afterClosed().subscribe(() => {
      console.log('dialog closed');
      this.getData(); // refresh data
    });
  }

  getData() {
    this.myService.getTop10().subscribe(data => this.foods = data); // Hämtar data från Service
    this.myService.getKarallen().subscribe(data => this.karallenFoods = data); // Hämtar data från Service
    this.myService.getZenit().subscribe(data => this.zenitFoods = data); // Hämtar data från Service
    

  }

  rated(foodId){
    this.cookieValue = this.cookieService.get(foodId);
    if (this.cookieValue == "1"){
       return true;
    } else {
      return false;
    }
  }
 
}