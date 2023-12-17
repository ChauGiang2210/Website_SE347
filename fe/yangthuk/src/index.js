import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/users/HomePage';
import RouterCustom from './router';
import { BrowserRouter } from 'react-router-dom';
import "./style/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <RouterCustom/>
  </BrowserRouter>
);

