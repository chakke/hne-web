import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppControllerProvider } from '../providers/football/app-controller/app-controller';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: any = "FbHomePage";
  rootPage: any = "FbGalleryPage";

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private app: App,
    private appController: AppControllerProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngAfterViewInit() {
    this.app.getActiveNav().viewWillEnter.subscribe(event => {
      this.appController.setActivePage(event.id);
    })
  }
}

