import {Dispatch} from "redux";
import {getVideoSuccess,IVideoActions} from "./actions";

export function getVideo(pid:any){
	return async(dispatch:Dispatch<IVideoActions>) => {
		if(pid && pid.length > 1){
			const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PATH}/stream/${pid[1]}`);
			const result = await res.json();
			dispatch(getVideoSuccess(result));
		}
	}
}