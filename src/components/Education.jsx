import React from "react";
import { EDUCATION, INTERNSHIPS } from "../Data/constant.jsx";
import { GraduationCap, Briefcase, Star } from "lucide-react";
import "../index.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="education-grid">

          {/* Education */}
          <div>
            <div className="section-header">
              <div className="icon-bg blue">
                <GraduationCap />
              </div>
              <h3>Education</h3>
            </div>

            <div className="timeline">
              {EDUCATION.map((edu, idx) => (
                <div className="timeline-item" key={idx}>
                  <span className="timeline-dot blue"></span>

                  <div className="timeline-card">
                    <span className="timeline-period">{edu.period}</span>
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>

                    <div className="grade">
                      <Star size={14} />
                      Grade: {edu.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="section-header">
              <div className="icon-bg indigo">
                <Briefcase />
              </div>
              <h3>Experience</h3>
            </div>

            <div className="timeline">
              {INTERNSHIPS.map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                  <span className="timeline-dot indigo"></span>

                  <div className="timeline-card">
                    <span className="timeline-period">{exp.period}</span>
                    <h4>{exp.role}</h4>
                    <p className="institution">{exp.company}</p>
                    <p className="description">"{exp.description}"</p>
                  </div>
                </div>
              ))}

              {/* Extra */}
              <div className="timeline-item">
                <span className="timeline-dot indigo"></span>

                <div className="timeline-card gradient-card">
                  <h4>Extra-Curricular Highlights</h4>
                  <ul>
                    <li>Two National-level Association Certificates</li>
                    <li>Two Mountaineering Certificates (Gujarat)</li>
                    <li>Robotics & Intelligent Systems (Open Elective)</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
