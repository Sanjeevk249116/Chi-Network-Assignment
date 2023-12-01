import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
const middleWare = [thunk];
const reducerRoot = combineReducers({ reducer });
const store = legacy_createStore(reducerRoot, applyMiddleware(...middleWare));
export { store };
