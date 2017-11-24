import { Component } from '@angular/core';
 
@Component({
  selector: 'fb-loader',
  templateUrl: 'fb-loader.html'
})
export class FbLoaderComponent {

  text: string;

  constructor() {
    console.log('Hello FbLoaderComponent Component');
    this.text = 'Hello World';
  }

}
