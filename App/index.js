import React from 'react';
import { render } from 'react-dom';
import '../App/static/global.css';
import Productpage from '../App/components/templates/Productpage/Productpage';

render(<Productpage />, window.document.getElementById('App'))