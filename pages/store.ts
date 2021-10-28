import {applyMiddleware,combineReducers,compose,createStore} from "redux";
import thunk from "redux-thunk";
import {headerReducer,IHeaderState} from "./redux/header/reducer";
import {homeReducer,IHomeState} from "./redux/home/reducer";

declare global {
    /* tslint:disable:interface-name */
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    }
}
const composeEnhancers = typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface IRootState{
	home:IHomeState,
	header:IHeaderState
}
export const iRootReducer = combineReducers<IRootState>({
	home:homeReducer,
	header:headerReducer
})
export const store = createStore(iRootReducer,composeEnhancers(
	applyMiddleware(thunk)
))