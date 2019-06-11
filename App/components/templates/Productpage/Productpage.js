import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import Filter from 'Components/molecules/Filter/Filter'
import ProductList from 'Components/organisms/ProductList/ProductList'
import Spinner from 'Components/molecules/Spinner/Spinner'
import { ErrorBoundary } from 'Global/ErrorBoundary'
import localVariables from 'Global/localVariables'
import { fetchProducts, applyFilter } from './productActions'

/**
 * @desc ProductPage component is used to display a products. This component is connected with Styled component
 *  to add  and modify inline styles.This component renders client side.
 *  @products : List of product returend from API.
 *  @filterProducts : Selected value from filter dropdown.
 *  @filteredData :  filtered List items after applying the size filers.
 */

class ProductPage extends PureComponent {
  componentDidMount() {
    this.props.getProductData()
  }
  render() {
    const { isLoading, products, filterProducts, filteredData } = this.props
    return (
      <Fragment>
        <ErrorBoundary erroMessage={localVariables.setFilterFailureError}>
          <Filter filterProducts={selected => filterProducts(selected)} />
        </ErrorBoundary>
        {isLoading && <Spinner loading={isLoading} />}
        <ErrorBoundary erroMessage={localVariables.setProductFailureError}>
          <ProductList items={filteredData.length ? filteredData : products} />
        </ErrorBoundary>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.productData,
  filteredData: state.products.filteredData,
  isLoading: state.products.isLoading
})

const mapDispatchToState = dispatch => {
  return {
    filterProducts: selected => {
      dispatch(applyFilter(selected))
    },
    getProductData: () => {
      dispatch(fetchProducts())
    }
  }
}

ProductPage.propTypes = {
  productData: propTypes.instanceOf(Array)
}

export default connect(
  mapStateToProps,
  mapDispatchToState
)(ProductPage)
