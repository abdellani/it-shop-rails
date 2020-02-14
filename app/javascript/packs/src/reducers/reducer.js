import {
  LOGIN,
  ADD_NOTIFICATION,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_DETAILS
} from "../actions/types";

const initial_states = { messages: [] };

const reducer = (state = initial_states, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { id: action.id, token: action.token });
      break;
    case ADD_NOTIFICATION:
      return Object.assign({}, state, {
        notifications: [...state["messages"], action.message]
      });
      break;
    case FETCH_PRODUCTS:
      return Object.assign({}, state, { products: action.products });
      break;
    case FETCH_PRODUCT_DETAILS:
        return Object.assign({}, state, { product: action.product });
        break;
    default:
      return state;
      break;
  }
};
export default reducer;
