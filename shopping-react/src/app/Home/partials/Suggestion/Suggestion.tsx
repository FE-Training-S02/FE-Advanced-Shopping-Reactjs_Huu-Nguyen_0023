import React, { useState } from "react";

import { productAttribute } from "app/shared/model/product-interface";
import listProduct from "../../../shared/fake-data/list-product.json";
import ProductCard from "app/shared/components/partials/ProductCard/ProductCard";

const Suggestion = () => {
  const [products, setProducts] = useState<productAttribute[]>(listProduct);

  return (
    <section className="section-suggestions">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Selected just for you</h3>
          <button className="btn btn-outline">SHOW MORE</button>
        </div>
        <ul className="list-group row" id="list-product">
          {products.length > 0
            ? products.map((product: productAttribute) => ProductCard(product))
            : ""}
        </ul>
      </div>
    </section>
  );
};
export default Suggestion;
