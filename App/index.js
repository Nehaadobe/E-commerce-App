import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Productpage from '../App/components/templates/Productpage/Productpage';
import store from '../App/store/store';

render(
    <Provider store={store}>
        <Productpage />
    </Provider>,
    window.document.getElementById('App'))