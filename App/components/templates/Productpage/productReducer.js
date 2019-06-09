import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  APPLY_FILTER
} from "./productContants";

const initialState = {
  productData: [],
  filteredData: [],
  isLoading: false,
  error: null
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productData: action.payload.products
      };

    case APPLY_FILTER:
      return {
        ...state,
        isLoading: false,
        filteredData: state.productData.filter(item => {
          if (item.size.indexOf(action.payload.filterValue)) {
            return item;
          }
        })
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        productData: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
