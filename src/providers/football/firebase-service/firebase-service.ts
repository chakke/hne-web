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
}
