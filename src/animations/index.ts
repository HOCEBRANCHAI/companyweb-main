export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.5,
  },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const buttonVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95,
  }
}

export const pulseVariants = {
  initial: {
    boxShadow: "0 0 0 0 rgba(234, 58, 112, 0.7)",
  },
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(234, 58, 112, 0.7)",
      "0 0 0 10px rgba(234, 58, 112, 0)",
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}