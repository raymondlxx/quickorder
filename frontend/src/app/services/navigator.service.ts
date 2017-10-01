import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigatorService {

	constructor(private router: Router) { }

	goToRestaurants() {
		this.router.navigate(['/components/restaurants']);
	}
}
