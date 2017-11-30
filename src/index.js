import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';


import './index.css';


ReactDOM.render((
  <BrowserRouter>
    <Container>
      <App />
    </Container>
  </BrowserRouter>
),
  document.getElementById('root')
);
registerServiceWorker();
