import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">

            {/* Brand */}
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                Chetan<span>Dhapkas</span>
              </a>
              <p>
                Engineering student and aspiring software developer passionate
                about building modern web solutions.
              </p>
            </div>

            {/* Links */}
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#education">Experience</a>
            </div>

            {/* Copyright */}
            <p className="footer-copy">
              © {new Date().getFullYear()} Chetan Dhapkas. Built with React.
            </p>

          </div>
        </div>
      </footer>

      {/* CSS in same file */}
      <style>{`
        .footer {
          padding: 3rem 1.5rem;
          background-color: #f8fafc;
          border-top: 1px solid #e5e7eb;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .footer-logo span {
          color: #2563eb;
        }

        .footer-brand p {
          font-size: 0.875rem;
          color: #64748b;
          margin-top: 0.5rem;
          max-width: 260px;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .footer-links a {
          text-decoration: none;
          color: #475569;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #2563eb;
        }

        .footer-copy {
          font-size: 0.75rem;
          color: #94a3b8;
        }
      `}</style>
    </>
  );
};

export default Footer;
