import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	title:string;
	items: Array<{ name: string, createTime: number, updateTime: number }>;
	constructor() { }

	ngOnInit() {
		this.title = "用户";
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
