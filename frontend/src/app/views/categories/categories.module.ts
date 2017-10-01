import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryAddComponent } from './category-add.component';

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		CommonModule,
		CategoriesRoutingModule
	],
	declarations: [
		CategoriesComponent,
		CategoryAddComponent
	]
})
export class CategoriesModule { }
