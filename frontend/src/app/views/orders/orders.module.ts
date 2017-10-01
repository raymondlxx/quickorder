import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		CommonModule,
		OrdersRoutingModule
	],
	declarations: []
})
export class OrdersModule { }
