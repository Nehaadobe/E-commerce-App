import React from 'react'
import propTypes from 'prop-types'
import globalStyle from 'Global/globalStyle'
import Dropdown from 'Components/atoms/Dropdown/Dropdown.js'
import localVariables from 'Global/localVariables'
import sizeCategories from 'Global/sizeCategories'
import FilterStyle from './Filter.style'

/**
 * @desc Filter component is used to display Filters. This component is connected with Styled component
 *  to add and modify inline styles.
 *  @filterProducts : this function is responsible for setting the filtered value in the product list
 */

const Filter = props => {
  const { filterProducts, className } = props
  return (
    <div className={className}>
      <h1>{localVariables.title}</h1>
      <Dropdown
        options={sizeCategories.productSizeCategories}
        onSelect={selected => filterProducts(selected)}
        className="size__filter" />
    </div>
  )
}
Filter.propTypes = {
  filterProducts: propTypes.func.isRequired,
  className: propTypes.string
}

export default globalStyle(Filter, FilterStyle)
