import { ADD_TOAST, REMOVE_TOAST } from 'app/constants/index';

const toastReducer = (state = [], action: any) => {
  switch (action.type) {
    case ADD_TOAST:
      return [...state, action.payload];

    case REMOVE_TOAST:
      return state.filter((toast: any) => toast.id !== action.payload);

    default:
      return state;
  }
};

export default toastReducer;
