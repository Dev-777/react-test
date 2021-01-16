const initialState = {
  name: "Jhon",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: "Test App ~~~17" };
    default:
      return state;
  }
};
