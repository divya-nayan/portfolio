import { motion } from 'framer-motion'
import { GraduationCap, Award, Trophy } from 'lucide-react'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education & <span className="gradient-text">Achievements</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="education-grid">
          <motion.div
            className="education-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="edu-icon">
              <GraduationCap size={40} />
            </div>
            <h3>Bachelor of Engineering</h3>
            <h4>Computer Science and Engineering</h4>
            <p className="edu-institution">RGPV University, Bhopal</p>
            <p className="edu-date">August 2015 - June 2019</p>
            <p className="edu-grade">GPA: 7.53/10</p>
          </motion.div>

          <motion.div
            className="education-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="edu-icon">
              <Award size={40} />
            </div>
            <h3>Professional Certifications</h3>
            <ul className="cert-list">
              <li>IBM Data Science Professional Certificate</li>
              <li>Google Advanced Data Analytics Certificate</li>
            </ul>
          </motion.div>

          <motion.div
            className="education-card glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="edu-icon">
              <Trophy size={40} />
            </div>
            <h3>Technical Achievement</h3>
            <h4>TCS NQT 2023</h4>
            <p className="achievement-score">Score: 1609/1800</p>
            <p className="achievement-percent">89.4% Percentile</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education