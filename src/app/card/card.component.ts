import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']

})
export class CardComponent {

  name = 'Filip';
  output = 'hej';

  onClick(input: HTMLTextAreaElement) {
    console.dir(input);
    this.output = input.value;

  }

}
