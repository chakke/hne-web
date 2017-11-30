import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbSchedulePage } from './fb-schedule';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FbSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(FbSchedulePage),
    ComponentsModule
  ],
})
export class FbSchedulePageModule {}
