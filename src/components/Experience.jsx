import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Engineer',
      company: 'Win Information Technology Pvt Ltd',
      date: 'December 2024 - Present',
      description: 'Developing FMCG demand forecasting models, building Sales Supervisor Agent using reinforcement learning, and fine-tuning LLaMA models for conversational AI solutions with 15% forecast accuracy improvement.'
    },
    {
      title: 'AI/ML Engineer',
      company: 'Growth Loops Technology',
      date: 'July 2024 - October 2024',
      description: 'Designed multi-agent chatbot systems using LangGraph, implemented RAG workflows, and integrated multiple AI APIs, successfully processing 5,000+ queries monthly with 20% reduced resolution time.'
    },
    {
      title: 'Data Science Intern',
      company: 'CodSoft',
      date: 'September 2023 - October 2023',
      description: 'Executed machine learning projects involving regression and classification tasks, developed predictive models for customer churn and sentiment analysis using Scikit-learn, NLTK, and PyTorch.'
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Professional <span className="gradient-text">Journey</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="timeline-date">{exp.date}</span>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience