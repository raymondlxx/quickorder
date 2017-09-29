import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../shared/services/restaurant.service';
import { Response } from '@angular/http';
@Component({
	selector: 'app-restaurants',
	templateUrl: './restaurants.component.html',
	styleUrls: ['./restaurants.component.scss'],
	providers:[RestaurantService]
})
export class RestaurantsComponent implements OnInit {

	title: string;
	items: Array<{ name: string, createTime: number, updateTime: number }>;
	constructor(private service: RestaurantService) { }

	ngOnInit() {
		this.title = "餐厅";

		this.service.getAll().subscribe((res: Response) => {
			this.items = res.json();
		});


	}

}
