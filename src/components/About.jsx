import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { awards, techStack } from './helpers';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }
  })
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-label">Who I Am</span>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About
        </motion.h2>
      </div>

      {/* Intro Statement */}
      <motion.div
        className="about-statement"
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="about-big-text">
          I'm a <span className="about-accent">Full Stack Lead Developer</span> with{' '}
          <span className="about-accent">6+ years</span> of deep expertise in enterprise-grade
          e-commerce. I specialize in crafting high-performance storefronts, scalable
          architectures, and seamless user experiences on Salesforce Commerce Cloud.
        </p>
      </motion.div>

      {/* Two-Column Layout */}
      <div className="about-two-col">
        {/* Left: Story */}
        <motion.div
          className="about-story"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            Currently leading the SFCC PWA frontend for <strong>JLR (Jaguar Land Rover) US</strong> at
            Tata Consultancy Services — one of the world's most prestigious automotive brands. My role
            spans technical leadership, React architecture, accessibility compliance, and code quality.
          </p>
          <p>
            Previously at Adapty Solutions, I owned end-to-end delivery for brands like{' '}
            <strong>GNC, Pet SuperMarket, The Watchbox</strong>, and <strong>AERIN</strong>,
            consistently delivering projects that drive measurable business growth.
          </p>
          <p>
            I'm obsessed with performance, clean code, and building systems that scale. Whether it's
            Core Web Vitals optimization, BOPIS/SDD multi-fulfillment, or complex API integrations —
            I deliver.
          </p>

          <div className="about-info-grid">
            <div className="about-info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Mumbai, India</span>
            </div>
            <div className="about-info-item">
              <span className="info-label">Email</span>
              <span className="info-value">sindhwadvicky@gmail.com</span>
            </div>
            <div className="about-info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">+91 8655718830</span>
            </div>
            <div className="about-info-item">
              <span className="info-label">Open to</span>
              <span className="info-value">Remote / Hybrid</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Tech Stack */}
        <motion.div
          className="about-stack"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStack.map((group, i) => (
            <div className="stack-group" key={i}>
              <h4 className="stack-category">{group.category}</h4>
              <div className="stack-items">
                {group.items.map((item, j) => (
                  <span className="stack-chip" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Metrics Row */}
      <div className="about-metrics">
        {[
          { num: '6+', label: 'Years Experience' },
          { num: '10+', label: 'Enterprise Projects' },
          { num: '2', label: 'SF Certifications' },
          { num: awards.length+'+', label: 'Awards Received' },
        ].map((m, i) => (
          <motion.div
            key={i}
            className="about-metric-card"
            variants={fadeUp}
            custom={i * 0.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="metric-number text-outline">{m.num}</span>
            <span className="metric-label">{m.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
