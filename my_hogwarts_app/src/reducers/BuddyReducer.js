const BuddyReducer = (state = {}, action) => {
  let buddyId = (modal = action.payload);
  switch (action.type) {
    case "REMOVE_BUDDY_BY_ID":
      state = { visible: true };
      return state;
    default:
      return state;
  }
};

export default SummaryReducer;
