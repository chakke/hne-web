import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbVideosPage } from './fb-videos';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  declarations: [
    FbVideosPage,
  ],
  imports: [
    IonicPageModule.forChild(FbVideosPage),
    ComponentsModule
  ],
})
export class FbVideosPageModule { }
