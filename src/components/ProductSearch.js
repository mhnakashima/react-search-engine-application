import React, { useState } from 'react';

import '../styles/Search.css';
import { ColumnToggle } from './ColumnToggle';
import { ProductFilters } from './ProductFilters';
import { ProductTable } from './ProductTable';

export const ProductSearch = (props) => {

  const { products } = props;
  const [price, setPrice] = useState({ minPrice: '', maxPrice: '' });

  const [toggles, setToggles] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceChange = (name, value) => {
    setPrice({
      ...price,
      [name]: value
    });
  }

  const onToggle = (name, checked) => {
    setToggles({
      ...toggles,
      [name]: checked
    });
  }

  const onFilter = () => {
    const filteredProducts = products.filter((product) => {
      const productPrice = parseFloat(product.price);

      if (price.minPrice && price.maxPrice) {
        const minPrice = parseFloat(price.minPrice);
        const maxPrice = parseFloat(price.maxPrice);
        return productPrice >= minPrice && productPrice <= maxPrice;
      } else if (price.minPrice) {
        const minPrice = parseFloat(price.minPrice);
        return productPrice >= minPrice;
      } else if (price.maxPrice) {
        const maxPrice = parseFloat(price.maxPrice);
        return productPrice <= maxPrice;
      }

      return true;
    });

    return filteredProducts;
  }

  return (
    <div className="Products">
      <aside className="productsFiltersHolder">
        <ProductFilters
          minPrice={price.minPrice}
          maxPrice={price.maxPrice}
          onPriceChange={onPriceChange}
          className="productsFilters"
        />

        <ColumnToggle
          onToggle={onToggle}
          toggles={toggles}
          className="productsColumn"
        />
      </aside>
      <section className="productsTableHolder">
        <ProductTable
          products={onFilter(products)}
          columns={toggles}
          className="productsTable"
        />
      </section>
    </div>
  );
}

export default ProductSearch;
