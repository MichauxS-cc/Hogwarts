const SummaryReducer = (state = { visible: false }, action) => {
  switch (action.type) {
    case "SHOW_SUMMARY":
      state = { visible: true };
      return state;
    case "HIDE_SUMMARY":
      state = { visible: false };
      return state;
    default:
      return state;
  }
};

export default SummaryReducer;
