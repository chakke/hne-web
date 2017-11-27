import { Component } from '@angular/core';

/**
 * Generated class for the FbSpinnerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fb-spinner',
  templateUrl: 'fb-spinner.html'
})
export class FbSpinnerComponent {

  text: string;

  constructor() {
    console.log('Hello FbSpinnerComponent Component');
    this.text = 'Hello World';
  }

}
