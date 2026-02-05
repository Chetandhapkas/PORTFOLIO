import React from "react";
import { Mountain, Award, Code2 } from "lucide-react";
import "../index.css";

const About = () => {
  return (
    <section id="about" className="about">
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
              I am a 3rd-year Information Technology student at Priyadarshini
              College of Engineering, Nagpur. My passion lies in solving
              real-world problems through logical coding, web development, and
              creative digital solutions.
            </p>

            <p>
              Beyond academics, I’m an explorer—passionate about coding and web
              development, and active in sports, having earned mountaineering
              certificates in Gujarat and recognition in football tournaments.
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
  );
};

export default About;
