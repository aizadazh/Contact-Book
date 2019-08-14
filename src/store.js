import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from "redux-thunk";
import allReducers from "./reducers/AllReducers";

const initialState = {};
const middleWare = [thunk];
const store = createStore(
    allReducers,
    initialState,
    composeWithDevTools (
        applyMiddleware(...middleWare),        
    ),
);
export default store;
