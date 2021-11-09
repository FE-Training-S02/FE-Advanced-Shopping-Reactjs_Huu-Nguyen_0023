export const addToCart = (itemId: string) => {
  return {
    type: 'ADD_TO_CART',
    payload: itemId,
  };
};

export const deleteFromCart = (itemId: string) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: itemId,
  };
};

export const removeItem = (itemId: string) => {
  return {
    type: 'REMOVE_ITEM',
    payload: itemId,
  };
};
