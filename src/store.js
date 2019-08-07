import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/AllReducers";

const initialState = {};
const middleWare = [thunk];
const store = createStore(
    allReducers,
    initialState,
    compose (
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSIONS__&&
        window.__REDUX_DEVTOOLS_EXTENSIONS__(),
    ),
);
export default store;
