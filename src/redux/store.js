import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

const initialState = {}

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));