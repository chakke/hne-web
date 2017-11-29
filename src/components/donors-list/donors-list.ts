import { Component,EventEmitter, Input } from '@angular/core';
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

  @Input() background: string = "";
  listDonors : Observable<DonorsList>;
  
  isLoadingData : boolean = true;

  isHaveBackround :boolean = false;
  constructor(private appController: AppControllerProvider) {
  }
  ngAfterViewInit(){
    this.listDonors = this.appController.getDornosList();
    this.listDonors.subscribe(donors=>{
      console.log(this.listDonors);
      if(parseInt(this.background)==1){
        this.isHaveBackround = true;
      }
      this.isLoadingData = false;
    })
  }

}
