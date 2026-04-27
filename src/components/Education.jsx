import React, { useEffect, useRef } from "react";
import { EDUCATION, INTERNSHIPS } from "../Data/constant.jsx";
import { GraduationCap, Briefcase, Star } from "lucide-react";
import "../index.css";

const Education = () => {

  const itemsRef = useRef([]);

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

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section class="section section-merge">
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
                <div
                  className="timeline-item"
                  key={idx}
                  ref={(el) => (itemsRef.current[idx] = el)}
                >
                  <span className="timeline-dot"></span>

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
                <div
                  className="timeline-item"
                  key={idx}
                  ref={(el) =>
                    (itemsRef.current[EDUCATION.length + idx] = el)
                  }
                >
                  <span className="timeline-dot"></span>

                  <div className="timeline-card">
                    <span className="timeline-period">{exp.period}</span>
                    <h4>{exp.role}</h4>
                    <p className="institution">{exp.company}</p>
                    <p className="description">"{exp.description}"</p>
                  </div>
                </div>
              ))}

              {/* Extra */}
              <div
                className="timeline-item"
                ref={(el) =>
                  (itemsRef.current[
                    EDUCATION.length + INTERNSHIPS.length
                  ] = el)
                }
              >
                <span className="timeline-dot"></span>

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
    </section>
  );
};

export default Education;