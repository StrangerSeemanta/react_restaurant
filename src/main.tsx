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
import ContactLayout from './pages/ContactLayout.tsx';
import Navbar from './components/Navbar.tsx';
// import AllProducts from './pages/AllProducts.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <>
      <Router>
        <Navbar NavColor='rgb(209, 77, 114)' />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />

          <Route path="/products" element={<ProductsLayout />} />
          <Route path="/contact" element={<ContactLayout />} />
          <Route path='/*' element={<Nopage />} />
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
)
