import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './Hero.css';

const RESUME_URL = 'https://drive.google.com/file/d/1ZCoiyAXv3dWzypomT2E953Xlboizoc1l/view';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const words = ['FULL', 'STACK', 'LEAD.'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 120, skewY: 5 },
    visible: {
      opacity: 1, y: 0, skewY: 0,
      transition: { type: 'spring', damping: 18, stiffness: 80 }
    }
  };

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Animated background orbs */}
      <div
        className="hero-orb hero-orb-1"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div
        className="hero-orb hero-orb-2"
        style={{ transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)` }}
      />

      <div className="hero-container">
        {/* Status badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-badge-dot" />
          <span>Available for opportunities</span>
        </motion.div>

        {/* Massive name block */}
        <div className="hero-name-block">
          <motion.p
            className="hero-pre-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Vicky Sindhwad
          </motion.p>

          <motion.div
            className="hero-title-lines"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <div className="hero-line-wrapper" key={i}>
                <motion.span
                  className={`hero-word ${i === words.length - 1 ? 'hero-word-accent' : ''}`}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer row */}
        <motion.div
          className="hero-footer"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
        >
          <div className="hero-desc-block">
            <p className="hero-desc">
              Architecting world-class e-commerce experiences with
              <span className="hero-highlight"> Salesforce Commerce Cloud</span>,
              <span className="hero-highlight"> PWA Kit</span> &
              <span className="hero-highlight"> React</span>.
              6+ years turning complex problems into elegant solutions.
            </p>
            <div className="hero-social-links">
              <a href="https://github.com/viku53" target="_blank" rel="noreferrer" className="hero-social" aria-label="GitHub">
                <FiGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/vicky-sindhwad" target="_blank" rel="noreferrer" className="hero-social" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
              <a href="mailto:sindhwadvicky@gmail.com" className="hero-social" aria-label="Email">
                <FiMail size={18} />
              </a>
            </div>
          </div>

          <div className="hero-cta-block">
            <Link to="projects" smooth={true} duration={700} offset={-80} className="hero-cta-btn">
              View Work
              <FiArrowDownRight size={20} />
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="hero-resume-btn"
              aria-label="View or Download Resume"
            >
              <FiFileText size={17} />
              View Resume
            </a>
          </div>

          <div className="hero-scroll-indicator">
            <span className="scroll-text">Scroll</span>
            <div className="scroll-track">
              <div className="scroll-thumb" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats ticker */}
      <motion.div
        className="hero-stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="hero-stat">
          <span className="stat-num">6+</span>
          <span className="stat-label">Years of Experience</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="stat-num">10+</span>
          <span className="stat-label">Enterprise Projects</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="stat-num">2</span>
          <span className="stat-label">Salesforce Certifications</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="stat-num">TCS</span>
          <span className="stat-label">Current Employer</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
