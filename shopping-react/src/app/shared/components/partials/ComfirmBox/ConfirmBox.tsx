import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from 'store/cart/actions';
import { addToast } from 'store/toast/actions';

const ConfirmBox = (props: any) => {
  const { showConfirm, setShowConfirm, selectedId } = props;
  const dispatch = useDispatch();
  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
    dispatch(addToast({ text: 'Removed Item', color: '#FD7E14' }));
    setShowConfirm(false);
  };
  return (
    <div className={showConfirm ? 'confirm-box-wrap show' : 'confirm-box-wrap'}>
      <div className="confirm-box">
        <div className="confirm-box-text">Are you sure you want to remove this item?</div>
        <div className="confirm-box-action">
          <button className="confirm-box-btn" onClick={() => handleRemoveItem(selectedId)}>
            confirm
          </button>
          <button
            className="confirm-box-btn"
            onClick={() => {
              setShowConfirm(false);
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmBox;
