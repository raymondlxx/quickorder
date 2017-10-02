import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'app-paging-nav',
	templateUrl: './paging-nav.component.html',
	styleUrls: ['./paging-nav.component.scss']
})
export class PagingNavComponent implements OnInit {
	@Input() totalCount: number;
	@Input() pageSize: number = 10;
	@Input() pageIndex: number = 1;
    @Output() change: EventEmitter<number> = new EventEmitter<number>();
	pageList = [];

	constructor() { }


	ngOnInit() {
        this.getPageList();
	}

    private getPageCount() {
        let pageCount = Math.ceil( this.totalCount / this.pageSize);
        console.log(`page count:${pageCount}`);
        return pageCount;
    }
	prev() {

        this.pageIndex--;

        if (this.pageIndex <1) {
            this.pageIndex = 1;
            return;
        }
        console.log(`prev clicked totalCount:${this.totalCount},pageSize:${this.pageSize},pageIndex:${this.pageIndex}`);
        this.change.emit(this.pageIndex);
	}
	next() {
        this.pageIndex++;

        if (this.pageIndex > this.getPageCount()) {
            this.pageIndex = this.getPageCount();
            return;
        }

        console.log(`next clicked totalCount:${this.totalCount},pageSize:${this.pageSize},pageIndex:${this.pageIndex}`);
        this.change.emit(this.pageIndex);
	}
	goto(pageNumber: number) {

        this.pageIndex = pageNumber;
        console.log(`goto clicked totalCount:${this.totalCount},pageSize:${this.pageSize},pageIndex:${this.pageIndex}`);
        if (pageNumber <= 0 || pageNumber >= this.getPageCount()) {
            return;
        }

        this.change.emit(pageNumber);
	}

	isActive(pageid: number) {
        console.log("isActive clicked");
		if (this.pageIndex == pageid) {
			return "active";
		} else {
			return "";
		}
	}

    //分页函数
    getPageList() {

        let total = this.totalCount;
        let size = this.pageSize;
        let icur = this.pageIndex;  //当前页码
        let num = Math.ceil(total / size)
        console.log(`getPageList():total:${total},size:${size},icur:${icur},num:${num}`);
        for (var i = 0; i < num; i++) {
            if (num <= 5) {
                this.pageList.push({
                    pageid: i + 1,
                    pageicur: icur
                })
            } else if (num - icur < 5 && icur > 4) {
                this.pageList = [
                    {
                        pageid: icur - 4,
                        pageicur: icur
                    }, {
                        pageid: icur - 3,
                        pageicur: icur
                    }, {
                        pageid: icur - 2,
                        pageicur: icur
                    }, {
                        pageid: icur - 1,
                        pageicur: icur
                    }, {
                        pageid: icur,
                        pageicur: icur
                    }
                ];
            } else {
                let cur = Math.floor((icur - 1) / 5) * 5 + 1
                this.pageList = [
                    {
                        pageid: cur,
                        pageicur: icur
                    }, {
                        pageid: cur + 1,
                        pageicur: icur
                    }, {
                        pageid: cur + 2,
                        pageicur: icur
                    }, {
                        pageid: cur + 3,
                        pageicur: icur
                    }, {
                        pageid: cur + 4,
                        pageicur: icur
                    }
                ]
            }
        }

    }
}