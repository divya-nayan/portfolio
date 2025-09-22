import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!</p>

            <div className="contact-items">
              <div className="contact-item">
                <Mail size={20} />
                <a href="mailto:divyanayan88@gmail.com">divyanayan88@gmail.com</a>
              </div>
              <div className="contact-item">
                <Linkedin size={20} />
                <a href="https://www.linkedin.com/in/divyanayan/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/divyanayan
                </a>
              </div>
              <div className="contact-item">
                <Github size={20} />
                <a href="https://github.com/divya-nayan" target="_blank" rel="noopener noreferrer">
                  github.com/divya-nayan
                </a>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                </svg>
                <a href="https://www.kaggle.com/dnayan" target="_blank" rel="noopener noreferrer">
                  kaggle.com/dnayan
                </a>
              </div>
            </div>

            <div className="contact-cta">
              <a href="/portfolio/DivyaNayan_AIML_Engineer.pdf" download className="btn btn-primary">
                <Download size={20} /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Divya Nayan. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/divya-nayan" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/divyanayan/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://www.kaggle.com/dnayan" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact