import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

// Components
import App from './App.tsx'
import Products from "./pages/Products.tsx";
import Nopage from './components/Nopage.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menus" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path='/*' element={<Nopage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
