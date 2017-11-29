import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbProgressComponent } from './fb-progress/fb-progress';
import { FbTitleComponent } from './fb-title/fb-title';
import { TableDetailComponent } from './table-detail/table-detail';
import { FbLoaderComponent } from './fb-loader/fb-loader';
import { FbHeaderComponent } from './fb-header/fb-header';
import { FbFooterComponent } from './fb-footer/fb-footer';
import { VideoLastestComponent } from './video-lastest/video-lastest';

@NgModule({
	declarations: [
		FbProgressComponent,
		FbTitleComponent,
		TableDetailComponent,
		FbLoaderComponent,
		FbHeaderComponent,
		FbFooterComponent,
		VideoLastestComponent,
	],
	imports: [IonicPageModule],
	exports: [
		FbProgressComponent,
		FbTitleComponent,
		TableDetailComponent,
		FbLoaderComponent,
		FbHeaderComponent,
		FbFooterComponent,
		VideoLastestComponent,
	]
})
export class ComponentsModule { }
