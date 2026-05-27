import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';
import { projects } from './helpers';

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-label">Portfolio</span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Selected Works
        </motion.h2>
      </div>

      {/* Project List */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-item ${hovered === index ? 'hovered' : ''} ${hovered !== null && hovered !== index ? 'dimmed' : ''}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.7 }}
          >
            <div className="project-left">
              <div className="project-header">
                <span className="project-num">{project.id}</span>
                <span className="project-category">{project.category}</span>
                <span className={`project-status ${project.status === 'Live' ? 'live' : ''}`}>
                  <span className="status-dot" />
                  {project.status}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-right">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-link-btn primary"
                aria-label={`View ${project.title} live`}
              >
                <FiExternalLink size={18} />
                <span>View Live</span>
              </a>
              {/* <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-link-btn secondary"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FiGithub size={18} />
              </a> */}
            </div>

            <div className="project-index-bg">{project.id}</div>
          </motion.div>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        className="projects-github-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p>More projects on GitHub</p>
        <a
          href="https://github.com/viku53"
          target="_blank"
          rel="noreferrer"
          className="github-cta-btn"
        >
          <FiGithub size={18} />
          github.com/viku53
          <FiArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
