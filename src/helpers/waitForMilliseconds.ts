const waitForMilliseconds = (ms: number) => {
  return new Promise(r => setTimeout(r, ms));
};

export default waitForMilliseconds;
