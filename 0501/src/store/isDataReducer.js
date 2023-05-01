const initialState = false;

const IsDataReducer = (state = initialState, action) => {
  if (action.type === "CHANGE") {
    return !state;
  }
  return state;
};
export default IsDataReducer;
