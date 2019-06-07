import React from 'react';
import FilterStyle from './Filter.style';
import globalStyle from '../../../global/globalStyle';
import Dropdown from '../../atoms/Dropdown/Dropdown.js';
import localVariables  from '../../../global/localVariables';
import sizeCategories from '../../../global/sizeCategories';
import propTypes from 'prop-types';

const Filter = props => {
const { filterProducts, className } = props;
return (
    <div className={className}>
    <h2>{localVariables.title}</h2>
    <Dropdown
        options={sizeCategories.productSizeCategories}
        onSelect={selected => filterProducts(selected)}
        className="size-filter"
    />
    </div>
);
};
Filter.propTypes = {
    filterProducts: propTypes.func.isRequired,
    className: propTypes.string
};

export default globalStyle(Filter, FilterStyle);