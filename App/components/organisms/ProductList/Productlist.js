import React from "react";
import Productgrid from "../../molecules/Productgrid/Productgrid";
import ProductListStyle from "./ProductList.style";
import propTypes from "prop-types";

const ProductList = props => {
  const { items, className } = props;
  return (
    <ProductListStyle className={className}>
      {items.map(item => (
        <Productgrid item={item} key={item.index} />
      ))}
    </ProductListStyle>
  );
};

ProductList.propTypes = {
  items: propTypes.array.isRequired,
  className: propTypes.string
};

export default ProductList;
