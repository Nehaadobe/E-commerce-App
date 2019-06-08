import React, { Fragment, PureComponent } from 'react'
import { connect } from "react-redux";
import { fetchProducts } from "../../../actions/productActions";
import propTypes from "prop-types";
import Filter from '../../molecules/Filter/Filter';
import Productlist from '../../organisms/ProductList/Productlist';

class Productpage extends PureComponent {  
    componentDidMount() {
      this.props.dispatch(fetchProducts());
    }
    
    render() {
      const { error, loading, products, size } = this.props;
      const filterData = () => ( products.filter(item => item.size.indexOf(size) > -1));
      return (
        <Fragment>
        <Filter filterProducts={filterData} />
        <Productlist items={filterData.length ? filterData : products} />
        </Fragment>
      );
    }
  }

  const mapStateToProps = state => ({
    products: state.products.productData,
    loading: state.products.loading,
    error: state.products.error
  });

  Productpage.propTypes = {
    productData: propTypes.array
  };

  export default connect(mapStateToProps)(Productpage);