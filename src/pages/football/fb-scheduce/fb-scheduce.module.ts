import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbScheducePage } from './fb-scheduce';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FbScheducePage,
  ],
  imports: [
    IonicPageModule.forChild(FbScheducePage),
    ComponentsModule
  ],
})
export class FbScheducePageModule {}
