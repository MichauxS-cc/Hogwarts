const BuddyListReducer = (state = [], action) => {
  switch (action.type) {
    case "RESET_BUDDY_LIST":
      state = [];
      return state;
    case "SET_BUDDY_LIST":
      const buddyList = action.payload;
      state = [...buddyList];
      return state;
    default:
      return state;
  }
};

export default BuddyListReducer;
