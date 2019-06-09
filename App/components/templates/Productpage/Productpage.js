import React, { Fragment, PureComponent } from 'react'
import { connect } from "react-redux";
import { fetchProducts, applyFilter } from "../../../actions/productActions";
import propTypes from "prop-types";
import Filter from '../../molecules/Filter/Filter';
import Productlist from '../../organisms/ProductList/Productlist';

class Productpage extends PureComponent { 
   
    componentDidMount() {
      this.props.getProductData();
    }

    render() {
      const { isLoading, products, filterProducts, filteredData } = this.props;
      return (
        <Fragment>
        <Filter filterProducts ={selected => filterProducts(selected)} />
        {isLoading && 'loading...'}
        <Productlist items={filteredData.length ? filteredData : products} />
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
    return ({
      filterProducts: (selected) => {
        dispatch(applyFilter(selected))
      },
      getProductData: () => {
        dispatch(fetchProducts())
      }
    })
  }

  Productpage.propTypes = {
    productData: propTypes.array
  };

  export default connect(mapStateToProps, mapDispatchToState)(Productpage);