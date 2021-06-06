const ShoppingCartReducer = (state = [], action) => {
    const equip = action.payload;
    const exist = state.find((x) => x.name === equip.name);
    switch (action.type) {
        case "ADD_TO_CART":
            //loop through state, only update the x that x => x.name === equip.name, return the not matching item otherwise
            if (exist) return state.map((x) => (x.name === equip.name ? { ...exist, qty: exist.qty + 1 } : x));
            return [...state, { ...equip, qty: 1 }];
        case "REMOVE_FROM_CART":
            if (exist.qty === 1) return [...state].filter((x) => x.name !== equip.name);
            return state.map((x) => (x.name === equip.name ? { ...exist, qty: exist.qty - 1 } : x));

        default:
            return state;
    }
};

export default ShoppingCartReducer;
