import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalGalleryPage } from './modal-gallery';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ModalGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalGalleryPage),
    ComponentsModule
  ],
})
export class ModalGalleryPageModule {}
