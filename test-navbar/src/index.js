import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//eslint-disable-next-line
import { BrowserRouter,withRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);