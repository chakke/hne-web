import { Injectable } from '@angular/core';
import { HttpService, ParamBuilder } from '../../http-service';
import { ToastController, Toast } from 'ionic-angular';
import 'rxjs/Rx';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class FootballHttpServiceProvider {
  toast: Toast = null;
  isUseFakeData = true;

  constructor(private httpService: HttpService, private toastCtrl: ToastController) {
  }

  requestGet(url: string, param: string) {
    return this.httpService.requestGet(url, param).catch(error => {
      console.log("Error in http request GET " + url, error.status);
      // if (error.status == 0) {
      //   if (!this.toast) {
      //     this.toast = this.toastCtrl.create({
      //       message: "No internet connection!",
      //       position: "top"
      //     })
      //     this.toast.present();
      //     setTimeout(() => {
      //       if (this.toast)
      //         this.toast.dismiss();
      //       this.toast = null;
      //     }, 2000)
      //   }
      // }
    });
  }

  requestPost(url: string, param: string) {
    return this.httpService.requestPost(url, param).catch(error => {
      console.log("Error in http request POST " + url, error.status);
      // if (error.status == 0) {
      //   if (!this.toast) {
      //     this.toast = this.toastCtrl.create({
      //       message: "No internet connection!",
      //       position: "top"
      //     })
      //     this.toast.present();
      //     setTimeout(() => {
      //       if (this.toast)
      //         this.toast.dismiss();
      //       this.toast = null;
      //     }, 2000)
      //   }
      // }
    });;
  }

  getSomeData() {
    if (this.isUseFakeData) return this.requestGet("assets/data.json", "");
    return this.requestGet("serviceUrl", "");
  }

  testConnection(){
    return this.requestGet("https://jsonplaceholder.typicode.com/photos","");
  }

}
