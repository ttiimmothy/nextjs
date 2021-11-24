import {Dispatch} from "redux";
import {getHomeDetailSuccess,IHomeActions} from "./actions";

export function getHomeDetail(){
	return async(dispatch:Dispatch<IHomeActions>) => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PATH}/content/2`);
		const result = await res.json();
		dispatch(getHomeDetailSuccess(result));
	}
}