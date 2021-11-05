import React from "react";

import { productAttribute } from "app/shared/model/product-interface";
import { useDispatch } from "react-redux";
import { addToCart } from "store/cart/actions";

const ProductCard = (props: productAttribute) => {
  const { id, name, url, price, discount } = props;
  const dispatch=useDispatch();
  return (
    <li key={id} className="list-item col-6 col-xl-3">
      <div className="card product-card">
        <img className="card-image" src={url} alt={name} />
        {discount > 0 ? <p className="badge badge-danger">{discount * 100}%</p> : ""}
        <button
          className="btn btn-primary add-cart-btn"
          onClick={() => dispatch(addToCart(id))}
        >
          ADD TO CART
        </button>
        <div className="card-detail">
          <h4 className="card-name">{name}</h4>
          <div className="card-price">
            <p className={discount > 0 ? "price price-sale-off" : "price"}>
              $ {price * (1 - discount)}
            </p>
            {discount > 0 ? <p className="price price-initial">$ {price}</p> : ""}
          </div>
        </div>
      </div>
    </li>
  );
};
export default ProductCard;
