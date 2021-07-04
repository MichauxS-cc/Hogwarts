import ShoppingCartReducer from "./ShoppingCartReducer.js";
import EquipmentListReducer from "./EquipmentListReducer.js";
import { combineReducers } from "redux";
import SummaryReducer from "./SummaryReducer.js";

const AllReducers = combineReducers({
  cartItems: ShoppingCartReducer,
  equipmentList: EquipmentListReducer,
  summary: SummaryReducer,
});

export default AllReducers;
