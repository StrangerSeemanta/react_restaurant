import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

// Components
import App from './App.tsx';
import ProductsLayout from './pages/ProductsLayout.tsx';
import Nopage from './components/Nopage.tsx';
import ContactLayout from './pages/ContactLayout.tsx';
import Navbar from './components/Navbar.tsx';
import TransitionWrapper from './TransitionWrapper.tsx';
import ChatPage from './pages/ChatPage.tsx';
import AccountPage, { SignInPage } from './pages/AccountPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import DishDetailPage from './pages/DishDetailPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <React.StrictMode>
      <>
        <Navbar NavColor="rgb(209, 77, 114)" />
        <Routes>
          <Route path="/" element={<TransitionWrapper><App /></TransitionWrapper>} />
          <Route path="/home" element={<TransitionWrapper><App /></TransitionWrapper>} />
          <Route path="/products" element={<><Outlet /></>} >
            <Route index element={<TransitionWrapper><ProductsLayout /></TransitionWrapper>} />
            <Route path=':dishURL' element={<DishDetailPage />} />
          </Route>
          <Route path="/contact" element={<TransitionWrapper><ContactLayout /></TransitionWrapper>} />
          <Route path="/account" element={<TransitionWrapper><AccountPage /></TransitionWrapper>} >
            <Route index element={<TransitionWrapper><SignInPage /></TransitionWrapper>} />
            <Route path='signin' element={<TransitionWrapper><SignInPage /></TransitionWrapper>} />
            <Route path="signup" element={<TransitionWrapper><SignUpPage /></TransitionWrapper>} />
          </Route>

          <Route path="/chat" element={<TransitionWrapper><ChatPage /></TransitionWrapper>} />

          <Route path="/*" element={<TransitionWrapper><Nopage /></TransitionWrapper>} />
        </Routes>
      </>
    </React.StrictMode>
  </Router>,
);
