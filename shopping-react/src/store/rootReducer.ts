import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import toastReducer from './toast/reducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  toast: toastReducer,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
