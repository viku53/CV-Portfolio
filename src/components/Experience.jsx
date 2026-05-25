import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiMapPin, FiChevronDown } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    id: '01',
    role: 'Lead Developer',
    company: 'Tata Consultancy Services',
    location: 'Mumbai, India',
    period: 'April 2024 — Present',
    type: 'Full-time',
    tags: ['SFCC', 'PWA Kit', 'ReactJS', 'Accessibility'],
    highlights: [
      'Leading SFCC PWA frontend architecture for JLR (Jaguar Land Rover) US — a globally iconic automotive brand',
      'Designed and implemented scalable React component architecture using custom hooks and context patterns',
      'Led accessibility remediation achieving full WCAG 2.1 AA compliance for US market standards',
      'Drove code quality initiatives — linting standards, PR reviews, performance optimization, and tech debt reduction',
      'Mentored junior developers and established front-end best practices across the team',
    ],
    projects: null,
  },
  {
    id: '02',
    role: 'Technical Lead',
    company: 'Adapty Solutions Pvt Ltd',
    location: 'Mumbai, India',
    period: 'January 2020 — April 2024',
    type: 'Full-time',
    tags: ['SFCC', 'SFRA', 'GTM', 'Fabric API', 'PayPal', 'Loqate', 'SEO'],
    highlights: [
      'Served as Technical Lead across 4 enterprise SFCC storefronts: GNC, Pet SuperMarket, The Watchbox & AERIN',
      'Owned end-to-end delivery — architecture, solutioning, task estimation, development, and mentoring',
      'Consistently delivered on high-priority tickets, complex integrations, and performance improvements',
    ],
    projects: [
      {
        name: 'GNC (US & CA)',
        period: 'June 2022 – April 2024',
        tech: 'SFCC – Controller Version',
        points: [
          'Extensive experience in optimizing websites for Search Engine Optimization (SEO)',
          'Successfully improved website performance by optimizing Core Web Vitals (LCP, FID, CLS)',
          'Proficient in analytics tools for comprehensive data analysis',
          'Successfully integrated Google Tag Manager (GTM) for efficient data management',
          'Expertise in seamlessly integrating the Fabric Customer API within the SFCC platform',
          'Played a crucial role in redesigning key pages: Account Page, Rewards Page, and OG SMI Page',
          'Demonstrated expertise in Page Designer tasks, enhancing visual and functional aspects of web pages',
        ],
      },
      {
        name: 'Pet SuperMarket (US)',
        period: 'September 2022 – January 2023',
        tech: 'SFCC – SFRA 6',
        points: [
          'Effectively addressed high-priority issues within the Salesforce Commerce Cloud checkout system',
          'Successfully implemented Multi-Fulfillment features: Direct-to-Customer (DTC), BOPIS, and Same Day Delivery (SDD)',
          'Seamlessly integrated payment methods: PayPal, Apple Pay, and CyberSource for enhanced checkout',
          'Contributed a comprehensive approach to optimizing the full e-commerce checkout process',
          'Worked primarily on high-priority tickets and groomed junior developers on the checkout flow',
        ],
      },
      {
        name: 'The Watchbox (US)',
        period: 'April 2021 – July 2021',
        tech: 'SFCC – SFRA 5',
        points: [
          'Led implementation of a new front-end skin / visual redesign for the storefront',
          'Responsible for task estimation, solution design, and full development delivery',
          'Implemented custom strap selection feature on the Product Detail Page (PDP), enhancing UX and functionality',
        ],
      },
      {
        name: 'AERIN (US)',
        period: 'January 2020 – July 2022',
        tech: 'SFCC – SFRA 4, 5, 6',
        points: [
          'Worked as Technical Lead for this SFRA project from day one',
          'Responsible for maintaining client Campaigns, Promotions, data and code replication',
          'Executed SFRA cartridge upgrade from version 4.x to 6.x with zero downtime',
          'Responsible for task estimation, solutioning, and full-stack development',
          'Worked on Content Assets, Content Slots, Promotion Banners, Bug Fixes, and Page Designer Components',
          'Successfully integrated Loqate for Address Verification on checkout, Create Account, Billing and Shipping pages',
        ],
      },
    ],
  },
];

const ProjectAccordion = ({ project, index }) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className={`exp-project-card ${open ? 'open' : ''}`}>
      <button
        className="exp-project-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="exp-project-toggle-left">
          <span className="exp-project-name">{project.name}</span>
          <div className="exp-project-meta">
            <span className="exp-project-period">
              <FiCalendar size={11} />
              {project.period}
            </span>
            <span className="exp-project-tech">{project.tech}</span>
          </div>
        </div>
        <FiChevronDown className={`exp-project-chevron ${open ? 'rotated' : ''}`} size={16} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="exp-project-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <ul className="exp-project-points">
              {project.points.map((pt, i) => (
                <li key={i} className="exp-project-point">
                  <span className="exp-bullet" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <span className="section-label">Career Path</span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Experience
        </motion.h2>
      </div>

      <div className="experience-layout">
        {/* Left: Tab Selector */}
        <div className="exp-tabs">
          {experiences.map((exp, i) => (
            <motion.button
              key={exp.id}
              className={`exp-tab ${activeIndex === i ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="exp-tab-num">{exp.id}</span>
              <div className="exp-tab-info">
                <span className="exp-tab-role">{exp.role}</span>
                <span className="exp-tab-company">{exp.company}</span>
              </div>
              {activeIndex === i && <FiArrowRight className="exp-tab-arrow" />}
            </motion.button>
          ))}
        </div>

        {/* Right: Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="exp-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="exp-detail-header">
              <div className="exp-detail-title-row">
                <h3 className="exp-detail-role">{active.role}</h3>
                <span className="exp-type-badge">{active.type}</span>
              </div>
              <p className="exp-detail-company">{active.company}</p>

              <div className="exp-meta">
                <span className="exp-meta-item">
                  <FiCalendar size={13} />
                  {active.period}
                </span>
                <span className="exp-meta-item">
                  <FiMapPin size={13} />
                  {active.location}
                </span>
              </div>

              <div className="exp-tags">
                {active.tags.map((tag, i) => (
                  <span key={i} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <ul className="exp-highlights">
              {active.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  className="exp-highlight-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <span className="exp-bullet" />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Project Accordion (Adapty only) */}
            {active.projects && (
              <div className="exp-projects-section">
                <p className="exp-projects-label">
                  <FiMapPin size={12} /> Projects at {active.company}
                </p>
                <div className="exp-projects-list">
                  {active.projects.map((project, i) => (
                    <ProjectAccordion key={i} project={project} index={i} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline at Bottom */}
      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div className="exp-timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-period">{exp.period}</span>
              <span className="timeline-role">{exp.role} @ {exp.company}</span>
            </div>
            {i < experiences.length - 1 && <div className="timeline-line" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
