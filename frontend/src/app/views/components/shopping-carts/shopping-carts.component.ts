import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-carts',
  templateUrl: './shopping-carts.component.html',
  styleUrls: ['./shopping-carts.component.scss']
})
export class ShoppingCartsComponent implements OnInit {
	title:string;
	items: Array<{ name: string, createTime: number, updateTime: number }>;
	constructor() { }

	ngOnInit() {
		this.title = "购物车";
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
