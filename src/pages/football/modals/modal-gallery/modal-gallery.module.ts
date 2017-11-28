import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalGalleryPage } from './modal-gallery';

@NgModule({
  declarations: [
    ModalGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalGalleryPage),
  ],
})
export class ModalGalleryPageModule {}
