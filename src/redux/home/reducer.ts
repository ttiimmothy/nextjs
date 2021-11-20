import produce from "immer";
import {IHomeActions,VideoDetail} from "./actions";

export interface IHomeState{
	video:VideoDetail[]
}

const initialState = {
	video:[] as Array<VideoDetail>
}

export const homeReducer = produce((state:IHomeState,action:IHomeActions) => {
	switch(action.type){
		case "@@home/Get_home_detail":
		state.video = action.videos;
		return;
	}
},initialState)