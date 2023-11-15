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
import TransitionWrapper from './TransitionWrapper.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <>
      <Router>
        <Navbar NavColor='rgb(209, 77, 114)' />

        <Routes>
          <Route path="/"
            element=
            {
              <TransitionWrapper>
                <App />
              </TransitionWrapper>

            } />
          <Route path="/home"
            element=
            {
              <TransitionWrapper>
                <App />
              </TransitionWrapper>
            } />

          <Route path="/products"
            element=
            {
              <TransitionWrapper>
                <ProductsLayout />
              </TransitionWrapper>
            } />
          <Route path="/contact"
            element={
              <TransitionWrapper>
                <ContactLayout />
              </TransitionWrapper>
            } />
          <Route path='/*' element=
            {
              <TransitionWrapper>
                <Nopage />
              </TransitionWrapper>
            } />
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
)
