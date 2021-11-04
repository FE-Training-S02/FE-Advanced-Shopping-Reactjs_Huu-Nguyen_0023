import React from "react";

import { productAttribute } from "app/shared/model/product-interface";
import cancelIcon from "assets/images/cancel.svg";

const changeQuantityOfItemInCart = (mess: string, productId: string) => {};
const removeProductInCart = (id: string) => {};

const CartItem = (props: productAttribute) => {
  const { id, name, url, color, size, price, quantity } = props;
  return (
    <tr key={id} className="table-row">
      <td className="table-content col-xl-4">
        <div className="mini-cart">
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
          <p className="decrease-quantity" onClick={() => changeQuantityOfItemInCart("delete", id)}>
            -
          </p>
          <p className="quantity">{quantity}</p>
          <p className="increase-quantity" onClick={() => changeQuantityOfItemInCart("add", id)}>
            +
          </p>
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
          onClick={() => removeProductInCart(id)}
        />
      </td>
    </tr>
  );
};
export default CartItem;
