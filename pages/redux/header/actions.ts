export interface Category{
	cate_id:string;
	name_cn:string;
	name_en:string;
	status:string;
	seq:string;
}
export function getHeaderSuccess(categories:Category[]){
	return{
		type:"@@header/Get_header" as const,
		categories
	}
}

export type IHeaderActions = ReturnType<typeof getHeaderSuccess>