import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Toast, ToastController, App } from 'ionic-angular';

import { Menu } from '../interfaces/menu';
import { Table } from '../interfaces/table';
import { TableMatches } from '../interfaces/table-matches';
import { Match, Schedule } from '../interfaces/match';
import { GaleryArr, Galery } from '../interfaces/image';

import { FirebaseServiceProvider } from "../firebase-service/firebase-service";
import { Observable } from 'rxjs/Observable';
import { FBSlides } from '../interfaces/fb-slide';
import { DonorsList } from '../interfaces/fb-donors';
import { Videos } from '../interfaces/fb-videos';
import { News, NewsInterface } from '../interfaces/news';


@Injectable()
export class AppControllerProvider {
  private toast: Toast;
  menuItems: Array<Menu> = [
    {
      id: 1,
      name: "Home",
      active: false,
      page: "FbHomePage",
      link: "fb-home"
    },
    {
      id: 2,
      name: "Tin tức",
      active: false,
      page: "FbNewsPage",
      link: "fb-news"
    },
    {
      id: 3,
      name: "Lịch thi đấu",
      active: false,
      page: "FbSchedulePage",
      link: "fb-schedule"
    },
    {
      id: 4,
      name: "Bảng xếp hạng",
      active: false,
      page: "FbTablesPage",
      link: "fb-tables"
    },
    {
      id: 5,
      name: "Video",
      active: false,
      page: "FbVideosPage",
      link: "fb-videos"
    },
    {
      id: 6,
      name: "Hình ảnh",
      active: false,
      page: "FbGalleryPage",
      link: "fb-gallery"
    },
    {
      id: 7,
      name: "Câu lạc bộ",
      active: false,
      page: "FbClubsPage",
      link: "fb-clubs"
    }
  ];
  constructor(
    public firebaseService: FirebaseServiceProvider,
    private app: App,
    private toastCtrl: ToastController) {
  }

  getMenu() {
    return this.menuItems;
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

  getNewsId(newsId: string): Observable<NewsInterface> {
    return this.firebaseService.getNewsId(newsId).map(elm => {
      return {
        id: elm.id,
        name: elm.name,
        items: elm.items
      }
    })
  }

  getNewsDetailByID(newID: string): Promise<News> {
    return this.firebaseService.getNewDetailByID(newID);
  }


  getVideoById(videoId: string): Observable<Videos> {
    return this.firebaseService.getVideoId(videoId).map(elm => {
      return {
        id: elm.id,
        name: elm.name,
        items: elm.items
      }
    })
  }

  getMatchesByTableId(tableId: string): Observable<TableMatches> {
    return this.firebaseService.getTableById(tableId).map(elm => {
      return {
        id: elm.id,
        name: elm.name,
        items: elm.items
      }
    })
  }

  getMatchById(matchId: number): Observable<Match> {
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

  loadMoreImage(from: number): Observable<GaleryArr> {
    if (from > 50) {
      return;
    }
    return this.firebaseService.loadImage(from).map(elm => {
      return {
        galeries: elm.images
      }
    })
  }

  getImageFBSlides(): Observable<FBSlides> {
    return this.firebaseService.getImageFBSlides().map(elm => {
      return {
        id: elm.id,
        items: elm.items
      }
    })
  }

  getGaleryById(id: number): Observable<Galery> {
    return this.firebaseService.getGaleryById(id).map(elm => {
      return {
        id: elm.id,
        title: elm.title,
        images: elm.images
      }
    })
  }

  getDornosList(): Observable<DonorsList> {
    return this.firebaseService.getDonorsList().map(elm => {
      return {
        id: elm.id,
        list: elm.list
      }
    })
  }

  getSchedule(id: number, from: number): Observable<Schedule>{
    if(from > 20){
      return;
    }
    return this.firebaseService.getSchedule(id, from).map(elm => {
      return {
        id: elm.id,
        matches: elm.matches
      }
    })
  }
}
