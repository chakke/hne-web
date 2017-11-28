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
    if (this.isUseFakeData) {
      if (tableId == "1") {
        return new Observable(observer => {
          setTimeout(() => {
            observer.next({
              id: tableId,
              name: "Bảng A",
              items: [
                {
                  id: "1",
                  clubId: "1",
                  clubName: "Manchester United",
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
                  clubName: "Manchester City",
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
                  clubName: "Chelsea",
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
                  clubName: "Arsenal",
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
      else if (tableId == "2") {
        return new Observable(observer => {
          setTimeout(() => {
            observer.next({
              id: tableId,
              name: "Hanoi Eleven Cup 2016 - Season 1",
              items: [
                {
                  id: 1,
                  time: "Chủ nhật, 4 thg 12, 2016",
                  matches: [
                    {
                      id: 1,
                      homeFc: "Tin Lớn & Anh Em",
                      homeLogo: "http://vietfootball.vn/data/uploads/2017/09/TinLonAnhEm.png",
                      homeResult: 2,
                      guestFc: "TopGroup",
                      guestLogo: "http://vietfootball.vn/data/uploads/2017/09/TopGroup5.png",
                      guestResult: 10
                    },
                    {
                      id: 2,
                      homeFc: "CƯỜNG QUỐC",
                      homeLogo: "http://vietfootball.vn/data/uploads/2017/09/CuongQuoc5.png",
                      homeResult: 20,
                      guestFc: "VĂN MINH",
                      guestLogo: "http://vietfootball.vn/data/uploads/2017/09/VanMinh5.png",
                      guestResult: 10
                    },
                  ]
                },
                {
                  id: 2,
                  time: "Chủ nhật, 4 thg 12, 2016",
                  matches: [
                    {
                      id: 3,
                      homeFc: "Tin Lớn & Anh Em",
                      homeLogo: "http://vietfootball.vn/data/uploads/2017/09/TinLonAnhEm.png",
                      homeResult: 2,
                      guestFc: "TopGroup",
                      guestLogo: "http://vietfootball.vn/data/uploads/2017/09/TopGroup5.png",
                      guestResult: 10
                    },
                    {
                      id: 4,
                      homeFc: "CƯỜNG QUỐC",
                      homeLogo: "http://vietfootball.vn/data/uploads/2017/09/CuongQuoc5.png",
                      homeResult: 20,
                      guestFc: "VĂN MINH",
                      guestLogo: "http://vietfootball.vn/data/uploads/2017/09/VanMinh5.png",
                      guestResult: 10
                    },
                  ]
                },
                {
                  id: 3,
                  time: "Chủ nhật, 4 thg 12, 2016",
                  matches: [
                    {
                      id: 4,
                      homeFc: "Tin Lớn & Anh Em",
                      homeLogo: "http://vietfootball.vn/data/uploads/2017/09/TinLonAnhEm.png",
                      homeResult: 2,
                      guestFc: "TopGroup",
                      guestLogo: "http://vietfootball.vn/data/uploads/2017/09/TopGroup5.png",
                      guestResult: 10
                    },
                    {
                      id: 5,
                      homeFc: "CƯỜNG QUỐC",
                      homeLogo: "http://vietfootball.vn/data/uploads/2017/09/CuongQuoc5.png",
                      homeResult: 20,
                      guestFc: "VĂN MINH",
                      guestLogo: "http://vietfootball.vn/data/uploads/2017/09/VanMinh5.png",
                      guestResult: 10
                    },
                  ]
                }
              ]
            })
          }, 0);
        })

      }
    }

  }

  getMatchById(matchId: number): Observable<any> {
    if (this.isUseFakeData) {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next({
            id: matchId,
            time: "chủ nhật, 4 thg 12, 2016",
            homeFc: "Tin Lớn & Anh Em",
            homeLogo: "http://vietfootball.vn/data/uploads/2017/09/TinLonAnhEm.png",
            homeResult: 2,
            guestFc: "TopGroup",
            guestLogo: "http://vietfootball.vn/data/uploads/2017/09/TopGroup5.png",
            guestResult: 10,
            detail:"Goal:            MV Corp: Nguyễn Kim Mạnh (9) 21′, 39′            Moon: Nguyễn Đình Cường (12) 32′            Thẻ vàng:            MV Corp: Bùi Minh Quang (7) 14′            Thẻ đỏ:            Moon: Vũ Hoàng Thuận (6) 35′, 49′ (2TV)"
          })
        }, 2000);
      })
    }

  }

  getNewsId(newsId: string): Observable<any> {
    if (this.isUseFakeData) return new Observable(obserable => {
      setTimeout(() => {
        obserable.next({
          id: newsId,
          name: "Tất cả các bài báo",
          items: [
            {
              id: "1",
              title: "Vòng loại Special Nhí Cup diễn ra sôi nổi. Các cầu thủ có nguy cơ ngủ trong trận đấu.",
              description: "Vòng loại Special Nhí Cup diễn ra sôi nổi. Các cầu thủ có nguy cơ ngủ trong trận đấu. Vòng loại Special Nhí Cup diễn ra sôi nổi. Các cầu thủ có nguy cơ ngủ trong trận đấu.",
              pictureUrl: "assets/test/fb-pic2.jpg",
              date: "25 thg 11, 2017",
              comment: 1,
              tag: "Hanoi Eleven Cup",
            },{
              id: "",
              title: "Pha sút phạt tỉ đô của cầu thủ số 10 nhưng không biết tên và cũng không biết anh ta ở CLB nào.",
              description: "Pha sút phạt tỉ đô của cầu thủ số 10 nhưng không biết tên và cũng không biết anh ta ở CLB nào. Pha sút phạt tỉ đô của cầu thủ số 10 nhưng không biết tên và cũng không biết anh ta ở CLB nào.",
              pictureUrl: "assets/test/fb-pic1.jpg",
              date: "23 thg 11, 2017",
              comment: 2,
              tag: "Hanoi Eleven Cup"
            },{
              id: "",
              title: "Chút xíu nữa thôi là Ibrahimovic tung tuyệt khiến cầu thủ đội bạn bò trên sân.",
              description: "Chút xíu nữa thôi là Ibrahimovic tung tuyệt khiến cầu thủ đội bạn bò trên sân. Chút xíu nữa thôi là Ibrahimovic tung tuyệt khiến cầu thủ đội bạn bò trên sân.",
              pictureUrl: "assets/test/fb-pic3.jpg",
              date: "22 thg 11, 2017",
              comment: 6,
              tag: "Ao Làng Cup"
            },{
              id: "",
              title: "Lễ bế mạc giải vô địch bóng đá ao làng diễn ra tại SVĐ Cỏ Mỹ",
              description: "Lễ bế mạc giải vô địch bóng đá ao làng diễn ra tại SVĐ Cỏ Mỹ diễn ra hết sức sôi nổi cùng 16 đội bóng đến từ các bản cùng tranh tài",
              pictureUrl: "assets/test/fb-pic4.jpg",
              date: "21 thg 11, 2017",
              comment: 69,
              tag: "Bản Mới Cup"
            },{
              id: "",
              title: "Phóng viên đưa tin bọ bóng bay trúng đầu",
              description: "Phóng viên Lò A Sửu tại trận đấu giữa FC Nậm Cháy và FC A Pó trong lúc đưa tin bị bóng từ chân của VĐV trên sên bay vào đầu ngã lăn quay. Hiện tại vẫn chưa biết chính xác ai là thủ phạm",
              pictureUrl: "assets/test/fb-pic5.jpg",
              date: "20 thg 11, 2017",
              comment: 96,
              tag: "Lom Dom Cup"
            }
          ]
        })
      }, 1000);
    })
  }

  getImageFBSlides(): Observable<any>{
    if(this.isUseFakeData){
      return new Observable(observable=>{
        setTimeout(() => {
          observable.next({
            id: "1",
            items:[
              {
                nameOfClub1: "B-gate",
                nameOfClub2: "ManU",
                numberOfHaft: 1,
                arrayImage: [
                  "assets/test/fb-pic1.jpg",
                  "assets/test/fb-pic2.jpg",
                  "assets/test/fb-pic3.jpg",
                  "assets/test/fb-pic4.jpg",
                  "assets/test/fb-pic5.jpg",
                ]
              },{
                nameOfClub1: "Team1",
                nameOfClub2: "Team2",
                numberOfHaft: 2,
                arrayImage: [
                  "assets/test/fb-pic2.jpg",
                  "assets/test/fb-pic1.jpg",
                  "assets/test/fb-pic3.jpg",
                  "assets/test/fb-pic4.jpg",
                  "assets/test/fb-pic5.jpg",
                ]
              },{
                nameOfClub1: "Team1",
                nameOfClub2: "Team2",
                numberOfHaft: 2,
                arrayImage: [
                  "assets/test/fb-pic3.jpg",
                  "assets/test/fb-pic2.jpg",
                  "assets/test/fb-pic1.jpg",
                  "assets/test/fb-pic4.jpg",
                  "assets/test/fb-pic5.jpg",
                ]
              },{
                nameOfClub1: "Team2",
                nameOfClub2: "Team3",
                numberOfHaft: 2,
                arrayImage: [
                  "assets/test/fb-pic4.jpg",
                  "assets/test/fb-pic1.jpg",
                  "assets/test/fb-pic3.jpg",
                  "assets/test/fb-pic1.jpg",
                  "assets/test/fb-pic5.jpg",
                ]
              }
              ,{
                nameOfClub1: "Team4",
                nameOfClub2: "Team5",
                numberOfHaft: 2,
                arrayImage: [
                  "assets/test/fb-pic5.jpg",
                  "assets/test/fb-pic2.jpg",
                  "assets/test/fb-pic3.jpg",
                  "assets/test/fb-pic4.jpg",
                  "assets/test/fb-pic5.jpg",
                ]
              }
            ]
           
          })
        }, 2000);
        
      })
    }
  }
}
