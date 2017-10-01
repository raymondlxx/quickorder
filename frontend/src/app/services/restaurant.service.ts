import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Restaurant } from '../models/models';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantService {

	private restaurantsUrl = 'http://localhost:7777/Api/Restaurants';  // URL to web api
	private headers = new Headers({ 'Content-Type': 'application/json' });

	constructor(private http: Http) { }

	getRestaurants(): Promise<Restaurant[]> {
		const url = `${this.restaurantsUrl}/GetAll`;
		return this.http.get(url)
			.toPromise()
			.then(response =>
				response.json() as Restaurant[]
			)
			.catch(this.handleError);
	}

	getRestaurant(id: string): Promise<Restaurant> {
		const url = `${this.restaurantsUrl}/GetByID/${id}`;

		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as Restaurant)
			.catch(this.handleError);
	}



	update(item: Restaurant): Promise<Restaurant> {
		const url = `${this.restaurantsUrl}/Update`;
		return this.http
			.post(url, JSON.stringify(item), { headers: this.headers })
			.toPromise()
			.then(() => item)
			.catch(this.handleError);
	}

	create(item: Restaurant): Promise<Restaurant> {
		const url = `${this.restaurantsUrl}/Create`;

		return this.http
			.post(url, JSON.stringify(item), { headers: this.headers })
			.toPromise()
			.then(res => res.json() as Restaurant)
			.catch(this.handleError);
	}

	delete(item: Restaurant): Promise<void> {
		const url = `${this.restaurantsUrl}/DeleteByID`;

		return this.http
			.post(url, { ID: item.ID }, { headers: this.headers })
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
