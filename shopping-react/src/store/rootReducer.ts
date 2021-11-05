import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
