import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

	title:string;
	items: Array<{ name: string, createTime: number, updateTime: number }>;
	constructor() { }

	ngOnInit() {
		this.title = "餐厅";
		this.items = [];
		for (let i = 1; i < 11; i++) {
			this.items.push({
				name: this.title+'-' + i,
				createTime: new Date().getTime(),
				updateTime: new Date().getTime()
			});
		}

	}

}
