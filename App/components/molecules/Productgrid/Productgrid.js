import React from 'react'
import propTypes from 'prop-types'
import Image from 'Components/atoms/Image/Image'
import Label from 'Components/atoms/Label/Label'
import globalStyle from 'Global/globalStyle'
import localVariables from 'Global/localVariables'
import sizeCategories from 'Global/sizeCategories'
import ProductGridStyle from './Productgrid.style'

/**
 * @desc Product Grid component is used to display a Product. This component is connected with Styled component
 *  to add and modify inline styles.
 *  @item : Item object contain information regarding the Price, Product Name, Product Type
 */

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
            className="exclusive__tag"
            tagLabel={localVariables.exclusive} />
        )}
        {item.isSale && (
          <Label className="sale__tag" tagLabel={localVariables.sale} />
        )}
        <div className="product__description">
          <div className="product__name">{item.productName}</div>
          <div className="product__price">{item.price}</div>
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
