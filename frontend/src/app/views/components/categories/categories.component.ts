import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  title:string;
  items: Array<{ name: string, createTime: number, updateTime: number }>;
  public categoryAddModal;
  public currentModal;
  
  constructor() { }

  ngOnInit() {
    this.title = "分类";
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
