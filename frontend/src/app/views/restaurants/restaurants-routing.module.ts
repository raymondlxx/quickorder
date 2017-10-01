import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantAddComponent } from './restaurant-add.component';
import { RestaurantDetailComponent } from './restaurant-detail.component';

const routes: Routes = [
	{
		path: '',
		component: RestaurantsComponent,
		data: {
			title: '餐厅管理'
		}
	},
	{
		path: 'restaurant-add',
		component: RestaurantAddComponent,
		data: {
			title: '添加餐厅'
		}
	},
	{
		path: 'restaurant-detail/:id',
		component: RestaurantDetailComponent,
		data: {
			title: '餐厅详情'
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
