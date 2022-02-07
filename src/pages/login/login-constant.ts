export const LoginSteps = {
  free: 0,
  sendingCode: 1,
};

export const containerVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { duration: 1, type: "spring", stiffness: 150 },
  },
};