import produce from "immer";
import {VideoDetail} from "../home/actions";
import {ICategoryActions} from "./actions";

export interface ICategoryState{
	video:VideoDetail[]
}

const initialState = {
	video:[] as Array<VideoDetail>
}

export const categoryReducer = produce((state:ICategoryState,action:ICategoryActions) => {
	switch(action.type){
		case "@@category/Get_content":
		state.video = action.video;
		return;
	}
},initialState)