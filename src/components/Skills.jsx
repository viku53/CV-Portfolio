import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { skillGroups } from './helpers';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-label">Expertise</span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </motion.h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={gi}
            className="skill-group-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1, duration: 0.7 }}
          >
            <div className="skill-group-header">
              <span className="skill-group-icon">{group.icon}</span>
              <h3 className="skill-group-name">{group.category}</h3>
            </div>

            <div className="skill-bars">
              {group.skills.map((skill, si) => (
                <div className="skill-bar-row" key={si}>
                  <div className="skill-bar-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + si * 0.1 + 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Specialty Tags Cloud */}
      <motion.div
        className="skills-specialty"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="specialty-title">Also proficient in</h3>
        <div className="specialty-tags">
          {[
            'Accessibility (WCAG 2.1 AA)', 'SEO Optimization', 'API Integration', 'Code Reviews',
            'Agile / Scrum', 'Performance Optimization', 'GTM / Analytics', 'React Hooks',
            'Context API', 'REST APIs', 'CI/CD Pipelines', 'Cross-browser Testing',
            'Mobile Responsive Design', 'HackerRank (Gold — Java)',
          ].map((tag, i) => (
            <motion.span
              key={i}
              className="specialty-tag"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
