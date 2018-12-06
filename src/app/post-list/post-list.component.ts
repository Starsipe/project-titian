import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {

  /*posts = [
    {title: 'first post', content: 'firsrt conent'},
    {title: 'sec post', content: 'second conent'},
    {title: 'third post', content: 'third conent'}
  ];*/

  @Input() posts = [];
}
