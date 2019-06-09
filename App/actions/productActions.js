import serviceURL from '../global/services'
import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  APPLY_FILTER
} from '../actions/productContants';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const applyFilter = filterValue => ({
  type: APPLY_FILTER,
  payload: { filterValue }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
    return function (dispatch) {
        dispatch(fetchProductsBegin());
        return fetch(serviceURL.getProductData)
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error),
        )
        .then((json) => {
            dispatch(fetchProductsSuccess(json));
        },
        );
    };
}