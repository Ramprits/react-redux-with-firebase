const initialState = {
  projects: [],
  loading: false,
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "typeName":
      return { ...state, ...payload };

    default:
      return state;
  }
};
