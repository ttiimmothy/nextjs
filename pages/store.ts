import {applyMiddleware,combineReducers,compose,createStore} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {headerReducer,IHeaderState} from "./redux/header/reducer";
import {homeReducer,IHomeState} from "./redux/home/reducer";
import {IVideoState,videoReducer} from "./redux/video/reducer";

declare global {
    /* tslint:disable:interface-name */
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:any
    }
}
const composeEnhancers = typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface IRootState{
	home:IHomeState,
	header:IHeaderState,
	video:IVideoState
}
export const iRootReducer = combineReducers<IRootState>({
	home:homeReducer,
	header:headerReducer,
	video:videoReducer
})
export const store = createStore(iRootReducer,composeEnhancers(
	applyMiddleware(thunk),
	applyMiddleware(logger)
))