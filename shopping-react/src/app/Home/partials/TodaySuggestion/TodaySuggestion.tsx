import React, { useState } from 'react';

import { productAttribute } from 'app/shared/model/product-interface';
import listProduct from '../../../shared/fake-data/list-product.json';
import ProductCard from 'app/shared/components/partials/ProductCard/ProductCard';

const TodaySuggestion = () => {
  const [products, setProducts] = useState<productAttribute[]>(listProduct);
  return (
    <section className="section-today-suggestions">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Products in today</h3>
        </div>
        <ul className="list-group row">
          {products.length > 0
            ? products.map((product: productAttribute) => ProductCard(product))
            : ''}
        </ul>
      </div>
    </section>
  );
};
export default TodaySuggestion;
