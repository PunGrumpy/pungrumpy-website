'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

const iconVariants = {
  initial: { scale: 0.6, opacity: 0, rotate: -180 },
  animate: { scale: 1, opacity: 1, rotate: 0 },
  exit: { scale: 0.6, opacity: 0, rotate: 180 },
  whileTap: { scale: 0.95, rotate: 15 },
  whileHover: { scale: 1.1 }
}

const transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
  duration: 0.5
}

interface ThemeToggleIconProps {
  theme: string | undefined
  className?: string
}

export const ThemeToggleIcon: React.FC<ThemeToggleIconProps> = ({
  theme,
  className
}) => {
  return theme === 'dark' ? (
    <motion.div
      key="moon"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={iconVariants}
      whileTap="whileTap"
      whileHover="whileHover"
      transition={transition}
    >
      <MoonIcon className={className} />
    </motion.div>
  ) : (
    <motion.div
      key="sun"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={iconVariants}
      whileTap="whileTap"
      whileHover="whileHover"
      transition={transition}
    >
      <SunIcon className={className} />
    </motion.div>
  )
}
