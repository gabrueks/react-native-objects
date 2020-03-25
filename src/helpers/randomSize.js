export default fullWidth => {
  const mW = (fullWidth * 40) / 100;
  const nW = (fullWidth * 10) / 100;
  return Math.floor(Math.random() * mW + nW);
};
