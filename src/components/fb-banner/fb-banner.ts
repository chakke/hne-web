import { Component } from '@angular/core';

/**
 * Generated class for the FbBannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fb-banner',
  templateUrl: 'fb-banner.html'
})
export class FbBannerComponent {

  text: string;

  constructor() {
    console.log('Hello FbBannerComponent Component');
    this.text = 'Hello World';
  }

}
