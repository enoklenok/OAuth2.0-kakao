const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return action.accessToken;
    case "REMOVE_TOKEN":
      return action.accessToken;
    default:
      break;
  }
};

export default authReducer;
