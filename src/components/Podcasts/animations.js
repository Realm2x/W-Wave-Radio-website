export const cardAnimation = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  transition: { duration: 0.3 }
};

export const buttonAnimation = {
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

export const iconAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
};