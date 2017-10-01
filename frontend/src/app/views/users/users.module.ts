import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		CommonModule,
		UsersRoutingModule
	],
	declarations: [
		UsersComponent
	]
})
export class UsersModule { }
