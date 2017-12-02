import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Page, FbScheduleComponent } from '../../../components/fb-schedule/fb-schedule';
import { Subject } from 'rxjs/Subject';

@IonicPage()
@Component({
  selector: 'page-fb-schedule',
  templateUrl: 'fb-schedule.html',
})
export class FbSchedulePage {
  @ViewChild(Content) content: Content;
  scrollSubject: Subject<string> = new Subject<string>();
  schedulePage = Page.SCHEDULE;

  loading;
  isLoading = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbSchedulePage');
  }


  ionViewDidEnter() {
    this.loading = <HTMLElement>document.getElementById("loading-icon");

    // this.getData();
    this.content.ionScroll.subscribe(event => {
      let header = <HTMLDivElement>document.getElementById("logo");
      let headerHeight = header.clientHeight;
      let scrollTop = event.scrollTop;
      let scrollHeight = this.content.getContentDimensions().scrollHeight;
      let contentHeight = this.content.getContentDimensions().contentHeight;
      let loadingHeight = scrollHeight - headerHeight - contentHeight * 1.5;

      if (!this.isLoading && (scrollTop >= loadingHeight)) {
        console.log("LOAD");
        this.showLoading();
        this.getData();
      }
      this.scrollSubject.next(event.scrollTop);
    })
  }
  parentSubject: Subject<any> = new Subject();

  hideLoading() {
    if (!this.loading.classList.contains("hidden"))
      this.loading.classList.add("hidden");
  }

  showLoading() {
    if (this.loading.classList.contains("hidden"))
      this.loading.classList.remove("hidden");
  }

  getData() {
    this.parentSubject.next('getData');
  }

  loaded(e){
    if(e.done){
      this.hideLoading();
    }    
  }
}
