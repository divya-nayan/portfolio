import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'
import { Download, Folder, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const roles = [
    'AI/ML Engineer',
    'Forecasting Systems Expert',
    'Conversational AI Specialist',
    'Deep Learning Developer',
    'LLM Solutions Architect'
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-subtitle">Hello, I'm</span>
          <h1 className="hero-title">
            <span className="gradient-text">Divya Nayan</span>
          </h1>
          <h2 className="hero-role">
            <ReactTyped
              strings={roles}
              typeSpeed={60}
              backSpeed={50}
              loop
              className="typing-text"
            />
            <span className="cursor-blink">|</span>
          </h2>
          <p className="hero-description">
            Experienced AI/ML Engineer with 1.5+ years developing machine learning models, forecasting systems,
            and conversational AI solutions. Skilled in implementing deep learning algorithms and building scalable AI applications.
          </p>

          <div className="hero-buttons">
            <a href="/portfolio/static/DivyaNayan_AIML_Engineer.pdf" download className="btn btn-primary">
              <Download size={20} /> Download Resume
            </a>
            <a href="#projects" className="btn btn-secondary">
              <Folder size={20} /> View Projects
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/divya-nayan" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/divyanayan/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="https://www.kaggle.com/dnayan" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
              </svg>
            </a>
            <a href="mailto:divyanayan88@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <div className="profile-img-wrapper">
              <img
                src="/portfolio/static/pic.jpg"
                alt="Divya Nayan"
                className="profile-img"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero