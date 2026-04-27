import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-grid">

            {/* ABOUT */}
            <div className="footer-section">
              <h2 className="logo">
                Chetan<span>Dhapkas</span>
              </h2>
              <p>
                I'm a passionate software developer focused on building modern,
                responsive, and user-friendly web applications. I love turning
                ideas into real-world digital solutions.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#education">Experience</a>
            </div>

            {/* SERVICES */}
            <div className="footer-section">
              <h3>Services</h3>
              <p>Website Development</p>
              <p>UI/UX Design</p>
              <p>Frontend Development</p>
              <p>Landing Pages</p>
            </div>

            {/* CONTACT */}
            <div className="footer-section">
              <h3>Contact</h3>
              <p>Email: chetan@example.com</p>
              <p>Location: Nagpur, India</p>
              <p>Available for Freelance</p>
            </div>

            {/* SOCIAL */}
            <div className="footer-section">
              <h3>Follow Me</h3>
              <div className="socials">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Chetan Dhapkas. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

      <style>{`
        .footer {
          background: #020617;
          color: #e2e8f0;
          padding: 4rem 1.5rem 2rem;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .footer-section h3 {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: #f1f5f9;
        }

        .footer-section p,
        .footer-section a {
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
          display: block;
          text-decoration: none;
        }

        .footer-section a:hover {
          color: #38bdf8;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
        }

        .logo span {
          color: #38bdf8;
        }

        .socials {
          display: flex;
          gap: 1rem;
        }

        .footer-bottom {
          border-top: 1px solid #1e293b;
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.75rem;
          color: #64748b;
        }
      `}</style>
    </>
  );
};

export default Footer;