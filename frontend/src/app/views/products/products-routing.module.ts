import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form.component';
const routes: Routes = [
	{
		path: '',
		component: ProductsComponent,
		data: {
			title: '产品管理'
		},

	},
	{
		path: 'product-form',
		component: ProductFormComponent,
		data: {
			title: '新建产品'
		}
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductsRoutingModule { }
