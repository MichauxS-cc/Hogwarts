const ShoppingCartReducer = (state = [], action) => {
  let equip;
  let exist;
  switch (action.type) {
    case "ADD_TO_CART":
      equip = action.payload;
      exist = state.find((x) => x.name === equip.name);
      //loop through state, only update the x that x => x.name === equip.name, return the not matching item otherwise
      if (exist)
        return state.map((x) =>
          x.name === equip.name ? { ...exist, qty: exist.qty + 1 } : x
        );
      return [...state, { ...equip, qty: 1 }];
    case "REMOVE_FROM_CART":
      equip = action.payload;
      exist = state.find((x) => x.name === equip.name);
      if (exist.qty === 1)
        return [...state].filter((x) => x.name !== equip.name);
      return state.map((x) =>
        x.name === equip.name ? { ...exist, qty: exist.qty - 1 } : x
      );
    case "RESET_CART":
      state = [];
      return state;
    default:
      return state;
  }
};

export default ShoppingCartReducer;
