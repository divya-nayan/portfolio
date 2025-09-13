import { motion } from 'framer-motion'
import { Brain, TrendingUp, Eye } from 'lucide-react'

const About = () => {
  const cards = [
    {
      icon: <Brain size={40} />,
      title: 'Forecasting & Optimization',
      description: 'Expert in demand forecasting using LightGBM, Prophet, ARIMA, and SARIMA. Implemented inventory optimization with Mixed Integer Programming achieving 27% efficiency improvement.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Conversational AI & LLMs',
      description: 'Specialized in fine-tuning LLaMA models, building multi-agent chatbot systems with LangGraph, and implementing RAG workflows with LangChain and Pinecone.'
    },
    {
      icon: <Eye size={40} />,
      title: 'Reinforcement Learning',
      description: 'Developed Sales Supervisor Agent using DDQN, PPO, and Actor-Critic algorithms with Multi-Armed Bandit for real-time decision making in production environments.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="about-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="about-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About