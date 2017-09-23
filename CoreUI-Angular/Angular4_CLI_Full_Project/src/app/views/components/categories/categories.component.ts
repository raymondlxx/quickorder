import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	categories: Array<{ name: string, createTime: number, updateTime: number }>;
	constructor() { }

	ngOnInit() {

    this.categories = [];
    for (let i = 1; i < 11; i++) {
      this.categories.push({
       	name: '分类 ' + i,
        createTime: new Date().getTime(),
        updateTime: new Date().getTime()
      });
    }

	}

}
