import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ModalController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';

import { AppControllerProvider } from '../../../providers/football/app-controller/app-controller';

import { Image } from '../../../providers/football/interfaces/image';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-fb-gallery',
  templateUrl: 'fb-gallery.html',
})
export class FbGalleryPage {
  @ViewChild(Content) content: Content;
  scrollSubject: Subject<string> = new Subject<string>();

  mDatas = {
    title: "Các khoảnh khắc đẹp trong giải đấu"
  }

  images: Array<Image> = [];
  isLoading = false;
  constructor(public navCtrl: NavController,
    public mChangeDetectorRef: ChangeDetectorRef,
    public mModalController: ModalController,
    public mAppControllerProvider: AppControllerProvider,
    public navParams: NavParams) {
    // this.loadImage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbGalleryPage');
  }

  loading;
  ionViewDidEnter() {
    this.loading = <HTMLElement>document.getElementById("loading-icon");

    this.loadImage();
    this.content.ionScroll.subscribe(event => {
      let header = <HTMLDivElement>document.getElementById("logo");
      let headerHeight = header.clientHeight;
      let scrollTop = event.scrollTop;
      let scrollHeight = this.content.getContentDimensions().scrollHeight;
      let contentHeight = this.content.getContentDimensions().contentHeight;
      let loadingHeight = scrollHeight - headerHeight - contentHeight * 1.5;

      if (!this.isLoading && (scrollTop >= loadingHeight)) {
        console.log("LOAD");
        this.loadImage();
      }
      // console.log(event.scrollTop);
      this.scrollSubject.next(event.scrollTop);
    })
  }

  loadImage() {
    this.isLoading = true;
    this.showLoading();
    console.log("isloading", this.isLoading);

    let newImg = this.mAppControllerProvider.loadMoreImage(this.images.length);
    try {
      newImg.subscribe(data => {
        console.log("img", data);
        for (let i = 0; i < data.images.length; i++) {
          this.images.push(data.images[i]);
        }
        this.isLoading = false;
        this.hideLoading();
        this.mChangeDetectorRef.detectChanges();

      });
    } catch (e) {
      // console.log(e);
      this.isLoading = false;
      this.hideLoading();
    }

  }

  hideLoading() {
    this.loading.classList.add("hidden");
  }

  showLoading() {
    this.loading.classList.remove("hidden");
  }

  onClickPhotosGroup(id) {
    console.log(id);

    let modal = this.mModalController.create("ModalGalleryPage", { id: id }, { cssClass: "modal-gallery" });

    modal.present({ animate: false });
  }

}