import React, { Fragment, PureComponent } from 'react';
import Productlist from '../../organisms/ProductList/Productlist';
import propTypes from "prop-types";
import Filter from '../../molecules/Filter/Filter';
import ServiceURI from "../../../global/services";

class Productpage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      filterData: []
    };
  }
    componentDidMount() {
      fetch(ServiceURI.getProductData)
      .then(response => response.json())
      .then(data => this.setState({ productData: data }));
    } 

    filterProductsFromSize(size) {
      const filterData = this.state.productData.filter(
        item => item.size.indexOf(size) > -1
      );
      this.setState({
        filterData
      });
    }
    
    render() {
      const { productData, filterData } = this.state;
      return (
        <Fragment>
          <Filter filterProducts={this.filterProductsFromSize.bind(this)} />
          <Productlist items={filterData.length ? filterData : productData} />
        </Fragment>
      );
    }
  }

  Productpage.propTypes = {
    productData: propTypes.array
  };

export default Productpage;