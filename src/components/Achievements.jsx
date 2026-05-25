import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';
import { title } from 'framer-motion/client';

const certifications = [
  {
    title: 'Salesforce AI Associate',
    issuer: 'Salesforce',
    date: 'December 2024',
    type: 'Certification',
    icon: '🤖',
  },
  {
    title: 'Salesforce B2C Commerce Cloud Developer',
    issuer: 'Salesforce',
    date: 'December 2022',
    type: 'Certification',
    icon: '☁️',
  },
];

const awards = [
  {
    title: 'On the Spot Award',
    org: 'Tata Consultancy Services',
    date: 'October 2025',
    desc: 'Awarded for outstanding contribution to a high-impact project.',
    icon: '🎉',
  },
  {
    title: 'Pat on the Back Award',
    org: 'Adapty Solutions',
    date: 'September 2022',
    desc: 'Recognized for exceptional performance and client delivery.',
    icon: '🏅',
  },
  {
    title: 'Pat on the Back Award',
    org: 'Adapty Solutions',
    date: 'April 2022',
    desc: 'Recognized for going beyond expectations on a critical project.',
    icon: '🏅',
  },
  {
    title: 'Rising Star Award',
    org: 'Adapty Solutions',
    date: 'March 2020',
    desc: 'Awarded to top-performing new team members demonstrating exceptional growth.',
    icon: '⭐',
  },
  {
    title: 'Winner — Web Domination',
    org: 'PVPPCOE',
    date: 'March 2018',
    desc: 'Won the inter-college web development competition.',
    icon: '🏆',
  },
  {
    title: 'Gold Badge — Java',
    org: 'HackerRank',
    date: 'Ongoing',
    desc: 'Achieved Gold level badge in Java programming on HackerRank.',
    icon: '🥇',
  },
];

const marqueeItems = [...certifications, ...awards, ...certifications, ...awards];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header">
        <span className="section-label">Recognition</span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Awards &amp; Certs
        </motion.h2>
      </div>

      {/* Certifications Grid */}
      <div className="certs-grid">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-badge">Certified</div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-date">{cert.date}</span>
          </motion.div>
        ))}
      </div>

      {/* Awards List */}
      <div className="awards-list">
        <h3 className="awards-list-title">
          <span className="section-label" style={{ marginBottom: 0 }}>Awards</span>
        </h3>
        {awards.map((award, i) => (
          <motion.div
            key={i}
            className="award-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="award-icon">{award.icon}</span>
            <div className="award-content">
              <div className="award-row">
                <h4 className="award-title">{award.title}</h4>
                <span className="award-date">{award.date}</span>
              </div>
              <p className="award-org">{award.org}</p>
              <p className="award-desc">{award.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marquee Ticker */}
      <div className="achievements-ticker-wrap">
        <div className="achievements-ticker">
          {marqueeItems.map((item, i) => (
            <div key={i} className="ticker-item">
              <span className="ticker-icon">{item.icon}</span>
              <span className="ticker-text">{item.title}</span>
              <span className="ticker-sep">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
