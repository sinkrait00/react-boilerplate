export const dropSelectAnimation = {
  hidden: {
    y: 0,
    opacity: 0,
    transition: {
      y: { duration: 0.5 },
      opacity: { duration: 0.3 },
    },
  },
  enter: {
    y: 'calc(100% + 8px)',
    opacity: 1,
    transition: {
      opacity: { duration: 0.5 },
      y: {
        type: 'spring',
        stiffness: 80,
        restDelta: 0,
      },
    },
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      y: { duration: 0.5 },
      opacity: { duration: 0.3 },
    },
  },
}

export const arrowAnimation = {
  enter: {
    rotate: 180,
    transition: {
      rotate: { duration: 0.3 },
    },
  },
  exit: {
    rotate: 0,
    transition: {
      rotate: { duration: 0.3 },
    },
  },
}

export const dropAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.3 },
    },
  },
  enter: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.3 },
    },
  },
}
