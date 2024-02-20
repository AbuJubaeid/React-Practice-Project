import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./reducer";

export default combineReducers({
    cartReducer,
    productReducer
})