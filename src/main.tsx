import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

// Components
import App from './App.tsx'
import ProductsLayout from "./pages/ProductsLayout.tsx";
import Nopage from './components/Nopage.tsx';
// import AllProducts from './pages/AllProducts.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />

        <Route path="/products" element={<ProductsLayout />} >

        </Route>

        <Route path='/*' element={<Nopage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
