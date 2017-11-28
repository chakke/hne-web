import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbNewsPage } from './fb-news';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    FbNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(FbNewsPage),
    ComponentsModule
  ],
})
export class FbNewsPageModule { }
