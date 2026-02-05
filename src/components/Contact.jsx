import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import "../index.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-card">
          {/* LEFT : Contact Info */}
          <div className="contact-sidebar">
            <div>
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing internship opportunities, new
                software projects, or creative collaborations.
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <span className="icon">
                    <Mail />
                  </span>
                  <div>
                    <p className="label">Email</p>
                    <p className="value">chetandhapkas27@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">
                    <Phone />
                  </span>
                  <div>
                    <p className="label">Contact</p>
                    <p className="value">+91 97653 28630</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">
                    <MapPin />
                  </span>
                  <div>
                    <p className="label">Location</p>
                    <p className="value">Nagpur, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/chetan-dhapkas-9a974231a"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
              <a href="https://github.com/Chetandhapkas" target="_blank" rel="noreferrer">
                <Github />
              </a>
              <a
  href="https://leetcode.com/u/ChetanDhapkas/"
  target="_blank"
  rel="noreferrer"
  className="leetcode-icon"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="22"
    height="22"
  >
    <path d="M16.102 17.93a1.5 1.5 0 0 1-2.12 0l-6.01-6.01a1.5 1.5 0 0 1 0-2.12l6.01-6.01a1.5 1.5 0 1 1 2.12 2.12L10.8 9.79h9.7a1.5 1.5 0 0 1 0 3h-9.7l5.302 5.302a1.5 1.5 0 0 1 0 2.12z" />
  </svg>
</a>

            </div>
          </div>

          {/* RIGHT : Form */}
          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Project Inquiry" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your opportunity..."
                ></textarea>
              </div>

              <button type="submit">
                Send Message <Send />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
