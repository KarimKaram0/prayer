import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // 👈 استدعاء الروتر
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'

import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
