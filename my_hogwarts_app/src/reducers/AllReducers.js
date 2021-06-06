import ShoppingCartReducer from "./ShoppingCartReducer.js";
import { combineReducers, comebineReducers } from "redux";

const AllReducers = combineReducers({
    cartItems: ShoppingCartReducer,
});

export default AllReducers;
