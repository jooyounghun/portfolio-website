import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('감사합니다! 곧 연락드리겠습니다.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <h3>연락처</h3>
            <div className="info-item">
              <h4>📧 이메일</h4>
              <p>jyh.dev@gmail.com</p>
            </div>
            <div className="info-item">
              <h4>📱 전화</h4>
              <p>010-1234-5678</p>
            </div>
            <div className="info-item">
              <h4>📍 위치</h4>
              <p>Seoul, South Korea</p>
            </div>
            <div className="info-item">
              <h4>🎓 학력</h4>
              <p>동양미래대학교<br/>컴퓨터공학과 4학년</p>
            </div>
            <div className="info-item">
              <h4>🔗 소셜</h4>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
