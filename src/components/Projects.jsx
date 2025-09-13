import { motion } from 'framer-motion'
import { Github, ExternalLink, Bot, Heart, MessageSquare, TrendingUp, Image, Shield } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      icon: <TrendingUp size={50} />,
      title: 'FMCG Demand Forecasting System',
      description: 'Developed forecasting models using LightGBM, Prophet, ARIMA, and SARIMA on 5 years of sales data, achieving 15% improvement in forecast accuracy and reducing inventory costs.',
      tech: ['LightGBM', 'Prophet', 'ARIMA', 'SARIMA', 'Python'],
      github: 'https://github.com/divya-nayan',
      demo: '#'
    },
    {
      icon: <Bot size={50} />,
      title: 'Sales Supervisor AI Agent',
      description: 'Built reinforcement learning agent using DDQN, PPO, Actor-Critic algorithms with Mixed Integer Programming for inventory optimization, enhancing operational efficiency by 27%.',
      tech: ['DDQN', 'PPO', 'Actor-Critic', 'MIP', 'MAB'],
      github: 'https://github.com/divya-nayan',
      demo: '#'
    },
    {
      icon: <MessageSquare size={50} />,
      title: 'Custom Conversational AI Agent',
      description: 'Fine-tuned LLaMA 3.2 model with 10,000+ synthetic data samples, integrated with ElevenLabs, Twilio API for voice interface, and Ngrok for secure deployment.',
      tech: ['LLaMA 3.2', 'ElevenLabs', 'Twilio API', 'Ngrok'],
      github: 'https://github.com/divya-nayan',
      demo: '#'
    },
    {
      icon: <MessageSquare size={50} />,
      title: 'Multi-Agent Chatbot System',
      description: 'Designed chatbot systems using LangGraph framework for US-based client, reducing query resolution time by 20% and processing 5,000+ queries monthly.',
      tech: ['LangGraph', 'LangChain', 'OpenAI', 'Groq'],
      github: 'https://github.com/divya-nayan',
      demo: '#'
    },
    {
      icon: <Shield size={50} />,
      title: 'RAG Workflow Implementation',
      description: 'Implemented Retrieval-Augmented Generation workflows with LangChain and Pinecone vector database to enhance document retrieval accuracy and response consistency.',
      tech: ['RAG', 'LangChain', 'Pinecone', 'Vector DB'],
      github: 'https://github.com/divya-nayan',
      demo: '#'
    },
    {
      icon: <Heart size={50} />,
      title: 'Customer Analytics Models',
      description: 'Developed predictive models for customer churn prediction and sentiment analysis using machine learning algorithms with focus on model optimization.',
      tech: ['Scikit-learn', 'NLTK', 'PyTorch', 'ML'],
      github: 'https://github.com/divya-nayan',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-overlay">
                  {project.icon}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={18} />
                  </a>
                  <a href={project.demo} className="project-link">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects