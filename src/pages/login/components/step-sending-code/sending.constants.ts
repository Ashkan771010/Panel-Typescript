export const containerVariant = {
  hidden: {
    x: "-100px",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 150 },
  },
  exit: {
    x: "100px",
    transition: { delay: 0.1, duration: 0.5, type: "spring", stiffness: 150 },
  },
};
