import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigatorService {

	constructor(private router: Router) { }

	goToRestaurants() {
		this.router.navigate(['restaurants']);
	}

	goToRestaurantEdit(id: string) {
		this.router.navigate(['restaurants/restaurant-add', id]);
	}

	goToRestaurantDetail(id: string) {
		this.router.navigate(['restaurants/restaurant-detail', id]);
	}

	gotToProductNew(){
		this.router.navigate(['products/product-form']);	
	}

}
