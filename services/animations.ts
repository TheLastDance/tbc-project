export const animation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "linear", delay: 0.4 },
  },
}

export const modalAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { ease: "linear", duration: 0.3 }
  },
  exit: {
    opacity: 0,
    transition: { ease: "linear", duration: 0.3 }
  },
}

export const orderAnimation = {
  initial: {
    y: -30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 0.2 }
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: { ease: "linear", duration: 0.2 }
  },
}