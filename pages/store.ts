import {loadingBarMiddleware, loadingBarReducer} from "react-redux-loading-bar";
import {applyMiddleware,combineReducers,compose,createStore} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
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
export const iRootReducer = combineReducers<IRootState|any>({
	home:homeReducer,
	header:headerReducer,
	// app reducers
	loadingBar:loadingBarReducer,
})
export const store = createStore(iRootReducer,composeEnhancers(
	applyMiddleware(loadingBarMiddleware()),
	applyMiddleware(thunk),
	applyMiddleware(logger)
))