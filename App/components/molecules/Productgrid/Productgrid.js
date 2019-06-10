import React from 'react'
import propTypes from 'prop-types'
import Image from 'Components/atoms/Image/Image'
import Label from 'Components/atoms/Label/Label'
import globalStyle from 'Global/globalStyle'
import localVariables from 'Global/localVariables'
import sizeCategories from 'Global/sizeCategories'
import ProductGridStyle from './Productgrid.style'

const Product = props => {
  const { item, className } = props
  return (
    <li className={className}>
      <Image
        src={`${sizeCategories.staticPath}${item.productImage}`}
        alt={item.productName} />
      <div>
        {item.isExclusive && (
          <Label
            className="exclusive-tag"
            tagLabel={localVariables.exclusive} />
        )}
        {item.isSale && (
          <Label className="sale-tag" tagLabel={localVariables.sale} />
        )}
        <div className="product-description">
          <div className="product-name">{item.productName}</div>
          <div className="product-price">{item.price}</div>
        </div>
      </div>
    </li>
  )
}

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
}

export default globalStyle(Product, ProductGridStyle)
