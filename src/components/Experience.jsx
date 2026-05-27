import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiMapPin, FiChevronDown } from 'react-icons/fi';
import './Experience.css';
import { experiences } from './helpers';



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
