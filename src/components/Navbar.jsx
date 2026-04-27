import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Education", href: "#education", icon: <FaGraduationCap /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
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
        </div>
      </nav>

      {/* FLOATING MENU */}
      <div className="fab-container">
        <div
          className={`fab ${openMenu ? "active" : ""}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </div>

        {navLinks.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            className={`fab-item ${openMenu ? "show" : ""}`}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="icon">{link.icon}</div>
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          padding: 20px 0;
          transition: 0.3s;
        }

        .navbar.scrolled {
          backdrop-filter: blur(10px);
          background: rgba(0,0,0,0.4);
        }

        .nav-container {
          max-width: 1100px;
          margin: auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          color: white;
          font-weight: bold;
          font-size: 22px;
          text-decoration: none;
        }

        .logo span {
          color: #38bdf8;
        }

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          color: #cbd5f5;
          text-decoration: none;
          font-size: 14px;
          position: relative;
          transition: 0.3s;
        }

        /* 🔥 NAV HOVER EFFECT */
        .nav-links a:hover {
          color: #38bdf8;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: #38bdf8;
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .work-btn {
          background: #4697a2;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          text-decoration: none;
          color: black;
          transition: 0.3s;
        }

        .work-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgb(0, 0, 0);
        }

        /* FLOAT MENU */
        .fab-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: none;
          flex-direction: column-reverse;
          align-items: center;
          gap: 12px;
          z-index: 200;
        }

        .fab {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          transition: 0.3s;
        }

        .fab:hover {
          transform: scale(1.1);
        }

        /* 🔥 FAB ITEMS ANIMATION */
        .fab-item {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #020617;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #38bdf8;
          font-size: 14px;
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          pointer-events: none;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .fab-item span {
          font-size: 10px;
          margin-top: 2px;
          color: #cbd5f5;
        }

        .fab-item.show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        /* 🔥 HOVER EFFECT FOR BALLS */
        .fab-item:hover {
          transform: translateY(-3px) scale(1.08);
          background: #0f172a;
          box-shadow: 0 5px 15px rgba(56,189,248,0.3);
        }

        .fab-item:hover .icon {
          transform: scale(1.2);
        }

        .icon {
          transition: 0.3s;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .nav-links,
          .work-btn {
            display: none;
          }

          .fab-container {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;