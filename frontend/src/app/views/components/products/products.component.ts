import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	title:string;
	items: Array<{ name: string, createTime: number, updateTime: number }>;
	constructor() { }

	ngOnInit() {
		this.title = "菜品";
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
