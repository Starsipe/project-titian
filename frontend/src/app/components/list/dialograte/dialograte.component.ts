import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialograte',
  templateUrl: './dialograte.component.html',
  styleUrls: ['./dialograte.component.css']
})
export class DialograteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialograteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

}
