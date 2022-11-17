import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />  
        </Routes>  
      </main>
      <Footer />
      </>
    </Router>
  );
}

export default App;
