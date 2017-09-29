import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from '../../models/models';


@Injectable()
export class RestaurantService {

	baseUrl = "http://localhost:7777/api";
	constructor(private http: Http) { }

	getAll(): Observable<any> {

		return this.http.get( this.baseUrl+ "/restaurants");
	}

	private formatErrors(error: any) {
		return Observable.throw(error.json());
	}

}
