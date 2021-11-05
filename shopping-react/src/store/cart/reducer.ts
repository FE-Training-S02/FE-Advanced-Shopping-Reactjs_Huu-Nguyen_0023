// import { productAttribute } from 'app/shared/model/product-interface';
import listProduct from 'app/shared/fake-data/list-product.json';

const initialState = {
  products: listProduct,
  listItem: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newListItem = [...state.listItem];
      const index = newListItem.findIndex(
        (obj: any) => obj.id === action.payload
      );
      if (index < 0) {
        let itemMatched = state.products.filter((item: any) => {
          return item.id === action.payload;
        });
        newListItem.push(itemMatched[0]);
      } else {
        newListItem[index].quantity++;
      }
      localStorage.setItem('cart', JSON.stringify(newListItem));
      return {
        ...state,
        listItem: newListItem,
      };
    }

    case 'DELETE_FROM_CART': {
      const newListItem = [...state.listItem];
      const index = newListItem.findIndex(
        (obj: any) => obj.id === action.payload
      );
      if (newListItem[index].quantity <= 1) {
        return {
          ...state,
          listItem: newListItem,
        };
      } else {
        newListItem[index].quantity--;
      }
      localStorage.setItem('cart', JSON.stringify(newListItem));
      return {
        ...state,
        listItem: newListItem,
      };
    }

    case 'REMOVE_ITEM': {
      const newListItem = [...state.listItem];
      const index = newListItem.findIndex(
        (obj: any) => obj.id === action.payload
      );
      newListItem.splice(index, 1);
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
