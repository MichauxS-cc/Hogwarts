import ShoppingCartReducer from "./ShoppingCartReducer.js";
import EquipmentListReducer from "./EquipmentListReducer.js";
import SummaryReducer from "./SummaryReducer.js";
import BuddyListReducer from "./BuddyListReducer.js";
import CardModalReducer from "./CardModalReducer.js";

import { combineReducers } from "redux";

const AllReducers = combineReducers({
  cartItems: ShoppingCartReducer,
  equipmentList: EquipmentListReducer,
  summary: SummaryReducer,
  buddyList: BuddyListReducer,
  cardModal: CardModalReducer,
});

export default AllReducers;
