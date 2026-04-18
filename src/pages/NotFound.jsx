import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="not-found" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 1.5rem' }}>
        <h1 style={{ fontSize: '6rem', letterSpacing: '-3px', color: 'var(--orange)', marginBottom: '1rem', lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page not found</h2>
        <p style={{ color: 'var(--ink-2)', marginBottom: '2rem', maxWidth: '400px' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-fill btn-lg">Return Home <ArrowRight size={18} /></Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
