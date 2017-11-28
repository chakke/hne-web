import { Component } from '@angular/core';

/**
 * Generated class for the DonorsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'donors-list',
  templateUrl: 'donors-list.html'
})
export class DonorsListComponent {

  text: string;

  constructor() {
    console.log('Hello DonorsListComponent Component');
    this.text = 'Hello World';
  }

}
