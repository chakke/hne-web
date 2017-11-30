import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbProgressComponent } from './fb-progress/fb-progress';
import { FbTitleComponent } from './fb-title/fb-title';
import { TableDetailComponent } from './table-detail/table-detail';
import { FbLoaderComponent } from './fb-loader/fb-loader';
import { FbHeaderComponent } from './fb-header/fb-header';
import { FbFooterComponent } from './fb-footer/fb-footer';

import { MainNewsComponent } from './main-news/main-news';
import { TableMatchesComponent } from './table-matches/table-matches';
import { FbSpinnerComponent } from './fb-spinner/fb-spinner';
import { FbHomeSliderComponent } from './fb-home-slider/fb-home-slider';
import { DonorsListComponent } from './donors-list/donors-list';
import { FbBannerComponent } from './fb-banner/fb-banner';

import { VideoLastestComponent } from './video-lastest/video-lastest';

@NgModule({
	declarations: [
		FbProgressComponent,
		FbTitleComponent,
		TableDetailComponent,
		FbLoaderComponent,
		FbHeaderComponent,
		FbFooterComponent,
		TableMatchesComponent,
		FbSpinnerComponent,
		MainNewsComponent,
		TableMatchesComponent,
		FbHomeSliderComponent,
		DonorsListComponent,
		FbBannerComponent,
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
		TableMatchesComponent,
		FbSpinnerComponent,
		MainNewsComponent,
		TableMatchesComponent,
		FbHomeSliderComponent,
		DonorsListComponent,
		FbBannerComponent,
		FbHeaderComponent,
		FbFooterComponent,
		VideoLastestComponent,
	]
})
export class ComponentsModule { }
