import { Component, OnInit } from '@angular/core';
import { RequestOptions, RequestMethod, Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Restaurant, GetByQueryRequest, GetByQueryResponse, PagingArg } from '../../models/models';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { NavigatorService } from '../../services/navigator.service';


@Component({
	selector: 'app-restaurants',
	templateUrl: './restaurants.component.html',
	styleUrls: ['./restaurants.component.scss'],
	providers: [RestaurantService, NavigatorService]
})
export class RestaurantsComponent implements OnInit {

	title: string = "餐厅";
	items: Restaurant[];
	pageSize: number = 10;
	pageIndex: number = 1;
	totalCount: number = 0;

	constructor(
		private http: Http,
		private router: Router,
		private restaurantService: RestaurantService,
		private navigatorService: NavigatorService) { }

	ngOnInit() {
		this.loadAll();
	}


	bindpage(pageIndex: number) {
		this.pageIndex = pageIndex;
		this.loadAll();
	}

	loadAll() {
		let self = this;

		let arg = new GetByQueryRequest();
		arg.Paging = new PagingArg(this.pageIndex, this.pageSize);

		let result = this.restaurantService.getRestaurantsByQuery(arg);
		result.then(response => {
			let result = response as GetByQueryResponse;
			self.items = result.Items;
			self.totalCount = result.TotalCount;
			self.pageIndex = result.PageIndex;
			console.log(response);
		});
	}

	delete(item: Restaurant) {

		this.restaurantService.delete(item).then(() => {

			this.loadAll();
		});

	}
	edit(item: Restaurant) {
		this.navigatorService.goToRestaurantEdit(item.ID);
	}

	viewDetail(item: Restaurant) {
		this.navigatorService.goToRestaurantDetail(item.ID);
	}

}
