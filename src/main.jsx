import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // 👈 استدعاء الروتر
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
)