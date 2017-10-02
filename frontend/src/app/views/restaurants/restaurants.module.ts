import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantAddComponent } from './restaurant-add.component';
import { RestaurantDetailComponent } from './restaurant-detail.component';
import { PagingNavComponent } from '../../components/paging-nav/paging-nav.component';

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		CommonModule,
		RestaurantsRoutingModule
	],
	declarations: [
		RestaurantsComponent,
		RestaurantAddComponent,
		RestaurantDetailComponent,
		PagingNavComponent
	]
})
export class RestaurantsModule { }
