import {Dispatch} from "redux";
import {getContentSuccess,ICategoryActions} from "./actions";

export function getContent(categoryId:string|undefined){
	return async(dispatch:Dispatch<ICategoryActions>) => {
		if(categoryId){
			const res = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_PATH}/content/${categoryId}`);
			const result = await res.json();
			dispatch(getContentSuccess(result));
		}
	}
}