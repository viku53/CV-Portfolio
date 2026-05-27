import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    {
      icon: <FiMail size={20} />,
      label: 'Email',
      value: 'sindhwadvicky@gmail.com',
      href: 'mailto:sindhwadvicky@gmail.com',
      copyable: true,
    },
    {
      icon: <FiPhone size={20} />,
      label: 'Phone',
      value: '+91 8655718830',
      href: 'tel:+918655718830',
      copyable: false,
    },
    {
      icon: <FiMapPin size={20} />,
      label: 'Location',
      value: 'Mumbai, India',
      href: null,
      copyable: false,
    },
  ];

  const socials = [
    {
      icon: <FiLinkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://in.linkedin.com/in/vicky-sindhwad-a05894131',
      handle: '/in/vicky-sindhwad',
    },
    {
      icon: <FiGithub size={20} />,
      label: 'GitHub',
      href: 'https://github.com/viku53',
      handle: '/viku53',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-label">Get in Touch</span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contact
        </motion.h2>
      </div>

      <div className="contact-layout">
        {/* Left: CTA */}
        <motion.div
          className="contact-cta-block"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="contact-headline">Let's build something<br /><span className="contact-accent">extraordinary</span> together.</h3>
          <p className="contact-subtext">
            Whether you're looking for a Lead Developer, SFCC architect, or a technical partner
            for your next big e-commerce venture — I'm ready to talk.
          </p>
          <a
            href="mailto:sindhwadvicky@gmail.com"
            className="contact-primary-btn"
          >
            <FiSend size={18} />
            Send me an email
          </a>
        </motion.div>

        {/* Right: Info Cards */}
        <motion.div
          className="contact-info-block"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="contact-details">
            {contactItems.map((item, i) => (
              <div className="contact-detail-item" key={i}>
                <div className="contact-detail-icon">{item.icon}</div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact-detail-value">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-detail-value">{item.value}</span>
                  )}
                </div>
                {item.copyable && (
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(item.value)}
                    aria-label="Copy to clipboard"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="contact-socials">
            <p className="contact-socials-title">Find me online</p>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <div className="social-icon">{s.icon}</div>
                <div className="social-info">
                  <span className="social-label">{s.label}</span>
                  <span className="social-handle">{s.handle}</span>
                </div>
                <span className="social-arrow">→</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="contact-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p className="footer-copy">
          © {new Date().getFullYear()} Vicky Sindhwad. Designed & built with 💚
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
