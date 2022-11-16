import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <>
      <Header />
      <main>

      </main>
      <Footer />
      </>
    </Router>
  );
}

export default App;
