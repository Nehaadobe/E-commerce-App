import React from 'react';
import Image from '../../atoms/Image/Image';
import Label from '../../atoms/Label/Label';
import propTypes from 'prop-types';
import ProductGridStyle from './Productgrid.style';
import globalStyle from '../../../global/globalStyle';
import localVariables  from '../../../global/localVariables';
import sizeCategories from '../../../global/sizeCategories';

const Product = props => {
    const { item, className } = props;
    return (
      <li className={className}>
        <Image
          src={sizeCategories.staticPath + item.productImage}
          alt={item.productName}
        />
        <div>
          {item.isExclusive && (
            <Label className="exclusive-tag" tagLabel={localVariables.exclusive} />
          )}
          {item.isSale && <Label className="sale-tag" tagLabel={localVariables.sale} />}
          <div className="product-description">
            <div className="product-name">{item.productName}</div>
            <div className="product-price">{item.price}</div>
          </div>
        </div>
      </li>
    );
  };
  
  Product.propTypes = {
    item: propTypes.shape({
      index: propTypes.number.isRequired,
      isSale: propTypes.bool.isRequired,
      isExclusive: propTypes.bool.isRequired,
      price: propTypes.string.isRequired,
      productImage: propTypes.string.isRequired,
      productName: propTypes.string.isRequired,
      size: propTypes.array.isRequired
    }),
    className: propTypes.string
  };
  
  export default globalStyle(Product, ProductGridStyle);
  