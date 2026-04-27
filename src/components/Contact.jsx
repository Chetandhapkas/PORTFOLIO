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
import axios from "axios";

const Contact = () => {

  const sendData = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      await axios.post("http://localhost:5000/contact", data);
      alert("Message Sent Successfully ✅");
      form.reset();
    } catch (error) {
      alert("Error sending message ❌");
    }
  };

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
            </div>
          </div>

          {/* RIGHT : Form */}
          <div className="contact-form">
            <form onSubmit={sendData}>   {/* ✅ CONNECTED */}

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="John Doe" required />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Project Inquiry" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your opportunity..."
                  required
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