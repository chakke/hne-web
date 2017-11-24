import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbHomePage } from './fb-home';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FbHomePage,
  ],
  imports: [
    IonicPageModule.forChild(FbHomePage),
    ComponentsModule
  ],
})
export class FbHomePageModule { }
