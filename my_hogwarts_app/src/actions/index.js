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

export const setEquipmentList = (equipmentList) => {
  return {
    type: "SET_EQUIPMENT_LIST",
    payload: equipmentList,
  };
};

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
