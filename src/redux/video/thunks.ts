import {Dispatch} from "redux";
import {getVideoSuccess,IVideoActions} from "./actions";

export function getVideo(id:number){
	return async(dispatch:Dispatch<IVideoActions>) => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_PATH}/stream/${id}`);
		const result = await res.json();
		dispatch(getVideoSuccess(result));
	}
}