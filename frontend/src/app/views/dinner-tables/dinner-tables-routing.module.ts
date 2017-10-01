import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinnerTablesComponent } from './dinner-tables.component';

const routes: Routes = [
	{

		path: "",
		component: DinnerTablesComponent,
		data: {
			title: "餐桌管理"
		}
	},
	{

		path: "",
		component: DinnerTablesComponent,
		data: {
			title: "餐桌管理"
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DinnerTablesRoutingModule { }
