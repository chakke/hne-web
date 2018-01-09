import { Component } from '@angular/core';

@Component({
  selector: 'fb-match-detail',
  templateUrl: 'fb-match-detail.html'
})
export class FbMatchDetailComponent {

  mDatas = {
    time: "2017-11-28 18:00",
    stadium: "Sân ACB 2, Mỹ Đình, Hà Nội",
    mainImg: "http://www.hanoielevencup.com/uploads/media/61/IMG_2167-min.jpg",
    homeId: 5,
    homeFc: "HANEL OCEAN",
    homeLogo: "http://vietfootball.vn/data/uploads/2017/09/Hanel5.png",
    homeResult: "2",
    guestId: 6,
    guestFc: "VĂN MINH",
    guestLogo: "http://vietfootball.vn/data/uploads/2017/09/VanMinh5.png",
    guestResult: "4",
    status: 2
  }


  constructor() {

  }

}
