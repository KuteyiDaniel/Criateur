'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CompanyLogo from '@/images/Logo 2 cri 1.svg';
import '@/css/components/navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="home-nav-page-width">
        <div className="logo">
          <Image src={CompanyLogo} alt="Criateur Logo" width={40} height={40} />
          <span className="logo-text">CRIATEUR</span>
        </div>
        <ul className="nav-links">
          <li><Link href="/" className="active-link">Home</Link></li>
          <li className="nav-item">About Us ▾</li>
          <li className="nav-item">Services ▾</li>
          <li className="nav-item">Contact Us</li>
        </ul>
        <button className="cta-button">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
