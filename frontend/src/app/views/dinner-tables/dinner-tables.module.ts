import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { DinnerTablesRoutingModule } from './dinner-tables-routing.module';
import { DinnerTablesComponent } from './dinner-tables.component';
import { DinnerTableFormComponent } from './dinner-table-form.component';
import { DinnerTableDetailComponent } from './dinner-table-detail.component';

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		CommonModule,
		DinnerTablesRoutingModule
	],
	declarations: [
		DinnerTablesComponent,
		DinnerTableFormComponent,
		DinnerTableDetailComponent
	]
})
export class DinnerTablesModule { }
