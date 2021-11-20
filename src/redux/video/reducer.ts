import produce from "immer"
import {IVideoActions, Video} from "./actions";

export interface IVideoState{
	videoUrl:Video
}

const initialState = {
	videoUrl:{streamUrl:""}
}

export const videoReducer = produce((state:IVideoState,action:IVideoActions) => {
	switch(action.type){
		case "@@video/Get_video":
		state.videoUrl = action.video;
		return;
	}
},initialState)