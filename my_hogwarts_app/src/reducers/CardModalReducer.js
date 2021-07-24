const CardModalReducer = (
  state = {
    visible: false,
    isEditable: false,
    name: "",
    imgURL: "",
    description: "",
    _id: "",
  },
  action
) => {
  let buddy;
  let modal;
  let newState;
  switch (action.type) {
    case "UPDATE_CARD_MODAL":
      modal = action.payload;
      newState = { ...state };
      newState.name = modal.name;
      newState.description = modal.description;
      return newState;
    case "SHOW_CARD_MODAL":
      newState = { ...state };
      newState.visible = true;
      return newState;
    case "CLOSE_CARD_MODAL":
      newState = { ...state };
      newState.visible = false;
      return newState;
    case "SWITCH_MODAL_MODE":
      newState = { ...state };
      newState.isEditable = !state.isEditable;
      return newState;
    case "SET_CARD_MODAL":
      buddy = action.payload;
      newState = { ...state };
      newState.visible = true;
      newState.isEditable = false;
      newState.name = buddy.name;
      newState.imgURL = buddy.imgURL;
      newState.description = buddy.description;
      newState._id = buddy._id;
      return newState;
    default:
      return state;
  }
};

export default CardModalReducer;
