const initialState = {
  data: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default apiReducer;
