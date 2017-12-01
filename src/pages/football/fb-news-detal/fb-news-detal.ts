import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppControllerProvider } from '../../../providers/football/app-controller/app-controller';
import { Observable } from 'rxjs/Observable';
import { News } from '../../../providers/football/interfaces/news';

@IonicPage(
  {
    segment: 'news/:id'
  }
)
@Component({
  selector: 'page-fb-news-detal',
  templateUrl: 'fb-news-detal.html',
})
export class FbNewsDetalPage {
  newDetail: News;
  isLoadingData: boolean = true;

  mDatas: any;
  constructor(
    public mAppControllerProvider: AppControllerProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.newDetail = new News()

  }
  ionViewDidEnter() {
    // console.log('ionViewDidLoad FbNewsDetalPage');
    if (this.navParams.get("data")) {
      this.newDetail = this.navParams.get("data");
      this.isLoadingData = false;
      return;
    } else if (this.navParams.data['id']) {
      this.onLoadData();
      return;
    }else{
      this.mAppControllerProvider.setRootPage("FbNewsPage");
      return;
    }
  }
  onLoadData() {
    this.mAppControllerProvider.getNewsDetailByID(this.navParams.data['id']).then((data) => {
      if (data) {
        this.newDetail = data;
        console.log(this.newDetail);

        this.isLoadingData = false;
      }
    })
  }

}
