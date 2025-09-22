import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'
import { Download, Folder, Github, Linkedin, Mail, Brain, Zap, Target, Sparkles } from 'lucide-react'

const Hero = () => {
  const roles = [
    'AI/ML Engineer 🤖',
    'LLM Fine-tuning Expert 🧠',
    'Multimodal Chatbot Developer 💬',
    'Demand Forecasting Specialist 📈',
    'Deep Learning Researcher 🔬',
    'RAG Systems Architect 🏗️'
  ]

  const achievements = [
    { icon: <Brain size={24} />, number: "3+", label: "AI Projects" },
    { icon: <Zap size={24} />, number: "27%", label: "Efficiency Boost" },
    { icon: <Target size={24} />, number: "15%", label: "Accuracy Improvement" },
    { icon: <Sparkles size={24} />, number: "5K+", label: "Queries/Month" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="hero-subtitle">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                👋 Hello, I'm
              </motion.span>
            </span>
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={itemVariants}
          >
            <span className="gradient-text">Divya Nayan</span>
          </motion.h1>

          <motion.h2
            className="hero-role"
            variants={itemVariants}
          >
            <ReactTyped
              strings={roles}
              typeSpeed={80}
              backSpeed={60}
              loop
              className="typing-text"
            />
            <span className="cursor-blink">|</span>
          </motion.h2>

          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            🚀 <strong>AI/ML Engineer</strong> with expertise in building cutting-edge machine learning models,
            multimodal chatbots, and forecasting systems. Specialized in <strong>LLM fine-tuning</strong>,
            <strong>RAG implementations</strong>, and scalable AI solutions that drive real business impact.
          </motion.p>

          <motion.div
            className="hero-achievements"
            variants={itemVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-item"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.a
              href="/portfolio/DivyaNayan_AIML_Engineer.pdf"
              download
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} /> Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Folder size={20} /> View AI Projects
            </motion.a>
          </motion.div>

          <motion.div
            className="social-links"
            variants={itemVariants}
          >
            {[
              { href: "https://github.com/divya-nayan", icon: <Github size={20} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/divyanayan/", icon: <Linkedin size={20} />, label: "LinkedIn" },
              {
                href: "https://www.kaggle.com/dnayan",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                  </svg>
                ),
                label: "Kaggle"
              },
              { href: "mailto:divyanayan88@gmail.com", icon: <Mail size={20} />, label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <div className="image-container">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <motion.div
              className="profile-img-wrapper"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <img
                src="/portfolio/pic.jpg"
                alt="Divya Nayan - AI/ML Engineer"
                className="profile-img"
              />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero