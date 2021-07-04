const EquipmentListReducer = (state = [], action) => {
  const equipmentList = action.payload;

  switch (action.type) {
    case "SET_EQUIPMENT_LIST":
      state = [...equipmentList];
      return state;
    default:
      return state;
  }
};

export default EquipmentListReducer;
