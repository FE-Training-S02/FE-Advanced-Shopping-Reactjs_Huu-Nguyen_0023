import React from 'react';

import { productAttribute } from 'app/shared/model/product-interface';

import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from 'store/cart/actions';

import cancelIcon from 'assets/images/cancel.svg';
import { addToast } from 'store/toast/actions';

const CartItem = (props: productAttribute & { onDialogHandler: (id: string) => void }) => {
  const { id, name, url, color, size, price, quantity, onDialogHandler } = props;
  const dispatch = useDispatch();
  const handleDecreaseItem = () => {
    if (quantity === 1) {
      return;
    } else {
      dispatch(deleteFromCart(id));
      dispatch(addToast({ text: 'Decreased Item', color: '#FBB03B' }));
    }
  };
  const handleIncreaseItem = () => {
    dispatch(addToCart(id));
    dispatch(addToast({ text: 'Increased Item' }));
  };
  return (
    <tr key={id} className="table-row">
      <td className="table-content col-xl-4">
        <div className="mini-card">
          <img className="mini-card-image" src={url} alt={name} />
          <div className="mini-card-info">
            <h4 className="mini-card-name">{name}</h4>
            <h5 className="mini-card-id">{id}</h5>
          </div>
        </div>
      </td>
      <td className="table-content text-center col-xl-2">{color}</td>
      <td className="table-content text-center col-xl-1">{size}</td>
      <td className="table-content text-center col-xl-3">
        <div className="amount btn btn-outline">
          <button
            className={quantity === 1 ? 'decrease-quantity disable' : 'decrease-quantity'}
            onClick={() => handleDecreaseItem()}
          >
            -
          </button>
          <p className="quantity">{quantity}</p>
          <button className="increase-quantity" onClick={() => handleIncreaseItem()}>
            +
          </button>
        </div>
      </td>
      <td className="product-total-price table-content text-center col-xl-1">
        $ {(quantity * price).toFixed(2)}
      </td>
      <td className="table-content text-center col-xl-1">
        <img
          className="cancel-cross"
          src={cancelIcon}
          alt="cancel"
          onClick={() => onDialogHandler(id)}
        />
      </td>
    </tr>
  );
};
export default CartItem;
