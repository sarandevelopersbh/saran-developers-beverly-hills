import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. Added BrowserRouter import
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Insights from './pages/Insights';

// Direct imports
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // 2. We wrap the entire application in BrowserRouter here
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
