import { combineReducers, createStore } from "redux";

// Theme Reducer
const themeReducer = (state = "Light", action) => {
  switch (action.type) {
    case "DARK_MODE":
      return "Dark";
    case "LIGHT_MODE":
      return "Light";
    default:
      return state;
  }
};
// Authentication Initialize
const authInit = {
  isLogged: false,
  userIp: null,
  userData: null,
  loginTime: null,
  isAdmin: false,
};
// Authentication Reducer
const authenticationReducer = (state = authInit, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLogged: true,
        userData: action.payload,
      };
    case "ADD_IP":
      return {
        ...state,
        userIp: action.payload,
      };
    default:
      return state;
  }
};
// Cart Initialize
const cartInit = {
  cartCount: null,
};
// Cart Reducer
const cartReducer = (state = cartInit, action) => {
  switch (action.type) {
    case "INCREMENT_CART":
      return { cartCount: state.cartCount + 1 };
    case "DECREMENT_CART":
      return { cartCount: state.cartCount - 1 };
    default:
      return state;
  }
};
// Language Reducer
const languageReducer = (state = "english", action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return action.payload;
    default:
      return state;
  }
};
// combine reducers
const rootReducer = combineReducers({
  themeReducer,
  authenticationReducer,
  cartReducer,
  languageReducer,
});
// root reducer
export const mainReducer = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
