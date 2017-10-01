import { Component, OnInit } from '@angular/core';
import { RequestOptions, RequestMethod, Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Restaurant } from '../../models/models';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { NavigatorService } from '../../services/navigator.service';



@Component({
	selector: 'app-dinner-tables',
	templateUrl: './dinner-tables.component.html',
	styleUrls: ['./dinner-tables.component.scss'],
	providers: [RestaurantService, NavigatorService]
})
export class DinnerTablesComponent implements OnInit {
	title: string = "餐桌";
	items: Restaurant[];


	constructor(
		private http: Http,
		private router: Router,
		private restaurantService: RestaurantService,
		private navigatorService: NavigatorService) { }

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

	}
	edit(item:Restaurant){
		this.navigatorService.goToRestaurantEdit(item.ID);
	}

	viewDetail(item:Restaurant){
		this.navigatorService.goToRestaurantDetail(item.ID);
	}
}
