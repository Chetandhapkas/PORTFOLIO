import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#" className="logo">
            Chetan<span>Dhapkas</span>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="work-btn">
            Work with me
          </a>

          {/* Mobile menu icon (UI only for now) */}
          <div className="menu-icon">
            ☰
          </div>
        </div>
      </nav>

      {/* CSS IN SAME FILE */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 24px 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 16px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }

        .nav-container {
          max-width: 1100px;
          margin: auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          text-decoration: none;
          color: #0f172a;
        }

        .logo span {
          color: #2563eb;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: #475569;
        }

        .nav-links a:hover {
          color: #2563eb;
        }

        .work-btn {
          background: #0f172a;
          color: white;
          padding: 10px 20px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        .work-btn:hover {
          background: #020617;
        }

        .menu-icon {
          display: none;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links,
          .work-btn {
            display: none;
          }

          .menu-icon {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
