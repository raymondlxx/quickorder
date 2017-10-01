import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoryAddComponent } from './category-add.component';

const routes: Routes = [
	{
		path: "",
		component: CategoriesComponent
	},
	{
		path: "category-add",
		component: CategoryAddComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CategoriesRoutingModule { }
