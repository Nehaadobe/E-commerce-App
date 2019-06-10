import React from 'react'
import propTypes from 'prop-types'
import Productgrid from 'Components/molecules/Productgrid/Productgrid'
import ProductListStyle from './ProductList.style'

const ProductList = props => {
  const { items, className } = props
  return (
    <ProductListStyle className={className}>
      {items.map(item => (
        <Productgrid item={item} key={item.index} />
      ))}
    </ProductListStyle>
  )
}

ProductList.propTypes = {
  items: propTypes.instanceOf(Array).isRequired,
  className: propTypes.string
}

export default ProductList
