import produce from "immer";
import {Category,IHeaderActions,SubCategory} from "./actions";

export interface IHeaderState{
	category:Category[];
	subCategory:SubCategory[];
}

const initialState = {
	category:[] as Array<Category>,
	subCategory:[] as Array<SubCategory>
}

export const headerReducer = produce((state:IHeaderState,actions:IHeaderActions) => {
	switch(actions.type){
		case "@@header/Get_header":
		state.category = actions.categories;
		return;
		case "@@header/Get_sub_category":
		const omitIndex = actions.subCategories.findIndex((subcategory) => parseInt(subcategory.subcate_id) === 133);
		const newSubcategories = actions.subCategories.filter((subcategory,index) => index < omitIndex).concat(actions.subCategories.filter((subcategory,index) => index > omitIndex));
		state.subCategory = newSubcategories;
		return;
	}
},initialState)