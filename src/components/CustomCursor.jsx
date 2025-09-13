import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
    }
  }

  return (
    <>
      <motion.div
        className="cursor"
        animate={cursorVariant}
        variants={variants}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-follower"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />
    </>
  )
}

export default CustomCursor