import { Component } from '@angular/core';

/**
 * Generated class for the FbListNewsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fb-list-news',
  templateUrl: 'fb-list-news.html'
})
export class FbListNewsComponent {

  text: string;

  constructor() {
    console.log('Hello FbListNewsComponent Component');
    this.text = 'Hello World';
  }

}
