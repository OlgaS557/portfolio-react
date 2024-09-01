import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from '../src/components/ScrollToTop';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio-react">
      <ScrollToTop />      
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
