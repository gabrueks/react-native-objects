/* eslint-disable no-bitwise */
export default obj => {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};
