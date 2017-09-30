import { Component, OnInit } from '@angular/core';
import { RequestOptions, RequestMethod,Headers, Http, Response, URLSearchParams } from '@angular/http';
import { RestaurantService } from '../../../shared/services/restaurant.service';

@Component({
	selector: 'app-restaurants',
	templateUrl: './restaurants.component.html',
	styleUrls: ['./restaurants.component.scss'],
	providers:[RestaurantService]
})
export class RestaurantsComponent implements OnInit {

	title: string;
	items: Array<{ name: string, createTime: number, updateTime: number }>;
	constructor(private service: RestaurantService,private http:Http) { }

	ngOnInit() {
		this.title = "餐厅";

		this.http.get('http://localhost:7777/api/restaurants')
		.subscribe((res: Response) => {
			this.items = res.json();
		});

	}

}
