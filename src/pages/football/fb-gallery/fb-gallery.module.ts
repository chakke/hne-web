import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbGalleryPage } from './fb-gallery';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FbGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(FbGalleryPage),
    ComponentsModule
  ],
})
export class FbGalleryPageModule {}
