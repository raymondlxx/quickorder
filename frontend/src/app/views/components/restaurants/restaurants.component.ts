import { Component, OnInit } from '@angular/core';
import { RequestOptions, RequestMethod, Headers, Http, Response, URLSearchParams } from '@angular/http';
import { RestaurantService } from '../../../shared/services/restaurant.service';
import { Restaurant } from '../../../models/models';
import { Router } from '@angular/router';

@Component({
	selector: 'app-restaurants',
	templateUrl: './restaurants.component.html',
	styleUrls: ['./restaurants.component.scss'],
	providers: [RestaurantService]
})
export class RestaurantsComponent implements OnInit {

	title: string;
	items: Array<Restaurant>;
	constructor(private service: RestaurantService, private http: Http, private router: Router) { }

	ngOnInit() {
		this.title = "餐厅";

		this.loadAll();
	}

	loadAll() {
		this.http.get('http://localhost:7777/api/restaurants/GetAll')
			.subscribe((res: Response) => {
				this.items = res.json();
			});
	}

	delete(id: string) {

		let body = { ID: id };
		let options = {
			headers: new Headers({
				'Content-Type': 'application/x-www-form-urlencoded',
			})
		};

		this.http.post('http://localhost:7777/api/restaurants/DeleteByID', body, options)
			.subscribe((res: Response) => {
				this.loadAll();
			});

	}

}
