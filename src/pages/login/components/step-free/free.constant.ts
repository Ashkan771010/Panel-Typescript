export const containerVariant = {
  hidden: {
    x: "-100px",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: { delay: 0.7, duration: 0.5, type: "spring", stiffness: 150 },
  },
  exit: {
    x: "100px",
    transition: { ease: "easeInOut" },
  },
};