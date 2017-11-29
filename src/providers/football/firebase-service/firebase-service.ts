import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 

import * as firebase from 'firebase';
import 'firebase/firestore';

@Injectable()
export class FirebaseServiceProvider {
  db: firebase.firestore.Firestore;
  isUseFakeData = true;
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyDMEZoEtmor-T166lP9bGCR9FxqQP4eGik",
      authDomain: "bistrodancerapp.firebaseapp.com",
      databaseURL: "https://bistrodancerapp.firebaseio.com",
      projectId: "bistrodancerapp",
      storageBucket: "bistrodancerapp.appspot.com",
      messagingSenderId: "773087969883"
    });
    this.db = firebase.firestore();
  }

  getTableById(tableId: string): Observable<any> {
    if(this.isUseFakeData){
      return new Observable(observer=>{
        setTimeout(()=>{
          observer.next({
            id: tableId,
            name: "Bảng A",
            items: [
              {
              id: "1",
              clubId: "1",
              clubName:"Manchester United",
              clubLogo: "https://www.marketbeat.com/logos/manchester-united-plc-logo.jpg",
              won: 4,
              lost: 1,
              draw: 0,
              goalsScore: 10,
              goalsLost: 2,
              point: 12
            },
              {
              id: "2",
              clubId: "2",
              clubName:"Manchester City",
              clubLogo: "https://cdn.playbuzz.com/cdn/6904d38e-1799-4e98-8ca1-35faa058a2a9/b4cc2a89-b5be-4b27-963c-40f726a51256.jpg",
              won: 1,
              lost: 1,
              draw: 3,
              goalsScore: 5,
              goalsLost: 3,
              point: 6
            },
              {
              id: "3",
              clubId: "3",
              clubName:"Chelsea",
              clubLogo: "https://seeklogo.com/images/C/chelsea-fc-logo-A24FEB6BFB-seeklogo.com.png",
              won: 2,
              lost: 2,
              draw: 1,
              goalsScore: 5,
              goalsLost: 5,
              point: 7
            },
              {
              id: "4",
              clubId: "4",
              clubName:"Arsenal",
              clubLogo: "https://seeklogo.com/images/A/arsenal-logo-B27C071FE1-seeklogo.com.png",
              won: 3,
              lost: 1,
              draw: 1,
              goalsScore: 12,
              goalsLost: 6,
              point: 10
            },
          ]
          })
        }, 1000);
      })
    }
    
  }
  
  getVideoId(videoId: string): Observable<any>{
    if(this.isUseFakeData) return new Observable(obs => {
      setTimeout(() => {
        obs.next({
          id: videoId,
          name: "All video",
          items: [
            {
              id: "1",
              videoURL: "https://www.youtube.com/watch?v=pk1XQtfVH4Y",
              imgURL: "assets/imgs/1.jpg",
              title: "2017-18 NBA Season - Cleveland Cavaliers vs Philadelphia Sixers Full Highlights",
              description: " Đối đầu với “ngựa ô” Philadelphia 76ers, LeBron cùng với D-Wade đã dội một gáo nước lạnh và đưa những đôi chân đang bay cao như Simmons hay Embiid trở lại mặt đất. Với chiến thắng này, Cleveland Cavaliers đang dần tiến sát tốp đầu và hiện đang đứng thứ 3 miền Đông với thành tích 13-7",
              date: "27 tháng 11, 2017",
              duration: "09:38",
            },
            {
              id: "2",
              videoURL: "https://www.youtube.com/watch?v=ZtSraTslvPE",
              imgURL: "assets/imgs/3.jpg",
              title: "Detroit Pistons 118 - 108 Boston Celtics",
              description: "",
              date: "27 tháng 11, 2017",
              duration: "09:32",
            },
            {
              id: "3",
              videoURL: "https://www.youtube.com/watch?v=0DRayWcXi9c",
              imgURL: "assets/imgs/4.jpg",
              title: "Sacramento Kings 110 - 106 Golden State Warriors",
              description: "",
              date: "27 tháng 11, 2017",
              duration: "09:19",
            },
            {
              id: "4",
              videoURL: "https://www.youtube.com/watch?v=b3-6_W7UtXM",
              imgURL: "assets/imgs/5.jpg",
              title: "LA Lakers 115 - 120 LA Clippers",
              description: "",
              date: "27 tháng 11, 2017",
              duration: "09:30",
            },
            {
              id: "5",
              videoURL: "https://www.youtube.com/watch?v=NF8E4Mb6TGI",
              imgURL: "assets/imgs/6.jpg",
              title: "Dallas Maveicks 108 - 115 San Antonio Spurs",
              description: "",
              date: "27 tháng 11, 2017",
              duration: "09:27",
            }
          ]
        })
      }, 1000);
    })
  }
}
