import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ProductPage from 'Components/templates/Productpage/Productpage'
import store from 'Store/store'
import { DefaultStyle } from 'Static/DefaultStyle'
import '../App/images'

render(
  <Provider store={store}>
    <DefaultStyle />
    <ProductPage />
  </Provider>,
  window.document.getElementById('App')
)
