import React from 'react';

const ToastItem = (props: any) => {
  const { id, color, text, onDismissClick } = props;
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
