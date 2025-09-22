import { motion } from 'framer-motion'
import { Brain, Code, Cloud, Database, Zap, Cpu } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Programming & Development',
      skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Git', 'Docker', 'MLFlow', 'Jupyter'],
      proficiency: 95
    },
    {
      icon: <Brain size={32} />,
      title: 'AI & Machine Learning',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Prophet', 'NLTK', 'spaCy'],
      proficiency: 90
    },
    {
      icon: <Zap size={32} />,
      title: 'Deep Learning & LLMs',
      skills: ['Transformers', 'Hugging Face', 'LLaMA', 'GPT', 'BERT', 'Fine-tuning', 'RLHF', 'Quantization'],
      proficiency: 88
    },
    {
      icon: <Cpu size={32} />,
      title: 'Frameworks & Tools',
      skills: ['LangChain', 'LangGraph', 'CrewAI', 'RAG', 'Vector DBs', 'Pinecone', 'ChromaDB', 'FAISS'],
      proficiency: 85
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & MLOps',
      skills: ['AWS', 'EC2', 'S3', 'SageMaker', 'Lambda', 'MLFlow', 'Docker', 'CI/CD'],
      proficiency: 82
    },
    {
      icon: <Database size={32} />,
      title: 'APIs & Integration',
      skills: ['OpenAI API', 'Groq API', 'Anthropic API', 'Twilio', 'REST APIs', 'GraphQL', 'WebSockets', 'Ngrok'],
      proficiency: 87
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle">
            Cutting-edge AI/ML technologies and frameworks powering next-generation solutions
          </p>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category enhanced-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <div className="category-info">
                  <h3 className="category-title">{category.title}</h3>
                  <div className="proficiency-bar">
                    <motion.div
                      className="proficiency-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.proficiency}%` }}
                      transition={{ duration: 1.5, delay: categoryIndex * 0.2 }}
                      viewport={{ once: true }}
                    />
                    <span className="proficiency-text">{category.proficiency}%</span>
                  </div>
                </div>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag enhanced-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 5px 15px rgba(102, 126, 234, 0.3)"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1.5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">AI Projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills