import { Component } from '@angular/core';

@Component({
  selector: 'fb-news-bar',
  templateUrl: 'fb-news-bar.html'
})
export class FbNewsBarComponent {

  text: string;

  constructor() {
    console.log('Hello FbNewsBarComponent Component');
    this.text = 'Hello World';
  }

}
