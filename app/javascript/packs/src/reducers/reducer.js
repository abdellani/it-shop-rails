import {
  LOGIN,
  SET_NOTIFICATIONS,
  SET_PRODUCTS,
  SET_MY_PRODUCTS,
  SET_PRODUCT_DETAILS,
  SET_PRODUCT_COMMENTS,
  SET_USER_DETAILS,
  ADD_FLASH,
  REMOVE_FLASH,
  SET_NOTIFICATIONS_COUNT,
  SET_VISITS
} from "../actions/types";
// import { combineReducer } from "redux";
const initial_states = {
  messages: [],
  products: [],
  myProducts: [],
  comments: [],
  userDetails: { products: [] },
  notifications: { count: 0, notifications: [] },
  visits: []
};
//TODO Refactor the reducer (use combineReducer)
const reducer = (state = initial_states, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return Object.assign({}, state, {
        notifications: notifications(state["notifications"], action)
      });
      break;
    case SET_NOTIFICATIONS_COUNT:
      return Object.assign({}, state, {
        notifications: notifications(state["notifications"], action)
      });
      break;
    case LOGIN:
      return Object.assign({}, state, { id: action.id, token: action.token });
      break;
    case SET_PRODUCTS:
      return Object.assign({}, state, { products: action.products });
      break;
    case SET_PRODUCT_DETAILS:
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
    case SET_MY_PRODUCTS:
      return Object.assign({}, state, { myProducts: action.products });
      break;
    case SET_PRODUCT_COMMENTS:
      let { comments } = action;
      return Object.assign({}, state, { comments });
      break;
    case SET_USER_DETAILS:
      let { userDetails } = action;
      return Object.assign({}, state, { userDetails });
      break;
    case SET_VISITS:
      let { visits } = action;
      return Object.assign({}, state, { visits });
      break;
    default:
      return state;
      break;
  }
};

const notifications = (state, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      let { notifications } = action;
      return Object.assign({}, state, { notifications });
      break;
    case SET_NOTIFICATIONS_COUNT:
      let { count } = action;
      return Object.assign({}, state, { count });
      break;
    default:
      return state;
      break;
  }
};
// = combineReducer({notifications})

export default reducer;
