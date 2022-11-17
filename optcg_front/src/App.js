import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home, AllCard, MyCard } from './pages';
import './App.css';
import './fonts/animeace.ttf';

function App() {
  return (
    <Router>
      <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allCard' element={<AllCard />} />
          <Route path='/myCard' element={<MyCard />} />  
        </Routes>  
      </main>
      <Footer />
      </>
    </Router>
  );
}

export default App;
