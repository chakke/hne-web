import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Toast, ToastController, App } from 'ionic-angular';

import { Menu } from '../interfaces/menu';
import { Table } from '../interfaces/table'; 
import { TableMatches } from '../interfaces/table-matches'; 
import { Match } from '../interfaces/match'; 
import { ImageArr } from '../interfaces/image'; 

import { FirebaseServiceProvider } from "../firebase-service/firebase-service";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppControllerProvider {
  private toast: Toast;
  menuItems: Array<Menu> = [];
  constructor(
    public firebaseService: FirebaseServiceProvider,
    private app: App,
    private toastCtrl: ToastController) {
  }

  setRootPage(page: any, param?: any) {
    if (this.setActivePage(page)) {
      this.app.getActiveNav().setRoot(page, param);
    }
  }

  pushPage(page: any, param?: any) {
    if (this.setActivePage(page)) {
      this.app.getActiveNav().push(page, param);
    }
  }

  setActivePage(page: any): boolean {
    if (page && page != "") {
      //Tìm menu đang active hiện tại
      let activeIndex = this.menuItems.findIndex(elm => {
        return elm.active;
      })
      if (activeIndex > -1) {
        //Nếu trùng rồi thì thôi
        if (this.menuItems[activeIndex].page == page || this.menuItems[activeIndex].link == page) {
          return false;
        } else {
          this.menuItems[activeIndex].active = false;
        }
      }
      for (let item of this.menuItems) {
        if (item.page == page || item.link == page) {
          item.active = true;
        }
      }
      return true;
    }
    return false;
  }

  showToast(message: string, duration?: number, position?: string) {
    if (this.toast) this.toast.dismiss();
    this.toast = this.toastCtrl.create({
      message: message,
      duration: (duration ? duration : 3000),
      position: (position ? position : "bottom")
    })
    this.toast.dismiss();
  }

  hideToast() {
    if (this.toast) this.toast.dismiss();
    this.toast = null;
  }

  getTableById(tableId: string): Observable<Table> {
    return this.firebaseService.getTableById(tableId).map(elm => {
      return {
        id: elm.id,
        name: elm.name,
        items: elm.items
      }
    })
  } 

  getMatchesByTableId(tableId: string): Observable<TableMatches>{
    return this.firebaseService.getTableById(tableId).map(elm => {
      return {
        id: elm.id,
        name: elm.name,
        items: elm.items
      }
    })
  }

  getMatchById(matchId: number): Observable<Match>{
    return this.firebaseService.getMatchById(matchId).map(elm => {
      return {
        id: elm.id,
        time: elm.time,
        homeFc: elm.homeFc,
        homeLogo: elm.homeLogo,
        homeResult: elm.homeResult,
        guestFc: elm.guestFc,
        guestLogo: elm.guestLogo,
        guestResult: elm.guestResult,
        detail: elm.detail
      }
    })
  }

  loadMoreImage(from: number): Observable<ImageArr>{
    if(from > 30){
      return;
    }
    return this.firebaseService.loadImage(from).map(elm => {
      return {
        images: elm.images
      }
    })
  }
}
