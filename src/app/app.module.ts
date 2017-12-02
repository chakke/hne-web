import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component'; 

import { HttpModule } from '@angular/http';

import { FootballHttpServiceProvider } from '../providers/football/football-http-service/football-http-service';
import { HttpService } from '../providers/http-service';
import { ProgressControllerProvider } from '../providers/football/progress-controller/progress-controller';
import { ComponentsModule } from '../components/components.module';
import { AppControllerProvider } from '../providers/football/app-controller/app-controller';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
// import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseServiceProvider } from '../providers/football/firebase-service/firebase-service';

export const firebaseConfig = {
  apiKey: "AIzaSyDMEZoEtmor-T166lP9bGCR9FxqQP4eGik",
  authDomain: "bistrodancerapp.firebaseapp.com",
  databaseURL: "https://bistrodancerapp.firebaseio.com",
  projectId: "bistrodancerapp",
  storageBucket: "bistrodancerapp.appspot.com",
  messagingSenderId: "773087969883"
};


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FootballHttpServiceProvider,
    HttpService,
    ProgressControllerProvider,
    AppControllerProvider,
    AngularFireDatabase,
    // AngularFirestore,
    // AngularFirestoreDocument,
    FirebaseServiceProvider,
  ]
})
export class AppModule { }
