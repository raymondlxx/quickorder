import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '../../services/navigator.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
	providers:[NavigatorService]
})
export class ProductsComponent implements OnInit {

	title: string;
	items: Array<{ name: string, createTime: number, updateTime: number }>;
	constructor(private navigatorService: NavigatorService) { }

	ngOnInit() {
		this.title = "菜品";
		this.items = [];
		for (let i = 1; i < 11; i++) {
			this.items.push({
				name: this.title + '-' + i,
				createTime: new Date().getTime(),
				updateTime: new Date().getTime()
			});
		}

	}


	goToNewProduct() {
		this.navigatorService.gotToProductNew();
	}
}
