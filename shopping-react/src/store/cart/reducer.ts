import {
  productInCartAttribute,
  productAttribute,
} from './../../app/shared/model/product-interface';
import listProduct from 'app/shared/fake-data/list-product.json';

import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_ITEM } from 'app/constants';

const initialState = {
  products: listProduct,
  listItem: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartReducer = (state = initialState, action: { type: string; payload: string }) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newListItem = [...state.listItem];
      const index = newListItem.findIndex(
        (obj: productInCartAttribute) => obj.id === action.payload
      );
      const itemMatched = state.products.find((item: productAttribute) => {
        return item.id === action.payload;
      });
      if (itemMatched) {
        if (index < 0) {
          newListItem.push({
            id: action.payload,
            quantity: 1,
          });
        } else {
          newListItem[index].quantity++;
        }
      }
      localStorage.setItem('cart', JSON.stringify(newListItem));
      return {
        ...state,
        listItem: newListItem,
      };
    }
    case DELETE_FROM_CART: {
      const newListItem = [...state.listItem];
      const index = newListItem.findIndex((obj: productInCartAttribute) => obj.id === action.payload);
      newListItem[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(newListItem));
      return {
        ...state,
        listItem: newListItem,
      };
    }
    case REMOVE_ITEM: {
      const newListItem = state.listItem.filter((obj: productInCartAttribute) => obj.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newListItem));
      return {
        ...state,
        listItem: newListItem,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
