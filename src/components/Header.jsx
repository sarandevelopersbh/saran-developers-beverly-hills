import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold tracking-widest text-gray-900">
          SARAN<span className="text-gray-500">DEVELOPERS</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wide font-bold">
          <Link to="/" className="text-gray-900 hover:text-amber-600 transition">Home</Link>
          <Link to="/portfolio" className="text-gray-900 hover:text-amber-600 transition">Portfolio</Link>
          <Link to="/insights" className="text-gray-900 hover:text-amber-600 transition">Insights</Link>
          <Link to="/contact" className="text-gray-900 hover:text-amber-600 transition">Contact</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 text-xl font-bold md:hidden">
             <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
             <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
             <Link to="/insights" onClick={() => setIsOpen(false)}>Insights</Link>
             <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
