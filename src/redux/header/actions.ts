export interface Category{
	cate_id:string;
	name_cn:string;
	name_en:string;
	status:string;
	seq:string;
}
export interface SubCategory{
	cate_id:string;
    subcate_id:string;
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

export function getSubCategorySuccess(subCategories:SubCategory[]){
	return{
		type:"@@header/Get_sub_category" as const,
		subCategories
	}
}

export type IHeaderActions = ReturnType<typeof getHeaderSuccess|typeof getSubCategorySuccess>