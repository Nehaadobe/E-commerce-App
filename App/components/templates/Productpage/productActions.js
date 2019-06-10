import serviceURL from 'Global/services'
import axios from 'axios'
import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  APPLY_FILTER
} from './productContants'

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
})

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
})

export const applyFilter = filterValue => ({
  type: APPLY_FILTER,
  payload: { filterValue }
})

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
})

export function fetchProducts() {
  return function(dispatch) {
    dispatch(fetchProductsBegin())
    return axios
      .get(serviceURL.getProductData)
      .then(response => {
        dispatch(fetchProductsSuccess(response.data))
      })
      .catch(error => {
        throw error
      })
  }
}
