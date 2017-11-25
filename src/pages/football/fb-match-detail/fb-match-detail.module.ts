import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbMatchDetailPage } from './fb-match-detail';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FbMatchDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FbMatchDetailPage),
    ComponentsModule
  ],
})
export class FbMatchDetailPageModule {}
