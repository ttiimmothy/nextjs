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
		state.subCategory = actions.subCategories;
		return;
	}
},initialState)