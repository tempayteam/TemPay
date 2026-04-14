import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 className="hero-title" style={{ fontSize: '5rem', marginBottom: '1rem', letterSpacing: '-3px' }}>404</h1>
        <p className="hero-sub" style={{ marginBottom: '2rem' }}>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-fill btn-lg">Return Home →</Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
