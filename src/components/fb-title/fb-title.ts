import { Component } from '@angular/core';
 
@Component({
  selector: 'fb-title',
  templateUrl: 'fb-title.html'
})
export class FbTitleComponent {

  text: string;

  constructor() {
    console.log('Hello FbTitleComponent Component');
    this.text = 'Hello World';
  }

}
