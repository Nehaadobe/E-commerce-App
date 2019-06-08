import {
   FETCH_PRODUCTS_BEGIN,
   FETCH_PRODUCTS_SUCCESS,
   FETCH_PRODUCTS_FAILURE
 } from '../actions/productActions';
 
 const initialState = {
   productData: [],
   filterData: [],
   loading: false,
   error: null
 };
 
 export default function productReducer(state = initialState, action) {
   switch(action.type) {
     case FETCH_PRODUCTS_BEGIN:
       // Mark the state as "loading" so we can show a spinner or something
       // Also, reset any errors. We're starting fresh.
       return {
         ...state,
         loading: true,
         error: null
       };
 
     case FETCH_PRODUCTS_SUCCESS:
       // All done: set loading "false".
       // Also, replace the productData with the ones from the server
       return {
         ...state,
         loading: false,
         productData: action.payload.products
       };
 
     case FETCH_PRODUCTS_FAILURE:
       // The request failed. It's done. So set loading to "false".
       // Save the error, so we can display it somewhere.
       // Since it failed, we don't have productData to display anymore, so set `productData` empty.
       //
       // This is all up to you and your app though:
       // maybe you want to keep the productData around!
       // Do whatever seems right for your use case.
       return {
         ...state,
         loading: false,
         error: action.payload.error,
         productData: []
       };
 
     default:
       // ALWAYS have a default case in a reducer
       return state;
   }
 }