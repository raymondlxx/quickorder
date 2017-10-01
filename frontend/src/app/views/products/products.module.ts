import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form.component';

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		CommonModule,
		ProductsRoutingModule
	],
	declarations: [
		ProductsComponent,
		ProductFormComponent
	]
})
export class ProductsModule { }
