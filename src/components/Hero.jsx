import React from "react";
import profileImg from "../assets/portfolio1.jpg"; // ✅ IMPORT IMAGE

// Features Array
const FEATURES = [
  { icon: "💻", title: "Engineering", desc: "3rd-year IT Student at PCE Nagpur" },
  { icon: "⚙️", title: "Web Dev", desc: "Learn and write clean code" },
  { icon: "🤖", title: "Backend", desc: "Familiar with server-side programming concepts using Java." },
  { icon: "🛠️", title: "UI/UX Design", desc: "Creating user-friendly and modern interfaces for web and mobile applications using AI-assisted design tools." },
];

// Hero Section: Text + Image
const HeroTop = () => (
  <div className="hero-top">
    {/* Text Section */}
    <div className="hero-text">
      <p className="badge">
  <span className="live-dot"></span>
  Available for Internships
</p>


      <h1>
        Hi, I'm Chetan <br />
        <span className="highlight">Aspiring Engineer</span>
      </h1>

      <p className="description">
        Engineering student passionate about software development and web technologies,
        creating impactful projects while continuously learning and growing.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">View My Projects →</a>
        <a href="/RESUME3rd.pdf" download className="btn-outline">Download Resume</a>
      </div>
    </div>

    {/* Image Section */}
    <div className="hero-image">
      <img src={profileImg} alt="Chetan Dhapkas" /> {/* ✅ FIXED */}
      <div className="hero-image-caption">
        <p className="name">Chetan Dhapkas</p>
        <p className="role">Information Technology @ PCE Nagpur</p>
      </div>
    </div>
  </div>
);

// Features Section
const Features = () => (
  <div className="feature-grid">
    {FEATURES.map((feature, index) => (
      <div key={index} className="feature-card">
        <div className="feature-icon">{feature.icon}</div>
        <h3 className="feature-title">{feature.title}</h3>
        <p className="feature-desc">{feature.desc}</p>
      </div>
    ))}
  </div>
);

// Main Hero Component
const Hero = () => {
  return (
    <section className="hero">
      <HeroTop />
      <Features />
    </section>
  );
};

export default Hero;
