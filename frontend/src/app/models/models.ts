export class Category {
	constructor(
		public name: string
	) {

	}
}

export class Restaurant {
	ID:string;
	Name: string;
	Description:string;
	Address: string;
	Tel: string;
	ImagePath: string;
}

export class PagingArg{
	PageIndex:number;
	PageSize:number;

	constructor(pageIndex:number,pageSize:number){
		this.PageIndex = pageIndex;
		this.PageSize = pageSize;
	}
}

export class GetByQueryResponse{
	TotalCount:number;
	PageIndex:number;
	Items:Restaurant[];
}
export class GetByQueryRequest{
	Paging:PagingArg;
}
