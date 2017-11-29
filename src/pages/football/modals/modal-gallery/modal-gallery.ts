import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { AppControllerProvider } from '../../../../providers/football/app-controller/app-controller';

import { Galery } from '../../../../providers/football/interfaces/image'

@IonicPage()
@Component({
  selector: 'page-modal-gallery',
  templateUrl: 'modal-gallery.html',
})
export class ModalGalleryPage {
  @ViewChild(Content) content: Content;

  mDatas = {
    id: -1,
    currentView: 0
  }

  galery: Observable<Galery>;
  galeryLength = 0;
  isLoading = false;

  // for view
  photosContainer;
  availableScrLeft;
  onScroll = false;
  marginSize = 16;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public mAppControllerProvider: AppControllerProvider,
    public mChangeDetectorRef: ChangeDetectorRef,
    public navParams: NavParams) {
    if (navParams.data["id"]) {
      this.mDatas.id = navParams.data["id"];
    }
  }

  ionViewDidEnter() {
    this.photosContainer = <HTMLDivElement>document.getElementById("photos-container");
    this.getGaleryById(this.navParams.data["id"]);

  }

  onClickClose() {
    this.navCtrl.pop({ animate: false });
  }

  getGaleryById(id: number) {
    this.isLoading = true;
    this.galery = this.mAppControllerProvider.getGaleryById(id);
    this.galery.subscribe(data => {
      this.galeryLength = data.images.length;
      console.log(this.galeryLength);
      
      console.log("data", data);
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    })

  }

  onClickPrevious() {
    if (this.onScroll) {
      return;
    }
    if (this.mDatas.currentView > 0) {
      this.mDatas.currentView--;
    }
    this.fixScrollLeft();
  }

  onClickNext() {
    if (this.onScroll) {
      return;
    }
    if (this.mDatas.currentView < this.galeryLength - 1) {
      this.mDatas.currentView++;
    }
    this.fixScrollLeft();
  }

  fixScrollLeft() {
    let img = document.getElementById("photo-width");
    let imgWidth = img.clientWidth;
    this.mChangeDetectorRef.detectChanges();

    let fixedScrollLeft = this.mDatas.currentView * (imgWidth + this.marginSize) - 1 / 2 * this.content.getContentDimensions().contentWidth + 1 / 2 * imgWidth;
    let availableScrLeft = this.photosContainer.scrollWidth - this.photosContainer.clientWidth

    console.log(fixedScrollLeft);
    console.log(availableScrLeft);

    if (fixedScrollLeft < 0) {
      this.scrollLeftTo(0);
    } else if (fixedScrollLeft >= availableScrLeft) {
      this.scrollLeftTo(availableScrLeft);
    }
    else {
      this.scrollLeftTo(fixedScrollLeft);
    }
  }

  moveToImg(index) {
    this.mDatas.currentView = index;
    this.fixScrollLeft();
  }

  requestObject: any;
  pause = false;
  vel = 20;
  scrollLeftTo(fixedScrollLeft) {
    console.log(fixedScrollLeft);

    this.onScroll = true;
    if (this.pause) {
      this.pause = false;
      this.onScroll = false;
      if (this.requestObject)
        cancelAnimationFrame(this.requestObject);
    }
    else {
      if (fixedScrollLeft >= this.photosContainer.scrollLeft) {
        this.photosContainer.scrollLeft += this.vel;
        if (fixedScrollLeft <= this.photosContainer.scrollLeft) {
          this.photosContainer.scrollLeft = fixedScrollLeft;
          this.pause = true;
        }
      }
      else {
        this.photosContainer.scrollLeft -= this.vel;
        if (fixedScrollLeft >= this.photosContainer.scrollLeft) {
          this.photosContainer.scrollLeft = fixedScrollLeft;
          this.pause = true;
        }
      }
      this.requestObject = requestAnimationFrame(() => {
        this.scrollLeftTo(fixedScrollLeft);
      });
    }

  }

}
