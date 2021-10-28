import {Category,IHeaderActions} from "./actions";
import produce from "immer";

export interface IHeaderState{
	category:Category[]
}

const initialState = {
	category:[] as Array<Category>
}

export const headerReducer = produce((state:IHeaderState,actions:IHeaderActions) => {
	switch(actions.type){
		case "@@header/Get_header":
		state.category = actions.categories;
		return;
	}
},initialState)