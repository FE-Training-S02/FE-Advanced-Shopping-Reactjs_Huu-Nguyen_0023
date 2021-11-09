import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { rootState } from 'store/rootReducer';

import { removeToast } from 'store/toast/actions';

import ToastItem from './ToastItem';

const ToastWrap = () => {
  const toasts: [] = useSelector((state: rootState) => state.toast);
  const dispatch = useDispatch();
  const handleOnDismiss = (id: number) => {
    dispatch(removeToast(id));
  };
  return (
    <ul className="toast-group">
      {toasts?.map((toast) => {
        const { id } = toast;
        return (
          <ToastItem {...toast} key={id} onDismissClick={handleOnDismiss} />
        );
      })}
    </ul>
  );
};
export default ToastWrap;
