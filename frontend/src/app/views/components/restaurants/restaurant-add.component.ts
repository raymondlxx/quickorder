import { Component, OnInit, Input } from '@angular/core';
import { RequestOptions, RequestMethod,Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import { Restaurant } from '../../../models/models';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'app-restaurant-add',
	templateUrl: './restaurant-add.component.html',
	styleUrls: ['./restaurant-add.component.scss']
})
export class RestaurantAddComponent implements OnInit {

	@Input() restaurantAddModal;

	model = new Restaurant("", "", "");

	constructor(public http: Http,private router:Router) { }

	ngOnInit() {

	}

	onSubmit() {
		console.log(this.model);
		let body = this.model;
		let options = {    headers: new Headers({
			'Content-Type': 'application/x-www-form-urlencoded',
		})};

		this.http.post('http://localhost:7777/api/restaurants', body,options)
		.subscribe((res: Response) => {
			this.router.navigate(['/components/restaurants'])
		});
	}



}
