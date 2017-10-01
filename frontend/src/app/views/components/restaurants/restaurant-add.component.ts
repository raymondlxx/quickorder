import { Component, OnInit, Input } from '@angular/core';
import { RequestOptions, RequestMethod, Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Restaurant } from '../../../models/models';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { RestaurantService } from '../../../services/restaurant.service';
import { NavigatorService } from '../../../services/navigator.service';



@Component({
	selector: 'app-restaurant-add',
	templateUrl: './restaurant-add.component.html',
	styleUrls: ['./restaurant-add.component.scss'],
	providers:[RestaurantService,NavigatorService]
})
export class RestaurantAddComponent implements OnInit {

	private model: Restaurant = new Restaurant();

	constructor(public http: Http,
		private router: Router,
		private service: RestaurantService,
		private navigatorService: NavigatorService
	) { }

	ngOnInit() { }

	onSubmit() {

		let item = this.model;

		this.service.create(item).then(() => {
			this.navigatorService.goToRestaurants();
		});


		// let body = this.model;

		// let options = {
		// 	headers: new Headers({
		// 		//'Content-Type': 'application/x-www-form-urlencoded',
		// 		'Content-Type': 'application/json',
		// 	})
		// };

		// this.http.post('http://localhost:7777/Api/Restaurants/Create', body, options)
		// 	.subscribe((res: Response) => {
		// 		this.router.navigate(['/components/restaurants']);
		// 	});
	}



}
