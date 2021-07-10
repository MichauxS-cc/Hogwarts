/* Shopping Cart */
export const addToCart = (equip) => {
  return {
    type: "ADD_TO_CART",
    payload: equip,
  };
};

export const removeFromCart = (equip) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: equip,
  };
};

export const resetCart = () => {
  return {
    type: "RESET_CART",
  };
};

/* DiagonAlley: Equipment List */
export const setEquipmentList = (equipmentList) => {
  return {
    type: "SET_EQUIPMENT_LIST",
    payload: equipmentList,
  };
};

/* Summary */
export const showSummary = () => {
  return {
    type: "SHOW_SUMMARY",
  };
};

export const hideSummary = () => {
  return {
    type: "HIDE_SUMMARY",
  };
};

/* Card Modal */
export const showModal = (card) => {
  return {
    type: "SHOW_CARD_MODAL",
    payload: card,
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_CARD_MODAL",
  };
};

export const setModal = (card) => {
  return {
    type: "SET_CARD_MODAL",
    payload: card,
  };
};

export const switchModalMode = () => {
  return {
    type: "SWITCH_MODAL_MODE",
    // payload: card,
  };
};

export const updateModal = (modal) => {
  return {
    type: "UPDATE_CARD_MODAL",
    payload: modal,
  };
};

/* Study Group */
export const setBuddyList = (buddyList) => {
  return {
    type: "SET_BUDDY_LIST",
    payload: buddyList,
  };
};
