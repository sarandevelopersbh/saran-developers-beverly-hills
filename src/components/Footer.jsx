import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-serif mb-8">SARAN DEVELOPERS</h3>
        <div className="flex justify-center space-x-8 text-sm uppercase tracking-widest mb-8">
          <Link to="/" className="hover:text-amber-500">Home</Link>
          <Link to="/portfolio" className="hover:text-amber-500">Portfolio</Link>
          <Link to="/contact" className="hover:text-amber-500">Contact</Link>
        </div>
        <p className="text-neutral-500 text-xs">
          © {new Date().getFullYear()} Saran Developers. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
