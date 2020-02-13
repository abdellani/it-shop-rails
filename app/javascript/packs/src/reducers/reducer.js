import { LOGIN, ADD_NOTIFICATION } from "../actions/types";

const initial_states = { messages: [] };

const reducer = (state = initial_states, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { token: action.token });
      break;
    case ADD_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: [...state["messages"], action.message]
      });
      break;
    default:
      return state;
      break;
  }
};
export default reducer;
