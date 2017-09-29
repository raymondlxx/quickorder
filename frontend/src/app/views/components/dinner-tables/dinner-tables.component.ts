import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dinner-tables',
	templateUrl: './dinner-tables.component.html',
	styleUrls: ['./dinner-tables.component.scss']
})
export class DinnerTablesComponent implements OnInit {
	title:string;
	items: Array<{ name: string, createTime: number, updateTime: number }>;
	constructor() { }

	ngOnInit() {
		this.title = "餐桌";
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
