import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../Data/constant.jsx";
import { ExternalLink, Lock, Code, Info } from "lucide-react";
import "../index.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const cardsRef = useRef([]);

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  // ✅ Intersection Observer (React way)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filteredProjects]); // re-run when filter changes

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">
          <div>
            <p className="subtitle">Portfolio</p>
            <h2 className="title">Featured Projects</h2>
          </div>

          <div className="filters">
            {["All", "C/C++", "Web Development", "Other"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-btn ${filter === f ? "active" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="project-card"
            >

              {/* Image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <span className="category">{project.category}</span>

                {project.isPrivate && (
                  <span className="lock">
                    <Lock size={16} />
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Tech Stack */}
                {Array.isArray(project.tech) && (
                  <div className="tech-list">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="project-actions">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn code-btn"
                    >
                      <Code size={16} />
                      View Code
                    </a>
                  ) : (
                    <button className="btn code-btn disabled" disabled>
                      <Info size={16} />
                      View Concept
                    </button>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn link-btn"
                      aria-label="Live Project"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;