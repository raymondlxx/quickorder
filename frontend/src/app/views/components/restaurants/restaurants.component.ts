import { Component, OnInit } from '@angular/core';
import { RequestOptions, RequestMethod, Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Restaurant } from '../../../models/models';
import { Router } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';
import { NavigatorService } from '../../../services/navigator.service';

@Component({
	selector: 'app-restaurants',
	templateUrl: './restaurants.component.html',
	styleUrls: ['./restaurants.component.scss'],
	providers: [RestaurantService, NavigatorService]
})
export class RestaurantsComponent implements OnInit {

	title: string = "餐厅";
	items: Restaurant[];


	constructor(
		private http: Http,
		private router: Router,
		private restaurantService: RestaurantService) { }

	ngOnInit() {
		this.loadAll();
	}


	loadAll() {
		let self = this;
		let result = this.restaurantService.getRestaurants();
		result.then(restaurants => self.items = restaurants);
	}

	delete(item: Restaurant) {

		this.restaurantService.delete(item).then(()=>{

			this.loadAll();
		});
		// let body = { ID: item.ID };

		// let options = {
		// 	headers: new Headers({
		// 		'Content-Type': 'application/x-www-form-urlencoded',
		// 	})
		// };

		// this.http.post('http://localhost:7777/Rpi/Restaurants/DeleteByID', body, options)
		// 	.subscribe((res: Response) => {
		// 		this.loadAll();
		// 	});

	}
	edit(item:Restaurant){
		
	}

}
