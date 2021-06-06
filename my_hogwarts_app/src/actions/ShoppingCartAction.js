export const addToCauldron = (equip) => {
    return {
        type: "ADD_TO_CART",
        payload: equip,
    };
};

export const removeFromCauldron = (equip) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: equip,
    };
};
