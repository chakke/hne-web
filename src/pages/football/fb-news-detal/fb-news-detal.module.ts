import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbNewsDetalPage } from './fb-news-detal';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    FbNewsDetalPage,
  ],
  imports: [
    IonicPageModule.forChild(FbNewsDetalPage),
    ComponentsModule
  ],
})
export class FbNewsDetalPageModule {}
