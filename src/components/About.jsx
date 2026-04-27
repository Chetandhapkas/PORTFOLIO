import React, { useEffect, useRef } from "react";
import { Mountain, Award, Code2 } from "lucide-react";
import "../index.css";

const About = () => {
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section class="section section-merge">
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        {/* Header */}
        <div className="about-header">
          <h2>About Me</h2>
          <h3>The Journey of an Engineering Enthusiast</h3>
        </div>

        {/* Content */}
        <div className="about-grid">
          {/* Left */}
          <div className="about-text">
            <p>
              I am a 3rd-year Information Technology student at Priyadarshini College of Engineering, Nagpur. 
              I enjoy solving real-world problems through logical thinking, clean code, and modern web development.
            </p>

            <p>
             Beyond academics, I’m an explorer with a strong interest in technology and sports.
             I have earned mountaineering certifications in Gujarat and actively participated in football tournaments, building discipline, teamwork, and resilience.
            </p>

            <div className="about-links">
              <a href="https://drive.google.com/file/d/1xgmZ5hxFyLMGUt9_VnP0KytEhYpz_6sP/view?usp=drive_link" target="_blank" rel="noreferrer">
                <Mountain />
                Mountaineer
              </a>
              <a href="https://drive.google.com/file/d/1-luXHL2XM_o7mp425c8M3hh002-mxatY/view?usp=drive_link" target="_blank" rel="noreferrer">
                <Award />
                2× National Certs
              </a>
              <a href="https://drive.google.com/file/d/1768i1yQlqC5qRxdV9TwujX6yyDIFG6Ob/view?usp=drive_link" target="_blank" rel="noreferrer">
                <Code2 />
                React Developer
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="about-qualities">
            <h4>Key Qualities</h4>

            <div className="quality-item">
              <span>1</span>
              <div>
                <h5>Curious Learner</h5>
                <p>
                  Always eager to explore new technologies and emerging fields
                  like AI and UI/UX.
                </p>
              </div>
            </div>

            <div className="quality-item">
              <span>2</span>
              <div>
                <h5>Hardworking & Creative</h5>
                <p>
                  From C programming to full-stack development and creative
                  engineering projects.
                </p>
              </div>
            </div>

            <div className="quality-item">
              <span>3</span>
              <div>
                <h5>Team Player</h5>
                <p>
                  Strong collaboration skills proven through internships and
                  college projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default About;