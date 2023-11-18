import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import App from './App.tsx';
import ProductsLayout from './pages/ProductsLayout.tsx';
import Nopage from './components/Nopage.tsx';
import ContactLayout from './pages/ContactLayout.tsx';
import Navbar from './components/Navbar.tsx';
import TransitionWrapper from './TransitionWrapper.tsx';
import ChatPage from './pages/ChatPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <React.StrictMode>
      <>
        <Navbar NavColor="rgb(209, 77, 114)" />
        <Routes>
          <Route path="/" element={<TransitionWrapper><App /></TransitionWrapper>} />
          <Route path="/home" element={<TransitionWrapper><App /></TransitionWrapper>} />
          <Route path="/products" element={<TransitionWrapper><ProductsLayout /></TransitionWrapper>} />
          <Route path="/contact" element={<TransitionWrapper><ContactLayout /></TransitionWrapper>} />
          <Route path="/chat" element={<TransitionWrapper><ChatPage /></TransitionWrapper>} />

          <Route path="/*" element={<TransitionWrapper><Nopage /></TransitionWrapper>} />
        </Routes>
      </>
    </React.StrictMode>
  </Router>,
);
