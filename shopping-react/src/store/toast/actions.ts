import createToast from './createToast';
import { ADD_TOAST, REMOVE_TOAST } from 'app/constants/index';

export function addToast(options = {}) {
  return {
    payload: createToast(options),
    type: ADD_TOAST,
  };
}

export function removeToast(id: number) {
  return {
    payload: id,
    type: REMOVE_TOAST,
  };
}
