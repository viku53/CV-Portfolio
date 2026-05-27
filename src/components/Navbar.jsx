import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiDownload, FiFileText } from 'react-icons/fi';
import './Navbar.css';
import { navLinks } from './helpers';

const RESUME_URL = 'https://drive.google.com/file/d/1ZCoiyAXv3dWzypomT2E953Xlboizoc1l/view';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <Link to="home" smooth={true} duration={700} className="logo-text">
            <span className="logo-vs">VS</span>
            <span className="logo-dot">.</span>
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={700}
              offset={-80}
              onClick={() => setIsOpen(false)}
              onSetActive={() => setActiveSection(link.to)}
              spy={true}
              className={`nav-link ${activeSection === link.to ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
            aria-label="View Resume"
          >
            <FiFileText size={15} />
            Resume
          </a>
          <a
            href="mailto:sindhwadvicky@gmail.com"
            className="nav-cta"
          >
            Hire Me
          </a>
          <button
            className="menu-icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${isOpen ? 'mobile-open' : ''}`}>
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <span className="mobile-nav-num">0{i + 1}</span>
            {link.name}
          </Link>
        ))}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="mobile-nav-link mobile-resume-link"
          style={{ animationDelay: `${navLinks.length * 0.06}s` }}
        >
          <span className="mobile-nav-num"><FiFileText size={13} /></span>
          View / Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
