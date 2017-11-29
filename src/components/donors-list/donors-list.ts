import { Component } from '@angular/core';
import { AppControllerProvider } from '../../providers/football/app-controller/app-controller';
import { Donors, DonorsList } from '../../providers/football/interfaces/fb-donors';
import { Observable } from 'rxjs/Observable';

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
  listDonors : Observable<DonorsList>;
  
  isLoadingData : boolean = true;
  constructor(private appController: AppControllerProvider) {
  }
  ngAfterViewInit(){
    this.listDonors = this.appController.getDornosList();
    this.listDonors.subscribe(donors=>{
      console.log(this.listDonors);
      this.isLoadingData = false;
    })
  }

}
