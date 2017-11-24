import { Component } from '@angular/core';

/**
 * Generated class for the FbFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fb-footer',
  templateUrl: 'fb-footer.html'
})
export class FbFooterComponent {

  text: string;

  constructor() {
    console.log('Hello FbFooterComponent Component');
    this.text = 'Hello World';
  }

}
