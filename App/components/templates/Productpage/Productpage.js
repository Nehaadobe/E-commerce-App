import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import Filter from 'Components/molecules/Filter/Filter'
import ProductList from 'Components/organisms/ProductList/ProductList'
import Spinner from 'Components/molecules/Spinner/Spinner'
import { fetchProducts, applyFilter } from './productActions'

class ProductPage extends PureComponent {
  componentDidMount() {
    this.props.getProductData()
  }
  render() {
    const { isLoading, products, filterProducts, filteredData } = this.props
    return (
      <Fragment>
        <Filter filterProducts={selected => filterProducts(selected)} />
        {isLoading && <Spinner loading={isLoading} />}
        <ProductList items={filteredData.length ? filteredData : products} />
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
