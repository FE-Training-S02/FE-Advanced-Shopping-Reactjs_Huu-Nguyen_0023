import React, { useEffect } from 'react';

import {toastAttribute} from 'app/shared/model/toast-interface'

const ToastItem = (props: toastAttribute) => {
  const { id, color, text, onDismissClick } = props;
  useEffect(()=>{
    setTimeout(()=>{
      onDismissClick(id)
    },5000)
  },[]);
  return (
    <li className="toast" style={{ backgroundColor: color }}>
      <button className="toast-btn" onClick={() => onDismissClick(id)}>
        X
      </button>
      <p>{text}</p>
    </li>
  );
};
export default ToastItem;
