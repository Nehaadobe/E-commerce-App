import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { fetchProducts, applyFilter } from "./productActions";
import propTypes from "prop-types";
import Filter from "Components/molecules/Filter/Filter";
import ProductList from "Components/organisms/ProductList/ProductList";

class ProductPage extends PureComponent {
  componentDidMount() {
    this.props.getProductData();
  }

  render() {
    const { isLoading, products, filterProducts, filteredData } = this.props;
    return (
      <Fragment>
        <Filter filterProducts={selected => filterProducts(selected)} />
        {isLoading && "loading..."}
        <ProductList items={filteredData.length ? filteredData : products} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.productData,
  filteredData: state.products.filteredData,
  isLoading: state.products.isLoading
});

const mapDispatchToState = dispatch => {
  return {
    filterProducts: selected => {
      dispatch(applyFilter(selected));
    },
    getProductData: () => {
      dispatch(fetchProducts());
    }
  };
};

ProductPage.propTypes = {
  productData: propTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(ProductPage);
