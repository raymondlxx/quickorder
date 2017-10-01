import { Component, OnInit, Input } from '@angular/core';
import { RequestOptions, RequestMethod, Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Restaurant } from '../../../models/models';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { RestaurantService } from '../../../services/restaurant.service';
import { NavigatorService } from '../../../services/navigator.service';
import 'rxjs/add/operator/switchMap';
@Component({
	selector: 'app-restaurant-detail',
	templateUrl: './restaurant-detail.component.html',
	styleUrls: ['./restaurant-detail.component.scss'],
	providers: [RestaurantService, NavigatorService]
})
export class RestaurantDetailComponent implements OnInit {

	private model: Restaurant = new Restaurant();
	private isEdit: boolean = false;

	constructor(public http: Http,
		private router: Router,
		private route: ActivatedRoute,
		private service: RestaurantService,
		private navigatorService: NavigatorService
	) { }

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => this.service.getRestaurant(params['id']))
			.subscribe(item => this.model = item);
	}

}
