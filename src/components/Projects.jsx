import { motion } from 'framer-motion'
import { Github, ExternalLink, Bot, Heart, MessageSquare, TrendingUp, Image, Shield, Brain, Database, BarChart3, Award, Star, Eye } from 'lucide-react'

const Projects = () => {
  const featuredProjects = [
    {
      icon: <MessageSquare size={50} />,
      title: 'Multimodal Chatbot',
      description: 'Advanced RAG Chatbots Using LLMs and Multiple Databases - Cutting-edge conversational AI with multimodal capabilities, integrating text, image, and voice processing.',
      tech: ['TypeScript', 'LLMs', 'RAG', 'Vector DB', 'Multimodal'],
      github: 'https://github.com/divya-nayan/Multimodal-Chatbot',
      demo: '#',
      featured: true,
      category: 'AI/ML'
    },
    {
      icon: <Brain size={50} />,
      title: 'LLM Fine-tuning',
      description: 'State-of-the-art Large Language Model fine-tuning implementation with custom training pipelines, optimization techniques, and performance evaluation metrics.',
      tech: ['Python', 'PyTorch', 'Transformers', 'CUDA', 'Hugging Face'],
      github: 'https://github.com/divya-nayan/LLM-Finetuning',
      demo: '#',
      featured: true,
      category: 'AI/ML'
    },
    {
      icon: <TrendingUp size={50} />,
      title: 'Demand Forecasting',
      description: 'Advanced time series forecasting system using ensemble methods, deep learning, and statistical models for accurate demand prediction and inventory optimization.',
      tech: ['Python', 'Time Series', 'LSTM', 'Prophet', 'XGBoost'],
      github: 'https://github.com/divya-nayan/Demand-Forecasting',
      demo: '#',
      featured: true,
      category: 'AI/ML'
    },
    {
      icon: <MessageSquare size={50} />,
      title: 'Natural Language Processing',
      description: 'Comprehensive NLP project with sentiment analysis, text generation, POS tagging, and advanced language understanding capabilities.',
      tech: ['Jupyter', 'NLTK', 'spaCy', 'Transformers', 'Deep Learning'],
      github: 'https://github.com/divya-nayan/Natural-Language-Processing',
      demo: '#',
      featured: false,
      category: 'AI/ML'
    },
    {
      icon: <Eye size={50} />,
      title: 'Computer Vision',
      description: 'Advanced computer vision projects including image processing, classification, segmentation, captioning and object detection using state-of-the-art models.',
      tech: ['Jupyter', 'OpenCV', 'TensorFlow', 'YOLO', 'CNN'],
      github: 'https://github.com/divya-nayan/Computer-Vision',
      demo: '#',
      featured: false,
      category: 'AI/ML'
    },
    {
      icon: <Database size={50} />,
      title: 'Customer Segmentation',
      description: 'Advanced customer segmentation using K-means clustering, RFM analysis, and machine learning techniques for targeted marketing strategies.',
      tech: ['Python', 'K-means', 'ML', 'Data Science', 'Analytics'],
      github: 'https://github.com/divya-nayan/Customer-Segmentation-using-K-means',
      demo: '#',
      featured: false,
      category: 'Data Science'
    },
    {
      icon: <Heart size={50} />,
      title: 'Movies Recommendation',
      description: 'Intelligent movie recommendation system using collaborative filtering, content-based filtering, and hybrid approaches for personalized suggestions.',
      tech: ['Python', 'ML', 'Collaborative Filtering', 'Pandas', 'NumPy'],
      github: 'https://github.com/divya-nayan/Movies-Recommendation-System',
      demo: '#',
      featured: false,
      category: 'AI/ML'
    },
    {
      icon: <BarChart3 size={50} />,
      title: 'PowerBI Dashboards',
      description: 'Interactive business intelligence dashboards with advanced data visualization, real-time analytics, and comprehensive reporting capabilities.',
      tech: ['PowerBI', 'DAX', 'Data Modeling', 'ETL', 'Analytics'],
      github: 'https://github.com/divya-nayan/PowerBI-Dashboards-for-Data-Visualization',
      demo: '#',
      featured: false,
      category: 'Data Science'
    }
  ]

  const projects = featuredProjects.filter(p => p.featured)
  const allProjects = featuredProjects

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured <span className="gradient-text">AI/ML Projects</span></h2>
          <p className="section-subtitle">Showcasing cutting-edge artificial intelligence and machine learning solutions</p>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="projects-showcase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="projects-grid featured-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`project-card ${project.featured ? 'featured-card' : ''}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="project-icon"
                    >
                      {project.icon}
                    </motion.div>
                    <div className="project-category-badge">
                      <Star size={12} />
                      {project.category}
                    </div>
                  </div>
                  <div className="project-glow"></div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-tag"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="project-link demo-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="more-projects-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="more-projects-title">More <span className="gradient-text">Projects</span></h3>
          <div className="projects-grid secondary-grid">
            {allProjects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                className="project-card secondary-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className="project-mini-icon">
                  {project.icon}
                </div>
                <h4 className="project-mini-title">{project.title}</h4>
                <p className="project-mini-description">{project.description}</p>
                <div className="project-mini-tech">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="mini-tech-tag">{tech}</span>
                  ))}
                  {project.tech.length > 3 && <span className="mini-tech-tag">+{project.tech.length - 3}</span>}
                </div>
                <div className="project-mini-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="mini-link">
                    <Github size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="github-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/divya-nayan"
            target="_blank"
            rel="noopener noreferrer"
            className="github-cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects