import { Component, Input, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { Category } from '../../../models/models';

@Component({
	selector: 'app-category-add',
	templateUrl: './category-add.component.html',
	styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
	baseUrl = "http://localhost:54259/api";

	model = new Category("");

	constructor() { }

	ngOnInit() {

	}



	onSubmit() {
		console.log(this.model.name);

		const body = { name: this.model.name };

	}


}
