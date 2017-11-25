import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';


@IonicPage()
@Component({
  selector: 'page-fb-home',
  templateUrl: 'fb-home.html',
})
export class FbHomePage {
  @ViewChild(Content) content: Content;
  scrollSubject: Subject<string> = new Subject<string>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }
  ionViewDidEnter() {
    this.content.ionScroll.subscribe(event => {
      console.log(event.scrollTop);
      this.scrollSubject.next(event.scrollTop);
    })
  }

  onViewMatchDetail(matchId: number) {
    this.navCtrl.push("FbMatchDetailPage", { "id": matchId }, { animate: false });
  }

}
