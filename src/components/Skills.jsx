import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Databases',
      skills: ['Python', 'SQL', 'MySQL', 'GitHub', 'MLFlow', 'Docker']
    },
    {
      title: 'Machine Learning & Deep Learning',
      skills: ['LightGBM', 'Prophet', 'ARIMA', 'SARIMA', 'DDQN', 'PPO', 'Actor-Critic', 'Mixed Integer Programming', 'Multi-Armed Bandit', 'Scikit-learn', 'PyTorch', 'NLTK']
    },
    {
      title: 'AI & LLM Frameworks',
      skills: ['LangChain', 'LangGraph', 'CrewAI', 'OpenAI Gym', 'RAG', 'LLaMA', 'ElevenLabs', 'Pinecone']
    },
    {
      title: 'Cloud & API Integration',
      skills: ['AWS', 'OpenAI API', 'Groq API', 'LLaMA API', 'Twilio API', 'Ngrok']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills