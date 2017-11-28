import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbTablesPage } from './fb-tables';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FbTablesPage,
  ],
  imports: [
    IonicPageModule.forChild(FbTablesPage),
    ComponentsModule
  ],
})
export class FbTablesPageModule {}
