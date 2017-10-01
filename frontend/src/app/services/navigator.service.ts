import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigatorService {

	constructor(private router: Router) { }

	goToRestaurants() {
		this.router.navigate(['/components/restaurants']);
	}

	goToRestaurantEdit(id: string) {
		this.router.navigate(['/components/restaurant-add', id]);
	}

	goToRestaurantDetail(id: string) {
		this.router.navigate(['/components/restaurant-detail', id]);
	}

}
