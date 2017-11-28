import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbImagesPage } from './fb-images';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FbImagesPage,
  ],
  imports: [
    IonicPageModule.forChild(FbImagesPage),
    ComponentsModule
  ],
})
export class FbImagesPageModule {}
