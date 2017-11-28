import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbClubsPage } from './fb-clubs';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FbClubsPage,
  ],
  imports: [
    IonicPageModule.forChild(FbClubsPage),
    ComponentsModule
  ],
})
export class FbClubsPageModule {}
