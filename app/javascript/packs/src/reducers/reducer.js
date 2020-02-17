import {
  LOGIN,
  ADD_NOTIFICATION,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_DETAILS,
  ADD_FLASH,
  REMOVE_FLASH
} from "../actions/types";

const initial_states = { messages: [] };

const reducer = (state = initial_states, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { id: action.id, token: action.token });
      break;
    case ADD_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: [...state["notifications"], action.message]
      });
      break;
    case FETCH_PRODUCTS:
      return Object.assign({}, state, { products: action.products });
      break;
    case FETCH_PRODUCT_DETAILS:
      return Object.assign({}, state, { product: action.product });
      break;
    case ADD_FLASH:
      let { messageType, message } = action;
      return Object.assign({}, state, {
        messages: [
          ...state["messages"],
          { id: state["messages"].length, messageType, message }
        ]
      });
      break;
    case REMOVE_FLASH:
      return Object.assign({}, state, {
        messages: state["messages"].filter(message => message.id != action.id)
      });
      break;
    default:
      return state;
      break;
  }
};
export default reducer;
