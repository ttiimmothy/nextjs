import {Dispatch} from "redux";
import {getHeaderSuccess,getSubCategorySuccess,IHeaderActions} from "./actions";

export function getHeader(){
	return async(dispatch:Dispatch<IHeaderActions>) => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_PATH}/category`);
		const result = await res.json();
		dispatch(getHeaderSuccess(result));
	}
}

export function getSubCategory(){
	return async(dispatch:Dispatch<IHeaderActions>) => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_PATH}/subcategory`);
		const result = await res.json();
		dispatch(getSubCategorySuccess(result));
	}
}