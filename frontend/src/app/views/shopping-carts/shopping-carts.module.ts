import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ShoppingCartsRoutingModule } from './shopping-carts-routing.module';

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		CommonModule,
		ShoppingCartsRoutingModule
	],
	declarations: []
})
export class ShoppingCartsModule { }
