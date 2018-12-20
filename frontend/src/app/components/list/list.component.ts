import { Component, OnInit, Input } from '@angular/core';
import { FoodsService } from '../../foods.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialograteComponent} from './dialograte/dialograte.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  today: number = Date.now();
  foods: any;

  constructor(private myService: FoodsService, public dialog: MatDialog) { // instans av FoodsService
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
    return this.myService.someMethod().subscribe(data => this.foods = data); // Hämtar data från Service
  }

  ngOnInit () {
    this.getData();
  }

}
